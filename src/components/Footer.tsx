"use client";

import React from "react";
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import Link from "next/link";

// Inline SVG social icons (lucide-react doesn't include brand icons)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

export default function Footer() {
  const { t, language } = useLanguage();

  const socialLinks = [
    { href: "https://instagram.com", icon: <InstagramIcon />, label: "Instagram" },
    { href: "https://facebook.com",  icon: <FacebookIcon />,  label: "Facebook"  },
    { href: "https://youtube.com",   icon: <YoutubeIcon />,   label: "YouTube"   },
    { href: "https://wa.me/919876543210", icon: <WhatsAppIcon />, label: "WhatsApp" },
  ];

  const quickLinks = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.about, path: "/about" },
    { label: t.nav.mission, path: "/mission" },
    { label: t.nav.stories, path: "/story" },
    { label: language === "hi" ? "संविधान व नियमावली" : "Constitution & Bylaws", path: "/constitution" },
    { label: t.nav.gallery, path: "/gallery" },
    { label: t.nav.contact, path: "/contact" },
  ];

  return (
    <footer className="relative bg-white border-t border-slate-200/60 pt-20 pb-8 overflow-hidden font-sans">
      {/* Ambient glows */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-[#ff5100]/3 blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-10 w-[300px] h-[300px] bg-slate-100/30 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <Link
              href="/"
              className="flex items-center gap-2.5 cursor-pointer group text-left"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#ff5100] to-[#ff7700] flex items-center justify-center shadow-[0_4px_15px_rgba(255,81,0,0.25)]">
                <Heart size={16} className="text-white" />
              </div>
              <div>
                <span className="font-hindi text-base font-black tracking-wide text-slate-900 group-hover:text-[#ff7700] transition-colors duration-300 block">
                  युवा सेना
                </span>
                <span className="text-[8px] tracking-[0.25em] text-[#ff7700] uppercase font-bold font-english">
                  MPYSS MOVEMENT
                </span>
              </div>
            </Link>

            <p className="text-slate-600 text-xs md:text-sm leading-relaxed max-w-sm font-medium">
              {t.footer.slogan}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200/50 flex items-center justify-center text-slate-500 hover:text-[#ff7700] hover:bg-[#ff5100]/10 hover:border-[#ff5100]/20 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-slate-900 text-xs font-bold uppercase tracking-widest border-l-2 border-[#ff5100] pl-3">
              {t.footer.quickLinks}
            </h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-left text-slate-600 hover:text-[#ff7700] text-xs md:text-sm font-medium transition-colors cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6 lg:col-span-2">
            <h4 className="text-slate-900 text-xs font-bold uppercase tracking-widest border-l-2 border-[#ff5100] pl-3">
              {t.footer.contactUs}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#ff7700] mt-1 shrink-0" />
                <span className="text-slate-655 text-xs md:text-sm leading-relaxed font-medium">
                  {t.contact.addressValue}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#ff7700] shrink-0" />
                <span className="text-slate-655 text-xs md:text-sm font-english font-medium">
                  {t.contact.phoneValue}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#ff7700] shrink-0" />
                <a
                  href={`mailto:${t.contact.emailValue}`}
                  className="text-slate-655 hover:text-[#ff7700] text-xs md:text-sm transition-colors font-english font-medium"
                >
                  {t.contact.emailValue}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-slate-100 my-8" />

        {/* Bottom Credits */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] md:text-xs text-slate-500 font-medium">
          <p>
            © {new Date().getFullYear()} {t.quote.author}. {t.footer.rights}
          </p>
          <p>{t.footer.devCredit}</p>
        </div>
      </div>
    </footer>
  );
}
