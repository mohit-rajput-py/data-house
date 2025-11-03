export const runtime = "nodejs";

import fs, { readdirSync } from "fs";
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

    if (category === "all") {
      let allFiles = [];
      const baseDir = path.join(process.cwd(), "public", "mock-data", "csv");
      console.log(baseDir);
      const catagorys = readdirSync(baseDir).filter((dir) => {
        const fullPath = path.join(baseDir, dir);
        return fs.statSync(fullPath).isDirectory();
      });
      for (let cat of catagorys) {
        const folderPath = path.join(baseDir, cat);
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
            records: rowCount,
          });
        }
        allFiles = [...allFiles, ...result];
      }
      return NextResponse.json({
        category,
        count: allFiles.length,
        files: allFiles,
      });
    } else {
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
          records: rowCount,
        });
      }

      return NextResponse.json({
        category,
        count: result.length,
        files: result,
      });
    }
  } catch (err) {
    console.error("Error reading CSV folder:", err);
    return NextResponse.json(
      { error: "Internal Server Error", details: err.message },
      { status: 500 }
    );
  }
}
