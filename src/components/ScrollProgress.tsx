"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#ff3300] via-[#ff7700] to-[#ffa500] origin-left z-[100] shadow-[0_1px_5px_rgba(255,81,0,0.25)]"
      style={{ scaleX }}
    />
  );
}
