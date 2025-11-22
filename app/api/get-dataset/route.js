export const runtime = "nodejs";

import fs, { readdirSync } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { parse } from "csv-parse/sync";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const categoryParam = searchParams.get("catagory");

    if (!categoryParam) {
      return NextResponse.json(
        { error: "Missing catagory parameter" },
        { status: 400 }
      );
    }

    // ✔ Use the "pi" folder instead of "mock-data"
    const baseDir = path.join(process.cwd(), "public", "pi", "csv");
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    let targetFolders = [];

    if (categoryParam === "all") {
      const items = readdirSync(baseDir);
      targetFolders = items.filter((item) => {
        const fullPath = path.join(baseDir, item);
        return fs.statSync(fullPath).isDirectory();
      });
    } else {
      targetFolders = [categoryParam];
    }

    let allFiles = [];

    for (const folderName of targetFolders) {
      const folderPath = path.join(baseDir, folderName);

      if (!fs.existsSync(folderPath)) continue;

      const files = (await fs.promises.readdir(folderPath)).filter((f) =>
        f.endsWith(".csv")
      );

      for (const file of files) {
        const filePath = path.join(folderPath, file);
        const stats = await fs.promises.stat(filePath);
        const csvData = await fs.promises.readFile(filePath, "utf8");

        let rowCount = 0;

        try {
          const records = parse(csvData, {
            columns: true,
            skip_empty_lines: true,
          });
          rowCount = records.length;
        } catch (parseErr) {
          console.error(`Error parsing ${file}:`, parseErr.message);
        }

        allFiles.push({
          name: file,
          url: `${baseUrl}/pi/csv/${folderName}/${file}`, // ✔ updated path
          sizeMB: (stats.size / (1024 * 1024)).toFixed(2),
          createdAt: stats.birthtime,
          modifiedAt: stats.mtime,
          records: rowCount,
          category: folderName,
        });
      }
    }

    return NextResponse.json({
      category: categoryParam,
      count: allFiles.length,
      files: allFiles,
    });
  } catch (err) {
    console.error("Error reading CSV folder:", err);
    return NextResponse.json(
      { error: "Internal Server Error", details: err.message },
      { status: 500 }
    );
  }
}
