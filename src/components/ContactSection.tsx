"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactSection() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    setLoading(true);
    
    // Construct mailto link addressed to yuvasamajsena@gmail.com
    const subject = encodeURIComponent(`MP Yuva Samaj Sena - Contact Form Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email || 'Not provided'}\n\n` +
      `Message:\n${formData.message}`
    );
    
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // Redirect to mailto link
      window.location.href = `mailto:yuvasamajsena@gmail.com?subject=${subject}&body=${body}`;
      
      setFormData({ name: "", email: "", phone: "", message: "" });
      
      // Auto close success badge after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="relative bg-white py-24 md:py-32 font-sans overflow-hidden"
    >
      {/* Dynamic Saffron Ambience */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#ff5100]/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-slate-100/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-[#ff7700] text-xs font-bold uppercase tracking-[0.25em] mb-4"
          >
            <span className="w-8 h-[1px] bg-[#ff7700]" />
            {t.contact.sectionSubtitle}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-hindi text-3xl sm:text-5xl font-black text-slate-900 leading-tight"
          >
            {t.contact.sectionTitle}
          </motion.h2>
        </div>

        {/* Core Layout Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Coordinates Details (Left 5 Columns) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            
            {/* Address */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex gap-4 p-6 rounded-2xl glass-panel hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-3 rounded-xl bg-[#ff5100]/10 border border-[#ff5100]/20 text-[#ff7700] shrink-0">
                <MapPin size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="text-slate-900 text-xs font-bold uppercase tracking-widest">{t.contact.addressTitle}</h4>
                <p className="text-slate-655 text-xs sm:text-sm leading-relaxed font-medium">{t.contact.addressValue}</p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex gap-4 p-6 rounded-2xl glass-panel hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-3 rounded-xl bg-[#ff5100]/10 border border-[#ff5100]/20 text-[#ff7700] shrink-0">
                <Phone size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="text-slate-900 text-xs font-bold uppercase tracking-widest">{t.contact.phoneTitle}</h4>
                <p className="text-slate-655 text-xs sm:text-sm leading-relaxed font-english font-medium">{t.contact.phoneValue}</p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-4 p-6 rounded-2xl glass-panel hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-3 rounded-xl bg-[#ff5100]/10 border border-[#ff5100]/20 text-[#ff7700] shrink-0">
                <Mail size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="text-slate-900 text-xs font-bold uppercase tracking-widest">{t.contact.emailTitle}</h4>
                <a href={`mailto:${t.contact.emailValue}`} className="text-slate-655 hover:text-[#ff7700] text-xs sm:text-sm leading-relaxed font-english font-medium block transition-colors">{t.contact.emailValue}</a>
              </div>
            </motion.div>

            {/* Luxury Mock Map Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-44 rounded-2xl border border-slate-200/55 overflow-hidden relative group"
            >
              {/* Map visual background with light overlays */}
              <div className="absolute inset-0 bg-cover bg-center filter grayscale contrast-[0.9] opacity-70 group-hover:scale-102 transition-transform duration-700" 
                   style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop')` }} />
              
              {/* Saffron Glowing Location Dot */}
              <div className="absolute top-[52%] left-[64%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <span className="flex h-4 w-4 relative mb-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff7700] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-[#ff5100] border-2 border-white shadow-xl"></span>
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-900/90 backdrop-blur-md text-[9px] font-bold tracking-widest border border-white/10 text-white uppercase font-english">
                  JABALPUR HEADQUARTERS
                </span>
              </div>
            </motion.div>

          </div>

          {/* Glowing Contact Form (Right 7 Columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 rounded-3xl glass-panel-glow p-8 sm:p-10 relative overflow-hidden"
          >
            {/* Ambient lighting overlays */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-[#ff5100]/3 blur-3xl pointer-events-none" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              
              {/* Name field */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">{t.contact.formName} *</label>
                <input 
                  type="text" 
                  required
                  placeholder={language === "hi" ? "आपका शुभ नाम दर्ज करें" : "Enter your full name"}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-[#ff5100] focus:ring-1 focus:ring-[#ff5100]/30 outline-none text-slate-900 text-sm sm:text-base font-medium transition-all duration-300 placeholder:text-slate-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone field */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">{t.contact.formPhone} *</label>
                  <input 
                    type="tel" 
                    required
                    placeholder={language === "hi" ? "१० अंकों का मोबाइल नंबर" : "10-digit mobile number"}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-[#ff5100] focus:ring-1 focus:ring-[#ff5100]/30 outline-none text-slate-900 text-sm sm:text-base font-medium transition-all duration-300 placeholder:text-slate-400 font-english"
                  />
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">{t.contact.formEmail}</label>
                  <input 
                    type="email" 
                    placeholder="example@mail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-[#ff5100] focus:ring-1 focus:ring-[#ff5100]/30 outline-none text-slate-900 text-sm sm:text-base font-medium transition-all duration-300 placeholder:text-slate-400 font-english"
                  />
                </div>
              </div>

              {/* Message field */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">{t.contact.formMessage}</label>
                <textarea 
                  rows={4}
                  placeholder={language === "hi" ? "आप समाज सेवा के बारे में या संगठन में शामिल होने के बारे में लिख सकते हैं..." : "Write details about your support or inquiry..."}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-[#ff5100] focus:ring-1 focus:ring-[#ff5100]/30 outline-none text-slate-900 text-sm sm:text-base font-medium transition-all duration-300 resize-none placeholder:text-slate-400"
                />
              </div>

              {/* Success Badge Banner */}
              <AnimatePresence>
                {submitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 flex items-start gap-3"
                  >
                    <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm font-medium leading-relaxed">
                      {t.contact.formSuccess}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#ff5100] to-[#ff7700] hover:from-[#ff7700] hover:to-[#ff5100] shadow-[0_5px_20px_rgba(255,81,0,0.2)] disabled:opacity-50 flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer active:scale-[0.98]"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>{language === "hi" ? "संदेश भेजा जा रहा है..." : "Sending Message..."}</span>
                  </>
                ) : (
                  <>
                    <span>{t.contact.formSubmit}</span>
                    <Send size={14} />
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
