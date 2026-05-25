export interface TranslationSet {
  nav: {
    home: string;
    about: string;
    mission: string;
    stories: string;
    gallery: string;
    contact: string;
    joinNow: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    aboutBtn: string;
    storyBtn: string;
  };
  story: {
    sectionTitle: string;
    sectionSubtitle: string;
    originTitle: string;
    originText: string;
    youthTitle: string;
    youthText: string;
    unityTitle: string;
    unityText: string;
    nationTitle: string;
    nationText: string;
  };
  impact: {
    sectionTitle: string;
    sectionSubtitle: string;
    blood: { title: string; desc: string };
    plantation: { title: string; desc: string };
    cleanliness: { title: string; desc: string };
    poor: { title: string; desc: string };
    awareness: { title: string; desc: string };
    women: { title: string; desc: string };
  };
  quote: {
    text: string;
    author: string;
    badge: string;
  };
  gallery: {
    sectionTitle: string;
    sectionSubtitle: string;
    all: string;
    service: string;
    events: string;
    volunteers: string;
  };
  contact: {
    sectionTitle: string;
    sectionSubtitle: string;
    formName: string;
    formEmail: string;
    formPhone: string;
    formMessage: string;
    formSubmit: string;
    formSuccess: string;
    addressTitle: string;
    addressValue: string;
    phoneTitle: string;
    phoneValue: string;
    emailTitle: string;
    emailValue: string;
    socialTitle: string;
  };
  footer: {
    slogan: string;
    quickLinks: string;
    contactUs: string;
    devCredit: string;
    rights: string;
  };
  constitution: {
    title: string;
    subtitle: string;
    sec1_title: string;
    sec1_name: string;
    sec2_title: string;
    sec2_village: string;
    sec2_tehsil: string;
    sec2_district: string;
    sec2_state: string;
    sec3_title: string;
    sec3_text: string;
    sec4_title: string;
    sec4_points: string[];
    sec5_title: string;
    sec5_text: string;
    sec6_title: string;
    sec6_points: string[];
    sec7_title: string;
    sec7_positions: string[];
    sec8_title: string;
    sec8_roles: { title: string; desc: string }[];
    sec9_title: string;
    sec9_points: string[];
    sec10_title: string;
    sec10_points: string[];
    sec11_title: string;
    sec11_points: string[];
    sec12_title: string;
    sec12_text: string;
    sec13_title: string;
    sec13_text: string;
    sec14_title: string;
    sec14_text: string;
    sec14_sig: string;
  };
}

