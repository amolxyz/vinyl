'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { type Product } from '@/lib/products';

export function AddToCart({ product }: { product: Product }) {
  const [isShowingDescription, setIsShowingDescription] = useState(false);

  const productNameAndArtist = `${product.album.toUpperCase()} // ${product.artist.toUpperCase()}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-full max-w-[420px] mx-auto pb-24 md:pb-0">
        <motion.div
          className="flex flex-col items-center"
          initial={false}
          animate={isShowingDescription ? 'showing' : 'idle'}
        >
          {/* Product Name / Description */}
          <motion.div
            className="h-8 relative w-full flex justify-center items-center overflow-hidden"
            variants={{
              idle: { y: 0 },
              showing: { y: 0 },
            }}
          >
            <motion.p
              className="font-medium font-mono uppercase absolute inset-0 flex items-center justify-center"
              variants={{
                idle: { y: 0 },
                showing: { y: '-100%' },
              }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.2 }}
            >
              {productNameAndArtist}
            </motion.p>
            <motion.div
              className="flex items-center justify-between w-full absolute inset-0"
              variants={{
                idle: { y: '100%' },
                showing: { y: 0 },
              }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.2 }}
            >
              <div className="w-8" />
              <p className="font-medium font-mono uppercase">about</p>
              <motion.div
                className="size-8"
                variants={{
                  idle: { x: '-50%', y: 28, opacity: 0 },
                  showing: { x: 0, y: 0, opacity: 1 },
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <button
                  onClick={() => setIsShowingDescription(false)}
                  className="w-full h-full flex items-center justify-center"
                  aria-label="Close description"
                >
                  <X className="size-5" />
                </button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Plus Button / Description */}
          <motion.div className="mt-8 relative w-full">
            <motion.button
              onClick={() => setIsShowingDescription(true)}
              className="size-12 flex items-center justify-center bg-white absolute left-1/2 -translate-x-1/2"
              variants={{
                idle: { opacity: 1 },
                showing: { opacity: 0 },
              }}
              aria-label="Show description"
              aria-expanded={isShowingDescription}
            >
              <svg
                className="size-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </motion.button>

            <AnimatePresence>
              {isShowingDescription && (
                <motion.div
                  className="w-full absolute top-0 left-0 font-mono text-sm text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  {product.description}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
