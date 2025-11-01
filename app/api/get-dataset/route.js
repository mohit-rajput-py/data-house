export const runtime = "nodejs";

import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { parse } from "csv-parse/sync"; // <-- use sync version for simplicity

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

      // ✅ Read CSV content
      const csvData = await fs.promises.readFile(filePath, "utf8");

      // ✅ Parse CSV to count rows
      let rowCount = 0;
      try {
        const records = parse(csvData, {
          columns: true, // treat first line as headers
          skip_empty_lines: true,
        });
        rowCount = records.length;
      } catch (parseErr) {
        console.error(`Error parsing ${file}:`, parseErr.message);
        rowCount = 0;
      }

      result.push({
        name: file,
        url: `${baseurl}/mock-data/csv/${category}/${file}`,
        sizeMB: (stats.size / (1024 * 1024)).toFixed(2),
        createdAt: stats.birthtime,
        modifiedAt: stats.mtime,
        records: rowCount, // ✅ add total row count
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