export const translations: Record<'hi' | 'en', TranslationSet> = {
  hi: {
    nav: {
      home: "मुख्य पृष्ठ",
      about: "परिचय",
      mission: "हमारा लक्ष्य",
      stories: "हमारी गाथा",
      gallery: "चित्र दीर्घा",
      contact: "संपर्क",
      joinNow: "जुड़ें"
    },
    hero: {
      title: "मध्य प्रदेश युवा समाज सेना",
      subtitle: "एक कदम समाज सेवा की ओर",
      description: "सच्ची राष्ट्र सेवा और मानवता की राह पर अग्रसर, मध्य प्रदेश के ऊर्जावान युवाओं का एक सशक्त, निस्वार्थ और संकल्पी आंदोलन। आइए मिलकर एक नव-युग का निर्माण करें।",
      aboutBtn: "हमारे बारे में",
      storyBtn: "हमारी कहानी"
    },
    story: {
      sectionTitle: "हमारी गाथा",
      sectionSubtitle: "एक आंदोलन की शुरुआत",
      originTitle: "विचारधारा का जन्म",
      originText: "मध्य प्रदेश युवा समाज सेना की नींव केवल एक संगठन के रूप में नहीं, बल्कि समाज के अंतिम छोर पर खड़े व्यक्ति की सेवा के लिए एक संकल्प के रूप में रखी गई थी। जब भी समाज को आवश्यकता हुई, युवाओं ने आगे बढ़कर नेतृत्व किया। हमारा मानना है कि देश की असली ताकत उसकी युवा ऊर्जा में निहित है।",
      youthTitle: "युवा सशक्तिकरण",
      youthText: "हमारा उद्देश्य केवल सेवा करना नहीं, बल्कि युवाओं के भीतर नेतृत्व क्षमता और सामाजिक चेतना का निर्माण करना है। हम युवाओं को आत्मनिर्भर, चरित्रवान और राष्ट्रभक्त नागरिक बनाने की दिशा में काम करते हैं ताकि वे विकास की मुख्यधारा में अपना योगदान दे सकें।",
      unityTitle: "सामाजिक अखंडता",
      unityText: "जाति, धर्म, वर्ग से ऊपर उठकर राष्ट्र सर्वोपरि की भावना को जागृत करना हमारा परम कर्तव्य है। सामाजिक एकता के बिना सशक्त राष्ट्र की कल्पना असंभव है। हम प्रेम, सौहार्द और बंधुत्व की भावना को जन-जन तक पहुँचा रहे हैं।",
      nationTitle: "राष्ट्र प्रथम - समर्पण",
      nationText: "देश के प्रति समर्पण ही हमारी पहचान है। शिक्षा, पर्यावरण संरक्षण, आपदा राहत और महिलाओं की सुरक्षा जैसे महत्वपूर्ण क्षेत्रों में निरंतर सक्रिय रहकर, हम एक सुरक्षित, संपन्न और सुंदर भारत की परिकल्पना को साकार कर रहे हैं।"
    },
    impact: {
      sectionTitle: "सामाजिक प्रभाव",
      sectionSubtitle: "सेवा का निरंतर प्रवाह",
      blood: {
        title: "रक्तदान महादान",
        desc: "आपातकाल में जीवन बचाने के लिए 24x7 सक्रिय रक्तदाता वाहिनी। हजारों जरूरतमंदों को समय पर रक्त उपलब्ध कराकर जीवनदान दिया।"
      },
      plantation: {
        title: "हरित क्रांति अभियान",
        desc: "पर्यावरण संरक्षण के लिए मध्य प्रदेश के कोने-कोने में सघन वृक्षारोपण। प्रकृति का सम्मान ही संस्कृति का संरक्षण है।"
      },
      cleanliness: {
        title: "स्वच्छता व स्वच्छता जन चेतना",
        desc: "पूज्य बापू के स्वप्न को साकार करते हुए निरंतर स्वच्छता अभियान। सार्वजनिक स्थलों की सफाई के साथ जागरूकता का संदेश।"
      },
      poor: {
        title: "दीनबंधु सेवा",
        desc: "विपदा के समय असहाय परिवारों, निर्धन बच्चों और वंचित वर्गों को राशन, वस्त्र और चिकित्सा सुविधाएं पहुँचाने का निरंतर प्रयास।"
      },
      awareness: {
        title: "शिक्षा और बौद्धिक चेतना",
        desc: "गरीब बच्चों के लिए निःशुल्क शिक्षण शिविर, पठन सामग्री का वितरण और युवाओं को राष्ट्र निर्माण के लिए बौद्धिक रूप से जाग्रत करना।"
      },
      women: {
        title: "नारी सुरक्षा व स्वावलंबन",
        desc: "महिलाओं की सुरक्षा के प्रति समाज को जागरूक करना, आत्मरक्षा प्रशिक्षण शिविर लगाना और नारी शक्ति को आत्मनिर्भर बनाना।"
      }
    },
    quote: {
      text: "“युवा शक्ति ही राष्ट्र की सबसे बड़ी शक्ति है। जब देश का युवा निस्वार्थ भाव से समाज सेवा के मार्ग पर चलता है, तो राष्ट्र का कायाकल्प होना तय है।”",
      author: "मध्य प्रदेश युवा समाज सेना",
      badge: "हमारा मूल मंत्र"
    },
    gallery: {
      sectionTitle: "क्षणचित्र और स्मृतियां",
      sectionSubtitle: "धरातल पर किए गए कार्यों की एक झलक",
      all: "सभी चित्र",
      service: "समाज सेवा",
      events: "आयोजन",
      volunteers: "युवा जांबाज"
    },
    contact: {
      sectionTitle: "हमसे जुड़ें",
      sectionSubtitle: "समाज परिवर्तन के सहयात्री बनें",
      formName: "आपका पूरा नाम",
      formEmail: "ईमेल आईडी",
      formPhone: "मोबाइल नंबर",
      formMessage: "आपका संदेश",
      formSubmit: "संदेश भेजें",
      formSuccess: "आपका संदेश सफलतापूर्वक प्राप्त हुआ! हम जल्द ही आपसे संपर्क करेंगे।",
      addressTitle: "प्रधान कार्यालय",
      addressValue: "१०२, युवा शक्ति भवन, मालवीय नगर, भोपाल, मध्य प्रदेश - ४६२००३",
      phoneTitle: "संपर्क सूत्र",
      phoneValue: "+९१ ९८७६५ ४३२१०, +९१ ७५५ १२३४५६",
      emailTitle: "ईमेल",
      emailValue: "sampark@mpyuvass.org",
      socialTitle: "सोशल मीडिया पर हमें फॉलो करें"
    },
    footer: {
      slogan: "एक कदम समाज सेवा की ओर - राष्ट्र प्रथम, सेवा सर्वोपरि",
      quickLinks: "त्वरित लिंक्स",
      contactUs: "संपर्क विवरण",
      devCredit: "डिजाइन और विकसित: एलीट टेक लैब्स",
      rights: "सर्वाधिकार सुरक्षित।"
    },
    constitution: {
      title: "व्यावसायिक संविधान एवं नियमावली",
      subtitle: "मध्य प्रदेश युवा समाज सेना की आधिकारिक विनियामक संहिता",
      sec1_title: "१. संगठन का नाम",
      sec1_name: "“मध्य प्रदेश युवा समाज सेना” (MP Yuva Samaj Sena)",
      sec2_title: "२. मुख्य कार्यालय",
      sec2_village: "ग्राम/नगर: मालवीय नगर, भोपाल",
      sec2_tehsil: "तहसील: हुजूर",
      sec2_district: "जिला: भोपाल",
      sec2_state: "राज्य: मध्य प्रदेश",
      sec3_title: "३. संगठन की प्रकृति",
      sec3_text: "“मध्य प्रदेश युवा समाज सेना” एक गैर-राजनीतिक, गैर-लाभकारी एवं समाजसेवी संगठन होगा, जिसका उद्देश्य समाजहित, जनकल्याण एवं युवाओं को सामाजिक कार्यों से जोड़ना होगा।",
      sec4_title: "४. संगठन के मुख्य उद्देश्य",
      sec4_points: [
        "समाज में शिक्षा एवं जागरूकता को बढ़ावा देना।",
        "गरीब, असहाय एवं जरूरतमंद लोगों की सहायता करना।",
        "रक्तदान शिविर, स्वास्थ्य शिविर एवं जनकल्याण कार्यक्रम आयोजित करना।",
        "युवाओं को नशामुक्ति एवं सामाजिक जिम्मेदारी के प्रति जागरूक करना।",
        "पर्यावरण संरक्षण एवं स्वच्छता अभियान चलाना।",
        "सामाजिक एकता, भाईचारा एवं राष्ट्रहित की भावना को मजबूत करना।",
        "प्रशासन तक जनसमस्याओं को शांतिपूर्ण एवं संवैधानिक तरीके से पहुँचाना।",
        "प्राकृतिक आपदा एवं आपातकालीन परिस्थितियों में राहत कार्य करना।",
        "बेरोजगार युवाओं को स्वरोजगार एवं कौशल विकास हेतु प्रेरित करना।",
        "महिला सुरक्षा एवं सम्मान के प्रति जागरूकता फैलाना।"
      ],
      sec5_title: "५. संगठन का मूल सिद्धांत",
      sec5_text: "“सेवा • संगठन • सम्मान • राष्ट्रहित”",
      sec6_title: "६. सदस्यता नियम",
      sec6_points: [
        "18 वर्ष या उससे अधिक आयु का कोई भी भारतीय नागरिक सदस्य बन सकता है।",
        "सदस्य का आचरण सामाजिक एवं सम्मानजनक होना चाहिए।",
        "संगठन विरोधी या कानून विरोधी गतिविधियों पर सदस्यता समाप्त की जा सकती है।",
        "सदस्यता शुल्क एवं पहचान पत्र का निर्धारण कार्यकारिणी द्वारा किया जाएगा।",
        "सभी सदस्यों को संगठन के नियमों का पालन करना अनिवार्य होगा।"
      ],
      sec7_title: "७. संगठनात्मक संरचना (प्रमुख पद)",
      sec7_positions: [
        "संरक्षक",
        "प्रदेश अध्यक्ष",
        "प्रदेश उपाध्यक्ष",
        "प्रदेश सचिव",
        "सह सचिव",
        "कोषाध्यक्ष",
        "मीडिया प्रभारी",
        "संगठन मंत्री",
        "जिला अध्यक्ष",
        "ब्लॉक अध्यक्ष",
        "कार्यकारिणी सदस्य"
      ],
      sec8_title: "८. पदाधिकारियों के कार्य",
      sec8_roles: [
        {
          title: "प्रदेश अध्यक्ष",
          desc: "संगठन का नेतृत्व करेगा एवं सभी बैठकों की अध्यक्षता करेगा।"
        },
        {
          title: "प्रदेश सचिव",
          desc: "संगठन के प्रशासनिक कार्य, आधिकारिक दस्तावेज एवं पत्राचार संभालेगा।"
        },
        {
          title: "कोषाध्यक्ष",
          desc: "संगठन के आय-व्यय एवं वित्तीय रिकॉर्ड का संधारण करेगा।"
        },
        {
          title: "मीडिया प्रभारी",
          desc: "सोशल मीडिया, प्रचार-प्रसार एवं जनसंपर्क कार्य देखेगा।"
        }
      ],
      sec9_title: "९. बैठक नियम",
      sec9_points: [
        "संगठन की मासिक बैठक आयोजित की जाएगी।",
        "विशेष परिस्थिति में आपात बैठक बुलाई जा सकती है।",
        "निर्णय बहुमत के आधार पर मान्य होंगे।",
        "बैठक की कार्यवाही लिखित रूप में सुरक्षित रखी जाएगी।"
      ],
      sec10_title: "१०. वित्तीय नियम",
      sec10_points: [
        "संगठन का बैंक खाता संगठन के नाम से संचालित किया जाएगा।",
        "आय-व्यय का स्पष्ट एवं लिखित रिकॉर्ड रखा जाएगा।",
        "संगठन की राशि केवल समाजहित एवं संगठनात्मक कार्यों में उपयोग होगी।",
        "किसी भी प्रकार के वित्तीय दुरुपयोग पर कार्रवाई की जाएगी।"
      ],
      sec11_title: "११. अनुशासन नियम",
      sec11_points: [
        "जातीय, धार्मिक या राजनीतिक नफरत फैलाना प्रतिबंधित होगा।",
        "संगठन की छवि खराब करने वाले सदस्य पर अनुशासनात्मक कार्रवाई की जाएगी।",
        "कानून विरोधी गतिविधियों में शामिल सदस्य को निष्कासित किया जा सकेगा।",
        "संगठन में आपसी सम्मान एवं अनुशासन बनाए रखना अनिवार्य होगा।"
      ],
      sec12_title: "१२. संविधान संशोधन नियम",
      sec12_text: "कार्यकारिणी की सहमति एवं बहुमत से संविधान में आवश्यक संशोधन किया जा सकेगा।",
      sec13_title: "१३. संगठन विघटन नियम",
      sec13_text: "विशेष परिस्थिति में कार्यकारिणी के 2/3 बहुमत से संगठन का विघटन किया जा सकेगा।",
      sec14_title: "१४. शपथ",
      sec14_text: "“मैं मध्य प्रदेश युवा समाज सेना का सदस्य होकर समाजहित, राष्ट्रहित एवं मानव सेवा के कार्य ईमानदारी एवं अनुशासन के साथ करने की शपथ लेता/लेती हूँ।”",
      sec14_sig: "सदस्य के हस्ताक्षर"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      mission: "Our Mission",
      stories: "Our Story",
      gallery: "Gallery",
      contact: "Contact",
      joinNow: "Join Us"
    },
    hero: {
      title: "Madhya Pradesh Yuva Samaj Sena",
      subtitle: "One Step Towards Social Service",
      description: "A powerful, selfless, and dedicated youth movement driving community welfare, social harmony, and nation-building across Madhya Pradesh. Let us build a new golden era together.",
      aboutBtn: "About Us",
      storyBtn: "Our Story"
    },
    story: {
      sectionTitle: "Our Narrative",
      sectionSubtitle: "The Genesis of a Movement",
      originTitle: "Birth of a Philosophy",
      originText: "The foundation of Madhya Pradesh Yuva Samaj Sena was laid not just as an organization, but as a deep commitment to serve the last person standing in society. Whenever humanity called, our youth stepped forward to lead. We believe true national power lies in the core energy of its youth.",
      youthTitle: "Youth Empowerment",
      youthText: "Our mission goes beyond external aid; we build character, leadership, and social consciousness inside every young individual. We nurture self-reliant, patriotic, and responsible citizens ready to accelerate our nation's progress.",
      unityTitle: "Social Integrity",
      unityText: "Rising above divisions of caste, religion, or class to invoke the supreme feeling of 'Nation First' is our holy duty. A strong country cannot exist without cultural harmony. We are spreading messages of love, respect, and deep brotherhood.",
      nationTitle: "Nation First - Dedication",
      nationText: "A life dedicated to the welfare of others defines us. Active in education, environmental sustainability, emergency relief, and women safety, we are turning the dream of a secure, green, and prosperous India into reality."
    },
    impact: {
      sectionTitle: "Social Impact",
      sectionSubtitle: "A Legacy of Selfless Service",
      blood: {
        title: "Blood Donation Movement",
        desc: "A 24x7 proactive donor network working to save lives during critical emergencies. Instantly connecting hundreds of patients to healthy life-saving donors daily."
      },
      plantation: {
        title: "Eco Green Revolution",
        desc: "Extensive tree plantation drives spanning all districts of Madhya Pradesh. Respecting nature is the highest form of preserving our culture."
      },
      cleanliness: {
        title: "Clean India Drive",
        desc: "Fulfilling the father of the nation’s dream through consistent cleanliness campaigns, waste management drives, and civic responsibility education."
      },
      poor: {
        title: "Dignity & Support Program",
        desc: "Providing immediate dry rations, clothing, educational support, and healthcare access to underprivileged families, orphans, and shelter homes during crisis."
      },
      awareness: {
        title: "Literacy & Intellectual Awakening",
        desc: "Underprivileged children education kits, free coaching, and youth seminars to spark science, history, and patriotic consciousness."
      },
      women: {
        title: "Women Safety & Self-Reliance",
        desc: "Organizing martial-arts self-defense workshops, hosting safety awareness panels, and helping young women achieve true economic and social independence."
      }
    },
    quote: {
      text: "“Youth power is the ultimate strength of a nation. When the youth step forward selflessly onto the path of social service, the resurrection of the nation is guaranteed.”",
      author: "Madhya Pradesh Yuva Samaj Sena",
      badge: "OUR GUIDING LIGHT"
    },
    gallery: {
      sectionTitle: "Visual Memoirs",
      sectionSubtitle: "Glimpses of real human emotions and action on the ground",
      all: "All Photos",
      service: "Social Service",
      events: "Campaigns",
      volunteers: "Our Heroes"
    },
    contact: {
      sectionTitle: "Connect With Us",
      sectionSubtitle: "Become a Partner in Social Resurrection",
      formName: "Your Full Name",
      formEmail: "Email Address",
      formPhone: "Mobile Number",
      formMessage: "Your Message",
      formSubmit: "Send Message",
      formSuccess: "Your message has been received! Our volunteers will get in touch with you shortly.",
      addressTitle: "Headquarters",
      addressValue: "102, Yuva Shakti Bhavan, Malviya Nagar, Bhopal, Madhya Pradesh - 462003",
      phoneTitle: "Helpline Numbers",
      phoneValue: "+91 98765 43210, +91 755 123456",
      emailTitle: "Email Address",
      emailValue: "sampark@mpyuvass.org",
      socialTitle: "Follow Our Journey"
    },
    footer: {
      slogan: "One Step Towards Social Service - Nation First, Service Above Self",
      quickLinks: "Quick Navigation",
      contactUs: "Get In Touch",
      devCredit: "Designed & Developed by Elite Tech Labs",
      rights: "All Rights Reserved."
    },
    constitution: {
      title: "Professional Constitution & Bylaws",
      subtitle: "Official Code of Regulations for Madhya Pradesh Yuva Samaj Sena",
      sec1_title: "1. Organization Name",
      sec1_name: "“Madhya Pradesh Yuva Samaj Sena” (MPYSS)",
      sec2_title: "2. Head Office",
      sec2_village: "Village/Town: Malviya Nagar, Bhopal",
      sec2_tehsil: "Tehsil: Huzur",
      sec2_district: "District: Bhopal",
      sec2_state: "State: Madhya Pradesh",
      sec3_title: "3. Nature of the Organization",
      sec3_text: "“Madhya Pradesh Yuva Samaj Sena” is a non-political, non-profit, and social welfare organization dedicated entirely to community services, public welfare, and mobilizing youth.",
      sec4_title: "4. Core Objectives",
      sec4_points: [
        "Promoting education, literacy, and community awareness.",
        "Providing welfare support to underprivileged, poor, and needy individuals.",
        "Organizing blood donation camps, health checkups, and civic aid drives.",
        "Mobilizing youth against drug abuse and fostering civic responsibilities.",
        "Executing environmental sustainability programs and cleanliness campaigns.",
        "Strengthening social integrity, brotherhood, and national interest.",
        "Presenting public grievances to administration via peaceful, constitutional paths.",
        "Initiating immediate relief work during natural disasters and emergencies.",
        "Nurturing self-reliance, entrepreneurship, and skill development in youth.",
        "Fostering women safety, dignity, self-defense training, and empowerment."
      ],
      sec5_title: "5. Founding Motto",
      sec5_text: "“Service • Organization • Honor • National Interest”",
      sec6_title: "6. Membership Rules",
      sec6_points: [
        "Any Indian citizen aged 18 years or above can become a member.",
        "Every member must maintain an honorable, dignified social conduct.",
        "Membership can be terminated for anti-organizational or illegal activities.",
        "Fees and official identity cards shall be decided by the executive committee.",
        "Strict adherence to all rules of the organization is mandatory."
      ],
      sec7_title: "7. Organizational Structure",
      sec7_positions: [
        "Patron",
        "State President",
        "State Vice President",
        "State Secretary",
        "Joint Secretary",
        "Treasurer",
        "Media Coordinator",
        "Organization Minister",
        "District President",
        "Block President",
        "Executive Committee Member"
      ],
      sec8_title: "8. Duties of Officers",
      sec8_roles: [
        {
          title: "State President",
          desc: "Will lead the organization and preside over all executive assemblies."
        },
        {
          title: "State Secretary",
          desc: "Will manage administration, official documentation, and institutional letters."
        },
        {
          title: "Treasurer",
          desc: "Will monitor income, expenditures, and maintain institutional financial records."
        },
        {
          title: "Media Coordinator",
          desc: "Will direct social media channels, advertisements, and public relations."
        }
      ],
      sec9_title: "9. Assembly & Meeting Bylaws",
      sec9_points: [
        "A monthly assembly/meeting of the organization shall be held.",
        "Emergency meetings can be summoned under special circumstances.",
        "Decisions will be validated based on the majority votes of the committee.",
        "Action reports and proceedings of all meetings must be saved in writing."
      ],
      sec10_title: "10. Financial Regulations",
      sec10_points: [
        "Bank accounts shall be registered and operated strictly in the organization's name.",
        "A clear, fully audit-ready written log of incomes & expenses shall be maintained.",
        "Organizational funds shall be utilized solely for welfare and institutional work.",
        "Strictest legal/internal action will be taken in cases of financial misuse."
      ],
      sec11_title: "11. Disciplinary Bylaws",
      sec11_points: [
        "Inciting caste, religious, or political hatred is strictly prohibited.",
        "Strict action shall be taken against members spoiling the organization's reputation.",
        "Immediate expulsion of members involved in unlawful or anti-social activities.",
        "Maintaining mutual respect and internal discipline is absolutely mandatory."
      ],
      sec12_title: "12. Constitutional Amendments",
      sec12_text: "Essential amendments to the constitution can be made solely with the consensus and majority of the executive committee.",
      sec13_title: "13. Dissolution of Organization",
      sec13_text: "Under extreme or special conditions, the organization can be dissolved solely with a 2/3rd majority vote of the executive committee.",
      sec14_title: "14. Official Pledge / Oath",
      sec14_text: "“Being a dedicated member of Madhya Pradesh Yuva Samaj Sena, I solemnly swear to serve community, country, and humanity with complete honesty, transparency, and discipline.”",
      sec14_sig: "Signature of Member"
    }
  }
};
