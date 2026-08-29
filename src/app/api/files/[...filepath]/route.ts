import { NextRequest, NextResponse } from 'next/server';
import { UPLOAD_DIR } from '@/lib/upload';
import path from 'path';
import fs from 'fs';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ filepath: string[] }> }
) {
  const { filepath } = await params;
  const filePath = path.join(UPLOAD_DIR, ...filepath);

  // Segurança: impede path traversal
  if (!filePath.startsWith(UPLOAD_DIR)) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  if (!fs.existsSync(filePath)) {
    return new NextResponse('Not found', { status: 404 });
  }

  const buffer = fs.readFileSync(filePath);
  const ext = path.extname(filePath).toLowerCase();

  const contentTypes: Record<string, string> = {
    '.pdf': 'application/pdf',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.webp': 'image/webp',
  };

  const contentType = contentTypes[ext] || 'application/octet-stream';

  return new NextResponse(buffer, {
    headers: { 'Content-Type': contentType },
  });
}
