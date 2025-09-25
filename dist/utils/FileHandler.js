"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readJSON = readJSON;
exports.writeJSON = writeJSON;
exports.saveReceipt = saveReceipt;
const fs_1 = require("fs");
const path_1 = require("path");
function readJSON(path) {
    if (!(0, fs_1.existsSync)(path))
        return [];
    const data = (0, fs_1.readFileSync)(path, "utf-8");
    return JSON.parse(data || "[]");
}
function writeJSON(path, data) {
    (0, fs_1.writeFileSync)(path, JSON.stringify(data, null, 2));
}
function saveReceipt(content, filename) {
    const dir = "comprovantes";
    if (!(0, fs_1.existsSync)(dir))
        (0, fs_1.mkdirSync)(dir);
    const fullPath = (0, path_1.join)(dir, filename);
    (0, fs_1.writeFileSync)(fullPath, content);
}
