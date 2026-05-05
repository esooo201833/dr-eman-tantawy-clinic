'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface BookTransitionProps {
  children: ReactNode;
  direction: 'left' | 'right';
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    rotateY: direction > 0 ? -15 : 15,
    scale: 0.95,
    zIndex: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    rotateY: 0,
    scale: 1,
    zIndex: 1
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    rotateY: direction < 0 ? 15 : -15,
    scale: 0.95,
    zIndex: 0
  })
};

export default function BookTransition({ children, direction }: BookTransitionProps) {
  const dir = direction === 'right' ? 1 : -1;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={direction}
        custom={dir}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
          rotateY: { duration: 0.4 },
          scale: { duration: 0.4 }
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
