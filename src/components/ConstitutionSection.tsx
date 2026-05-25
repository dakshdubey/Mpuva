"use client";

import React, { useState } from "react";
import { motion as fm, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { FileText, Shield, Check, Landmark, BookOpen, AlertCircle, Edit, PenTool } from "lucide-react";

export default function ConstitutionSection() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<number>(0);
  const c = t.constitution;

  const sections = [
    { id: 1, title: c.sec1_title, icon: <Landmark size={18} /> },
    { id: 2, title: c.sec2_title, icon: <Landmark size={18} /> },
    { id: 3, title: c.sec3_title, icon: <Shield size={18} /> },
    { id: 4, title: c.sec4_title, icon: <BookOpen size={18} /> },
    { id: 5, title: c.sec5_title, icon: <FileText size={18} /> },
    { id: 6, title: c.sec6_title, icon: <Check size={18} /> },
    { id: 7, title: c.sec7_title, icon: <Landmark size={18} /> },
    { id: 8, title: c.sec8_title, icon: <Landmark size={18} /> },
    { id: 9, title: c.sec9_title, icon: <FileText size={18} /> },
    { id: 10, title: c.sec10_title, icon: <FileText size={18} /> },
    { id: 11, title: c.sec11_title, icon: <AlertCircle size={18} /> },
    { id: 12, title: c.sec12_title, icon: <Edit size={18} /> },
    { id: 13, title: c.sec13_title, icon: <AlertCircle size={18} /> },
    { id: 14, title: c.sec14_title, icon: <PenTool size={18} /> },
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
                  {/* Top Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5100]/10 border border-[#ff5100]/20 text-[#ff7700]">
                    <span className="text-[10px] font-bold tracking-wider uppercase font-english">
                      SECTION {activeTab + 1}
                    </span>
                  </div>

                  {/* Section Title */}
                  <h3 className="font-hindi text-xl sm:text-2xl font-black text-slate-900 border-b border-slate-100 pb-4">
                    {sections[activeTab].title}
                  </h3>

                  {/* Dynamic Custom Rules Presenter */}
                  <div className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium space-y-4">
                    
                    {/* SECTION 1: NAME */}
                    {activeTab === 0 && (
                      <p className="font-hindi text-lg font-bold text-slate-800 p-4 bg-slate-50 rounded-xl border border-slate-100">
                        {c.sec1_name}
                      </p>
                    )}

                    {/* SECTION 2: HEAD OFFICE */}
                    {activeTab === 1 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 font-hindi">
                          {c.sec2_village}
                        </div>
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 font-hindi">
                          {c.sec2_tehsil}
                        </div>
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 font-hindi">
                          {c.sec2_district}
                        </div>
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 font-hindi font-english">
                          {c.sec2_state}
                        </div>
                      </div>
                    )}

                    {/* SECTION 3: NATURE */}
                    {activeTab === 2 && (
                      <p className="font-hindi italic leading-relaxed text-slate-655 bg-slate-50/70 p-6 rounded-2xl border border-slate-100">
                        {c.sec3_text}
                      </p>
                    )}

                    {/* SECTION 4: OBJECTIVES */}
                    {activeTab === 3 && (
                      <ul className="space-y-3">
                        {c.sec4_points.map((pt, i) => (
                          <li key={i} className="flex gap-3 font-hindi items-start">
                            <span className="w-5 h-5 rounded-full bg-[#ff5100]/10 border border-[#ff5100]/20 flex items-center justify-center text-[#ff7700] text-[10px] font-bold shrink-0 mt-0.5 font-english">
                              {i + 1}
                            </span>
                            <span className="text-slate-655 text-xs sm:text-sm font-medium">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* SECTION 5: MOTTO */}
                    {activeTab === 4 && (
                      <div className="py-8 flex justify-center">
                        <span className="font-hindi text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ff5100] via-[#ff7700] to-[#ff5100] tracking-widest px-8 py-4 bg-slate-50 border border-slate-100 rounded-2xl animate-pulse">
                          {c.sec5_text}
                        </span>
                      </div>
                    )}

                    {/* SECTION 6: MEMBERSHIP */}
                    {activeTab === 5 && (
                      <ul className="space-y-3">
                        {c.sec6_points.map((pt, i) => (
                          <li key={i} className="flex gap-3 font-hindi items-start">
                            <span className="w-5 h-5 rounded-full bg-green-50 border border-green-200 flex items-center justify-center text-green-600 text-xs shrink-0 mt-0.5">
                              ✓
                            </span>
                            <span className="text-slate-655 text-xs sm:text-sm font-medium">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* SECTION 7: STRUCTURE */}
                    {activeTab === 6 && (
                      <div className="flex flex-wrap gap-2.5">
                        {c.sec7_positions.map((pos, i) => (
                          <span 
                            key={i} 
                            className="px-4 py-2 bg-slate-50 border border-slate-200/60 rounded-xl text-xs font-bold text-slate-700 hover:border-[#ff5100]/30 hover:text-[#ff7700] transition-colors font-hindi"
                          >
                            {pos}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* SECTION 8: DUTIES */}
                    {activeTab === 7 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {c.sec8_roles.map((r, i) => (
                          <div key={i} className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                            <h5 className="font-hindi text-sm sm:text-base font-bold text-slate-800 border-l-2 border-[#ff5100] pl-2">
                              {r.title}
                            </h5>
                            <p className="font-hindi text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                              {r.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* SECTION 9: ASSEMBLIES */}
                    {activeTab === 8 && (
                      <ul className="space-y-3">
                        {c.sec9_points.map((pt, i) => (
                          <li key={i} className="flex gap-3 font-hindi items-start">
                            <span className="w-2 h-2 rounded-full bg-[#ff7700] shrink-0 mt-2" />
                            <span className="text-slate-655 text-xs sm:text-sm font-medium">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* SECTION 10: FINANCIALS */}
                    {activeTab === 9 && (
                      <ul className="space-y-3">
                        {c.sec10_points.map((pt, i) => (
                          <li key={i} className="flex gap-3 font-hindi items-start">
                            <span className="w-2 h-2 rounded-full bg-[#ff7700] shrink-0 mt-2" />
                            <span className="text-slate-655 text-xs sm:text-sm font-medium">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* SECTION 11: DISCIPLINE */}
                    {activeTab === 10 && (
                      <ul className="space-y-3">
                        {c.sec11_points.map((pt, i) => (
                          <li key={i} className="flex gap-3 font-hindi items-start">
                            <span className="w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-red-500 text-[10px] font-bold shrink-0 mt-0.5">
                              !
                            </span>
                            <span className="text-slate-655 text-xs sm:text-sm font-medium">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* SECTION 12: AMENDMENTS */}
                    {activeTab === 11 && (
                      <p className="font-hindi text-slate-655 bg-slate-50 p-4 rounded-xl border border-slate-100 leading-relaxed font-medium">
                        {c.sec12_text}
                      </p>
                    )}

                    {/* SECTION 13: DISSOLUTION */}
                    {activeTab === 12 && (
                      <p className="font-hindi text-slate-655 bg-slate-50 p-4 rounded-xl border border-slate-100 leading-relaxed font-medium">
                        {c.sec13_text}
                      </p>
                    )}

                    {/* SECTION 14: PLEDGE */}
                    {activeTab === 13 && (
                      <div className="space-y-6">
                        <p className="font-hindi italic text-base sm:text-lg font-bold text-slate-800 leading-relaxed bg-[#ff5100]/5 p-6 rounded-2xl border border-[#ff5100]/15 text-center">
                          {c.sec14_text}
                        </p>
                        
                        {/* Signing Card Block */}
                        <div className="flex justify-end pt-4">
                          <div className="w-48 text-center space-y-4">
                            <div className="h-12 border-b border-dashed border-slate-350" />
                            <span className="block text-xs font-bold text-slate-400 font-hindi">
                              {c.sec14_sig}
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
