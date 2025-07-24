import { NextRequest, NextResponse } from 'next/server';
import { synthesizeTextToSpeech } from '@/lib/tts/synthesize';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  const { text } = await req.json();

  if (!text || typeof text !== 'string') {
    return NextResponse.json({ error: 'Invalid text input' }, { status: 400 });
  }

  const outputFile = path.resolve(process.cwd(), 'public/mp3/output.mp3');
  await synthesizeTextToSpeech(text, outputFile);

  return NextResponse.json({ url: '/mp3/output.mp3' });
}
