// constants/menuSchema.js
export const SCHEMA_MENU = {
  en: {
    logo: '/logo-en.png',
    links: [
      { id: 'home', name: 'Home', path: '/' },
      { id: 'kits', name: 'Kits', path: '/kits' },
      { id: 'supplies', name: 'Supplies', path: '/supplies' },
      { 
        id: 'learn', 
        name: 'Learn', 
        path: '/learn',
        children: [
          { id: 'tutorials', name: 'Tutorials', path: '/learn/tutorials' },
          { id: 'guides', name: 'Guides', path: '/learn/guides' }
        ]
      },
      { id: 'about', name: 'About Us', path: '/about' },
      { id: 'contact', name: 'Contact', path: '/contact' }
    ]
  },
  fr: {
    logo: '/logo-fr.png',
    links: [
      { id: 'home', name: 'Accueil', path: '/' },
      { id: 'kits', name: 'Kits', path: '/kits' },
      { id: 'supplies', name: 'Fournitures', path: '/fournitures' },
      { 
        id: 'learn', 
        name: 'Apprendre', 
        path: '/apprendre',
        children: [
          { id: 'tutorials', name: 'Tutoriels', path: '/apprendre/tutoriels' },
          { id: 'guides', name: 'Guides', path: '/apprendre/guides' }
        ]
      },
      { id: 'about', name: 'À Propos', path: '/a-propos' },
      { id: 'contact', name: 'Contact', path: '/contact' }
    ]
  },
  ar: {
    logo: '/logo-ar.png',
    links: [
      { id: 'home', name: 'الرئيسية', path: '/' },
      { id: 'kits', name: 'الطقم', path: '/kits' },
      { id: 'supplies', name: 'المستلزمات', path: '/supplies' },
      { 
        id: 'learn', 
        name: 'تعلم', 
        path: '/learn',
        children: [
          { id: 'tutorials', name: 'الدروس', path: '/learn/tutorials' },
          { id: 'guides', name: 'الدلائل', path: '/learn/guides' }
        ]
      },
      { id: 'about', name: 'من نحن', path: '/about' },
      { id: 'contact', name: 'اتصل بنا', path: '/contact' }
    ]
  }
};

// export const DEFAULT_LANGUAGE = 'en';
// export const SUPPORTED_LANGUAGES = Object.keys(SCHEMA_MENU);

// constants/heroSchema.js
export const SCHEMA_HERO = {
  en: {
    backgroundImage: '/hero-bg-en.jpg',
    title: 'Transform Your Kitchen Into A Fermentation Lab',
    subtitle: 'All-in-one kits for crafting probiotic-rich foods at home',
    buttons: {
      primary: {
        text: 'Explore Kits',
        path: '/kits',
        variant: 'primary'
      },
      secondary: {
        text: 'Learn More',
        path: '/learn',
        variant: 'secondary'
      }
    },
    features: [
      { icon: '🧪', text: 'Lab-Quality Tools' },
      { icon: 'fas fa-leaf', text: 'Probiotic Rich' },
      { icon: '🏠', text: 'Home-Friendly' },
      { icon: '📚', text: 'Expert Guides' }
    ]
  },
  fr: {
    backgroundImage: '/hero-bg-fr.jpg',
    title: 'Transformez Votre Cuisine en Laboratoire de Fermentation',
    subtitle: 'Kits tout-en-un pour créer des aliments riches en probiotiques à la maison',
    buttons: {
      primary: {
        text: 'Explorer les Kits',
        path: '/kits',
        variant: 'primary'
      },
      secondary: {
        text: 'En Savoir Plus',
        path: '/apprendre',
        variant: 'secondary'
      }
    },
    features: [
      { icon: '🧪', text: 'Outils de Qualité Laboratoire' },
      { icon: 'fas fa-leaf', text: 'Riche en Probiotiques' },
      { icon: '🏠', text: 'Adapté à la Maison' },
      { icon: '📚', text: 'Guides Experts' }
    ]
  },
  ar: {
    backgroundImage: '/hero-bg-ar.jpg',
    title: 'حول مطبخك إلى مختبر تخمير',
    subtitle: 'مجموعات شاملة لصنع أطعمة غنية بالبروبيوتيك في المنزل',
    buttons: {
      primary: {
        text: 'استكشاف المجموعات',
        path: '/kits',
        variant: 'primary'
      },
      secondary: {
        text: 'تعلم المزيد',
        path: '/learn',
        variant: 'secondary'
      }
    },
    features: [
      { icon: '🧪', text: 'أدوات بجودة المختبر' },
      { icon: 'fas fa-leaf', text: 'غني بالبروبيوتيك' },
      { icon: '🏠', text: 'مناسب للمنزل' },
      { icon: '📚', text: 'دلائل الخبراء' }
    ]
  },
  es: {
    backgroundImage: '/hero-bg-es.jpg',
    title: 'Transforma Tu Cocina en un Laboratorio de Fermentación',
    subtitle: 'Kits todo-en-uno para crear alimentos ricos en probióticos en casa',
    buttons: {
      primary: {
        text: 'Explorar Kits',
        path: '/kits',
        variant: 'primary'
      },
      secondary: {
        text: 'Aprender Más',
        path: '/aprender',
        variant: 'secondary'
      }
    },
    features: [
      { icon: '🧪', text: 'Herramientas de Calidad de Laboratorio' },
      { icon: 'fas fa-leaf', text: 'Rico en Probióticos' },
      { icon: '🏠', text: 'Adecuado para el Hogar' },
      { icon: '📚', text: 'Guías de Expertos' }
    ]
  },
  de: {
    backgroundImage: '/hero-bg-de.jpg',
    title: 'Verwandeln Sie Ihre Küche in Ein Fermentationslabor',
    subtitle: 'All-in-One-Kits für die Herstellung probiotikareicher Lebensmittel zu Hause',
    buttons: {
      primary: {
        text: 'Kits Erkunden',
        path: '/kits',
        variant: 'primary'
      },
      secondary: {
        text: 'Mehr Erfahren',
        path:'/lernen',
        variant: 'secondary'
      }
    },
    features: [
      { icon: '🧪', text: 'Laborqualität Werkzeuge' },
      { icon: 'fas fa-leaf', text: 'Probiotikareich' },
      { icon: '🏠', text: 'Heimfreundlich' },
      { icon: '📚', text: 'Expertenanleitungen' }
    ]
  }
};

