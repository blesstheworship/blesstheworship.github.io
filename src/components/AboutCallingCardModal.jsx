import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ShieldCheck, Trophy } from 'lucide-react';

export default function AboutCallingCardModal({ profile, isOpen, onClose }) {
  if (!isOpen || !profile) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9000] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md">

        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          exit={{ opacity: 0, scale: 0.85, rotate: 6 }}
          transition={{ type: 'spring', stiffness: 220, damping: 20 }}
          className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto overflow-x-hidden bg-black border-4 border-[#8B2FE0] p-4 md:p-10 shadow-[16px_16px_0px_#111111] z-10 transform -skew-x-3"
        >
          <div className="absolute top-0 left-0 right-0 h-12 bg-[#8B2FE0] flex items-center justify-between px-4 md:px-6 transform -skew-x-6 border-b-2 border-white">
            <span
              className="text-white text-base md:text-xl font-black tracking-widest uppercase flex items-center gap-2"
              style={{ fontFamily: "'Persona Aura', sans-serif" }}
            >
              <Trophy className="w-4 h-4 md:w-5 md:h-5 text-white" />
              CALLING CARD
            </span>
            <button
              onClick={onClose}
              className="bg-black text-white hover:bg-white hover:text-black p-1 border-2 border-white font-bold transition-colors shadow-[2px_2px_0px_#000]"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          <div className="mt-14 md:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">

            <div className="lg:col-span-5 flex flex-col items-center text-center bg-[#111111] p-4 md:p-6 border-2 border-white/20 transform -skew-x-3 shadow-[6px_6px_0px_#8B2FE0] md:shadow-[8px_8px_0px_#8B2FE0]">
              <div className="relative w-24 h-24 md:w-44 md:h-44 bg-[#8B2FE0] border-4 border-white transform -rotate-3 overflow-hidden shadow-[4px_4px_0px_#000000] md:shadow-[6px_6px_0px_#000000] flex items-center justify-center">
                <img
                  src="./new-assets/yaboi/headshot.png"
                  alt="Worship"
                  className="w-full h-full object-cover object-center transform rotate-3 skew-x-6 scale-110"
                />
              </div>
              <h2
                className="text-xl md:text-3xl font-black text-white mt-4 tracking-tight"
                style={{ fontFamily: "'Persona Aura', sans-serif" }}
              >
                {profile.name}
              </h2>
              <p className="text-[#8B2FE0] font-bold text-[10px] md:text-sm tracking-widest uppercase mt-1">
                {profile.title}
              </p>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between">

              <div className="relative bg-[#1a1a1a] p-4 md:p-6 border-2 border-[#8B2FE0] shadow-[4px_4px_0px_#000] md:shadow-[6px_6px_0px_#000]">
                <div className="absolute -top-3 left-4 bg-[#8B2FE0] px-2 py-0.5 text-white font-bold text-[10px] tracking-widest uppercase border border-white">
                  ABOUT ME
                </div>
                <p className="text-white/95 text-xs md:text-base leading-relaxed font-sans mt-2 md:mt-1">
                  "{profile.bio}"
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {profile.stats?.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-black p-3 border-l-4 border-[#8B2FE0] border-y border-r border-white/10 shadow-[4px_4px_0px_#111]"
                  >
                    <div className="text-white/60 text-[10px] font-bold tracking-widest uppercase">
                      {stat.label}
                    </div>
                    <div
                      className="text-white text-base md:text-lg font-black tracking-tight"
                      style={{ fontFamily: "'Persona Aura', sans-serif" }}
                    >
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h4
                  className="text-white text-sm font-bold tracking-widest uppercase mb-3 flex items-center gap-2"
                  style={{ fontFamily: "'Persona Aura', sans-serif" }}
                >
                  <ShieldCheck className="w-4 h-4 text-[#8B2FE0]" /> CONTACT & CONNECT
                </h4>
                <div className="flex flex-wrap gap-2">
                  {profile.socials?.map((social, idx) => (
                    <a key={idx} href={social.url} target="_blank" rel="noreferrer" className="bg-[#111111] hover:bg-[#8B2FE0] text-white text-xs px-3 py-1.5 font-bold tracking-wider uppercase border border-white/30 hover:border-white transition-all flex items-center gap-1.5 shadow-[2px_2px_0px_#000]">
                      <span>{social.platform}:</span>
                      <span className="text-[#8B2FE0] hover:text-white font-normal">{social.value}</span>
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
