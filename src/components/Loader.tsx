"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200); // Cinematic delay for atmospheric effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center font-sans"
        >
          {/* Ambient Lighting Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#ff5100]/5 blur-[80px]" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Spinning Glowing Emblem */}
            <div className="relative w-24 h-24 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute inset-0 rounded-full border-t-2 border-r-2 border-b border-l border-t-[#ff5100] border-r-[#ff7700] border-b-slate-100 border-l-slate-100"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="absolute inset-2 rounded-full border-t border-r border-b-2 border-l-2 border-t-slate-100 border-r-slate-100 border-b-[#ff5100] border-l-[#ff7700]"
              />
              {/* Inner Emblem Logo Text */}
              <div className="absolute inset-0 flex items-center justify-center font-extrabold text-[#ff7700] text-xl tracking-wider select-none">
                सेना
              </div>
            </div>

            {/* Title & Progress */}
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-slate-900 text-lg md:text-xl font-bold tracking-[0.2em] mb-3 text-center"
            >
              मध्य प्रदेश युवा समाज सेना
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xs text-slate-500 tracking-widest uppercase mb-6"
            >
              राष्ट्र प्रथम • सेवा सर्वोपरि
            </motion.p>

            {/* Clean Progress Bar Mock */}
            <div className="w-48 h-[1px] bg-slate-100 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-[#ff5100] to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
