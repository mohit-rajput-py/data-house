export const runtime = "nodejs";

import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("catagory");

    if (!category) {
      return NextResponse.json(
        { error: "Missing catagory parameter" },
        { status: 400 }
      );
    }

    const folderPath = path.join(
      process.cwd(),
      "public",
      "mock-data",
      "csv",
      category
    );

    const files = (await fs.promises.readdir(folderPath)).filter((f) =>
      f.endsWith(".csv")
    );

    const baseurl =
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const result = [];

    for (const file of files) {
      const filePath = path.join(folderPath, file);
      const stats = await fs.promises.stat(filePath);

      result.push({
        name: file,
        url: `${baseurl}/mock-data/csv/${category}/${file}`,
        sizeMB: (stats.size / (1024 * 1024)).toFixed(2),
        createdAt: stats.birthtime,  // ✅ creation date
        modifiedAt: stats.mtime      // ✅ last modified date
      });
    }

    return NextResponse.json({
      category,
      count: result.length,
      files: result,
    });
  } catch (err) {
    console.error("Error reading CSV folder:", err);
    return NextResponse.json(
      { error: "Internal Server Error", details: err.message },
      { status: 500 }
    );
  }
}
