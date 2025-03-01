'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function VinylPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(75);
  const [tonearmPosition, setTonearmPosition] = useState(30);

  const togglePlay = () => {
    if (isPlaying) {
      // First stop the vinyl rotation
      setIsPlaying(false);
      // After rotation stops smoothly, move tonearm away
      setTimeout(() => {
        setTonearmPosition(30);
      }, 800); // match the tonearm animation duration
    } else {
      // First move tonearm into position
      setTonearmPosition(0);
      // After tonearm animation completes, start vinyl rotation
      setTimeout(() => {
        setIsPlaying(true);
      }, 800); // match the tonearm animation duration
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
  };

  return (
    <div className="relative w-full max-w-[800px] mx-auto bg-gradient-to-b from-[#f8f8f8] to-[#e8e8e8] rounded-[2rem] p-8 shadow-[inset_0_0_20px_rgba(0,0,0,0.15)] border-8 border-[#f0f0f0]">
      
      {/* BPM Display */}
      <div className="absolute top-4 left-4 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-2xl p-3 shadow-lg border border-[#3a3a3a]">
        <div className="text-xs text-[#808080] font-mono mb-1">BPM</div>
        <div className="font-mono text-[#f5a623] text-2xl font-bold tracking-wider" style={{ textShadow: '0 0 10px rgba(245, 166, 35, 0.4)' }}>
          120
        </div>
      </div>

      {/* Centered Vinyl record */}
      <div className="flex justify-center mb-4 pt-8">
        <div className="relative aspect-square w-96">
          <motion.div 
            className="w-full h-full rounded-full bg-gradient-to-b from-[#ffffff] to-[#f0f0f0] p-2 shadow-[0_0_15px_rgba(0,0,0,0.15)]"
            animate={isPlaying ? { rotate: 360 } : {}}
            transition={isPlaying ? { duration: 6, repeat: Infinity, ease: "linear" } : {}}
          >
            <div className="w-full h-full rounded-full bg-[#707070] relative overflow-hidden shadow-inner">
              {/* Album artwork */}
              <img 
                src="https://mssadlt8nkffobic.public.blob.vercel-storage.com/begin-again-Lln1dw4tNVCmDF2SNlhcA7nfS3uJHg.jpg"
                alt="Begin Again album art"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              {/* Vinyl grooves with metallic sheen */}
              <div className="absolute inset-0 rounded-full border-4 border-[#808080] opacity-40 bg-gradient-to-br from-[#909090] to-transparent"></div>
              <div className="absolute inset-[12%] rounded-full border-2 border-[#808080] opacity-40 bg-gradient-to-br from-[#909090] to-transparent"></div>
              <div className="absolute inset-[24%] rounded-full border-2 border-[#808080] opacity-40 bg-gradient-to-br from-[#909090] to-transparent"></div>
              <div className="absolute inset-[36%] rounded-full border-2 border-[#808080] opacity-40 bg-gradient-to-br from-[#909090] to-transparent"></div>
              
              {/* Center label with metallic finish */}
              <div className="absolute inset-[38%] rounded-full bg-gradient-to-b from-[#ffffff] to-[#e8e8e8] flex items-center justify-center shadow-lg border-4 border-[#f0f0f0]">
                <div className="w-3 h-3 rounded-full bg-[#a0a0a0] shadow-inner"></div>
              </div>
            </div>
          </motion.div>

          {/* Metallic tonearm - keeping original shades */}
          <motion.div 
            className="absolute top-[15%] right-[-15%] w-48 h-4 bg-gradient-to-b from-[#e8e8e8] to-[#d0d0d0] rounded-full shadow-md"
            style={{ transformOrigin: "90% 50%" }}
            animate={{ rotate: tonearmPosition }}
            transition={{ 
              duration: 0.8,
              ease: "easeInOut"
            }}
          >
            <div className="absolute left-2 top-1/2 w-2 h-2 bg-[#f5a623] rounded-full transform -translate-y-1/2 shadow-sm"></div>
            <div className="absolute right-0 w-8 h-10 bg-gradient-to-b from-[#e0e0e0] to-[#c0c0c0] rounded-lg transform -translate-y-1/2 shadow-lg border border-[#d0d0d0]"></div>
          </motion.div>
        </div>
      </div>

      {/* Bottom controls container */}
      <div className="flex justify-between items-center">
        {/* Left bottom controls */}
        <div className="flex items-center">
          <div className="w-16 h-16 bg-gradient-to-b from-[#ffffff] to-[#e8e8e8] rounded-full flex items-center justify-center shadow-lg border-2 border-[#f0f0f0]">
            <button 
              onClick={togglePlay}
              className="w-12 h-12 rounded-full bg-gradient-to-b from-[#f0f0f0] to-[#d8d8d8] flex items-center justify-center hover:from-[#e8e8e8] hover:to-[#d0d0d0] transition-all shadow-inner border-2 border-[#e8e8e8]"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              <div className="text-[#606060]">
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Right bottom controls */}
        <div className="flex items-center">
          <div className="w-40 bg-gradient-to-b from-[#ffffff] to-[#e8e8e8] rounded-full p-2 flex items-center shadow-lg border-2 border-[#f0f0f0]">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              className="w-full mx-2 appearance-none h-2 rounded-full bg-gradient-to-r from-[#e0e0e0] to-[#d0d0d0] shadow-inner [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-[#f5a623] [&::-webkit-slider-thumb]:rounded-sm [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-[#f5a623] [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-sm [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
