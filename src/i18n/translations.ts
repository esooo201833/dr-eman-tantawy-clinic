// ==========================================
// TRANSLATIONS - English & Arabic
// Complete website translation
// ==========================================

export type Language = 'en' | 'ar';

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      bookAppointment: 'Book Appointment',
    },
    // Hero Section
    hero: {
      tagline: 'The Best Dentist In Egypt',
      experience: '35+ Years',
      description: 'The leading dentist in Egypt and the best dental clinic in the heart of Cairo',
      bookNow: 'Book Appointment',
      callNow: 'Call Now',
    },
    // Stats Section
    stats: {
      yearsExperience: 'Years of Experience',
      successfulSurgeries: 'Successful Surgeries',
      smileMakeovers: 'Smile Makeovers',
      fullMouthRehab: 'Full Mouth Rehab',
    },
    // Services Section
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive dental care with state-of-the-art technology',
      viewAll: 'View All Services',
      // Service Names
      dentalImplants: 'Dental Implants',
      veneers: 'Veneers',
      aligners: 'Aligners',
      allOn4: 'All-on-4 & All-on-6',
      dentalSurgeries: 'Dental Surgeries',
      rootCanal: 'Root Canal Treatment',
      compositeVeneers: 'Composite Veneers',
      periodontics: 'Periodontics',
      teethWhitening: 'Teeth Whitening',
      orthodontics: 'Orthodontics',
      pedodontics: 'Pedodontics',
      digitalDentistry: 'Digital Dentistry',
      // Service Descriptions
      dentalImplantsDesc: 'Permanent, natural-looking tooth replacements with 97% success rate',
      veneersDesc: 'High-quality porcelain veneers for a natural, translucent appearance',
      alignersDesc: 'Clear aligners for discreet teeth straightening - nearly invisible',
      allOn4Desc: 'Fixed, full-arch restoration for edentulous patients',
      dentalSurgeriesDesc: 'Advanced procedures with precision & expertise',
      rootCanalDesc: 'Painless and stress-free procedure with 97% success rate',
      compositeVeneersDesc: 'Aesthetic dental restorations using composite materials',
      periodonticsDesc: 'Gum health treatment and implant site preparation',
      teethWhiteningDesc: 'Laser whitening technology for instant, pain-free results',
      orthodonticsDesc: 'Metal, ceramic, and invisible braces for confident smiles',
      pedodonticsDesc: 'Specialized dental care for children in a stress-free environment',
      digitalDentistryDesc: 'CBCT imaging and state-of-the-art equipment',
    },
    // Videos Section
    videos: {
      title: 'Watch Our Videos',
      subtitle: 'Learn more about our dental services and treatments',
    },
    // Testimonials
    testimonials: {
      title: 'What Our Patients Say',
      subtitle: 'Real stories from real patients',
    },
    // CTA Section
    cta: {
      title: 'Ready to Transform Your Smile?',
      subtitle: 'Book your consultation today and take the first step towards a beautiful smile',
      bookNow: 'Book Appointment',
    },
    // About Page
    about: {
      title: 'About Dr. Eman Tantawy',
      subtitle: 'dental clinic led by the best dentist',
      description: 'TOP DENTAL CLINIC HAVING THE BEST DENTISTS BECAME A WORLD CLASS DESTINATION FOR SMILE TRANSFORMATION',
      experience: '35+ Years of Excellence',
      experienceDesc: 'Dr. Eman Tantawy has been enriching patients smiles for over 35 years, making her one of the best dentists in Egypt and the Middle East.',
      mission: 'Our Mission',
      missionDesc: 'Providing quality dental care through knowledge, passion, and experience, applying digital dentistry for accuracy and predictability.',
      vision: 'Our Vision',
      visionDesc: 'Aiming to pave the way for the future of dental care in Egypt and the whole world.',
      values: 'Our Values',
      valuesDesc: 'We believe that we owe our patients the best dentistry has to offer. We learn everyday and incorporate the latest technologies.',
    },
    // Contact Page
    contact: {
      title: 'Contact Us',
      subtitle: 'Get in touch with our team',
      phone: 'Phone',
      email: 'Email',
      whatsapp: 'WhatsApp',
      address: 'Address',
      workingHours: 'Working Hours',
      location: 'Location',
      getDirections: 'Get Directions',
      contactUs: 'Contact Us',
      sendMessage: 'Send Message',
      yourName: 'Your Name',
      yourEmail: 'Your Email',
      yourPhone: 'Your Phone',
      message: 'Message',
      service: 'Service Interested In',
      selectService: 'Select a service',
      submit: 'Submit',
      daily: 'Daily - All Week',
    },
    // Services Page
    servicesPage: {
      title: 'Services',
      heroTitle: 'Dental Implants, Veneers or Aligners – Top Cosmetic Dentistry in Egypt',
      heroSubtitle: 'Veneers, dental Implants. Also, aligners to achieve Aesthetic Perfection with Advanced Technology',
      learnMore: 'Learn More',
      // Service Titles
      dentalImplantsTitle: 'The Gold Standard for Tooth Replacement',
      veneersTitle: 'Veneers or Dental Crowns? And Why',
      alignersTitle: 'Clear Aligners - Perfectly Aligned Smile',
      allOn4Title: 'Supported Dentures - Permanent Solution',
      dentalSurgeriesTitle: 'Advanced Procedures with Precision',
      rootCanalTitle: 'Painless Root Canal Treatment',
      compositeVeneersTitle: 'Composite Veneer or Dental Filling',
      periodonticsTitle: 'Gum Health for Successful Treatments',
      teethWhiteningTitle: 'Hollywood Smile with Whitening',
      orthodonticsTitle: 'Metal, Ceramic & Invisible Braces',
      pedodonticsTitle: 'Specialized Children\'s Dental Care',
      digitalDentistryTitle: 'CBCT Imaging & Laser Dentistry',
      // Service Full Descriptions
      dentalImplantsFullDesc: 'At our dental clinic, we specialize in dental implants, providing patients with permanent, natural-looking tooth replacements. With advanced 3D-guided implant placement using CBCT, we achieve fast, accurate, and minimally invasive procedures.',
      veneersFullDesc: 'Our veneers provide a natural, translucent, and highly esthetic appearance. Our expert dentists ensure each veneer is fully customized to match the patients unique smile.',
      alignersFullDesc: 'Clear aligners for discreet teeth straightening - nearly invisible and comfortable. Many patients who consider veneers explore aligners for correcting major misalignments.',
      allOn4FullDesc: 'Our All-on-4 and All-on-6 supported dentures provide a permanent solution for edentulous patients. With over 1,000 successful cases, this treatment offers fixed, full-arch restoration.',
      dentalSurgeriesFullDesc: 'Our dental surgery services include advanced procedures with precision and expertise, including orthognathic surgeries. Dr. Eman Tantawy can manage even the most complicated cases with ease.',
      rootCanalFullDesc: 'Our root canal treatment is a painless and stress-free procedure with a 97% success rate using the latest technology. We prioritize comfort and use advanced techniques.',
      compositeVeneersFullDesc: 'Composite veneers and dental fillings provide aesthetic dental restorations using composite materials for beautiful, natural-looking results.',
      periodonticsFullDesc: 'Periodontics focuses on gum health treatment, gum contouring, and implant site preparation. Healthy gums are the foundation for successful treatments.',
      teethWhiteningFullDesc: 'Our laser whitening technology provides instant, pain-free results up to 4 shades lighter. Teeth whitening can be combined with aligners to create a Hollywood smile.',
      orthodonticsFullDesc: 'We offer comprehensive orthodontic services including metal, ceramic, and invisible braces for healthy and confident smiles.',
      pedodonticsFullDesc: 'Our pedodontic services provide specialized dental care for children in a stress-free environment. We make dental visits comfortable for kids.',
      digitalDentistryFullDesc: 'Our digital dentistry services include CBCT imaging, dental lasers, and state-of-the-art equipment for accurate diagnostics and treatment planning.',
      // Features
      features: {
        advancedTech: 'Advanced 3D-guided implant placement using CBCT',
        premiumMaterials: 'Premium titanium posts with 97% success rate',
        minimallyInvasive: 'Minimally invasive procedures',
        naturalLook: 'Natural, translucent appearance',
        digitalDesign: 'Digital smile design technology',
        invisible: 'Nearly invisible clear aligners',
        comfortable: 'Comfortable & removable',
        permanent: 'Fixed full-arch restoration',
        immediate: 'Immediate function & aesthetics',
        painless: 'Painless and stress-free procedure',
        childFriendly: 'Child-friendly approach',
        accurate: 'Accurate diagnostics',
      },
    },
    // Footer
    footer: {
      quickLinks: 'Quick Links',
      contactUs: 'Contact Us',
      followUs: 'Follow Us',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    // Language
    language: {
      english: 'English',
      arabic: 'العربية',
    },
  },
  ar: {
    // Navigation
    nav: {
      home: 'الرئيسية',
      about: 'عن العيادة',
      services: 'الخدمات',
      contact: 'اتصل بنا',
      bookAppointment: 'احجز موعد',
    },
    // Hero Section
    hero: {
      tagline: 'أفضل دكتورة أسنان في مصر',
      experience: '+35 سنة',
      description: 'المركز الرائد لطب الأسنان في مصر وأفضل عيادة أسنان في قلب القاهرة',
      bookNow: 'احجز موعد',
      callNow: 'اتصل الآن',
    },
    // Stats Section
    stats: {
      yearsExperience: 'سنوات الخبرة',
      successfulSurgeries: 'عمليات ناجحة',
      smileMakeovers: 'تجميل ابتسامات',
      fullMouthRehab: 'إعادة تأهيل الفم',
    },
    // Services Section
    services: {
      title: 'خدماتنا',
      subtitle: 'رعاية شاملة لطب الأسنان بأحدث التقنيات',
      viewAll: 'عرض جميع الخدمات',
      // Service Names
      dentalImplants: 'زراعة الأسنان',
      veneers: 'الفينير',
      aligners: 'التقويم الشفاف',
      allOn4: 'All-on-4 & All-on-6',
      dentalSurgeries: 'جراحات الأسنان',
      rootCanal: 'علاج العصب',
      compositeVeneers: 'الفينير المركب',
      periodontics: 'علاج اللثة',
      teethWhitening: 'تبييض الأسنان',
      orthodontics: 'تقويم الأسنان',
      pedodontics: 'طب أسنان الأطفال',
      digitalDentistry: 'طب الأسنان الرقمي',
      // Service Descriptions
      dentalImplantsDesc: 'تيجان أسنان دائمة وطبيعية المظهر مع نسبة نجاح 97%',
      veneersDesc: 'فينير عالي الجودة لمظهر طبيعي وشفاف',
      alignersDesc: 'تقويم شفاف لتقويم الأسنان بشكل غير مرئي ومريح',
      allOn4Desc: 'ترميم كامل للفك لمرضى فقدان الأسنان',
      dentalSurgeriesDesc: 'إجراءات متقدمة بدقة وخبرة عالية',
      rootCanalDesc: 'إجراء painless مع نسبة نجاح 97% بأحدث التقنيات',
      compositeVeneersDesc: 'ترميمات أسنان جمالية باستخدام مواد مركبة',
      periodonticsDesc: 'علاج اللثة وتحضير موقع الزراعة',
      teethWhiteningDesc: 'تقنية الليزر لتبييض فوري وبدون ألم',
      orthodonticsDesc: 'تقويم معدني وخزفي وشفاف لابتسامة واثقة',
      pedodonticsDesc: 'رعاية متخصصة لأسنان الأطفال في بيئة مريحة',
      digitalDentistryDesc: 'تصوير CBCT وأحدث المعدات التشخيصية',
    },
    // Videos Section
    videos: {
      title: 'شاهد فيديوهاتنا',
      subtitle: 'تعرف أكثر على خدماتنا وعلاجاتنا',
    },
    // Testimonials
    testimonials: {
      title: 'ماذا يقول مرضانا',
      subtitle: 'قصص حقيقية من مرضى حقيقيين',
    },
    // CTA Section
    cta: {
      title: 'جاهز لتحويل ابتسامتك؟',
      subtitle: 'احجز استشارتك اليوم واتخذ الخطوة الأولى نحو ابتسامة جميلة',
      bookNow: 'احجز موعد',
    },
    // About Page
    about: {
      title: 'عن د. إيمان طنطاوي',
      subtitle: 'عيادة أسنان بقيادة أفضل دكتورة',
      description: 'عيادة أسنان من الدرجة الأولى أصبحت وجهة عالمية لتحويل الابتسامات',
      experience: '+35 سنة من التميز',
      experienceDesc: 'د. إيمان طنطاوي تثري ابتسامات مرضاها منذ أكثر من 35 سنة، مما يجعلها واحدة من أفضل أطباء الأسنان في مصر والشرق الأوسط.',
      mission: 'مهمتنا',
      missionDesc: 'تقديم رعاية أسنان عالية الجودة من خلال المعرفة والشغف والخبرة، مع تطبيق طب الأسنان الرقمي للدقة والتوقع.',
      vision: 'رؤيتنا',
      visionDesc: 'نسعى ل paving the way لمستقبل رعاية الأسنان في مصر والعالم.',
      values: 'قيمنا',
      valuesDesc: 'نؤمن بأننا مدينون لمرضانا بأفضل ما يقدمه طب الأسنان. نتعلم كل يوم ونستخدم أحدث التقنيات.',
    },
    // Contact Page
    contact: {
      title: 'اتصل بنا',
      subtitle: 'تواصل مع فريقنا',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      whatsapp: 'واتساب',
      address: 'العنوان',
      workingHours: 'ساعات العمل',
      location: 'الموقع',
      getDirections: 'احصل على الاتجاهات',
      sendMessage: 'أرسل رسالة',
      yourName: 'اسمك',
      yourEmail: 'بريدك الإلكتروني',
      yourPhone: 'هاتفك',
      message: 'الرسالة',
      service: 'الخدمة المهتم بها',
      selectService: 'اختر خدمة',
      contactUs: 'اتصل بنا',
      submit: 'إرسال',
      daily: 'يومياً - طوال الأسبوع',
    },
    // Services Page
    servicesPage: {
      title: 'الخدمات',
      heroTitle: 'زراعة الأسنان، الفينير أو التقويم الشفاف – أفضل طب تجميل أسنان في مصر',
      heroSubtitle: 'فينير، زراعة أسنان، وتقويم شفاف لتحقيق الكمال الجمالي بأحدث التقنيات',
      learnMore: 'اعرف أكثر',
      // Service Titles
      dentalImplantsTitle: 'الذهبية لاستبدال الأسنان',
      veneersTitle: 'الفينير أم تيجان الأسنان؟ ولماذا؟',
      alignersTitle: 'تقويم شفاف – ابتسامة مثالية',
      allOn4Title: 'حل دائم لفقدان الأسنان',
      dentalSurgeriesTitle: 'إجراءات متقدمة بدقة عالية',
      rootCanalTitle: 'علاج العصب بدون ألم',
      compositeVeneersTitle: 'الفينير المركب أو الحشوة',
      periodonticsTitle: 'صحة اللثة لعلاجات ناجحة',
      teethWhiteningTitle: 'ابتسامة هوليوود مع التبييض',
      orthodonticsTitle: 'تقويم معدني وخزفي وشفاف',
      pedodonticsTitle: 'رعاية متخصصة لأسنان الأطفال',
      digitalDentistryTitle: 'تصوير CBCT وطب أسنان بالليزر',
      // Service Full Descriptions
      dentalImplantsFullDesc: 'نحن متخصصون في زراعة الأسنان، نقدم للمرضى بدائل دائمة وطبيعية المظهر. مع التوجيه ثلاثي الأبعاد المتقدم باستخدام CBCT، نحقق إجراءات سريعة ودقيقة وقليلة التدخل.',
      veneersFullDesc: 'الفينير الخاص بنا يوفر مظهراً طبيعياً وشفافاً وجمالياً للغاية. أطباؤنا المتخصصون يضمنون تخصيص كل فينير لمطابقة ابتسامة المريض الفريدة.',
      alignersFullDesc: 'تقويم شفاف لتقويم الأسنان بشكل غير مرئي ومريح. العديد من المرضى الذين يفكرون في الفينير يستكشفون التقويم الشفاف لتصحيح الاعوجاجات الكبيرة قبل وضع الفينير.',
      allOn4FullDesc: 'All-on-4 و All-on-6 يوفران حلاً دائماً لمرضى فقدان الأسنان. مع أكثر من 1000 حالة ناجحة، يقدم هذا العلاج ترميماً كاملاً للفك يبدو ويعمل مثل الأسنان الطبيعية.',
      dentalSurgeriesFullDesc: 'خدمات جراحة الأسنان لدينا تشمل إجراءات متقدمة بدقة وخبرة، بما في ذلك جراحات الفك. د. إيمان طنطاوي تستطيع التعامل مع أكثر الحالات تعقيداً بسهولة.',
      rootCanalFullDesc: 'علاج العصب لدينا هو إجراء بدون ألم وخالي من التوتر مع نسبة نجاح 97% باستخدام أحدث التقنيات. نحن نعطي الأولوية للراحة ونستخدم تقنيات متقدمة.',
      compositeVeneersFullDesc: 'الفينير المركب والحشوات توفر ترميمات أسنان جمالية باستخدام مواد مركبة لنتائج طبيعية وجميلة.',
      periodonticsFullDesc: 'علاج اللثة يركز على علاج صحة اللثة، تشكيل اللثة، وتحضير موقع الزراعة. اللثة الصحية هي الأساس للعلاجات الناجحة.',
      teethWhiteningFullDesc: 'تقنية تبييض الليزر لدينا توفر نتائج فورية وبدون ألم أفتح بـ 4 درجات. يمكن دمج تبييض الأسنان مع التقويم الشفاف لإنشاء ابتسامة هوليوود.',
      orthodonticsFullDesc: 'نقدم خدمات تقويم الأسنان الشاملة بما في ذلك التقويم المعدني والخزفي والشفاف لابتسامات صحية وواثقة.',
      pedodonticsFullDesc: 'خدمات طب أسنان الأطفال لدينا توفر رعاية متخصصة لأسنان الأطفال في بيئة خالية من التوتر. نجعل زيارات الأسنان مريحة للأطفال.',
      digitalDentistryFullDesc: 'خدمات طب الأسنان الرقمي لدينا تشمل تصوير CBCT، ليزر الأسنان، وأحدث المعدات للتشخيص الدقيق وتخطيط العلاج.',
      // Features
      features: {
        advancedTech: 'توجيه ثلاثي الأبعاد متقدم باستخدام CBCT',
        premiumMaterials: 'تيجان تيتانيوم متميزة بنسبة نجاح 97%',
        minimallyInvasive: 'إجراءات قليلة التدخل',
        naturalLook: 'مظهر طبيعي وشفاف',
        digitalDesign: 'تصميم الابتسامة الرقمي',
        invisible: 'تقويم شفاف غير مرئي تقريباً',
        comfortable: 'مريح وقابل للإزالة',
        permanent: 'ترميم دائم كامل للفك',
        immediate: 'وظيفة وجمال فوري',
        painless: 'إجراء بدون ألم وخالي من التوتر',
        childFriendly: 'نهج مناسب للأطفال',
        accurate: 'تشخيص دقيق',
      },
    },
    // Footer
    footer: {
      quickLinks: 'روابط سريعة',
      contactUs: 'اتصل بنا',
      followUs: 'تابعنا',
      rights: 'جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
    },
    // Language
    language: {
      english: 'English',
      arabic: 'العربية',
    },
  },
};

export type Translations = typeof translations.en;
