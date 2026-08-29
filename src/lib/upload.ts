import path from 'path';
import fs from 'fs';

export const UPLOAD_DIR = process.env.UPLOAD_DIR || '/uploads';

export function ensureDir(subdir: string): string {
  const dir = path.join(UPLOAD_DIR, subdir);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  return dir;
}

export function deleteFile(filepath: string): void {
  if (fs.existsSync(filepath)) {
    fs.unlinkSync(filepath);
  }
}
