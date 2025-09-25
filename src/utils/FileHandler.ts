import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";


export function readJSON<T>(path: string): T[] {
if (!existsSync(path)) return [];
const data = readFileSync(path, "utf-8");
return JSON.parse(data || "[]");
}


export function writeJSON<T>(path: string, data: T[]): void {
writeFileSync(path, JSON.stringify(data, null, 2));
}


export function saveReceipt(content: string, filename: string) {
const dir = "comprovantes";
if (!existsSync(dir)) mkdirSync(dir);
const fullPath = join(dir, filename);
writeFileSync(fullPath, content);
}