// constants/featuredSchema.js
export const SCHEMA_FEATURED = { 
  en: {
    title: 'Our Featured Fermentation Kits',
    subtitle: 'Everything you need to start your fermentation journey with confidence',
    ctaButton: {
      text: 'View All Kits',
      path: '/kits',
      variant: 'primary'
    }
  },
  fr: {
    title: 'Nos Kits de Fermentation en Vedette',
    subtitle: 'Tout ce dont vous avez besoin pour commencer votre voyage de fermentation en toute confiance',
    ctaButton: {
      text: 'Voir Tous les Kits',
      path: '/kits',
      variant: 'primary'
    }
  },
  ar: {
    title: 'مجموعات التخمير المميزة لدينا',
    subtitle: 'كل ما تحتاجه لبدء رحلة التخمير بثقة',
    ctaButton: {
      text: 'عرض جميع المجموعات',
      path: '/kits',
      variant: 'primary'
    }
  },
  es: {
    title: 'Nuestros Kits de Fermentación Destacados',
    subtitle: 'Todo lo que necesitas para comenzar tu viaje de fermentación con confianza',
    ctaButton: {
      text: 'Ver Todos los Kits',
      path: '/kits',
      variant: 'primary'
    }
  }
 
};


// constants/benefitsSchema.js
export const SCHEMA_BENEFITS = {
  en: {
    title: 'Why Choose CultureCraft?',
    subtitle: 'Experience the joy and health benefits of home fermentation',
    benefits: [
      {
        id: 'gut-health',
        icon: 'fas fa-heart',
        title: 'Gut Health Improvement',
        description: 'Naturally rich in probiotics that support digestion, immunity, and overall wellness.'
      },
      {
        id: 'sustainability',
        icon: 'fas fa-leaf',
        title: 'Sustainable Food Practices',
        description: 'Reduce food waste and packaging while creating nutrient-dense foods from simple ingredients.'
      },
      {
        id: 'creativity',
        icon: 'fas fa-lightbulb',
        title: 'Creative Culinary Experience',
        description: 'Experiment with flavors and techniques to develop your unique fermentation style.'
      },
      {
        id: 'cost-savings',
        icon: 'fas fa-dollar-sign',
        title: 'Cost Savings vs Store-bought',
        description: 'Make premium probiotic foods for pennies per serving compared to retail prices.'
      }
    ]
  },
  fr: {
    title: 'Pourquoi Choisir CultureCraft?',
    subtitle: 'Vivez la joie et les bienfaits santé de la fermentation maison',
    benefits: [
      {
        id: 'gut-health',
        icon: 'fas fa-heart',
        title: 'Amélioration de la Santé Intestinale',
        description: 'Naturellement riche en probiotiques qui soutiennent la digestion, l\'immunité et le bien-être général.'
      },
      {
        id: 'sustainability',
        icon: 'fas fa-leaf',
        title: 'Pratiques Alimentaires Durables',
        description: 'Réduisez le gaspillage alimentaire et les emballages tout en créant des aliments riches en nutriments à partir d\'ingrédients simples.'
      },
      {
        id: 'creativity',
        icon: 'fas fa-lightbulb',
        title: 'Expérience Culinaire Créative',
        description: 'Expérimentez avec les saveurs et les techniques pour développer votre style de fermentation unique.'
      },
      {
        id: 'cost-savings',
        icon: 'fas fa-dollar-sign',
        title: 'Économies vs Acheté en Magasin',
        description: 'Produisez des aliments probiotiques premium pour quelques centimes par portion comparé aux prix de détail.'
      }
    ]
  },
  ar: {
    title: 'لماذا تختار كالتشر كرافت؟',
    subtitle: 'جرب متعة وفوائد التخمير المنزلي الصحية',
    benefits: [
      {
        id: 'gut-health',
        icon: 'fas fa-heart',
        title: 'تحسين صحة الأمعاء',
        description: 'غني طبيعياً بالبروبيوتيك الذي يدعم الهضم والمناعة والصحة العامة.'
      },
      {
        id: 'sustainability',
        icon: 'fas fa-leaf',
        title: 'ممارسات غذائية مستدامة',
        description: 'قلل هدر الطعام والتغليف أثناء إنشاء أطعمة غنية بالعناصر الغذائية من مكونات بسيطة.'
      },
      {
        id: 'creativity',
        icon: 'fas fa-lightbulb',
        title: 'تجربة طهي إبداعية',
        description: 'جرب النكهات والتقنيات لتطوير أسلوب التخمير الفريد الخاص بك.'
      },
      {
        id: 'cost-savings',
        icon: 'fas fa-dollar-sign',
        title: 'توفير التكاليف مقابل الشراء من المتجر',
        description: 'اصنع أطعمة بروبيوتيك عالية الجودة ببنسات لكل حصة مقارنة بأسعار التجزئة.'
      }
    ]
  },
  es: {
    title: '¿Por Qué Elegir CultureCraft?',
    subtitle: 'Experimenta la alegría y los beneficios para la salud de la fermentación casera',
    benefits: [
      {
        id: 'gut-health',
        icon: 'fas fa-heart',
        title: 'Mejora de la Salud Intestinal',
        description: 'Naturalmente rico en probióticos que apoyan la digestión, la inmunidad y el bienestar general.'
      },
      {
        id: 'sustainability',
        icon: 'fas fa-leaf',
        title: 'Prácticas Alimentarias Sostenibles',
        description: 'Reduce el desperdicio de alimentos y el empaque mientras creas alimentos ricos en nutrientes a partir de ingredientes simples.'
      },
      {
        id: 'creativity',
        icon: 'fas fa-lightbulb',
        title: 'Experiencia Culinaria Creativa',
        description: 'Experimenta con sabores y técnicas para desarrollar tu estilo de fermentación único.'
      },
      {
        id: 'cost-savings',
        icon: 'fas fa-dollar-sign',
        title: 'Ahorro de Costos vs Comprado en Tienda',
        description: 'Haz alimentos probióticos premium por centavos por porción en comparación con los precios minoristas.'
      }
    ]
  }
  
};
// constants/howItWorksSchema.js
export const SCHEMA_HOW_IT_WORKS = {
  en: {
    title: 'How It Works',
    subtitle: 'Start fermenting in just a few simple steps',
    steps: [
      {
        id: 'choose-kit',
        number: '1',
        icon: 'fas fa-box-open',
        title: 'Choose Your Kit',
        description: 'Select from our beginner-friendly kits designed for your fermentation goals.'
      },
      {
        id: 'prepare-ingredients',
        number: '2',
        icon: 'fas fa-blender',
        title: 'Prepare Ingredients',
        description: 'Follow our simple recipes using fresh, organic ingredients included in your kit.'
      },
      {
        id: 'let-nature-work',
        number: '3',
        icon: 'fas fa-hourglass-half',
        title: 'Let Nature Work',
        description: 'Store at room temperature and watch beneficial bacteria transform your food.'
      },
      {
        id: 'enjoy-share',
        number: '4',
        icon: 'fas fa-utensils',
        title: 'Enjoy & Share',
        description: 'Taste, refine, and share your homemade probiotic creations with friends and family.'
      }
    ]
  },
  fr: {
    title: 'Comment Ça Marche',
    subtitle: 'Commencez à fermenter en quelques étapes simples',
    steps: [
      {
        id: 'choose-kit',
        number: '1',
        icon: 'fas fa-box-open',
        title: 'Choisissez Votre Kit',
        description: 'Sélectionnez parmi nos kits adaptés aux débutants, conçus pour vos objectifs de fermentation.'
      },
      {
        id: 'prepare-ingredients',
        number: '2',
        icon: 'fas fa-blender',
        title: 'Préparez les Ingrédients',
        description: 'Suivez nos recettes simples en utilisant les ingrédients frais et biologiques inclus dans votre kit.'
      },
      {
        id: 'let-nature-work',
        number: '3',
        icon: 'fas fa-hourglass-half',
        title: 'Laissez la Nature Agir',
        description: 'Stockez à température ambiante et observez les bactéries bénéfiques transformer vos aliments.'
      },
      {
        id: 'enjoy-share',
        number: '4',
        icon: 'fas fa-utensils',
        title: 'Dégustez & Partagez',
        description: 'Goûtez, affinez et partagez vos créations probiotiques maison avec vos amis et votre famille.'
      }
    ]
  },
  ar: {
    title: 'كيف تعمل',
    subtitle: 'ابدأ التخمير في بضع خطوات بسيطة',
    steps: [
      {
        id: 'choose-kit',
        number: '1',
        icon: 'fas fa-box-open',
        title: 'اختر مجموعتك',
        description: 'اختر من بين مجموعاتنا الصديقة للمبتدئين المصممة لأهداف التخمير الخاصة بك.'
      },
      {
        id: 'prepare-ingredients',
        number: '2',
        icon: 'fas fa-blender',
        title: 'جهز المكونات',
        description: 'اتبع وصفاتنا البسيطة باستخدام المكونات الطازجة والعضوية المضمنة في مجموعتك.'
      },
      {
        id: 'let-nature-work',
        number: '3',
        icon: 'fas fa-hourglass-half',
        title: 'دع الطبيعة تعمل',
        description: 'قم بالتخزين في درجة حرارة الغرفة وشاهد البكتيريا المفيدة تحول طعامك.'
      },
      {
        id: 'enjoy-share',
        number: '4',
        icon: 'fas fa-utensils',
        title: 'استمتع وشارك',
        description: 'تذوق، حسن، وشارك إبداعاتك البروبيوتيك محلية الصنع مع الأصدقاء والعائلة.'
      }
    ]
  },
  es: {
    title: 'Cómo Funciona',
    subtitle: 'Comienza a fermentar en solo unos simples pasos',
    steps: [
      {
        id: 'choose-kit',
        number: '1',
        icon: 'fas fa-box-open',
        title: 'Elige Tu Kit',
        description: 'Selecciona entre nuestros kits para principiantes diseñados para tus objetivos de fermentación.'
      },
      {
        id: 'prepare-ingredients',
        number: '2',
        icon: 'fas fa-blender',
        title: 'Prepara los Ingredientes',
        description: 'Sigue nuestras recetas simples usando ingredientes frescos y orgánicos incluidos en tu kit.'
      },
      {
        id: 'let-nature-work',
        number: '3',
        icon: 'fas fa-hourglass-half',
        title: 'Deja que la Naturaleza Actúe',
        description: 'Almacena a temperatura ambiente y observa cómo las bacterias beneficiosas transforman tu comida.'
      },
      {
        id: 'enjoy-share',
        number: '4',
        icon: 'fas fa-utensils',
        title: 'Disfruta y Comparte',
        description: 'Prueba, refina y comparte tus creaciones probióticas caseras con amigos y familiares.'
      }
    ]
  },
  de: {
    title: 'Wie Es Funktioniert',
    subtitle: 'Starten Sie die Fermentation in nur wenigen einfachen Schritten',
    steps: [
      {
        id: 'choose-kit',
        number: '1',
        icon: 'fas fa-box-open',
        title: 'Wählen Sie Ihr Kit',
        description: 'Wählen Sie aus unseren einsteigerfreundlichen Kits, die für Ihre Fermentationsziele entwickelt wurden.'
      },
      {
        id: 'prepare-ingredients',
        number: '2',
        icon: 'fas fa-blender',
        title: 'Bereiten Sie Zutaten Vor',
        description: 'Befolgen Sie unsere einfachen Rezepte mit frischen, biologischen Zutaten, die in Ihrem Kit enthalten sind.'
      },
      {
        id: 'let-nature-work',
        number: '3',
        icon: 'fas fa-hourglass-half',
        title: 'Lassen Sie die Natur Arbeiten',
        description: 'Lagern Sie bei Raumtemperatur und beobachten Sie, wie nützliche Bakterien Ihr Essen verwandeln.'
      },
      {
        id: 'enjoy-share',
        number: '4',
        icon: 'fas fa-utensils',
        title: 'Genießen & Teilen',
        description: 'Kosten Sie, verfeinern und teilen Sie Ihre hausgemachten Probiotika-Kreationen mit Freunden und Familie.'
      }
    ]
  }
};



