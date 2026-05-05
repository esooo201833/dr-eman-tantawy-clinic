'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Faster loading for mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const loadTime = isMobile ? 1500 : 2000; // Faster on mobile

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + (isMobile ? 20 : 15); // Faster progress on mobile
      });
    }, isMobile ? 100 : 150);

    // Hide loading screen after content loads
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, loadTime);

    // Skip loading on user interaction (click/touch)
    const skipLoading = () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
      setIsLoading(false);
    };

    window.addEventListener('click', skipLoading, { once: true });
    window.addEventListener('touchstart', skipLoading, { once: true });

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
      window.removeEventListener('click', skipLoading);
      window.removeEventListener('touchstart', skipLoading);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#1e3a5f] via-[#2d4a6f] to-[#1e3a5f]"
          >
            {/* Animated Background Circles - Optimized */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(2)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border border-[#c9a227]/20 will-change-transform"
                  style={{
                    width: 300 + i * 200,
                    height: 300 + i * 200,
                    left: '50%',
                    top: '50%',
                    marginLeft: -(150 + i * 100),
                    marginTop: -(150 + i * 100),
                  }}
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>

            {/* Logo Container */}
            <motion.div
              className="relative z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Spinning Ring - GPU Optimized */}
              <motion.div
                className="absolute -inset-8 rounded-full border-4 border-[#c9a227]/30 will-change-transform"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                style={{ transformOrigin: 'center center' }}
              >
                {/* Decorative Dots - Optimized to 4 */}
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-[#c9a227] rounded-full will-change-transform"
                    style={{
                      top: '0%',
                      left: '50%',
                      transform: `rotate(${i * 90}deg) translateY(-28px) translateX(-50%)`,
                    }}
                  />
                ))}
              </motion.div>

              {/* Logo Image with Pulse - GPU Optimized */}
              <motion.div
                className="relative w-32 h-32 rounded-full overflow-hidden bg-white shadow-2xl will-change-transform"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(201, 162, 39, 0.3)',
                    '0 0 40px rgba(201, 162, 39, 0.6)',
                    '0 0 20px rgba(201, 162, 39, 0.3)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <img
                  src="https://dentistemantantawy.com/wp-content/uploads/2021/09/cropped-gen_logo.png"
                  alt="Dr. Eman Tantawy"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Inner Spinning Ring (Reverse) - GPU Optimized */}
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-dashed border-white/30 will-change-transform"
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                style={{ transformOrigin: 'center center' }}
              />
            </motion.div>

            {/* Brand Name */}
            <motion.div
              className="mt-12 text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Dr. Eman Tantawy
              </h1>
              <p className="text-[#c9a227] text-sm md:text-base tracking-wider">
                DENTAL CLINIC
              </p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              className="mt-8 w-64 h-1 bg-white/20 rounded-full overflow-hidden"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#c9a227] to-[#e0b840] rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Loading Text */}
            <motion.p
              className="mt-4 text-white/60 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Loading...
            </motion.p>

            {/* Tap to Skip - Mobile Only */}
            <motion.p
              className="mt-6 text-[#c9a227]/80 text-xs md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              اضغط للتخطي | Tap to skip
            </motion.p>

            {/* Floating Particles - Optimized to 3 */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#c9a227]/40 rounded-full will-change-transform"
                style={{
                  left: `${25 + i * 25}%`,
                  top: `${30 + i * 15}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
}
