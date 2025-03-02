import { NextResponse } from 'next/server';
import YTDlpWrap from 'yt-dlp-wrap';

const TRACK_URL = 'https://www.youtube.com/watch?v=p8cYGrK_WyA';
const ytDlp = new YTDlpWrap();

export async function GET() {
  try {
    // Get track info using yt-dlp
    const trackInfo = await ytDlp.getVideoInfo(TRACK_URL);
    
    // Get best audio format
    const audioFormats = trackInfo.formats.filter(
      (f: any) => f.acodec !== 'none' && f.vcodec === 'none'
    );

    // Sort by quality (bitrate)
    const bestAudioFormat = audioFormats.sort(
      (a: any, b: any) => (b.abr || 0) - (a.abr || 0)
    )[0];

    return NextResponse.json({ 
      success: true, 
      url: bestAudioFormat.url,
      title: trackInfo.title,
      duration: trackInfo.duration
    });
  } catch (error) {
    console.error('Error fetching YouTube audio:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch audio stream' },
      { status: 500 }
    );
  }
} 