// constants/reviewsSchema.js
export const SCHEMA_REVIEWS = {
  en: {
    title: 'What Our Customers Say',
    subtitle: 'Join thousands of happy fermenters crafting healthier foods at home',
    reviews: [
      {
        id: 'sarah-kombucha',
        rating: 5,
        quote: 'The kombucha kit was incredibly easy to use! My first batch turned out perfectly fizzy and delicious. I\'ve already ordered the vegetable set.',
        author: 'Sarah M.',
        role: 'Home Fermentation Enthusiast',
        product: 'Kombucha Brewing Kit',
        avatar: '/avatars/sarah-m.jpg'
      },
      {
        id: 'james-sourdough',
        rating: 5,
        quote: 'Finally mastered sourdough thanks to this kit! The active starter and detailed guide made all the difference. My family loves the bread.',
        author: 'James T.',
        role: 'Amateur Baker',
        product: 'Sourdough Starter Kit',
        avatar: '/avatars/james-t.jpg'
      },
      {
        id: 'emily-health',
        rating: 5,
        quote: 'Best investment in my health! Making my own fermented foods has improved my digestion and saved me hundreds on store-bought versions.',
        author: 'Emily R.',
        role: 'Health-Conscious Mom',
        product: 'Fermentation Bundle',
        avatar: '/avatars/emily-r.jpg'
      }
    ]
  },
  fr: {
    title: 'Ce Que Disent Nos Clients',
    subtitle: 'Rejoignez des milliers de fermenteurs heureux créant des aliments plus sains à la maison',
    reviews: [
      {
        id: 'sarah-kombucha',
        rating: 5,
        quote: 'Le kit kombucha était incroyablement facile à utiliser ! Mon premier lot s\'est avéré parfaitement pétillant et délicieux. J\'ai déjà commandé le set de légumes.',
        author: 'Sarah M.',
        role: 'Passionnée de Fermentation Maison',
        product: 'Kit de Brassage de Kombucha',
        avatar: '/avatars/sarah-m.jpg'
      },
      {
        id: 'james-sourdough',
        rating: 5,
        quote: 'Enfin maîtrisé le levain grâce à ce kit ! Le levain actif et le guide détaillé ont fait toute la différence. Ma famille adore le pain.',
        author: 'James T.',
        role: 'Boulanger Amateur',
        product: 'Kit de Démarrage au Levain',
        avatar: '/avatars/james-t.jpg'
      },
      {
        id: 'emily-health',
        rating: 5,
        quote: 'Le meilleur investissement pour ma santé ! Préparer mes propres aliments fermentés a amélioré ma digestion et m\'a fait économiser des centaines sur les versions achetées en magasin.',
        author: 'Emily R.',
        role: 'Maman Soucieuse de sa Santé',
        product: 'Pack de Fermentation',
        avatar: '/avatars/emily-r.jpg'
      }
    ]
  },
  ar: {
    title: 'ما يقوله عملاؤنا',
    subtitle: 'انضم إلى آلاف المخمرين السعداء الذين يصنعون أطعمة أكثر صحة في المنزل',
    reviews: [
      {
        id: 'sarah-kombucha',
        rating: 5,
        quote: 'كانت مجموعة الكمبوتشا سهلة الاستخدام بشكل لا يصدق! كانت الدفعة الأولى فوارة ولذيذة تمامًا. لقد طلبت بالفعل مجموعة الخضروات.',
        author: 'سارة م.',
        role: 'مهتمة بالتخمير المنزلي',
        product: 'مجموعة تخمير الكمبوتشا',
        avatar: '/avatars/sarah-m.jpg'
      },
      {
        id: 'james-sourdough',
        rating: 5,
        quote: 'أخيرًا أتقنت خبز العجينة المخمرة بفضل هذه المجموعة! الخميرة النشطة والدليل التفصيلي أحدثا كل الفرق. عائلتي تحب الخبز.',
        author: 'جيمس ت.',
        role: 'خباز هاوي',
        product: 'مجموعة بدء العجينة المخمرة',
        avatar: '/avatars/james-t.jpg'
      },
      {
        id: 'emily-health',
        rating: 5,
        quote: 'أفضل استثمار في صحتي! صنع أطعمي المخمرة الخاصة بي قد حسّن هضمي ووفر لي المئات مقارنة بالنسخ المشتراة من المتجر.',
        author: 'إيميلي ر.',
        role: 'أم مهتمة بالصحة',
        product: 'مجموعة التخمير',
        avatar: '/avatars/emily-r.jpg'
      }
    ]
  },
  es: {
    title: 'Lo Que Dicen Nuestros Clientes',
    subtitle: 'Únete a miles de fermentadores felices creando alimentos más saludables en casa',
    reviews: [
      {
        id: 'sarah-kombucha',
        rating: 5,
        quote: '¡El kit de kombucha fue increíblemente fácil de usar! Mi primer lote resultó perfectamente efervescente y delicioso. Ya he pedido el set de verduras.',
        author: 'Sarah M.',
        role: 'Entusiasta de la Fermentación Casera',
        product: 'Kit de Elaboración de Kombucha',
        avatar: '/avatars/sarah-m.jpg'
      },
      {
        id: 'james-sourdough',
        rating: 5,
        quote: '¡Finalmente dominé la masa madre gracias a este kit! La levadura activa y la guía detallada marcaron la diferencia. A mi familia le encanta el pan.',
        author: 'James T.',
        role: 'Panadero Aficionado',
        product: 'Kit de Inicio de Masa Madre',
        avatar: '/avatars/james-t.jpg'
      },
      {
        id: 'emily-health',
        rating: 5,
        quote: '¡La mejor inversión en mi salud! Hacer mis propios alimentos fermentados ha mejorado mi digestión y me ha ahorrado cientos en versiones compradas en tiendas.',
        author: 'Emily R.',
        role: 'Madre Consciente de la Salud',
        product: 'Paquete de Fermentación',
        avatar: '/avatars/emily-r.jpg'
      }
    ]
  }
 
};

