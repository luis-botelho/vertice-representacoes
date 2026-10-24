import fs from 'fs/promises';
import path from 'path';

const DATA_DIR = process.env.DATA_DIR || './data';

async function ensureDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

export async function readJson<T>(file: string, fallback: T): Promise<T> {
  await ensureDir();
  const filePath = path.resolve(DATA_DIR, file);
  try {
    const raw = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(raw) as T;
  } catch (e: any) {
    if (e.code === 'ENOENT') {
      return fallback;
    }
    throw e;
  }
}

export async function writeJson<T>(file: string, data: T): Promise<void> {
  await ensureDir();
  const filePath = path.resolve(DATA_DIR, file);
  const tmp = filePath + '.tmp.' + Date.now();
  const json = JSON.stringify(data, null, 2);
  await fs.writeFile(tmp, json, 'utf-8');
  await fs.rename(tmp, filePath);
}
