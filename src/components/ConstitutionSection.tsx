"use client";

import React, { useState } from "react";
import { motion as fm, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { FileText, Shield, Check, Landmark, BookOpen, AlertCircle, Edit, PenTool } from "lucide-react";

export default function ConstitutionSection() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<number>(0);
  const c = t.constitution;

  // Icon mapping helper
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "landmark":
        return <Landmark size={18} />;
      case "shield":
        return <Shield size={18} />;
      case "book":
        return <BookOpen size={18} />;
      case "check":
        return <Check size={18} />;
      case "alert":
        return <AlertCircle size={18} />;
      case "edit":
        return <Edit size={18} />;
      default:
        return <PenTool size={18} />;
    }
  };

  const sections = [
    { id: 0, title: c.preambleTitle, icon: <BookOpen size={18} /> },
    ...c.chapters.map((ch) => ({
      id: ch.id,
      title: ch.title,
      icon: getIcon(ch.iconType),
    })),
    { id: 13, title: c.oathTitle, icon: <PenTool size={18} /> },
  ];

  return (
    <section className="relative bg-white py-24 md:py-32 font-sans overflow-hidden border-t border-slate-100">
      {/* Visual background decorations */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff5100]/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#ff7700]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <fm.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 text-[#ff7700] text-xs font-bold uppercase tracking-[0.25em] mb-4"
          >
            <span className="w-8 h-[1px] bg-[#ff7700]" />
            {language === "hi" ? "आधिकारिक विनियामक संहिता" : "Official Regulatory Code"}
            <span className="w-8 h-[1px] bg-[#ff7700]" />
          </fm.div>

          <fm.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-hindi text-3xl sm:text-5xl font-black text-slate-900 leading-tight"
          >
            {c.title}
          </fm.h2>
          
          <fm.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-500 text-xs sm:text-sm mt-4 tracking-wide font-medium"
          >
            {c.subtitle}
          </fm.p>
        </div>

        {/* Interactive Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Vertical Index Tabs (Left 4 Columns) */}
          <div className="lg:col-span-4 bg-slate-50 p-4 rounded-2xl border border-slate-200/60 max-h-[600px] overflow-y-auto space-y-1.5 scrollbar-thin">
            {sections.map((sec, idx) => (
              <button
                key={sec.id}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left p-3.5 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 flex items-center gap-3 cursor-pointer ${
                  activeTab === idx
                    ? "bg-[#ff5100] text-white shadow-[0_4px_12px_rgba(255,81,0,0.25)] scale-[1.01]"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/40"
                }`}
              >
                <span className="shrink-0">{sec.icon}</span>
                <span className="truncate font-hindi leading-tight">{sec.title}</span>
              </button>
            ))}
          </div>

          {/* Details Content Card (Right 8 Columns) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <fm.div
                key={activeTab}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.4 }}
                className="glass-panel-glow p-8 sm:p-10 rounded-3xl min-h-[480px] flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5100]/10 border border-[#ff5100]/20 text-[#ff7700]">
                      <span className="text-[10px] font-bold tracking-wider uppercase font-english">
                        {activeTab === 0 ? "Preamble" : activeTab === 13 ? "Oath" : `Chapter ${activeTab}`}
                      </span>
                    </div>
                    {c.regLabel && (
                      <span className="text-[9px] font-bold font-hindi px-3 py-1 rounded-lg bg-slate-100 text-slate-500 border border-slate-250">
                        {c.regLabel}
                      </span>
                    )}
                  </div>

                  {/* Section Title */}
                  <h3 className="font-hindi text-xl sm:text-2xl font-black text-slate-900 pb-2">
                    {sections[activeTab].title}
                  </h3>

                  {/* Dynamic Custom Rules Presenter */}
                  <div className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium space-y-4">
                    
                    {/* CASE 0: PREAMBLE */}
                    {activeTab === 0 && (
                      <div className="font-hindi text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-4 whitespace-pre-line">
                        {c.preambleText}
                      </div>
                    )}

                    {/* CASE 1-12: CONSTITUTION CHAPTERS */}
                    {activeTab >= 1 && activeTab <= 12 && (
                      <>
                        {c.chapters[activeTab - 1].type === "points" ? (
                          <ul className="space-y-4">
                            {c.chapters[activeTab - 1].points?.map((pt, i) => (
                              <li key={i} className="flex gap-3 font-hindi items-start">
                                <span className="w-5 h-5 rounded-full bg-[#ff5100]/10 border border-[#ff5100]/20 flex items-center justify-center text-[#ff7700] text-[10px] font-bold shrink-0 mt-0.5 font-english">
                                  {i + 1}
                                </span>
                                <span className="text-slate-655 text-xs sm:text-sm md:text-base font-medium leading-relaxed">
                                  {pt}
                                </span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="font-hindi text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed bg-[#ff5100]/5 p-6 rounded-2xl border border-[#ff5100]/15 text-center font-bold italic">
                            {c.chapters[activeTab - 1].text}
                          </p>
                        )}
                      </>
                    )}

                    {/* CASE 13: OATH & DECLARATION */}
                    {activeTab === 13 && (
                      <div className="space-y-6">
                        <p className="font-hindi italic text-base sm:text-lg md:text-xl font-bold text-slate-800 leading-relaxed bg-[#ff5100]/5 p-6 rounded-2xl border border-[#ff5100]/15 text-center">
                          {c.oathText}
                        </p>
                        
                        {/* Signing Card Block */}
                        <div className="flex justify-end pt-4">
                          <div className="w-48 text-center space-y-4">
                            <div className="h-12 border-b border-dashed border-slate-350" />
                            <span className="block text-xs font-bold text-slate-400 font-hindi">
                              {c.oathSig}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                </div>

                {/* Bottom navigation helpers inside Card */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-6 mt-8">
                  <button
                    disabled={activeTab === 0}
                    onClick={() => setActiveTab(activeTab - 1)}
                    className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-800 disabled:opacity-30 cursor-pointer"
                  >
                    ← {language === "hi" ? "पीछे" : "Prev"}
                  </button>
                  <span className="text-xs font-bold text-slate-400 font-english">
                    {activeTab + 1} / {sections.length}
                  </span>
                  <button
                    disabled={activeTab === sections.length - 1}
                    onClick={() => setActiveTab(activeTab + 1)}
                    className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-800 disabled:opacity-30 cursor-pointer"
                  >
                    {language === "hi" ? "आगे" : "Next"} →
                  </button>
                </div>
              </fm.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
