'use client';

import { motion } from 'framer-motion';

export default function PulsingDot() {
  return (
    <motion.div
      animate={{ opacity: [1, 0.3, 1], scale: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      className="w-2 h-2 bg-white rounded-full mr-2.5 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
    />
  );
}
