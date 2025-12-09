import { NextResponse } from "next/server";

export const runtime = "nodejs";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return new NextResponse("", { headers: corsHeaders });
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const prompt = searchParams.get("prompt") || "No prompt provided.";

  try {
    const result = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer k9uUYYcMuFMrf7o3xIlxrMDVDjvqE6hI`,
      },
      body: JSON.stringify({
        model: "mistral-small-latest",
        messages: [
          { role: "user", content: prompt }
        ],
      }),
    });

    const data = await result.json();

    const output =
      data?.choices?.[0]?.message?.content ||
      data?.choices?.[0]?.delta?.content ||
      data?.choices?.[0]?.text ||
      "";

    // RETURN **PLAIN TEXT**
    return new NextResponse(output, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        ...corsHeaders,
      },
    });

  } catch (err) {
    return new NextResponse("Error: " + err.message, {
      status: 500,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        ...corsHeaders,
      },
    });
  }
}
