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
    preambleTitle: string;
    preambleText: string;
    oathTitle: string;
    oathText: string;
    oathSig: string;
    regLabel: string;
    chapters: {
      id: number;
      title: string;
      iconType: "landmark" | "shield" | "book" | "check" | "alert" | "edit" | "pen";
      type: "text" | "points";
      text?: string;
      points?: string[];
    }[];
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
      originTitle: "विचारधारा का जन्म व संस्थापना",
      originText: "“मध्य प्रदेश युवा समाज सेना” का उदय कोरोना महामारी के कठिन काल में दिनांक 20 जून 2020 को हुआ। संगठन ने सर्वप्रथम मध्य प्रदेश के Umaria जिले की Manpur तहसील में सक्रिय रूप से समाज सेवा एवं जनसहयोग का कार्य प्रारंभ किया। विपरीत परिस्थितियों में मानव सेवा को सर्वोच्च धर्म मानते हुए संगठन निरंतर समाजहित एवं राष्ट्रहित में आगे बढ़ने हेतु प्रयासरत है। हम सभी सामाजिक, राष्ट्रीय एवं मानवीय मूल्यों में विश्वास रखने वाले युवा, समाज में समानता, एकता, सहयोग, न्याय एवं मानवता की भावना को सुदृढ़ करने हेतु इस संगठन की स्थापना करते हैं।",
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
      addressValue: "गौर, सदर रोड, महाकौशल प्रान्त, जबलपुर, जिला - जबलपुर (म. प्र.) 482001",
      phoneTitle: "संपर्क सूत्र",
      phoneValue: "+91 98765 43210, +91 755 123456",
      emailTitle: "ईमेल",
      emailValue: "yuvasamajsena@gmail.com",
      socialTitle: "सोशल मीडिया पर हमें फॉलो करें"
    },
    footer: {
      slogan: "एक कदम समाज सेवा की ओर - मानवता • एकता • संगठन • सम्मान",
      quickLinks: "त्वरित लिंक्स",
      contactUs: "संपर्क विवरण",
      devCredit: "पंजीयन क्र.:- 04/14/01/19559/18 (आशीष छाया बहुउद्देशीय समिति द्वारा संचालित)",
      rights: "सर्वाधिकार सुरक्षित।"
    },
    constitution: {
      title: "व्यावसायिक संविधान एवं नियमावली",
      subtitle: "मध्य प्रदेश युवा समाज सेना की आधिकारिक विनियामक संहिता",
      preambleTitle: "संशोधित प्रस्तावना (Preamble)",
      preambleText: "हम सभी सामाजिक, राष्ट्रीय एवं मानवीय मूल्यों में विश्वास रखने वाले युवा, समाज में समानता, एकता, सहयोग, न्याय एवं मानवता की भावना को सुदृढ़ करने हेतु “मध्य प्रदेश युवा समाज सेना” संगठन की स्थापना करते हैं।\n\nयह संगठन मानवतावाद, सामाजिक उत्थान, भाईचारा, अनुशासन एवं जनसेवा के सिद्धांतों पर कार्य करेगा।\n\n“मध्य प्रदेश युवा समाज सेना” का उदय कोरोना महामारी के कठिन काल में दिनांक 20 जून 2020 को हुआ। संगठन ने सर्वप्रथम मध्य प्रदेश के Umaria जिले की Manpur तहसील में सक्रिय रूप से समाज सेवा एवं जनसहयोग का कार्य प्रारंभ किया। विपरीत परिस्थितियों में मानव सेवा को सर्वोच्च धर्म मानते हुए संगठन निरंतर समाजहित एवं राष्ट्रहित में आगे बढ़ने हेतु प्रयासरत है।\n\nसंगठन का उद्देश्य समाज के प्रत्येक व्यक्ति की समस्या को अपनी सामूहिक जिम्मेदारी मानते हुए उसके समाधान हेतु संघर्ष एवं सहयोग करना होगा।\n\nहम यह संकल्प लेते हैं कि संगठन सदैव मानवता, एकता, सम्मान एवं सामाजिक न्याय के मार्ग पर कार्य करता रहेगा।",
      oathTitle: "घोषणा एवं संकल्प",
      oathText: "“हम सभी सदस्य यह संकल्प लेते हैं कि हम संगठन की गरिमा, अनुशासन एवं मानवतावादी सिद्धांतों का पालन करेंगे तथा समाजहित एवं राष्ट्रहित में सदैव कार्य करेंगे।”",
      oathSig: "सदस्य के हस्ताक्षर",
      regLabel: "पंजीयन क्र.:- 04/14/01/19559/18 (आशीष छाया बहुउद्देशीय समिति द्वारा संचालित)",
      chapters: [
        {
          id: 1,
          title: "अध्याय – 1 : संगठन का नाम एवं स्वरूप",
          iconType: "landmark",
          type: "points",
          points: [
            "धारा 1 : नाम — संगठन का नाम “मध्य प्रदेश युवा समाज सेना” (Madhya Pradesh Yuva Samaj Sena) होगा।",
            "धारा 2 : स्वरूप — यह एक सामाजिक, गैर-राजनीतिक एवं मानवतावादी संगठन होगा।",
            "धारा 3 : मुख्यालय — संगठन का केंद्रीय मुख्यालय मध्य प्रदेश में स्थित होगा, जिसका निर्धारण केंद्रीय कार्य समिति करेगी।"
          ]
        },
        {
          id: 2,
          title: "अध्याय – 2 : उद्देश्य",
          iconType: "book",
          type: "points",
          points: [
            "समाज में मानवता, एकता एवं भाईचारे की भावना को बढ़ावा देना।",
            "समाज के जरूरतमंद एवं पीड़ित व्यक्तियों की सहायता करना।",
            "युवाओं को सामाजिक नेतृत्व एवं संगठनात्मक शक्ति प्रदान करना।",
            "शिक्षा, स्वास्थ्य, रोजगार एवं सामाजिक न्याय के लिए कार्य करना।",
            "किसी भी सदस्य की समस्या को सम्पूर्ण संगठन की समस्या मानते हुए उसके समाधान हेतु सामूहिक प्रयास करना।",
            "समाज में व्याप्त कुरीतियों एवं अन्याय के विरुद्ध आवाज उठाना।",
            "राष्ट्रहित एवं समाजहित सर्वोपरि रखना।"
          ]
        },
        {
          id: 3,
          title: "अध्याय – 3 : संगठन के सिद्धांत",
          iconType: "shield",
          type: "points",
          points: [
            "धारा 1 : मानवतावाद सिद्धांत — संगठन पूर्ण रूप से मानवतावादी विचारधारा पर आधारित होगा। जाति, धर्म, वर्ग, क्षेत्र या भाषा के आधार पर कोई भेदभाव नहीं किया जाएगा।",
            "धारा 2 : सामूहिक उत्तरदायित्व — संगठन से जुड़े किसी भी सदस्य की व्यक्तिगत, सामाजिक या कानूनी समस्या को संगठन अपनी सामूहिक जिम्मेदारी मानेगा एवं यथासंभव सहायता करेगा।",
            "धारा 3 : अनुशासन सर्वोपरि — संगठन में अनुशासन सर्वोच्च माना जाएगा। संगठन विरोधी गतिविधि, गुटबाजी अथवा संगठन की गरिमा को ठेस पहुँचाने वाला कार्य दंडनीय होगा।"
          ]
        },
        {
          id: 4,
          title: "अध्याय – 4 : सदस्यता",
          iconType: "check",
          type: "points",
          points: [
            "धारा 1 : सदस्यता पात्रता — 18 वर्ष या उससे अधिक आयु का कोई भी व्यक्ति संगठन की सदस्यता ग्रहण कर सकता है।",
            "धारा 2 : सदस्यता समाप्ति — निम्न परिस्थितियों में सदस्यता समाप्त की जा सकेगी— संगठन विरोधी गतिविधि, अनुशासनहीनता, भ्रष्टाचार अथवा पद का दुरुपयोग, संगठन की छवि धूमिल करना।"
          ]
        },
        {
          id: 5,
          title: "अध्याय – 5 : संगठनात्मक संरचना",
          iconType: "landmark",
          type: "points",
          points: [
            "केंद्रीय कार्य समिति",
            "प्रदेश कार्यकारिणी",
            "संभाग इकाई",
            "जिला इकाई",
            "तहसील इकाई",
            "नगर / ग्राम इकाई"
          ]
        },
        {
          id: 6,
          title: "अध्याय – 6 : प्रदेश कार्य समिति",
          iconType: "landmark",
          type: "points",
          points: [
            "धारा 1 : गठन — संगठन की सर्वोच्च प्रशासनिक इकाई “प्रदेश कार्य समिति” (पूर्व केंद्रीय समिति) होगी।",
            "धारा 2 : संरचना — प्रदेश कार्य समिति में निम्न पद शामिल होंगे— प्रदेश अध्यक्ष, प्रदेश उपाध्यक्ष, प्रदेश महासचिव, प्रदेश संगठन मंत्री, प्रदेश सचिव, प्रदेश कोषाध्यक्ष, मीडिया प्रभारी, अनुशासन समिति अध्यक्ष, विशेष आमंत्रित सदस्य।",
            "धारा 3 : अधिकार — प्रदेश कार्य समिति संगठन की नीतियाँ निर्धारित करेगी, पदाधिकारियों की नियुक्ति एवं निष्कासन करेगी, संविधान संशोधन की अनुशंसा करेगी, और संगठन की सभी इकाइयों की निगरानी करेगी।"
          ]
        },
        {
          id: 7,
          title: "अध्याय – 7 : अध्यक्ष की शक्तियाँ",
          iconType: "shield",
          type: "points",
          points: [
            "धारा 1 : सर्वोच्च अधिकार — संगठन का सर्वोच्च अधिकार प्रदेश अध्यक्ष के पास सुरक्षित रहेगा।",
            "धारा 2 : वीटो पावर (Veto Power) — प्रदेश अध्यक्ष को संगठन के प्रत्येक निर्णय पर पूर्ण वीटो पावर प्राप्त होगी। यदि अध्यक्ष किसी निर्णय को संगठनहित में अनुचित मानते हैं, तो वे उसे तत्काल प्रभाव से निरस्त कर सकेंगे।",
            "धारा 3 : विशेष अधिकार — प्रदेश अध्यक्ष को निम्न विशेष अधिकार प्राप्त होंगे— किसी भी पदाधिकारी की नियुक्ति; किसी भी समिति का गठन या विघटन; आपातकालीन निर्णय लेना; संगठनात्मक विवादों का अंतिम निर्णय। अध्यक्ष का निर्णय अंतिम एवं सर्वमान्य होगा।"
          ]
        },
        {
          id: 8,
          title: "अध्याय – 8 : पदाधिकारियों का कार्यकाल",
          iconType: "pen",
          type: "points",
          points: [
            "धारा 1 : अवधि — संगठन के सभी पदाधिकारियों का कार्यकाल एक वर्ष का होगा।",
            "धारा 2 : पुनर्नियुक्ति — कार्य एवं अनुशासन के आधार पर किसी भी पदाधिकारी को पुनः नियुक्त किया जा सकेगा।",
            "धारा 3 : कार्यकाल समाप्ति — अनुशासन समिति की अनुशंसा पर प्रदेश कार्य समिति अथवा अध्यक्ष किसी भी पदाधिकारी का कार्यकाल कभी भी समाप्त कर सकते हैं।"
          ]
        },
        {
          id: 9,
          title: "अध्याय – 9 : अनुशासन समिति",
          iconType: "alert",
          type: "points",
          points: [
            "धारा 1 : गठन — संगठन में एक स्वतंत्र “अनुशासन समिति” गठित की जाएगी।",
            "धारा 2 : अधिकार — अनुशासन समिति को शिकायतों की जांच, अनुशासनहीनता पर कार्रवाई की अनुशंसा, पद समाप्ति की अनुशंसा, और चेतावनी, निलंबन अथवा निष्कासन की सलाह देने का अधिकार होगा।"
          ]
        },
        {
          id: 10,
          title: "अध्याय – 10 : वित्तीय व्यवस्था",
          iconType: "landmark",
          type: "points",
          points: [
            "संगठन का आय स्रोत सदस्यता शुल्क, दान एवं स्वैच्छिक सहयोग होगा।",
            "संगठन का कोष संगठनहित एवं समाजसेवा हेतु उपयोग किया जाएगा।",
            "वित्तीय पारदर्शिता बनाए रखना अनिवार्य होगा।"
          ]
        },
        {
          id: 11,
          title: "अध्याय – 11 : संविधान संशोधन",
          iconType: "edit",
          type: "text",
          text: "संगठन के संविधान में संशोधन प्रदेश कार्य समिति की बैठक में 2/3 बहुमत से किया जा सकेगा, किन्तु अंतिम स्वीकृति अध्यक्ष की होगी।"
        },
        {
          id: 12,
          title: "अध्याय – 12 : संगठन का ध्येय वाक्य",
          iconType: "pen",
          type: "text",
          text: "“मानवता • एकता • संगठन • सम्मान”"
        }
      ]
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
      originTitle: "Birth of a Philosophy & Foundation",
      originText: "The emergence of 'Madhya Pradesh Yuva Samaj Sena' took place during the difficult times of the COVID-19 pandemic on June 20, 2020. The organization initially started its active social service and public cooperation in the Manpur tehsil of Umaria district in Madhya Pradesh. Considering human service as the supreme duty under adverse conditions, the organization is constantly striving to move forward in the interest of society and the nation. We, the youth who believe in social, national, and human values, establish this organization to strengthen the spirit of equality, unity, cooperation, justice, and humanity.",
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
      addressValue: "Gaur, Sadar Road, Mahakoshal Province, Jabalpur, District - Jabalpur (M.P.) 482001",
      phoneTitle: "Helpline Numbers",
      phoneValue: "+91 98765 43210, +91 755 123456",
      emailTitle: "Email Address",
      emailValue: "yuvasamajsena@gmail.com",
      socialTitle: "Follow Our Journey"
    },
    footer: {
      slogan: "One Step Towards Social Service - Humanity • Unity • Organization • Honor",
      quickLinks: "Quick Navigation",
      contactUs: "Get In Touch",
      devCredit: "Reg No: 04/14/01/19559/18 (Managed by Ashish Chhaya Multi-purpose Society)",
      rights: "All Rights Reserved."
    },
    constitution: {
      title: "Professional Constitution & Bylaws",
      subtitle: "Official Code of Regulations for Madhya Pradesh Yuva Samaj Sena",
      preambleTitle: "Revised Preamble",
      preambleText: "We, the youth who believe in social, national, and human values, establish 'Madhya Pradesh Yuva Samaj Sena' to strengthen the spirit of equality, unity, cooperation, justice, and humanity in society.\n\nThis organization will operate strictly on the principles of humanism, social upliftment, brotherhood, discipline, and public service.\n\nThe emergence of 'Madhya Pradesh Yuva Samaj Sena' took place during the difficult times of the COVID-19 pandemic on June 20, 2020. The organization initially started its active social service and public cooperation in the Manpur tehsil of Umaria district in Madhya Pradesh. Considering human service as the supreme duty under adverse conditions, the organization is constantly striving to move forward in the interest of society and the nation.\n\nThe objective of the organization is to consider the problem of every individual in society as our collective responsibility and to strive and cooperate for its resolution.\n\nWe solemnly pledge that the organization will always work on the path of humanity, unity, respect, and social justice.",
      oathTitle: "Official Pledge & Declaration",
      oathText: "“We, all members, take this solemn pledge that we will protect the dignity, discipline, and humanistic principles of the organization and will always work in the interest of society and the nation.”",
      oathSig: "Signature of Member",
      regLabel: "Reg No: 04/14/01/19559/18 (Managed by Ashish Chhaya Multi-purpose Society)",
      chapters: [
        {
          id: 1,
          title: "Chapter 1: Name & Structure",
          iconType: "landmark",
          type: "points",
          points: [
            "Section 1: Name — The name of the organization shall be “Madhya Pradesh Yuva Samaj Sena” (Madhya Pradesh Yuva Samaj Sena).",
            "Section 2: Nature — This shall be a social, non-political, and humanitarian organization.",
            "Section 3: Headquarters — The central headquarters of the organization shall be situated in Madhya Pradesh, as decided by the State Executive Committee."
          ]
        },
        {
          id: 2,
          title: "Chapter 2: Core Objectives",
          iconType: "book",
          type: "points",
          points: [
            "Fostering humanity, unity, and brotherhood in society.",
            "Assisting the needy and suffering individuals in society.",
            "Providing social leadership and organizational strength to the youth.",
            "Working for education, health, employment, and social justice.",
            "Collective effort to resolve any member's problem by considering it as the problem of the entire organization.",
            "Raising voice against prevailing social evils and injustice.",
            "Keeping national and social interest paramount."
          ]
        },
        {
          id: 3,
          title: "Chapter 3: Principles",
          iconType: "shield",
          type: "points",
          points: [
            "Section 1: Humanism Principle — The organization will be fully based on humanistic ideology. No discrimination will be made on the basis of caste, religion, class, region, or language.",
            "Section 2: Collective Responsibility — The organization will consider any personal, social, or legal problem of its members as its collective responsibility and provide maximum possible support.",
            "Section 3: Discipline Above All — Discipline will be held supreme in the organization. Any anti-organizational activity, factionalism, or work that hurts the dignity of the organization shall be punishable."
          ]
        },
        {
          id: 4,
          title: "Chapter 4: Membership",
          iconType: "check",
          type: "points",
          points: [
            "Section 1: Eligibility — Any person aged 18 years or above can acquire membership of the organization.",
            "Section 2: Termination — Membership can be terminated under the following conditions: Anti-organizational activity, indiscipline, corruption or abuse of position, tarnishing the image of the organization."
          ]
        },
        {
          id: 5,
          title: "Chapter 5: Organizational Structure",
          iconType: "landmark",
          type: "points",
          points: [
            "State Executive Committee",
            "State Board / Executive",
            "Divisional Unit",
            "District Unit",
            "Tehsil Unit",
            "Town / Village Unit"
          ]
        },
        {
          id: 6,
          title: "Chapter 6: State Executive Committee",
          iconType: "landmark",
          type: "points",
          points: [
            "Section 1: Formation — The supreme administrative unit of the organization shall be the “State Executive Committee” (formerly Central Committee).",
            "Section 2: Composition — The State Executive Committee shall comprise the following posts: State President, State Vice President, State General Secretary, State Organizing Secretary, State Secretary, State Treasurer, Media Coordinator, Disciplinary Committee Chairman, Special Invited Members.",
            "Section 3: Powers — The State Executive Committee shall: Formulate organizational policies; appoint and expel officers; recommend constitutional amendments; monitor all units of the organization."
          ]
        },
        {
          id: 7,
          title: "Chapter 7: President's Powers",
          iconType: "shield",
          type: "points",
          points: [
            "Section 1: Supreme Authority — The supreme authority of the organization shall remain vested in the State President.",
            "Section 2: Veto Power — The State President shall possess complete veto power over every decision of the organization. If the President deems any decision inappropriate in the interest of the organization, they can veto it immediately.",
            "Section 3: Special Rights — The State President shall have the following special rights: Appointment of any officer; formation or dissolution of any committee; emergency decision making; final decision on organizational disputes. The President's decision shall be final and universally accepted."
          ]
        },
        {
          id: 8,
          title: "Chapter 8: Tenure of Officers",
          iconType: "pen",
          type: "points",
          points: [
            "Section 1: Duration — The tenure of all officers of the organization shall be one year.",
            "Section 2: Reappointment — Any officer can be reappointed based on their performance and discipline.",
            "Section 3: Pre-mature Termination — The State Executive Committee or the President can terminate the tenure of any officer at any time on the recommendation of the Disciplinary Committee."
          ]
        },
        {
          id: 9,
          title: "Chapter 9: Disciplinary Committee",
          iconType: "alert",
          type: "points",
          points: [
            "Section 1: Formation — An independent “Disciplinary Committee” shall be constituted in the organization.",
            "Section 2: Powers — The Disciplinary Committee shall have the following powers: Investigation of complaints; recommending action on indiscipline; recommending termination of office; advising warning, suspension, or expulsion."
          ]
        },
        {
          id: 10,
          title: "Chapter 10: Financial Management",
          iconType: "landmark",
          type: "points",
          points: [
            "The income source of the organization shall be membership fees, donations, and voluntary contributions.",
            "The funds shall be utilized solely for organizational interest and social service.",
            "Maintaining financial transparency is absolutely mandatory."
          ]
        },
        {
          id: 11,
          title: "Chapter 11: Constitutional Amendments",
          iconType: "edit",
          type: "text",
          text: "Amendments to the constitution of the organization can be made in the meeting of the State Executive Committee by a 2/3rd majority, subject to final approval by the President."
        },
        {
          id: 12,
          title: "Chapter 12: Motto",
          iconType: "pen",
          type: "text",
          text: "“Humanity • Unity • Organization • Honor”"
        }
      ]
    }
  }
};