// constants/resourcesSchema.js
export const SCHEMA_RESOURCES = {
  en: {
    title: 'Fermentation Resources',
    subtitle: 'Learn tips, techniques, and recipes from our fermentation experts',
    articles: [
      {
        id: 'flavored-kombucha',
        date: 'Oct 28, 2025',
        readTime: '5 min read',
        title: 'Second Fermentation: Creating Flavored Kombucha',
        description: 'Take your homemade kombucha to the next level with fruit, herbs, and creative flavor combinations.',
        category: 'Kombucha',
        image: '/resources/kombucha-flavors.jpg',
        path: '/blog/second-fermentation-kombucha',
        featured: true,
        readmore:"Read more"
      },
      {
        id: 'sourdough-troubleshooting',
        date: 'Oct 15, 2025',
        readTime: '7 min read',
        title: 'Troubleshooting Common Sourdough Problems',
        description: 'Learn how to identify and fix dense loaves, weak starters, and other common baking challenges.',
        category: 'Sourdough',
        image: '/resources/sourdough-troubleshooting.jpg',
        path: '/blog/sourdough-troubleshooting',
        featured: false,
        readmore:"Read more"

      },
      {
        id: 'vegetable-fermentation-science',
        date: 'Oct 8, 2025',
        readTime: '4 min read',
        title: 'The Science Behind Vegetable Fermentation',
        description: 'Understanding lactic acid bacteria and how they transform vegetables into probiotic superfoods.',
        category: 'Science',
        image: '/resources/vegetable-science.jpg',
        path: '/blog/vegetable-fermentation-science',
        featured: false,
                readmore:"Read more"

      },
      {
        id: 'kimchi-recipes',
        date: 'Sep 30, 2025',
        readTime: '6 min read',
        title: 'Traditional vs Modern Kimchi Recipes',
        description: 'Explore the evolution of kimchi making from traditional methods to contemporary adaptations.',
        category: 'Recipes',
        image: '/resources/kimchi-recipes.jpg',
        path: '/blog/kimchi-recipes',
        featured: false,
                readmore:"Read more"

      }
    ],
    ctaButton: {
      text: 'View All Resources',
      path: '/resources',
      variant: 'primary'
    }
  },
  fr: {
    title: 'Ressources sur la Fermentation',
    subtitle: 'Apprenez des astuces, techniques et recettes de nos experts en fermentation',
    articles: [
      {
        id: 'flavored-kombucha',
        date: '28 Oct 2025',
        readTime: '5 min de lecture',
        title: 'Deuxième Fermentation : Créer du Kombucha Aromatisé',
        description: 'Amenez votre kombucha maison au niveau supérieur avec des fruits, des herbes et des associations de saveurs créatives.',
        category: 'Kombucha',
        image: '/resources/kombucha-flavors.jpg',
        path: '/blog/deuxieme-fermentation-kombucha',
        featured: true,
        readmore:"Lire la suite"
      },
      {
        id: 'sourdough-troubleshooting',
        date: '15 Oct 2025',
        readTime: '7 min de lecture',
        title: 'Résolution des Problèmes Courants du Levain',
        description: 'Apprenez à identifier et à résoudre les pains denses, les levains faibles et autres défis de panification courants.',
        category: 'Pain au Levain',
        image: '/resources/sourdough-troubleshooting.jpg',
        path: '/blog/resolution-problemes-levain',
        featured: false,
        readmore:"Lire la suite"
      },
      {
        id: 'vegetable-fermentation-science',
        date: '8 Oct 2025',
        readTime: '4 min de lecture',
        title: 'La Science derrière la Fermentation des Légumes',
        description: 'Comprendre les bactéries lactiques et comment elles transforment les légumes en superaliments probiotiques.',
        category: 'Science',
        image: '/resources/vegetable-science.jpg',
        path: '/blog/science-fermentation-legumes',
        featured: false,
        readmore:"Lire la suite"
      },
      {
        id: 'kimchi-recipes',
        date: '30 Sep 2025',
        readTime: '6 min de lecture',
        title: 'Recettes de Kimchi Traditionnelles vs Modernes',
        description: 'Explorez l\'évolution de la fabrication du kimchi des méthodes traditionnelles aux adaptations contemporaines.',
        category: 'Recettes',
        image: '/resources/kimchi-recipes.jpg',
        path: '/blog/recettes-kimchi',
        featured: false,
        readmore:"Lire la suite"
      }
    ],
    ctaButton: {
      text: 'Voir Toutes les Ressources',
      path: '/ressources',
      variant: 'primary'
    }
  },
  ar: {
    title: 'موارد التخمير',
    subtitle: 'تعلم النصائح والتقنيات والوصفات من خبراء التخمير لدينا',
    articles: [
      {
        id: 'flavored-kombucha',
        date: '28 أكتوبر 2025',
        readTime: '5 دقائق قراءة',
        title: 'التخمير الثاني: صنع الكمبوتشا المنكه',
        description: 'ارتقِ بمشروب الكمبوتشا المنزلي إلى المستوى التالي باستخدام الفواكه والأعشاب وتركيبات النكهات الإبداعية.',
        category: 'الكمبوتشا',
        image: '/resources/kombucha-flavors.jpg',
        path: '/blog/التخمير-الثاني-كمبوتشا',
        featured: true,
        readmore:"اقرأ المزيد"
      },
      {
        id: 'sourdough-troubleshooting',
        date: '15 أكتوبر 2025',
        readTime: '7 دقائق قراءة',
        title: 'استكشاف مشاكل العجينة المخمرة الشائعة',
        description: 'تعلم كيفية تحديد وإصلاح الأرغفة الكثيفة والخمائر الضعيفة وتحديات الخبز الشائعة الأخرى.',
        category: 'العجينة المخمرة',
        image: '/resources/sourdough-troubleshooting.jpg',
        path: '/blog/استكشاف-مشاكل-العجينة-المخمرة',
        featured: false,
        readmore:"اقرأ المزيد"
      },
      {
        id: 'vegetable-fermentation-science',
        date: '8 أكتوبر 2025',
        readTime: '4 دقائق قراءة',
        title: 'العلم وراء تخمير الخضروات',
        description: 'فهم بكتيريا حمض اللاكتيك وكيف تحول الخضروات إلى أطعمة فائقة البروبيوتيك.',
        category: 'العلم',
        image: '/resources/vegetable-science.jpg',
        path: '/blog/علم-تخمير-الخضروات',
        featured: false,
        readmore:"اقرأ المزيد"
      },
      {
        id: 'kimchi-recipes',
        date: '30 سبتمبر 2025',
        readTime: '6 دقائق قراءة',
        title: 'وصفات الكيمتشي التقليدية مقابل الحديثة',
        description: 'استكشف تطور صنع الكيمتشي من الطرق التقليدية إلى التكيفات المعاصرة.',
        category: 'الوصفات',
        image: '/resources/kimchi-recipes.jpg',
        path: '/blog/وصفات-الكيمتشي',
        featured: false,
        readmore:"اقرأ المزيد"
      }
    ],
    ctaButton: {
      text: 'عرض جميع الموارد',
      path: '/الموارد',
      variant: 'primary'
    }
  },
  es: {
    title: 'Recursos de Fermentación',
    subtitle: 'Aprende consejos, técnicas y recetas de nuestros expertos en fermentación',
    articles: [
      {
        id: 'flavored-kombucha',
        date: '28 Oct 2025',
        readTime: '5 min de lectura',
        title: 'Segunda Fermentación: Creando Kombucha con Sabor',
        description: 'Lleva tu kombucha casero al siguiente nivel con frutas, hierbas y combinaciones de sabores creativas.',
        category: 'Kombucha',
        image: '/resources/kombucha-flavors.jpg',
        path: '/blog/segunda-fermentacion-kombucha',
        featured: true,
        readmore:"Leer más"
      },
      {
        id: 'sourdough-troubleshooting',
        date: '15 Oct 2025',
        readTime: '7 min de lectura',
        title: 'Solución de Problemas Comunes de Masa Madre',
        description: 'Aprende a identificar y solucionar hogazas densas, levaduras débiles y otros desafíos comunes de horneado.',
        category: 'Masa Madre',
        image: '/resources/sourdough-troubleshooting.jpg',
        path: '/blog/solucion-problemas-masa-madre',
        featured: false,
        readmore:"Leer más"
      },
      {
        id: 'vegetable-fermentation-science',
        date: '8 Oct 2025',
        readTime: '4 min de lectura',
        title: 'La Ciencia Detrás de la Fermentación de Vegetales',
        description: 'Comprendiendo las bacterias del ácido láctico y cómo transforman los vegetales en superalimentos probióticos.',
        category: 'Ciencia',
        image: '/resources/vegetable-science.jpg',
        path: '/blog/ciencia-fermentacion-vegetales',
        featured: false,
        readmore:"Leer más"
      },
      {
        id: 'kimchi-recipes',
        date: '30 Sep 2025',
        readTime: '6 min de lectura',
        title: 'Recetas de Kimchi Tradicionales vs Modernas',
        description: 'Explora la evolución de la elaboración de kimchi desde métodos tradicionales hasta adaptaciones contemporáneas.',
        category: 'Recetas',
        image: '/resources/kimchi-recipes.jpg',
        path: '/blog/recetas-kimchi',
        featured: false,
        readmore:"Leer más"
      }
    ],
    ctaButton: {
      text: 'Ver Todos los Recursos',
      path: '/recursos',
      variant: 'primary'
    }
  },
  de: {
    title: 'Fermentationsressourcen',
    subtitle: 'Lernen Sie Tipps, Techniken und Rezepte von unseren Fermentationsexperten',
    articles: [
      {
        id: 'flavored-kombucha',
        date: '28. Okt. 2025',
        readTime: '5 Min. Lesezeit',
        title: 'Zweite Fermentation: Aromatisiertes Kombucha Herstellen',
        description: 'Bringen Sie Ihr hausgemachtes Kombucha mit Früchten, Kräutern und kreativen Geschmackskombinationen auf die nächste Stufe.',
        category: 'Kombucha',
        image: '/resources/kombucha-flavors.jpg',
        path: '/blog/zweite-fermentation-kombucha',
        featured: true
      },
      {
        id: 'sourdough-troubleshooting',
        date: '15. Okt. 2025',
        readTime: '7 Min. Lesezeit',
        title: 'Fehlerbehebung bei Häufigen Sauerteigproblemen',
        description: 'Lernen Sie, wie man dichte Brote, schwache Sauerteige und andere häufige Backherausforderungen erkennt und behebt.',
        category: 'Sauerteig',
        image: '/resources/sourdough-troubleshooting.jpg',
        path: '/blog/fehlerbehebung-sauerteig',
        featured: false
      },
      {
        id: 'vegetable-fermentation-science',
        date: '8. Okt. 2025',
        readTime: '4 Min. Lesezeit',
        title: 'Die Wissenschaft Hinter der Gemüsefermentation',
        description: 'Verstehen Sie Milchsäurebakterien und wie sie Gemüse in probiotische Superfoods verwandeln.',
        category: 'Wissenschaft',
        image: '/resources/vegetable-science.jpg',
        path: '/blog/wissenschaft-gemuesefementation',
        featured: false
      },
      {
        id: 'kimchi-recipes',
        date: '30. Sep. 2025',
        readTime: '6 Min. Lesezeit',
        title: 'Traditionelle vs Moderne Kimchi-Rezepte',
        description: 'Erkunden Sie die Entwicklung der Kimchi-Herstellung von traditionellen Methoden zu zeitgenössischen Anpassungen.',
        category: 'Rezepte',
        image: '/resources/kimchi-recipes.jpg',
        path: '/blog/kimchi-rezepte',
        featured: false
      }
    ],
    ctaButton: {
      text: 'Alle Ressourcen Anzeigen',
      path: '/ressourcen',
      variant: 'primary'
    }
  }
};

