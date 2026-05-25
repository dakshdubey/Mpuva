"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  const mockNumber = "919876543210";
  const defaultMessageHi = "नमस्ते! मैं मध्य प्रदेश युवा समाज सेना से जुड़ना चाहता हूँ।";
  const defaultMessageEn = "Hello! I would like to connect with Madhya Pradesh Yuva Samaj Sena.";
  const textMessage = language === "hi" ? defaultMessageHi : defaultMessageEn;

  const whatsappUrl = `https://wa.me/${mockNumber}?text=${encodeURIComponent(textMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-[80] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-80 rounded-2xl glass-panel-glow overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#ff5100] to-[#ff7700] p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">
                  MP
                </div>
                <div>
                  <h4 className="font-semibold text-sm">
                    {language === "hi" ? "युवा समाज सेना" : "Yuva Samaj Sena"}
                  </h4>
                  <p className="text-[10px] text-white/80 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    {language === "hi" ? "ऑनलाइन सहायता" : "Online Support"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-slate-50 text-slate-700 text-xs space-y-3 max-h-48 overflow-y-auto">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-200/50 shadow-sm max-w-[85%]">
                <p className="leading-relaxed">
                  {language === "hi"
                    ? "नमस्ते! मध्य प्रदेश युवा समाज सेना में आपका स्वागत है। हम आपकी क्या मदद कर सकते हैं?"
                    : "Hello! Welcome to MP Yuva Samaj Sena. How can we help you today?"}
                </p>
                <span className="text-[9px] text-slate-400 mt-1 block text-right font-medium">12:30 PM</span>
              </div>
            </div>

            {/* CTA Input */}
            <div className="p-3 bg-white border-t border-slate-100">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-[#ff5100] to-[#ff7700] hover:from-[#ff7700] hover:to-[#ff5100] text-white rounded-xl font-semibold text-sm shadow-[0_4px_15px_rgba(255,81,0,0.3)] transition-all duration-300 cursor-pointer"
              >
                <span>{language === "hi" ? "चैट शुरू करें" : "Start Chat"}</span>
                <Send size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Bubble */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-[#ff5100] to-[#ff7700] flex items-center justify-center text-white shadow-[0_8px_30px_rgba(255,81,0,0.4)] cursor-pointer relative"
      >
        <span className="absolute inset-0 rounded-full border-2 border-[#ff7700]/50 animate-ping opacity-60" />
        <MessageSquare size={24} />
      </motion.button>
    </div>
  );
}
