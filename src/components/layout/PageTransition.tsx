'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={typeof window !== 'undefined' ? window.location.pathname : 'home'}
        initial={{ opacity: 0, rotateY: -15, scale: 0.95 }}
        animate={{ opacity: 1, rotateY: 0, scale: 1 }}
        exit={{ opacity: 0, rotateY: 15, scale: 0.95 }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1]
        }}
        style={{
          perspective: 1000,
          transformStyle: 'preserve-3d'
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
