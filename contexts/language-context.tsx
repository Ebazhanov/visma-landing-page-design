"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "ru"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Header
    "nav.about": "About Us",
    "nav.products": "Products",
    "nav.partnerships": "Partnerships",
    "nav.contact": "LET’S CONNECT",
    "nav.getQuote": "Get Quote",
    "nav.mission": "Our Mission",

    // Hero Section
    "hero.tagline": "Global Reach. Local Advantage.",
    "hero.description":
      "Your trusted partner for Mechanical, Electrical parts, Equipment and engineering solutions across Russia.",
    "hero.exploreProducts": "Explore Products",
    "hero.contactUs": "LET’S CONNECT",

    // About Section
    "about.title": "Who we are...",
    "about.description":
      "VISMA is a flexible, trustful and financially strong technical supplier. We are established as a spare parts supplier, now a fast-growing company in the wholesale market throughout Russia. We offer Mechanical, Electrical parts, Equipment and engineering solutions with partner Neilsoft Engineering India.",
    "about.point1": "VISMA is a flexible, trustful and financially strong technical supplier.",
    "about.point2":
      "Established as a supplier of spare parts, VISMA is now a fast-growing company in the wholesale market throughout Russia.",
    "about.point3":
      "We offer our customers Mechanical, Electrical parts, Equipment as well as engineering solutions together with our partner Neilsoft Engineering India (Engineering Services & Design |Neilsoft) to deliver efficient solutions to our esteemed customers.",
    "about.partner": "Neilsoft",
    "about.partnerServices":
      "Industrial Machinery & Equipment | Manufacturing Automation | Bulk Material handling | General Engineering & Fabrication",
    "about.partnerLabel": "PARTNER",
    "about.services.mro": "Mechanical",
    "about.services.mroDesc": "Comprehensive mechanical parts and solutions",
    "about.services.electrical": "Electrical Parts",
    "about.services.electricalDesc": "Quality electrical components and systems",
    "about.services.equipment": "Equipment",
    "about.services.equipmentDesc": "Industrial equipment and machinery",
    "about.services.engineering": "Engineering Solutions",
    "about.services.engineeringDesc": "Custom engineering and design services",

    // Brands Section
    "brands.title": "Product Range - SHOP TRUSTED BRANDS",
    "brands.subtitle": "CHOICE OF MANUFACTURERS AVAILABLE THROUGH THE ONE NETWORK",

    // Partnership Section
    "partnership.title": "Partnership",
    "partnership.description":
      "VISMA maintains official supplier partnerships with leading manufacturers, ensuring access to premium industrial solutions and components.",
    "partnership.flexatec.title": "VISMA is official Supplier of Flexatec belts",
    "partnership.flexatec.description":
      "Specialized KFG® conveyor belts with adhesive backing for manufacturing machines. Features 99.99% contamination removal efficiency, eco-friendly properties, and FDA compliance.",
    "partnership.flexatec.features": "Key Features:",
    "partnership.flexatec.feature1": "99.99% contamination removal efficiency",
    "partnership.flexatec.feature2": "Eco-friendly adhesive backing",
    "partnership.flexatec.feature3": "FDA compliant materials",
    "partnership.flexatec.feature4": "Easy glue removal properties",
    "partnership.flexatec.visitNeilsoft": "Visit felexatec.com.ar →",
    "partnership.abix.title": "VISMA is official Supplier of ABIX belting products",
    "partnership.abix.description":
      "Comprehensive range of timing belts and special conveyor belts including Neoprene, Urethane, V-Belts, Timing Pulleys, and industrial accessories.",
    "partnership.abix.subtitle": "Timing Belts and special Conveyor Belts",
    "partnership.abix.features": "Product Range:",
    "partnership.abix.feature1": "Neoprene & Urethane belts",
    "partnership.abix.feature2": "V-Belts & Timing Pulleys",
    "partnership.abix.feature3": "Conveyor belts & accessories",
    "partnership.abix.feature4": "Industrial chains & hoses",

    // Vision Section
    "vision.title": "Our Mission",
    "vision.point1": "Complete support and handling of the total need of parts and projects for our customers.",
    "vision.point2":
      "To find together with our customer the optimal supply chain to supply based on the lowest possible costs.",
    "vision.tagline": "VISMA, Customers and Suppliers Partners...Working Together.",

    // Value Section
    "value.title": "Why Visma?",
    "value.reliability.title": "RELIABILITY",
    "value.reliability.point1": "Excellent references",
    "value.reliability.point2": "Reliable Partner",
    "value.team.title": "TEAM",
    "value.team.point1":
      "Professional Team with 15+ years international experience in FMCG companies to support your needs!",
    "value.team.point2": "Procurement Category Management Support to maximize your business profitability.",
    "value.supply.title": "SUPPLY",
    "value.supply.point1": "Products, YOU ask we supply.",
    "value.supply.point2": "Developed supply network (India, China, LAO, NA).",
    "value.savings.title": "SAVINGS",
    "value.savings.point1": "Finding the best solutions, in solving your problems.",
    "value.savings.point2":
      "Supporting to meet your Savings targets (Cost Avoidance, Cost Reduction/TCO, Working Capital).",

    // Contact Section
    "contact.title": "LET’S CONNECT",
    "contact.subtitle": "Get in touch with our team for all your needs",
    "contact.email": "Email",
    "contact.getInTouch": "Get in touch with our team for all your needs",
    "contact.office.title": "Our Office",
    "contact.office.address": "Stupino, Moscow Region, Russia",
    "contact.office.fullAddress": "Industrial District, Stupino, Moscow Region, 142800, Russia",

    // Footer
    "footer.description": "Your trusted technical supplier with global reach and local advantage.",
    "footer.quickLinks": "Quick Links",
    "footer.services": "Services",
    "footer.services.mro": "Parts",
    "footer.services.electrical": "Electrical Components",
    "footer.services.engineering": "Engineering Solutions",
    "footer.services.consulting": "Consulting",
    "footer.contact": "LET’S CONNECT",
    "footer.partnershipInquiries": "Partnership Inquiries",
    "footer.rights": "All rights reserved. Global Reach. Local Advantage.",
  },
  ru: {
    // Header
    "nav.about": "О нас",
    "nav.products": "Продукция",
    "nav.partnerships": "Партнерство",
    "nav.contact": "СВЯЖИТЕСЬ С НАМИ",
    "nav.getQuote": "Получить предложение",
    "nav.mission": "Наша миссия",

    // Hero Section
    "hero.tagline": "Глобальный охват. Локальные преимущества.",
    "hero.description": "Ваш надежный партнер в области механических, электрических запасных частей, оборудования и инженерных решений по всей России.",
    "hero.exploreProducts": "Изучить продукцию",
    "hero.contactUs": "СВЯЖИТЕСЬ С НАМИ",

    // About Section
    "about.title": "Кто мы...",
    "about.description":
      "VISMA - это гибкий, надежный и финансово стабильный поставщик технических решений. Мы зарекомендовали себя как поставщик запасных частей, теперь быстрорастущая компания на оптовом рынке по всей России. Мы предлагаем механические, электрические детали, оборудование и инженерные решения в партнерстве с Neilsoft Engineering India.",
    "about.point1": "VISMA - это гибкий, надежный и финансово стабильный поставщик технических решений.",
    "about.point2":
      "Зарекомендовав себя как поставщик запасных частей, VISMA теперь является быстрорастущей компанией на оптовом рынке по всей России.",
    "about.point3":
      "Мы предлагаем нашим клиентам механические, электрические детали, оборудование, а также инженерные решения вместе с нашим партнером Neilsoft Engineering India (Инженерные услуги и проектирование |Neilsoft) для предоставления эффективных решений нашим уважаемым клиентам.",
    "about.partner": "Neilsoft",
    "about.partnerServices":
      "Инженерные услуги и решения в сфере строительства, переработки и производства, помогающие повысить эффективность проектов, за счет внедрения новых технологий и цифровой трансформации.",
    "about.partnerLabel": "ПАРТНЕР",
    "about.services.mro": "Механика",
    "about.services.mroDesc": "Механические компоненты и решения",
    "about.services.electrical": "Электрические детали",
    "about.services.electricalDesc": "Электрические компоненты и системы",
    "about.services.equipment": "Оборудование",
    "about.services.equipmentDesc": "Промышленное оборудование и машины",
    "about.services.engineering": "Инженерные решения",
    "about.services.engineeringDesc": "Индивидуальные инженерные и проектные услуги",

    // Brands Section
    "brands.title": "Ассортимент продукции",
    "brands.subtitle": "ВЫБОР ПРОИЗВОДИТЕЛЕЙ ДОСТУПЕН ЧЕРЕЗ ЕДИНУЮ СЕТЬ",

    // Partnership Section
    "partnership.title": "Партнерство",
    "partnership.description":
      "VISMA поддерживает официальные партнерские отношения с ведущими производителями, обеспечивая доступ к премиальным промышленным решениям и компонентам.",
    "partnership.flexatec.title": "VISMA является официальным поставщиком ремней Flexatec",
    "partnership.flexatec.description":
      "Специализированные конвейерные ленты KFG® с клеевой основой для производственных машин. Обеспечивают 99,99% эффективность удаления загрязнений, экологичность и соответствие FDA.",
    "partnership.flexatec.features": "Ключевые особенности:",
    "partnership.flexatec.feature1": "99,99% эффективность удаления загрязнений",
    "partnership.flexatec.feature2": "Экологичная клеевая основа",
    "partnership.flexatec.feature3": "Материалы, соответствующие FDA",
    "partnership.flexatec.feature4": "Легкое удаление клея",
    "partnership.flexatec.visitNeilsoft": "Посетить felexatec.com.ar →",
    "partnership.abix.title": "VISMA является официальным поставщиком ременной продукции ABIX",
    "partnership.abix.description":
      "Полный ассортимент зубчатых ремней и специальных конвейерных лент, включая неопрен, полиуретан, клиновые ремни, зубчатые шкивы и промышленные аксессуары.",
    "partnership.abix.subtitle": "Зубчатые ремни и специальные конвейерные ленты",
    "partnership.abix.features": "Ассортимент продукции:",
    "partnership.abix.feature1": "Неопреновые и полиуретановые ремни",
    "partnership.abix.feature2": "Клиновые ремни и зубчатые шкивы",
    "partnership.abix.feature3": "Конвейерные ленты и аксессуары",
    "partnership.abix.feature4": "Промышленные цепи и шланги",

    // Vision Section
    "vision.title": "Наша миссия",
    "vision.point1": "Полная поддержка потребностей наших клиентов в запасных частях, оборудовании и промышленном инжиниринге.",
    "vision.point2": "Помогаем нашими заказчиками выбрать оптимальную цепочку поставок, с целью снижения затрат.",
    "vision.tagline": "VISMA, клиенты и поставщики-партнеры... Работаем вместе.",

    // Value Section
    "value.title": "Почему Visma?",
    "value.reliability.title": "НАДЕЖНОСТЬ",
    "value.reliability.point1": "Надежный Партнер",
    "value.reliability.point2": "Отличные рекомендации",
    "value.team.title": "КОМАНДА",
    "value.team.point1":
      "Профессиональная команда с 15+ летним международным опытом в FMCG компаниях для поддержки ваших потребностей!",
    "value.team.point2": "Поддержка управления категорией закупок для максимизации прибыльности вашего бизнеса.",
    "value.supply.title": "ПОСТАВКИ",
    "value.supply.point1": "Продукты, которые ВЫ просите - мы поставляем.",
    "value.supply.point2": "Развитая сеть поставок (Индия, Китай, ЛАО, СА).",
    "value.savings.title": "ЭКОНОМИЯ",
    "value.savings.point1": "Поиск лучших решений для решения ваших проблем.",
    "value.savings.point2":
      "Поддержка в достижении ваших целей по экономии (предотвращение затрат, снижение затрат/TCO, оборотный капитал).",

    // Contact Section
    "contact.title": "СВЯЖИТЕСЬ С НАМИ",
    "contact.email": "Электронная почта",
    "contact.office.title": "Наш офис",
    "contact.office.address": "Ступино, Московская область, Россия",
    "contact.office.fullAddress": "Промышленный район, Ступино, Московская область, 142800, Россия",
    "contact.office.viewOnMaps": "Посмотреть на Яндекс Картах",

    // Footer
    "footer.description":
      "Ваш надежный поставщик технических решений с глобальным охватом и локальными преимуществами.",
    "footer.quickLinks": "Быстрые ссылки",
    "footer.services": "Услуги",
    "footer.services.mro": "Детали",
    "footer.services.electrical": "Электрические компоненты",
    "footer.services.engineering": "Инженерные решения",
    "footer.services.consulting": "Консультации",
    "footer.contact": "СВЯЖИТЕСЬ С НАМИ",
    "footer.partnershipInquiries": "Запросы о партнерстве",
    "footer.rights": "Все права защищены. Глобальный охват. Локальные преимущества.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Check if language is stored in localStorage (client-side only)
  let initialLang: Language = "en"
  if (typeof window !== "undefined") {
    const storedLang = window.localStorage.getItem("language") as Language | null
    if (storedLang === "en" || storedLang === "ru") {
      initialLang = storedLang
    }
  }
  const [language, setLanguageState] = useState<Language>(initialLang)

  // Update localStorage when language changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== "undefined") {
      window.localStorage.setItem("language", lang)
    }
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
