import { writeFileSync, mkdirSync } from "node:fs";

const entry = "You call it a paper jam. I call it my only break in 41,208 pages.";

if (entry.length < 1 || entry.length > 240) {
  throw new Error(`entry must be 1-240 characters, got ${entry.length}`);
}
if (entry.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, { encoding: "utf8", flag: "w" });
