import { readdir } from "fs/promises";
import path from "path";

export async function GET() {
  const dirPath = path.join(process.cwd(), "public/py");
  const files = await readdir(dirPath);
  return Response.json(files);
}