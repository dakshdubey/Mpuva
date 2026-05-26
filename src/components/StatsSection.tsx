"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { Scale, Heart, Shield, Trophy, Flame } from "lucide-react";

interface StatItem {
  id: string;
  icon: React.ReactNode;
  value: string;
  labelHi: string;
  labelEn: string;
  descHi: string;
  descEn: string;
}

export default function StatsSection() {
  const { language } = useLanguage();

  const stats: StatItem[] = [
    {
      id: "memorandums",
      icon: <Scale size={24} className="text-[#ff5100]" />,
      value: "15+",
      labelHi: "ज्ञापन एवं जन-आवाज",
      labelEn: "Memorandums & Public Voices",
      descHi: "बिजली संकट, पेयजल संकट, चोरी पर लगाम और भ्रष्टाचार के खिलाफ प्रशासनिक अधिकारियों को सौंपे गए प्रमुख ज्ञापन।",
      descEn: "Major memorandums submitted to SDM, CEO, SP, and Commissioner addressing electricity, water, security, and corruption issues."
    },
    {
      id: "maternity",
      icon: <Heart size={24} className="text-[#ec4899]" />,
      value: "150+",
      labelHi: "मातृत्व एवं प्रसूति कल्याण",
      labelEn: "Maternity Welfare & Support",
      descHi: "सामुदायिक स्वास्थ्य केंद्र में भर्ती गर्भवती व प्रसूती महिलाओं को पोषक फल वितरण एवं स्वास्थ्य देखभाल प्रोत्साहन।",
      descEn: "Nutritional fruit kits and healthcare encouragement distributed to pregnant and lactating mothers at community hospitals."
    },
    {
      id: "patrols",
      icon: <Shield size={24} className="text-[#3b82f6]" />,
      value: "30+",
      labelHi: "सुरक्षा एवं रात्रि गश्त",
      labelEn: "Security & Night Patrols",
      descHi: "स्थानीय पुलिस प्रशासन के सहयोग से नगर में चोरियों को रोकने हेतु स्वयंसेवकों द्वारा रात में सघन गश्ती अभियान।",
      descEn: "Intensive night patrolling operations carried out by our volunteers in collaboration with local police to prevent thefts."
    },
    {
      id: "sports",
      icon: <Trophy size={24} className="text-[#f59e0b]" />,
      value: "50+",
      labelHi: "खेल एवं प्रतिभा प्रोत्साहन",
      labelEn: "Sports & Talent Honors",
      descHi: "राष्ट्रीय पर्वों पर छात्र-छात्राओं का सम्मान, खेल एवं पारंपरिक कुश्ती दंगल प्रतियोगिताओं का सफल आयोजन।",
      descEn: "Facilitating bright students on national days and organizing traditional wrestling (Dangal) tournaments for physical fitness."
    },
    {
      id: "national",
      icon: <Flame size={24} className="text-[#ff7700]" />,
      value: "12+",
      labelHi: "राष्ट्रीय चेतना व सेवा",
      labelEn: "National Consciousness",
      descHi: "वीर शिरोमणि महाराणा प्रताप जयंती जैसे ऐतिहासिक पर्वों का आयोजन और राष्ट्रीय विपदाओं में कैंडल मार्च द्वारा संवेदना।",
      descEn: "Commemorating historical legends like Maharana Pratap Jayanti and holding candle marches in support of national tragedies."
    }
  ];

  return (
    <section className="relative bg-[#fafaf9] py-24 md:py-32 font-sans overflow-hidden border-y border-slate-100">
      {/* Light glow accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff5100]/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 text-[#ff7700] text-xs font-bold uppercase tracking-[0.25em] mb-4"
          >
            <span className="w-6 h-[1px] bg-[#ff7700]" />
            {language === "hi" ? "धरातल पर वास्तविक प्रभाव" : "Real On-Ground Statistics"}
            <span className="w-6 h-[1px] bg-[#ff7700]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-hindi text-3xl sm:text-5xl font-black text-slate-900 leading-tight"
          >
            {language === "hi" ? "सेवा और समर्पण के प्रमाणित आंकड़े" : "Verified Records of Our Dedication"}
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="p-6 rounded-2xl glass-panel border border-slate-200/50 hover:border-[#ff5100]/25 transition-all duration-300 flex flex-col justify-between h-64 shadow-sm relative group hover:shadow-md"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#ff5100]/2 blur-xl rounded-full group-hover:bg-[#ff5100]/5 transition-colors" />
              
              <div className="space-y-4">
                {/* Floating Icon */}
                <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200/40 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                  {stat.icon}
                </div>
                
                <h4 className="font-hindi text-lg font-bold text-slate-800 group-hover:text-[#ff7700] transition-colors">
                  {language === "hi" ? stat.labelHi : stat.labelEn}
                </h4>
              </div>

              <div>
                <span className="block text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff5100] to-[#ff7700] mb-2 font-english">
                  {stat.value}
                </span>
                
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium leading-relaxed line-clamp-3">
                  {language === "hi" ? stat.descHi : stat.descEn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
