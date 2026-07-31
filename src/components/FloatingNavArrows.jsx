import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingNavArrows({ onBack }) {
  return (
    <div className="fixed top-1/2 left-2 md:left-8 z-50 -translate-y-1/2 select-none pointer-events-auto">
      <motion.button
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileHover={{ scale: 1.1, x: -10 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 200 }}
        onClick={onBack}
        className="group relative flex items-center justify-center w-10 h-10 md:w-16 md:h-16 bg-black border-2 md:border-4 border-white shadow-[3px_3px_0px_#8B2FE0] md:shadow-[6px_6px_0px_#8B2FE0] transform -skew-x-12 hover:bg-[#8B2FE0] hover:border-black transition-all"
      >
        <span className="text-white text-xl md:text-3xl font-black transform skew-x-12 group-hover:text-black">
          {'<'}
        </span>
        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white px-2 py-1 text-xs font-bold tracking-widest uppercase border border-[#8B2FE0] pointer-events-none transition-opacity whitespace-nowrap">
          BACK TO MENU
        </div>
      </motion.button>
    </div>
  );
}
