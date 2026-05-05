'use client';

import { useState, useEffect } from 'react';

export default function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Very fast loading - 800ms only
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    // Skip on any interaction
    const skip = () => {
      clearTimeout(timer);
      setIsLoading(false);
    };

    window.addEventListener('click', skip, { once: true });
    window.addEventListener('touchstart', skip, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('click', skip);
      window.removeEventListener('touchstart', skip);
    };
  }, []);

  if (!isLoading) return <>{children}</>;

  return (
    <>
      {/* Simple Loading Screen - No Heavy Animations */}
      <div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1e3a5f]"
        onClick={() => setIsLoading(false)}
      >
        {/* Simple Static Logo */}
        <div className="w-24 h-24 rounded-full overflow-hidden bg-white shadow-lg animate-pulse">
          <img
            src="https://dentistemantantawy.com/wp-content/uploads/2021/09/cropped-gen_logo.png"
            alt="Dr. Eman Tantawy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Simple Text */}
        <div className="mt-8 text-center">
          <h1 className="text-xl font-bold text-white mb-1">
            Dr. Eman Tantawy
          </h1>
          <p className="text-[#c9a227] text-sm">DENTAL CLINIC</p>
        </div>

        {/* Simple Spinner */}
        <div className="mt-6 w-8 h-8 border-2 border-white/30 border-t-[#c9a227] rounded-full animate-spin" />

        {/* Tap to Skip */}
        <p className="mt-6 text-white/60 text-xs">
          اضغط للتخطي | Tap to skip
        </p>
      </div>

      {/* Hidden Content */}
      <div style={{ display: 'none' }}>{children}</div>
    </>
  );
}
