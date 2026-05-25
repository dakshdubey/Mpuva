"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { Droplet, Leaf, Trash2, HeartHandshake, BookOpen, ShieldAlert } from "lucide-react";

export default function ImpactSection() {
  const { t } = useLanguage();

  const campaigns = [
    {
      id: "blood",
      icon: <Droplet size={22} />,
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.37%20AM.jpeg",
      title: t.impact.blood.title,
      desc: t.impact.blood.desc,
    },
    {
      id: "plantation",
      icon: <Leaf size={22} />,
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.33%20AM%20(1).jpeg",
      title: t.impact.plantation.title,
      desc: t.impact.plantation.desc,
    },
    {
      id: "cleanliness",
      icon: <Trash2 size={22} />,
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.35%20AM%20(1).jpeg",
      title: t.impact.cleanliness.title,
      desc: t.impact.cleanliness.desc,
    },
    {
      id: "poor",
      icon: <HeartHandshake size={22} />,
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.18%20AM.jpeg",
      title: t.impact.poor.title,
      desc: t.impact.poor.desc,
    },
    {
      id: "awareness",
      icon: <BookOpen size={22} />,
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.22%20AM%20(1).jpeg",
      title: t.impact.awareness.title,
      desc: t.impact.awareness.desc,
    },
    {
      id: "women",
      icon: <ShieldAlert size={22} />,
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.25%20AM%20(1).jpeg",
      title: t.impact.women.title,
      desc: t.impact.women.desc,
    },
  ];

  return (
    <section 
      id="impact" 
      className="relative bg-[#fafaf9] py-24 md:py-32 font-sans overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#ff5100]/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-slate-100/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 text-[#ff7700] text-xs font-bold uppercase tracking-[0.25em] mb-4"
          >
            <span className="w-6 h-[1px] bg-[#ff7700]" />
            {t.impact.sectionSubtitle}
            <span className="w-6 h-[1px] bg-[#ff7700]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-hindi text-3xl sm:text-5xl font-black text-slate-900 leading-tight"
          >
            {t.impact.sectionTitle}
          </motion.h2>
        </div>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((camp, index) => (
            <motion.div
              key={camp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="relative rounded-2xl overflow-hidden h-[340px] border border-slate-200/40 shadow-lg group flex flex-col justify-end p-8"
            >
              {/* Card Photo Backdrop */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url('${camp.img}')` }}
              />

              {/* Shading Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/25 z-10 transition-opacity duration-300 group-hover:opacity-90" />
              <div className="absolute inset-0 border border-transparent group-hover:border-[#ff5100]/25 rounded-2xl z-20 transition-all duration-300" />
              <div className="absolute inset-0 bg-radial-gradient(circle, rgba(255,81,0,0.08) 0%, transparent 80%) opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              {/* Floating Glowing Border Support */}
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#ff5100] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-30" />

              {/* Card Contents */}
              <div className="relative z-20 space-y-4">
                {/* Floating Saffron Icon */}
                <div className="inline-flex p-3 rounded-xl bg-[#ff5100] text-white shadow-[0_4px_15px_rgba(255,81,0,0.4)] group-hover:scale-110 transition-transform duration-300">
                  {camp.icon}
                </div>

                <h3 className="font-hindi text-xl font-bold text-white tracking-wide group-hover:text-[#ff7700] transition-colors duration-300">
                  {camp.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                  {camp.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