// constants/footerSchema.js
export const SCHEMA_FOOTER = {
  en: {
    company: {
      heading: "CultureCraft",
      bio: "Your trusted source for premium fermentation kits and supplies. Transform ordinary ingredients into extraordinary probiotic foods."
    },
    links: {
      shop: {
        heading: "Shop",
        items: [
          { id: "all-kits", text: "All Kits", path: "/kits" },
          { id: "kombucha", text: "Kombucha", path: "/kits/kombucha" },
          { id: "vegetables", text: "Vegetables", path: "/kits/vegetables" },
          { id: "sourdough", text: "Sourdough", path: "/kits/sourdough" },
          { id: "supplies", text: "Supplies", path: "/supplies" },
          { id: "gift-cards", text: "Gift Cards", path: "/gift-cards" }
        ]
      },
      learn: {
        heading: "Learn",
        items: [
          { id: "blog", text: "Blog", path: "/blog" },
          { id: "recipes", text: "Recipes", path: "/recipes" },
          { id: "beginner-guides", text: "Beginner Guides", path: "/guides/beginner" },
          { id: "troubleshooting", text: "Troubleshooting", path: "/troubleshooting" },
          { id: "video-tutorials", text: "Video Tutorials", path: "/videos" },
          { id: "faq", text: "FAQ", path: "/faq" }
        ]
      },
      company: {
        heading: "Company",
        items: [
          { id: "about-us", text: "About Us", path: "/about" },
          { id: "our-story", text: "Our Story", path: "/about/story" },
          { id: "sustainability", text: "Sustainability", path: "/sustainability" },
          { id: "wholesale", text: "Wholesale", path: "/wholesale" },
          { id: "careers", text: "Careers", path: "/careers" },
          { id: "contact", text: "Contact", path: "/contact" }
        ]
      }
    },
    social: {
      heading: "Follow Us",
      platforms: [
        { id: "instagram", name: "Instagram", icon: "fab fa-instagram", path: "https://instagram.com/culturecraft" },
        { id: "facebook", name: "Facebook", icon: "fab fa-facebook-f", path: "https://facebook.com/culturecraft" },
        { id: "youtube", name: "YouTube", icon: "fab fa-youtube", path: "https://youtube.com/culturecraft" },
        { id: "pinterest", name: "Pinterest", icon: "fab fa-pinterest", path: "https://pinterest.com/culturecraft" }
      ]
    },
    legal: {
      copyright: "© 2025 CultureCraft. All rights reserved.",
      links: [
        { id: "privacy", text: "Privacy Policy", path: "/privacy" },
        { id: "terms", text: "Terms of Service", path: "/terms" },
        { id: "shipping", text: "Shipping Policy", path: "/shipping" },
        { id: "refunds", text: "Refund Policy", path: "/refunds" }
      ]
    }
  },
  fr: {
    company: {
      heading: "CultureCraft",
      bio: "Votre source de confiance pour des kits et fournitures de fermentation premium. Transformez des ingrédients ordinaires en aliments probiotiques extraordinaires."
    },
    links: {
      shop: {
        heading: "Boutique",
        items: [
          { id: "all-kits", text: "Tous les Kits", path: "/kits" },
          { id: "kombucha", text: "Kombucha", path: "/kits/kombucha" },
          { id: "vegetables", text: "Légumes", path: "/kits/legumes" },
          { id: "sourdough", text: "Pain au Levain", path: "/kits/levain" },
          { id: "supplies", text: "Fournitures", path: "/fournitures" },
          { id: "gift-cards", text: "Cartes Cadeaux", path: "/cartes-cadeaux" }
        ]
      },
      learn: {
        heading: "Apprendre",
        items: [
          { id: "blog", text: "Blog", path: "/blog" },
          { id: "recipes", text: "Recettes", path: "/recettes" },
          { id: "beginner-guides", text: "Guides Débutant", path: "/guides/debutant" },
          { id: "troubleshooting", text: "Dépannage", path: "/depannage" },
          { id: "video-tutorials", text: "Tutoriels Vidéo", path: "/videos" },
          { id: "faq", text: "FAQ", path: "/faq" }
        ]
      },
      company: {
        heading: "Entreprise",
        items: [
          { id: "about-us", text: "À Propos", path: "/a-propos" },
          { id: "our-story", text: "Notre Histoire", path: "/a-propos/histoire" },
          { id: "sustainability", text: "Durabilité", path: "/durabilite" },
          { id: "wholesale", text: "Vente en Gros", path: "/vente-en-gros" },
          { id: "careers", text: "Carrières", path: "/carrieres" },
          { id: "contact", text: "Contact", path: "/contact" }
        ]
      }
    },
    social: {
      heading: "Suivez-nous",
      platforms: [
        { id: "instagram", name: "Instagram", icon: "fab fa-instagram", path: "https://instagram.com/culturecraft" },
        { id: "facebook", name: "Facebook", icon: "fab fa-facebook-f", path: "https://facebook.com/culturecraft" },
        { id: "youtube", name: "YouTube", icon: "fab fa-youtube", path: "https://youtube.com/culturecraft" },
        { id: "pinterest", name: "Pinterest", icon: "fab fa-pinterest", path: "https://pinterest.com/culturecraft" }
      ]
    },
    legal: {
      copyright: "© 2025 CultureCraft. Tous droits réservés.",
      links: [
        { id: "privacy", text: "Politique de Confidentialité", path: "/confidentialite" },
        { id: "terms", text: "Conditions d'Utilisation", path: "/conditions" },
        { id: "shipping", text: "Politique d'Expédition", path: "/expedition" },
        { id: "refunds", text: "Politique de Remboursement", path: "/remboursement" }
      ]
    }
  },
  ar: {
    company: {
      heading: "كالتشر كرافت",
      bio: "مصدرك الموثوق لمجموعات ومستلزمات التخمير الفاخرة. حول المكونات العادية إلى أطعمة بروبيوتيك استثنائية."
    },
    links: {
      shop: {
        heading: "تسوق",
        items: [
          { id: "all-kits", text: "جميع المجموعات", path: "/kits" },
          { id: "kombucha", text: "الكمبوتشا", path: "/kits/kombucha" },
          { id: "vegetables", text: "الخضروات", path: "/kits/vegetables" },
          { id: "sourdough", text: "العجينة المخمرة", path: "/kits/sourdough" },
          { id: "supplies", text: "المستلزمات", path: "/supplies" },
          { id: "gift-cards", text: "بطاقات الهدايا", path: "/gift-cards" }
        ]
      },
      learn: {
        heading: "تعلم",
        items: [
          { id: "blog", text: "المدونة", path: "/blog" },
          { id: "recipes", text: "الوصفات", path: "/recipes" },
          { id: "beginner-guides", text: "دلائل المبتدئين", path: "/guides/beginner" },
          { id: "troubleshooting", text: "استكشاف الأخطاء", path: "/troubleshooting" },
          { id: "video-tutorials", text: "دروس الفيديو", path: "/videos" },
          { id: "faq", text: "الأسئلة الشائعة", path: "/faq" }
        ]
      },
      company: {
        heading: "الشركة",
        items: [
          { id: "about-us", text: "من نحن", path: "/about" },
          { id: "our-story", text: "قصتنا", path: "/about/story" },
          { id: "sustainability", text: "الاستدامة", path: "/sustainability" },
          { id: "wholesale", text: "البيع بالجملة", path: "/wholesale" },
          { id: "careers", text: "الوظائف", path: "/careers" },
          { id: "contact", text: "اتصل بنا", path: "/contact" }
        ]
      }
    },
    social: {
      heading: "تابعنا",
      platforms: [
        { id: "instagram", name: "إنستغرام", icon: "fab fa-instagram", path: "https://instagram.com/culturecraft" },
        { id: "facebook", name: "فيسبوك", icon: "fab fa-facebook-f", path: "https://facebook.com/culturecraft" },
        { id: "youtube", name: "يوتيوب", icon: "fab fa-youtube", path: "https://youtube.com/culturecraft" },
        { id: "pinterest", name: "بينتيريست", icon: "fab fa-pinterest", path: "https://pinterest.com/culturecraft" }
      ]
    },
    legal: {
      copyright: "© 2025 كالتشر كرافت. جميع الحقوق محفوظة.",
      links: [
        { id: "privacy", text: "سياسة الخصوصية", path: "/privacy" },
        { id: "terms", text: "شروط الخدمة", path: "/terms" },
        { id: "shipping", text: "سياسة الشحن", path: "/shipping" },
        { id: "refunds", text: "سياسة الاسترجاع", path: "/refunds" }
      ]
    }
  },
  es: {
    company: {
      heading: "CultureCraft",
      bio: "Tu fuente confiable de kits y suministros de fermentación premium. Transforma ingredientes ordinarios en alimentos probióticos extraordinarios."
    },
    links: {
      shop: {
        heading: "Tienda",
        items: [
          { id: "all-kits", text: "Todos los Kits", path: "/kits" },
          { id: "kombucha", text: "Kombucha", path: "/kits/kombucha" },
          { id: "vegetables", text: "Vegetales", path: "/kits/vegetales" },
          { id: "sourdough", text: "Masa Madre", path: "/kits/masa-madre" },
          { id: "supplies", text: "Suministros", path: "/suministros" },
          { id: "gift-cards", text: "Tarjetas de Regalo", path: "/tarjetas-regalo" }
        ]
      },
      learn: {
        heading: "Aprender",
        items: [
          { id: "blog", text: "Blog", path: "/blog" },
          { id: "recipes", text: "Recetas", path: "/recetas" },
          { id: "beginner-guides", text: "Guías para Principiantes", path: "/guias/principiantes" },
          { id: "troubleshooting", text: "Solución de Problemas", path: "/solucion-problemas" },
          { id: "video-tutorials", text: "Tutoriales en Video", path: "/videos" },
          { id: "faq", text: "Preguntas Frecuentes", path: "/preguntas-frecuentes" }
        ]
      },
      company: {
        heading: "Empresa",
        items: [
          { id: "about-us", text: "Sobre Nosotros", path: "/sobre-nosotros" },
          { id: "our-story", text: "Nuestra Historia", path: "/sobre-nosotros/historia" },
          { id: "sustainability", text: "Sostenibilidad", path: "/sostenibilidad" },
          { id: "wholesale", text: "Venta al por Mayor", path: "/venta-mayor" },
          { id: "careers", text: "Carreras", path: "/carreras" },
          { id: "contact", text: "Contacto", path: "/contacto" }
        ]
      }
    },
    social: {
      heading: "Síguenos",
      platforms: [
        { id: "instagram", name: "Instagram", icon: "fab fa-instagram", path: "https://instagram.com/culturecraft" },
        { id: "facebook", name: "Facebook", icon: "fab fa-facebook-f", path: "https://facebook.com/culturecraft" },
        { id: "youtube", name: "YouTube", icon: "fab fa-youtube", path: "https://youtube.com/culturecraft" },
        { id: "pinterest", name: "Pinterest", icon: "fab fa-pinterest", path: "https://pinterest.com/culturecraft" }
      ]
    },
    legal: {
      copyright: "© 2025 CultureCraft. Todos los derechos reservados.",
      links: [
        { id: "privacy", text: "Política de Privacidad", path: "/privacidad" },
        { id: "terms", text: "Términos de Servicio", path: "/terminos" },
        { id: "shipping", text: "Política de Envío", path: "/envio" },
        { id: "refunds", text: "Política de Reembolsos", path: "/reembolsos" }
      ]
    }
  },
  de: {
    company: {
      heading: "CultureCraft",
      bio: "Ihre vertrauenswürdige Quelle für Premium-Fermentationssets und Zubehör. Verwandeln Sie gewöhnliche Zutaten in außergewöhnliche probiotische Lebensmittel."
    },
    links: {
      shop: {
        heading: "Shop",
        items: [
          { id: "all-kits", text: "Alle Kits", path: "/kits" },
          { id: "kombucha", text: "Kombucha", path: "/kits/kombucha" },
          { id: "vegetables", text: "Gemüse", path: "/kits/gemuese" },
          { id: "sourdough", text: "Sauerteig", path: "/kits/sauerteig" },
          { id: "supplies", text: "Zubehör", path: "/zubehoer" },
          { id: "gift-cards", text: "Geschenkkarten", path: "/geschenkkarten" }
        ]
      },
      learn: {
        heading: "Lernen",
        items: [
          { id: "blog", text: "Blog", path: "/blog" },
          { id: "recipes", text: "Rezepte", path: "/rezepte" },
          { id: "beginner-guides", text: "Anfängerleitfäden", path: "/anleitungen/anfaenger" },
          { id: "troubleshooting", text: "Fehlerbehebung", path: "/fehlerbehebung" },
          { id: "video-tutorials", text: "Video-Tutorials", path: "/videos" },
          { id: "faq", text: "FAQ", path: "/faq" }
        ]
      },
      company: {
        heading: "Unternehmen",
        items: [
          { id: "about-us", text: "Über Uns", path: "/ueber-uns" },
          { id: "our-story", text: "Unsere Geschichte", path: "/ueber-uns/geschichte" },
          { id: "sustainability", text: "Nachhaltigkeit", path: "/nachhaltigkeit" },
          { id: "wholesale", text: "Großhandel", path: "/grosshandel" },
          { id: "careers", text: "Karriere", path: "/karriere" },
          { id: "contact", text: "Kontakt", path: "/kontakt" }
        ]
      }
    },
    social: {
      heading: "Folgen Sie Uns",
      platforms: [
        { id: "instagram", name: "Instagram", icon: "fab fa-instagram", path: "https://instagram.com/culturecraft" },
        { id: "facebook", name: "Facebook", icon: "fab fa-facebook-f", path: "https://facebook.com/culturecraft" },
        { id: "youtube", name: "YouTube", icon: "fab fa-youtube", path: "https://youtube.com/culturecraft" },
        { id: "pinterest", name: "Pinterest", icon: "fab fa-pinterest", path: "https://pinterest.com/culturecraft" }
      ]
    },
    legal: {
      copyright: "© 2025 CultureCraft. Alle Rechte vorbehalten.",
      links: [
        { id: "privacy", text: "Datenschutzrichtlinie", path: "/datenschutz" },
        { id: "terms", text: "Nutzungsbedingungen", path: "/nutzungsbedingungen" },
        { id: "shipping", text: "Versandrichtlinie", path: "/versand" },
        { id: "refunds", text: "Rückgaberecht", path: "/rueckgabe" }
      ]
    }
  }
};

