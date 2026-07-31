import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import PersonaVideoCard from './PersonaVideoCard';

export default function SpatialCanvas({ videos, onOpenVideo }) {
  const canvasRef = useRef(null);

  const [zIndices, setZIndices] = useState(() => {
    const initialMap = {};
    videos.forEach((v, idx) => {
      initialMap[v.id] = v.zIndex || (10 + idx);
    });
    return initialMap;
  });

  const [maxZ, setMaxZ] = useState(100);

  const handleBringToFront = (id) => {
    setMaxZ((prevMax) => {
      const nextZ = prevMax + 1;
      setZIndices((prev) => ({ ...prev, [id]: nextZ }));
      return nextZ;
    });
  };

  return (
    <div className="relative w-full h-full overflow-y-auto overflow-x-hidden pt-4 pb-32 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {/* Mobile: clean single column */}
      <div className="flex md:hidden flex-col items-center gap-8 px-4 pb-16">
        {videos.map((video) => (
          <PersonaVideoCard
            key={video.id}
            video={video}
            activeZIndex={zIndices[video.id] || 10}
            onBringToFront={handleBringToFront}
            onOpenVideo={onOpenVideo}
            canvasRef={canvasRef}
          />
        ))}
      </div>

      {/* Desktop: 3-column grid via absolute positioning */}
      <motion.div
        ref={canvasRef}
        className="relative w-full min-h-[220vh] hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {videos.map((video) => (
          <PersonaVideoCard
            key={video.id}
            video={video}
            activeZIndex={zIndices[video.id] || 10}
            onBringToFront={handleBringToFront}
            onOpenVideo={onOpenVideo}
            canvasRef={canvasRef}
          />
        ))}
      </motion.div>

      <div className="sticky bottom-4 left-6 z-40 pointer-events-auto hidden md:inline-flex items-center gap-3 ml-6">
        <div className="bg-black/90 border-2 border-[#8B2FE0] px-4 py-2 text-white font-bold text-xs md:text-sm tracking-widest uppercase transform -skew-x-6 shadow-[4px_4px_0px_#000000] flex items-center gap-2">
          <span>explore video collection!</span>
        </div>
      </div>
    </div>
  );
}
