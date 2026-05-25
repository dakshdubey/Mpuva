"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { Droplet, Leaf, Trash2, HeartHandshake, Map } from "lucide-react";

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
      id: "blood",
      icon: <Droplet size={24} className="text-[#ff5100]" />,
      value: "12,400+",
      labelHi: "रक्तदान जीवनदान",
      labelEn: "Blood Units Donated",
      descHi: "आपातकालीन समय में भोपाल व आसपास के जिलों में जीवन बचाने के लिए की गई रक्तदान आपूर्ति।",
      descEn: "Successful units supplied to save critical lives across Bhopal and nearby districts."
    },
    {
      id: "trees",
      icon: <Leaf size={24} className="text-[#10b981]" />,
      value: "55,000+",
      labelHi: "हरित वृक्षारोपण",
      labelEn: "Trees Planted",
      descHi: "नर्मदा तटों और सार्वजनिक स्थलों पर पर्यावरण संरक्षण के लिए लगाए गए फलदार व छायादार पौधे।",
      descEn: "Saplings planted across riversides and public domains for eco preservation."
    },
    {
      id: "clean",
      icon: <Trash2 size={24} className="text-[#3b82f6]" />,
      value: "180+",
      labelHi: "स्वच्छता अभियान",
      labelEn: "Sanitation Drives",
      descHi: "विभिन्न नगरों के ऐतिहासिक स्थलों, नदियों और पार्कों में स्वयंसेवकों द्वारा निरंतर श्रमदान।",
      descEn: "Cleanliness drives executed in historical heritage spots, parks, and rivers."
    },
    {
      id: "support",
      icon: <HeartHandshake size={24} className="text-[#f59e0b]" />,
      value: "8,500+",
      labelHi: "दीनबंधु सहायता",
      labelEn: "Families Supported",
      descHi: "निर्धन परिवारों को खाद्यान्न, वस्त्र और बच्चों को पठन सामग्री वितरित कर सामाजिक मदद।",
      descEn: "Underprivileged families supported with rations, clothes, and school kits."
    },
    {
      id: "districts",
      icon: <Map size={24} className="text-[#ff7700]" />,
      value: "25+",
      labelHi: "सक्रिय जिले",
      labelEn: "Active Districts",
      descHi: "मध्य प्रदेश के जिलों में फैले ऊर्जावान युवाओं का एक विशाल और अनुशासित संगठन नेटवर्क।",
      descEn: "Districts fully mobilized with our disciplined network of young volunteers."
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
