"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface GalleryItem {
  id: number;
  category: "service" | "events" | "volunteers";
  img: string;
  titleHi: string;
  titleEn: string;
  descHi: string;
  descEn: string;
}

export default function GallerySection() {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState<"all" | "service" | "events" | "volunteers">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 0,
      category: "service",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.18%20AM.jpeg",
      titleHi: "बिजली संकट के विरोध में नगर बंद",
      titleEn: "Manpur Bandh Against Power Crisis",
      descHi: "बिजली की गंभीर समस्या के खिलाफ मानपुर क्षेत्र में ऐतिहासिक बंद का सफल आयोजन। व्यापारियों व आम जनता का मिला भारी समर्थन।",
      descEn: "Led a successful Manpur shutdown to protest severe power cuts, receiving massive support from local merchants and residents."
    },
    {
      id: 1,
      category: "volunteers",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.22%20AM%20(1).jpeg",
      titleHi: "किसानों की बिजली हेतु कमिश्नर को ज्ञापन",
      titleEn: "Memorandum for Farmers' Power Supply",
      descHi: "मानपुर विधानसभा क्षेत्र के किसानों को समुचित बिजली न मिलने के खिलाफ शहडोल कमिश्नर को ज्ञापन सौंप कार्रवाई की मांग।",
      descEn: "Submitted a petition to the Shahdol Commissioner demanding regular power supply for farmers facing irrigation challenges."
    },
    {
      id: 2,
      category: "volunteers",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.25%20AM%20(1).jpeg",
      titleHi: "जेई के ट्रांसफर हेतु शहडोल आयुक्त को ज्ञापन",
      titleEn: "Petition to Transfer Corrupt Officer",
      descHi: "विद्युत मंडल में व्याप्त भ्रष्टाचार और अनियमितताओं के कारण जेई के स्थानांतरण और दंडात्मक कार्रवाई के लिए कमिश्नर को ज्ञापन।",
      descEn: "Demanded immediate transfer and inquiry of the electricity board's Junior Engineer due to corruption and negligence."
    },
    {
      id: 3,
      category: "service",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.25%20AM.jpeg",
      titleHi: "मूलभूत सुविधाओं के लिए मानपुर में प्रदर्शन",
      titleEn: "Protest for Basic Civic Amenities",
      descHi: "पेयजल संकट, रुकी हुई नालियों की सफाई और क्षेत्र में लगातार हो रही चोरियों पर रोक लगाने हेतु जनपद सीईओ व टीआई को ज्ञापन।",
      descEn: "Staged protests demanding clean drinking water, proper sanitation drainage, and control over thefts in Manpur."
    },
    {
      id: 4,
      category: "volunteers",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.29%20AM%20(1).jpeg",
      titleHi: "पीड़ित महिला को न्याय दिलाने हेतु ज्ञापन",
      titleEn: "Seeking Justice for Harassed Woman",
      descHi: "चिल्हारी में एक आरआई द्वारा प्रताड़ित संगीता साहू को न्याय दिलाने और मामले की निष्पक्ष जांच के लिए एसपी कार्यालय में प्रदर्शन।",
      descEn: "Demonstrated at the SP and Collector office seeking a fair investigation and justice for a harassed local woman."
    },
    {
      id: 5,
      category: "service",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.29%20AM.jpeg",
      titleHi: "पेयजल व चोरी से मुक्ति की मांग",
      titleEn: "Demanding Water Supply & Security",
      descHi: "सोनी मोहल्ला व वार्ड नंबर 7 में पेयजल आपूर्ति बहाल करने तथा लगातार हो रही चोरियों के खिलाफ मानपुर सीईओ को सौंपा गया ज्ञापन।",
      descEn: "Submitted a formal memorandum to the CEO to restore basic water utilities and curb recurring thefts in local wards."
    },
    {
      id: 6,
      category: "volunteers",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.31%20AM.jpeg",
      titleHi: "स्थानीय पुलिस प्रशासन को ज्ञापन",
      titleEn: "Memorandum to Local Police",
      descHi: "नगर की कानून व्यवस्था दुरुस्त करने और लगातार हो रही चोरियों पर लगाम लगाने के लिए स्थानीय पुलिस प्रशासन को लिखा गया पत्र।",
      descEn: "Handed over a petition to police officials requesting increased security patrols and swift action on thefts."
    },
    {
      id: 7,
      category: "events",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.32%20AM%20(1).jpeg",
      titleHi: "मेधावी छात्र-छात्राओं का सम्मान",
      titleEn: "Facilitating Talented Students",
      descHi: "गणतंत्र दिवस के पावन अवसर पर मानपुर क्षेत्र के मेधावी छात्र-छात्राओं को प्रशस्ति पत्र एवं पुरस्कार देकर सम्मानित करते मुख्य अतिथि।",
      descEn: "Honoring bright school children with certificates and prizes for academic and co-curricular excellence on Republic Day."
    },
    {
      id: 8,
      category: "events",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.32%20AM.jpeg",
      titleHi: "गणतंत्र दिवस समारोह व बैठक",
      titleEn: "Republic Day Celebration & Assembly",
      descHi: "संगठन द्वारा आयोजित गणतंत्र दिवस समारोह के मंच पर उपस्थित विशिष्ट जन एवं वरिष्ठ समाजसेवक।",
      descEn: "Dignitaries and senior social workers gathered on the main stage of the organization's Republic Day ceremony."
    },
    {
      id: 9,
      category: "volunteers",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.33%20AM%20(1).jpeg",
      titleHi: "मानपुर ब्लॉक ईकाई की समीक्षा बैठक",
      titleEn: "Manpur Unit Review Meeting",
      descHi: "मानपुर कार्यालय में संगठन की कार्यकारिणी का विस्तार, नए पदाधिकारियों को जिम्मेदारियों का आवंटन व सेवा संकल्प बैठक।",
      descEn: "Held an executive expansion meeting to appoint new block office-bearers and outline future service actions."
    },
    {
      id: 10,
      category: "volunteers",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.33%20AM.jpeg",
      titleHi: "थाना प्रभारी का स्वागत एवं अभिनंदन",
      titleEn: "Honoring the Station House Officer",
      descHi: "नवनियुक्त थाना प्रभारी का मानपुर कार्यालय में स्वागत एवं कानून व्यवस्था में पुलिस प्रशासन के सहयोग का संगठन द्वारा आश्वासन।",
      descEn: "Welcomed and facilitated the newly appointed Station House Officer, assuring community support for law enforcement."
    },
    {
      id: 11,
      category: "volunteers",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.34%20AM%20(1).jpeg",
      titleHi: "पुलिस के साथ रात्रि सुरक्षा गश्ती",
      titleEn: "Night Security Patrol with Police",
      descHi: "नगर में चोरियों को रोकने के लिए थाना प्रभारी के निर्देशानुसार पुलिस के साथ रात्रि गश्त में शामिल युवा सेना के जांबाज।",
      descEn: "Volunteers joining forces with local police officers during late-night security patrols to ensure town safety."
    },
    {
      id: 12,
      category: "volunteers",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.34%20AM%20(2).jpeg",
      titleHi: "रात्रि सुरक्षा एवं गश्ती दल",
      titleEn: "Night Patrol Volunteers Group",
      descHi: "सघन सुरक्षा गश्ती अभियान के उपरांत मानपुर बस स्टैंड पर पुलिस प्रशासन के साथ तैनात जांबाज स्वयंसेवक।",
      descEn: "Volunteers on alert during our community security drive at the bus stand to prevent public thefts."
    },
    {
      id: 13,
      category: "events",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.35%20AM%20(1).jpeg",
      titleHi: "नवनियुक्त एसडीएम एवं तहसीलदार से भेंट",
      titleEn: "Civic Meeting with SDM & Tehsildar",
      descHi: "मानपुर के नवनियुक्त एसडीएम एवं तहसीलदार से शिष्टाचार मुलाकात कर बुके भेंट कर बधाई दी गई।",
      descEn: "Met the newly appointed Sub-Divisional Magistrate (SDM) and Tehsildar to discuss regional development."
    },
    {
      id: 14,
      category: "events",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.35%20AM.jpeg",
      titleHi: "प्रशासनिक अधिकारियों का पुष्पगुच्छ से स्वागत",
      titleEn: "Welcoming Administrative Officials",
      descHi: "मानपुर के विकास कार्यों में प्रशासन को सदैव संगठन की ओर से सहयोग देने का वचन देते हुए पुष्पगुच्छ भेंट किया।",
      descEn: "Presented a floral bouquet to welcome new officers, committing our youth network to support local administrative tasks."
    },
    {
      id: 15,
      category: "service",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.36%20AM%20(1).jpeg",
      titleHi: "गर्भवती व प्रसूती महिलाओं को फल वितरण",
      titleEn: "Nutritional Fruit Distribution to Mothers",
      descHi: "मानपुर सामुदायिक स्वास्थ्य केंद्र में भर्ती नवजात शिशुओं की माताओं को ताजे फलों व पोषण किट का निःशुल्क वितरण।",
      descEn: "Distributing fresh fruits and nutritional kits to pregnant and new mothers at the Community Health Center."
    },
    {
      id: 16,
      category: "service",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.36%20AM.jpeg",
      titleHi: "सामुदायिक स्वास्थ्य केंद्र में फल वितरण",
      titleEn: "Hospital Support & Welfare Program",
      descHi: "मरीजों एवं प्रसूती माताओं के बेहतर स्वास्थ्य की मंगल कामना करते हुए फल वितरण एवं स्वास्थ्य देखभाल प्रोत्साहन।",
      descEn: "Spreading joy and health encouragement by organizing fruit distribution drives in community hospitals."
    },
    {
      id: 17,
      category: "events",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.37%20AM%20(1).jpeg",
      titleHi: "विमान हादसे के पीड़ितों हेतु कैंडल मार्च",
      titleEn: "Candle March for Plane Crash Victims",
      descHi: "अहमदाबाद विमान हादसे में जान गंवाने वाले दिवंगत यात्रियों की आत्मिक शांति के लिए बस स्टैंड पर निकाला गया कैंडल मार्च।",
      descEn: "Expressing deep grief and solidary by holding a candlelight march for victims of a tragic aviation accident."
    },
    {
      id: 18,
      category: "events",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.37%20AM.jpeg",
      titleHi: "वीर शिरोमणि महाराणा प्रताप जयंती",
      titleEn: "Maharana Pratap Jayanti Celebration",
      descHi: "महाराणा प्रताप जी की जयंती पर मानपुर बस स्टैंड में भव्य कार्यक्रम, उनकी शौर्य गाथा और देशभक्ति के संकल्पों का पाठ।",
      descEn: "Celebrating the birth anniversary of Maharana Pratap at the bus stand to inspire local youth with valor."
    }
  ];

  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? galleryItems.length - 1 : lightboxIndex - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === galleryItems.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  return (
    <section 
      id="gallery" 
      className="relative bg-white py-24 md:py-32 font-sans overflow-hidden"
    >
      {/* Visual Ambience */}
      <div className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-[#ff5100]/3 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-slate-100/50 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 text-[#ff7700] text-xs font-bold uppercase tracking-[0.25em] mb-4"
          >
            <span className="w-6 h-[1px] bg-[#ff7700]" />
            {t.gallery.sectionSubtitle}
            <span className="w-6 h-[1px] bg-[#ff7700]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-hindi text-3xl sm:text-5xl font-black text-slate-900 leading-tight"
          >
            {t.gallery.sectionTitle}
          </motion.h2>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {([
            { id: "all", label: t.gallery.all },
            { id: "service", label: t.gallery.service },
            { id: "events", label: t.gallery.events },
            { id: "volunteers", label: t.gallery.volunteers }
          ] as const).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`relative px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                filter === tab.id
                  ? "bg-[#ff5100] text-white shadow-[0_4px_15px_rgba(255,81,0,0.3)]"
                  : "text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200/80 border border-slate-200/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry-like Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                onClick={() => setLightboxIndex(item.id)}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] group border border-slate-200/50 shadow-md cursor-pointer"
              >
                {/* Backdrop image */}
                <img 
                  src={item.img} 
                  alt={language === "hi" ? item.titleHi : item.titleEn} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-6" />
                <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn size={14} />
                </div>

                {/* Hover captions */}
                <div className="absolute inset-x-0 bottom-0 p-6 z-20 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 space-y-1">
                  <span className="text-[9px] uppercase tracking-wider font-bold text-[#ff7700]">
                    {item.category === "service" ? t.gallery.service : item.category === "events" ? t.gallery.events : t.gallery.volunteers}
                  </span>
                  <h3 className="font-hindi text-base font-bold text-white leading-tight">
                    {language === "hi" ? item.titleHi : item.titleEn}
                  </h3>
                  <p className="text-slate-350 text-[10px] sm:text-xs font-light leading-relaxed line-clamp-2">
                    {language === "hi" ? item.descHi : item.descEn}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="fixed inset-0 bg-black/95 z-[90] flex items-center justify-center p-4 backdrop-blur-md"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white cursor-pointer transition-colors z-[100]"
              >
                <X size={20} />
              </button>

              {/* Navigation Controls */}
              <button
                onClick={handlePrev}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white cursor-pointer transition-colors z-[100]"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white cursor-pointer transition-colors z-[100]"
              >
                <ChevronRight size={20} />
              </button>

              {/* Central Lightbox Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full flex flex-col items-center gap-4 z-95"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] w-full border border-white/5 bg-[#0a0a0c]">
                  <img
                    src={galleryItems[lightboxIndex].img}
                    alt={language === "hi" ? galleryItems[lightboxIndex].titleHi : galleryItems[lightboxIndex].titleEn}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Description below Lightbox */}
                <div className="text-center space-y-2 mt-2 px-6">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#ff7700]">
                    {galleryItems[lightboxIndex].category === "service" ? t.gallery.service : galleryItems[lightboxIndex].category === "events" ? t.gallery.events : t.gallery.volunteers}
                  </span>
                  <h3 className="font-hindi text-lg sm:text-xl font-bold text-white">
                    {language === "hi" ? galleryItems[lightboxIndex].titleHi : galleryItems[lightboxIndex].titleEn}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed max-w-2xl mx-auto">
                    {language === "hi" ? galleryItems[lightboxIndex].descHi : galleryItems[lightboxIndex].descEn}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
