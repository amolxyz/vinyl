'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

export function VinylPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(75);
  const [player, setPlayer] = useState<Spotify.Player | null>(null);
  const [deviceId, setDeviceId] = useState<string>('');

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Vinyl Player',
        getOAuthToken: cb => { cb(process.env.NEXT_PUBLIC_SPOTIFY_TOKEN!); }
      });

      player.addListener('ready', ({ device_id }) => {
        setDeviceId(device_id);
      });

      player.connect();
      setPlayer(player);
    };

    return () => {
      player?.disconnect();
    };
  }, []);

  const togglePlay = async () => {
    if (!player) return;

    if (isPlaying) {
      await player.pause();
    } else {
      await fetch('https://api.spotify.com/v1/me/player/play', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SPOTIFY_TOKEN}`,
        },
        body: JSON.stringify({
          device_id: deviceId,
          uris: ['spotify:track:6j9hfHxpXEaYzFwcSK4MhH']
        })
      });
      await player.resume();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    if (player) {
      player.setVolume(newVolume / 100);
    }
  };

  return (
    <div className="relative w-full max-w-[800px] mx-auto bg-gray-200 rounded-xl p-6 shadow-lg">
      {/* Centered Vinyl record */}
      <div className="flex justify-center mb-4 pt-8">
        <div className="relative aspect-square w-96">
          <motion.div 
            className="w-full h-full rounded-full bg-white p-2"
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{ duration: 6, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
          >
            <div className="w-full h-full rounded-full bg-black relative overflow-hidden">
              {/* Album artwork */}
              <img 
                src="https://mssadlt8nkffobic.public.blob.vercel-storage.com/begin-again-Lln1dw4tNVCmDF2SNlhcA7nfS3uJHg.jpg"
                alt="Begin Again album art"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              {/* Record grooves - adjusted for more even spacing */}
              <div className="absolute inset-0 rounded-full border-4 border-gray-800 opacity-20"></div>
              <div className="absolute inset-[12%] rounded-full border-2 border-gray-800 opacity-20"></div>
              <div className="absolute inset-[24%] rounded-full border-2 border-gray-800 opacity-20"></div>
              <div className="absolute inset-[36%] rounded-full border-2 border-gray-800 opacity-20"></div>
              
              {/* Center label - adjusted size and position */}
              <div className="absolute inset-[38%] rounded-full bg-gray-700 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gray-500"></div>
              </div>
            </div>
          </motion.div>

          {/* Tonearm positioning adjusted for the new record size */}
          <motion.div 
            className="absolute top-[15%] right-[-15%] w-48 h-4 bg-gray-400 rounded-full"
            style={{ 
              transformOrigin: "90% 50%",
              rotate: isPlaying ? 25 : 0
            }}
            animate={{ 
              rotate: isPlaying ? 25 : 0 
            }}
            transition={{ 
              duration: 0.8,
              ease: "easeInOut"
            }}
          >
            <div className="absolute left-2 top-1/2 w-2 h-2 bg-white rounded-full transform -translate-y-1/2"></div>
            <div className="absolute right-0 w-8 h-10 bg-gray-500 rounded-lg transform -translate-y-1/2"></div>
          </motion.div>
        </div>
      </div>

      {/* Bottom controls container */}
      <div className="flex justify-between items-center">
        {/* Left bottom controls */}
        <div className="flex items-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <button 
              onClick={togglePlay}
              className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              <div className="text-gray-600">
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Right bottom controls */}
        <div className="flex items-center">
          <div className="w-40 bg-white rounded-full p-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              className="w-full mx-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
