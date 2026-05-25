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
      titleHi: "सामूहिक अन्नपूर्णा सेवा शिविर",
      titleEn: "Community Food Distribution Camp",
      descHi: "भोपाल के वंचित बस्तियों में जरूरतमंदों को निःशुल्क पौष्टिक भोजन का वितरण करते हमारे समर्पित स्वयंसेवक।",
      descEn: "Our volunteers distributing nutritional meals to underprivileged communities in Bhopal."
    },
    {
      id: 1,
      category: "volunteers",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.22%20AM%20(1).jpeg",
      titleHi: "युवा जांबाज सेना बैठक",
      titleEn: "Youth Leadership Conclave",
      descHi: "युवाओं में सामाजिक जागरूकता और राष्ट्र सेवा की भावना भरने के लिए इंदौर में आयोजित एक विशेष बौद्धिक संवाद।",
      descEn: "A leadership conclave held in Indore to foster social awareness and nation building."
    },
    {
      id: 2,
      category: "events",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.25%20AM%20(1).jpeg",
      titleHi: "नर्मदा तट हरित क्रांति वृक्षारोपण",
      titleEn: "Narmada Riverfront Plantation",
      descHi: "मां नर्मदा के तटों को हरा-भरा बनाने के संकल्प के साथ स्वयंसेवकों द्वारा ५००० पौधों का सघन रोपण।",
      descEn: "Plantation of over 5000 saplings along the holy Narmada river banks for eco preservation."
    },
    {
      id: 3,
      category: "service",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.25%20AM.jpeg",
      titleHi: "निर्धन बाल कल्याण - शिक्षा अभियान",
      titleEn: "Underprivileged Children Education Support",
      descHi: "ग्रामीण क्षेत्रों के जरूरतमंद बच्चों को पठन सामग्री, कॉपियां एवं बैग वितरित कर शिक्षा की अलख जगाती युवा सेना।",
      descEn: "Spreading the light of literacy by distributing education kits to rural children."
    },
    {
      id: 4,
      category: "events",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.29%20AM%20(1).jpeg",
      titleHi: "स्वच्छता व श्रमदान महा-अभियान",
      titleEn: "Mega Cleanliness & Labor Campaign",
      descHi: "ग्वालियर के ऐतिहासिक स्थलों एवं जलाशयों की स्वच्छता के लिए श्रमदान करते हुए युवा समाज सेना के साहसी जांबाज।",
      descEn: "Volunteers contributing manual labor for cleaning heritage landmarks and water resources in Gwalior."
    },
    {
      id: 5,
      category: "volunteers",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.29%20AM.jpeg",
      titleHi: "आपदा राहत कार्यशाला व प्रशिक्षण",
      titleEn: "Disaster Management & Safety Workshop",
      descHi: "बाढ़, भूकंप जैसी आपातकालीन स्थितियों में तुरंत सक्रिय होने के लिए स्वयंसेवकों का विशेष तकनीकी बचाव प्रशिक्षण।",
      descEn: "Specialized disaster rescue and management training for active community response teams."
    },
    {
      id: 6,
      category: "service",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.30%20AM.jpeg",
      titleHi: "आपातकालीन रक्तदान शिविर",
      titleEn: "Emergency Blood Donation Camp",
      descHi: "विभिन्न अस्पतालों में गंभीर मरीजों की सहायता हेतु आयोजित रक्तदान शिविर।",
      descEn: "Blood donation camp organized to assist critical patients in local hospitals."
    },
    {
      id: 7,
      category: "events",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.31%20AM.jpeg",
      titleHi: "नारी सुरक्षा व स्वावलंबन अभियान",
      titleEn: "Women Safety & Empowerment Drive",
      descHi: "महिलाओं को जागरूक करने एवं उनके अधिकारों के सम्मान के लिए जन-जागरण रैली।",
      descEn: "Public awareness rally promoting women safety and empowerment rights."
    },
    {
      id: 8,
      category: "volunteers",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.32%20AM%20(1).jpeg",
      titleHi: "युवा जांबाज संवाद",
      titleEn: "Youth Warriors Dialogue",
      descHi: "स्वयंसेवकों के साथ संगठनात्मक चर्चा और भावी समाज सेवा योजनाओं का रेखांकन।",
      descEn: "Organizational discussion with volunteers outlining future welfare action plans."
    },
    {
      id: 9,
      category: "service",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.32%20AM.jpeg",
      titleHi: "निःशुल्क स्वास्थ्य चिकित्सा शिविर",
      titleEn: "Free Healthcare & Medical Camp",
      descHi: "ग्रामीण क्षेत्रों में निःशुल्क स्वास्थ्य परीक्षण और दवाइयों का वितरण।",
      descEn: "Free health checkups and medicine distribution in remote rural locations."
    },
    {
      id: 10,
      category: "events",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.33%20AM%20(1).jpeg",
      titleHi: "सघन वृक्षारोपण अभियान",
      titleEn: "Intensive Tree Plantation Campaign",
      descHi: "पर्यावरण संरक्षण को बढ़ावा देने के लिए ५००० से अधिक वृक्षों का सघन रोपण।",
      descEn: "Plantation of over 5000 saplings for raising green environmental awareness."
    },
    {
      id: 11,
      category: "volunteers",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.33%20AM.jpeg",
      titleHi: "संगठनात्मक युवा कार्यकर्ता बैठक",
      titleEn: "Organizational Youth Volunteers Meet",
      descHi: "बौद्धिक विकास एवं सामाजिक मूल्यों के प्रति प्रतिबद्धता पर विशेष संवाद।",
      descEn: "Special assembly on intellectual development and social welfare values."
    },
    {
      id: 12,
      category: "service",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.34%20AM%20(1).jpeg",
      titleHi: "वंचित कल्याण सेवा वितरण",
      titleEn: "Underprivileged Support Distribution",
      descHi: "आर्थिक रूप से कमजोर परिवारों को खाद्य सामग्री किट की आपूर्ति।",
      descEn: "Distribution of food ration kits to economically weaker families."
    },
    {
      id: 13,
      category: "events",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.34%20AM%20(2).jpeg",
      titleHi: "स्वच्छ भारत जनचेतना श्रमदान",
      titleEn: "Swachh Bharat Cleanliness Drive",
      descHi: "स्वयंसेवकों द्वारा तालाबों और सार्वजनिक स्थानों की सघन स्वच्छता।",
      descEn: "Deep cleanliness drive of lakes and public sites by active volunteers."
    },
    {
      id: 14,
      category: "volunteers",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.35%20AM%20(1).jpeg",
      titleHi: "आपातकालीन राहत स्वयंसेवक प्रशिक्षण",
      titleEn: "Emergency Relief Volunteers Training",
      descHi: "प्राकृतिक आपदाओं के समय त्वरित राहत कार्यों का तकनीकी प्रशिक्षण।",
      descEn: "Technical rescue and relief operations training for emergencies."
    },
    {
      id: 15,
      category: "service",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.35%20AM.jpeg",
      titleHi: "वस्त्र वितरण एवं दीनबंधु सेवा",
      titleEn: "Clothes Distribution Program",
      descHi: "ठंड के मौसम में जरूरतमंद परिवारों को कंबल और गर्म कपड़ों का वितरण।",
      descEn: "Distribution of warm blankets and clothes to needy families during winter."
    },
    {
      id: 16,
      category: "events",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.36%20AM%20(1).jpeg",
      titleHi: "आत्मरक्षा प्रशिक्षण शिविर",
      titleEn: "Self-Defense Training Workshop",
      descHi: "बालिकाओं और युवतियों को सशक्त बनाने हेतु आत्मरक्षा कला का व्यावहारिक प्रशिक्षण।",
      descEn: "Practical self-defense training to empower young girls and women."
    },
    {
      id: 17,
      category: "volunteers",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.36%20AM.jpeg",
      titleHi: "युवा समाज सेना इंदौर सम्मेलन",
      titleEn: "Yuva Samaj Sena Indore Meet",
      descHi: "मालवा क्षेत्र के युवा कार्यकर्ताओं की भव्य विचार गोष्ठी एवं सम्मान समारोह।",
      descEn: "Indore regional youth volunteers assembly and honor ceremony."
    },
    {
      id: 18,
      category: "service",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.37%20AM%20(1).jpeg",
      titleHi: "रक्तदान महादान जीवन रक्षक अभियान",
      titleEn: "Mega Blood Donation Campaign",
      descHi: "हजारों स्वयंसेवकों द्वारा एक ही स्थान पर भव्य रक्तदान श्रृंखला का निर्माण।",
      descEn: "Mega blood donation chain executed at a single venue by thousands of volunteers."
    },
    {
      id: 19,
      category: "events",
      img: "/assets/img/WhatsApp%20Image%202026-05-19%20at%2012.39.37%20AM.jpeg",
      titleHi: "जल संरक्षण व नदी तट सफाई अभियान",
      titleEn: "Water Conservation & Riversides Cleanliness",
      descHi: "जलाशयों के संरक्षण एवं कचरा मुक्त करने का दृढ़ सामूहिक संकल्प।",
      descEn: "Deep community resolution for cleaning and preserving local water bodies."
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