// constants/trustBadgesSchema.js
export const SCHEMA_TRUST_BADGES = {
  en: {
    badges: [
      {
        id: 'secure-payments',
        icon: 'fas fa-shield-alt',
        title: 'Secure Payments',
        description: 'Encrypted & secure payment processing'
      },
      {
        id: 'free-shipping',
        icon: 'fas fa-truck',
        title: 'Free Shipping Over $75',
        description: 'Free shipping on all orders over $75'
      },
      {
        id: 'returns',
        icon: 'fas fa-undo',
        title: '30-Day Returns',
        description: 'Hassle-free 30-day return policy'
      },
      {
        id: 'satisfaction',
        icon: 'fas fa-award',
        title: 'Satisfaction Guarantee',
        description: '100% satisfaction guaranteed'
      }
    ]
  },
  fr: {
    badges: [
      {
        id: 'secure-payments',
        icon: 'fas fa-shield-alt',
        title: 'Paiements Sécurisés',
        description: 'Traitement de paiement crypté et sécurisé'
      },
      {
        id: 'free-shipping',
        icon: 'fas fa-truck',
        title: 'Livraison Gratuite +75$',
        description: 'Livraison gratuite sur toutes les commandes de plus de 75$'
      },
      {
        id: 'returns',
        icon: 'fas fa-undo',
        title: 'Retours 30 Jours',
        description: 'Politique de retour sans tracas de 30 jours'
      },
      {
        id: 'satisfaction',
        icon: 'fas fa-award',
        title: 'Garantie Satisfaction',
        description: 'Satisfaction garantie à 100%'
      }
    ]
  },
  ar: {
    badges: [
      {
        id: 'secure-payments',
        icon: 'fas fa-shield-alt',
        title: 'مدفوعات آمنة',
        description: 'معالجة مدفوعات مشفرة وآمنة'
      },
      {
        id: 'free-shipping',
        icon: 'fas fa-truck',
        title: 'شحن مجاني فوق 75$',
        description: 'شحن مجاني على جميع الطلبات فوق 75 دولارًا'
      },
      {
        id: 'returns',
        icon: 'fas fa-undo',
        title: 'إرجاع 30 يوم',
        description: 'سياسة إرجاع لمدة 30 يومًا خالية من المتاعب'
      },
      {
        id: 'satisfaction',
        icon: 'fas fa-award',
        title: 'ضمان الرضا',
        description: 'رضا مضمون 100%'
      }
    ]
  },
  es: {
    badges: [
      {
        id: 'secure-payments',
        icon: 'fas fa-shield-alt',
        title: 'Pagos Seguros',
        description: 'Procesamiento de pagos encriptado y seguro'
      },
      {
        id: 'free-shipping',
        icon: 'fas fa-truck',
        title: 'Envío Gratis +$75',
        description: 'Envío gratis en todos los pedidos superiores a $75'
      },
      {
        id: 'returns',
        icon: 'fas fa-undo',
        title: 'Devoluciones 30 Días',
        description: 'Política de devolución sin complicaciones de 30 días'
      },
      {
        id: 'satisfaction',
        icon: 'fas fa-award',
        title: 'Garantía de Satisfacción',
        description: 'Satisfacción 100% garantizada'
      }
    ]
  },
  de: {
    badges: [
      {
        id: 'secure-payments',
        icon: 'fas fa-shield-alt',
        title: 'Sichere Zahlungen',
        description: 'Verschlüsselte und sichere Zahlungsabwicklung'
      },
      {
        id: 'free-shipping',
        icon: 'fas fa-truck',
        title: 'Kostenloser Versand Über 75€',
        description: 'Kostenloser Versand bei allen Bestellungen über 75€'
      },
      {
        id: 'returns',
        icon: 'fas fa-undo',
        title: '30-Tage-Rückgabe',
        description: 'Problemlose 30-tägige Rückgaberecht'
      },
      {
        id: 'satisfaction',
        icon: 'fas fa-award',
        title: 'Zufriedenheitsgarantie',
        description: '100% Zufriedenheit garantiert'
      }
    ]
  }
};

