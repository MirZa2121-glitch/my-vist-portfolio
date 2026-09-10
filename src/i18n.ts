import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const projectDescriptions = {
    1: 'I built the project using a React + TypeScript stack. I utilized GSAP for scroll animations and Tailwind CSS as a replacement for standard CSS.',
    2: 'I built the project using a React + TypeScript stack. I utilized GSAP for scroll animations and Tailwind CSS as a replacement for standard CSS.',
    3: 'I built the project using a React + TypeScript stack. I utilized GSAP for scroll animations and Tailwind CSS as a replacement for standard CSS.',
    4: 'Built using HTML and CSS; I did not really use any libraries.',
    5: 'Used the React + TypeScript stack along with GSAP and Tailwind CSS libraries. The link is not yet working.',
    6: 'Built using HTML, Alpine.js, GSAP, and Tailwind CSS. It includes Russian and English language switching, a chatbot window, and icons designed in Figma.',
};

const resources = {
    en: {
        translation: {
            nav: { about: 'About me', projects: 'Projects', uxui: 'UX/UI', stack: 'Stack', another: 'Another work', contact: 'Contact' },
            header: { contact: 'Contact with me', language: 'Language', menu: 'Toggle menu' },
            intro: { role: 'Front-End developer', titleStart: 'I turn ideas into', titleAccent: 'fast, beautiful web', titleEnd: 'applications.', desc: 'React developer creating modern, user-friendly interfaces with attention to detail.', viewProjects: 'View projects', about: 'About me', technology: 'Technology' },
            about: { label: 'About me', title: 'A little about myself', desc: 'My name is Mirza, and I am a junior frontend developer. I specialize in React, TypeScript, and creating responsive, fast, and user-friendly interfaces. I am constantly learning and practicing, and I strive to write clean, maintainable code.', blocks: { clear: 'Clear code', clearDesc: 'I write clear, maintainable code with a focus on structure.', adaptive: 'Adaptive', adaptiveDesc: 'I create interfaces that look great on any device.' } },
            portfolio: { label: 'Projects', title: 'My projects', readMore: 'Read more', project: 'Project', empty: 'Empty card' },
            ares: { label: 'In development', desc: 'Ares is my personal project - the platform I am currently working on.', soon: 'Coming soon.' },
            works: { title: 'All Works', project: 'Project', empty: 'Projects will be added in the future' },
            stack: { label: 'My stack', title: 'Technologies and tools', desc: 'I use modern technologies and tools to create high-quality web applications.' },
            another: { label: 'Other work', title: 'More projects and active on GitHub', button: 'Go to GitHub' },
            footer: { description: 'Junior Front-end developer. I create fast and easy-to-use web applications', navigation: 'Navigation', uxui: 'UX/UI design', other: 'Other work', contact: 'Contact', telegram: 'Telegram', together: "Let's work together!", opportunities: 'Open to interesting projects and new opportunities', contactButton: 'Contact with me', rights: 'All rights reserved.', github: 'GitHub', email: 'Email', arrow: 'Back to top' },
            projects: projectDescriptions,
            allProjects: { 1: 'First testing layout in Figma, training for typography and accent colors' },
        },
    },
    ru: {
        translation: {
            nav: { about: 'Обо мне', projects: 'Проекты', uxui: 'UX/UI', stack: 'Стек', another: 'Другая работа', contact: 'Контакты' },
            header: { contact: 'Связаться со мной', language: 'Язык', menu: 'Открыть меню' },
            intro: { role: 'Front-End разработчик', titleStart: 'Я превращаю идеи в', titleAccent: 'быстрые, красивые веб', titleEnd: 'приложения.', desc: 'React-разработчик, создающий современные и удобные интерфейсы с вниманием к деталям.', viewProjects: 'Смотреть проекты', about: 'Обо мне', technology: 'Технологии' },
            about: { label: 'Обо мне', title: 'Немного обо мне', desc: 'Меня зовут Мирза, я начинающий frontend-разработчик. Специализируюсь на React, TypeScript и создании адаптивных, быстрых и удобных интерфейсов. Постоянно учусь и практикуюсь, стремясь писать чистый и поддерживаемый код.', blocks: { clear: 'Чистый код', clearDesc: 'Пишу понятный и поддерживаемый код с фокусом на структуру.', adaptive: 'Адаптивность', adaptiveDesc: 'Создаю интерфейсы, которые отлично выглядят на любом устройстве.' } },
            portfolio: { label: 'Проекты', title: 'Мои проекты', readMore: 'Подробнее', project: 'Проект', empty: 'Пустая карточка' },
            ares: { label: 'В разработке', desc: 'Ares - мой личный проект, платформа, над которой я сейчас работаю.', soon: 'Скоро.' },
            works: { title: 'Все работы', project: 'Проект', empty: 'Проекты добавлю в будущем' },
            stack: { label: 'Мой стек', title: 'Технологии и инструменты', desc: 'Использую современные технологии и инструменты для создания качественных веб-приложений.' },
            another: { label: 'Другая работа', title: 'Больше проектов и активность на GitHub', button: 'Перейти на GitHub' },
            footer: { description: 'Junior Front-end разработчик. Создаю быстрые и удобные веб-приложения', navigation: 'Навигация', uxui: 'UX/UI дизайн', other: 'Другая работа', contact: 'Контакты', telegram: 'Telegram', together: 'Давайте работать вместе!', opportunities: 'Открыт к интересным проектам и новым возможностям', contactButton: 'Связаться со мной', rights: 'Все права защищены.', github: 'GitHub', email: 'Почта', arrow: 'Наверх' },
            projects: { 1: 'Проект создан на React + TypeScript с использованием GSAP для анимаций и Tailwind CSS вместо обычного CSS.', 2: 'Проект создан на React + TypeScript с использованием GSAP для анимаций и Tailwind CSS вместо обычного CSS.', 3: 'Проект создан на React + TypeScript с использованием GSAP для анимаций и Tailwind CSS вместо обычного CSS.', 4: 'Создан с использованием HTML и CSS без дополнительных библиотек.', 5: 'Использованы React + TypeScript, GSAP и Tailwind CSS. Ссылка пока не работает.', 6: 'Создан с HTML, Alpine.js, GSAP и Tailwind CSS. Есть переключение русского и английского языков, чат и иконки из Figma.' },
            allProjects: { 1: 'Первый тестовый макет в Figma, тренировка типографики и акцентных цветов' },
        },
    },
    sv: {
        translation: {
            nav: { about: 'Om mig', projects: 'Projekt', uxui: 'UX/UI', stack: 'Tekniker', another: 'Annat arbete', contact: 'Kontakt' },
            header: { contact: 'Kontakta mig', language: 'Språk', menu: 'Öppna meny' },
            intro: { role: 'Front-End-utvecklare', titleStart: 'Jag förvandlar idéer till', titleAccent: 'snabba, vackra webb', titleEnd: 'applikationer.', desc: 'React-utvecklare som skapar moderna och användarvänliga gränssnitt med känsla för detaljer.', viewProjects: 'Visa projekt', about: 'Om mig', technology: 'Tekniker' },
            about: { label: 'Om mig', title: 'Lite om mig', desc: 'Jag heter Mirza och är junior frontendutvecklare. Jag arbetar med React, TypeScript och responsiva, snabba och användarvänliga gränssnitt. Jag lär mig och övar ständigt och strävar efter ren och underhållbar kod.', blocks: { clear: 'Ren kod', clearDesc: 'Jag skriver tydlig och underhållbar kod med fokus på struktur.', adaptive: 'Responsiv', adaptiveDesc: 'Jag skapar gränssnitt som ser bra ut på alla enheter.' } },
            portfolio: { label: 'Projekt', title: 'Mina projekt', readMore: 'Läs mer', project: 'Projekt', empty: 'Tomt kort' },
            ares: { label: 'Under utveckling', desc: 'Ares är mitt personliga projekt, plattformen jag arbetar med just nu.', soon: 'Kommer snart.' },
            works: { title: 'Alla arbeten', project: 'Projekt', empty: 'Fler projekt kommer i framtiden' },
            stack: { label: 'Min teknikstack', title: 'Tekniker och verktyg', desc: 'Jag använder moderna tekniker och verktyg för att skapa webbapplikationer av hög kvalitet.' },
            another: { label: 'Annat arbete', title: 'Fler projekt och aktivitet på GitHub', button: 'Gå till GitHub' },
            footer: { description: 'Junior front-end-utvecklare. Jag skapar snabba och lättanvända webbapplikationer', navigation: 'Navigering', uxui: 'UX/UI-design', other: 'Annat arbete', contact: 'Kontakt', telegram: 'Telegram', together: 'Låt oss arbeta tillsammans!', opportunities: 'Öppen för intressanta projekt och nya möjligheter', contactButton: 'Kontakta mig', rights: 'Med ensamrätt.', github: 'GitHub', email: 'E-post', arrow: 'Till toppen' },
            projects: { 1: 'Projektet byggdes med React + TypeScript, GSAP för scrollanimationer och Tailwind CSS.', 2: 'Projektet byggdes med React + TypeScript, GSAP för scrollanimationer och Tailwind CSS.', 3: 'Projektet byggdes med React + TypeScript, GSAP för scrollanimationer och Tailwind CSS.', 4: 'Byggt med HTML och CSS utan extra bibliotek.', 5: 'Byggt med React + TypeScript, GSAP och Tailwind CSS. Länken fungerar inte ännu.', 6: 'Byggt med HTML, Alpine.js, GSAP och Tailwind CSS med språkväxling mellan ryska och engelska.' },
            allProjects: { 1: 'Första testlayouten i Figma, träning i typografi och accentfärger' },
        },
    },
    az: {
        translation: {
            nav: { about: 'Haqqımda', projects: 'Layihələr', uxui: 'UX/UI', stack: 'Stek', another: 'Digər işlər', contact: 'Əlaqə' },
            header: { contact: 'Mənimlə əlaqə', language: 'Dil', menu: 'Menyunu aç' },
            intro: { role: 'Front-End proqramçı', titleStart: 'İdeyaları', titleAccent: 'sürətli, gözəl veb', titleEnd: 'tətbiqlərə çevirirəm.', desc: 'Detallara diqqət yetirən, müasir və rahat interfeyslər yaradan React proqramçısı.', viewProjects: 'Layihələrə bax', about: 'Haqqımda', technology: 'Texnologiyalar' },
            about: { label: 'Haqqımda', title: 'Özüm haqqında', desc: 'Mənim adım Mirzadır və junior frontend proqramçıyam. React, TypeScript və adaptiv, sürətli, rahat interfeyslər yaratmaq üzrə ixtisaslaşıram. Daim öyrənir və təcrübə aparıram, təmiz və dəstəklənən kod yazmağa çalışıram.', blocks: { clear: 'Təmiz kod', clearDesc: 'Struktura diqqət yetirərək aydın və dəstəklənən kod yazıram.', adaptive: 'Adaptivlik', adaptiveDesc: 'Bütün cihazlarda yaxşı görünən interfeyslər yaradıram.' } },
            portfolio: { label: 'Layihələr', title: 'Layihələrim', readMore: 'Ətraflı', project: 'Layihə', empty: 'Boş kart' },
            ares: { label: 'Hazırlanır', desc: 'Ares hazırda üzərində işlədiyim şəxsi platforma layihəmdir.', soon: 'Tezliklə.' },
            works: { title: 'Bütün işlər', project: 'Layihə', empty: 'Layihələr gələcəkdə əlavə olunacaq' },
            stack: { label: 'Mənim stekim', title: 'Texnologiyalar və alətlər', desc: 'Keyfiyyətli veb tətbiqlər yaratmaq üçün müasir texnologiya və alətlərdən istifadə edirəm.' },
            another: { label: 'Digər işlər', title: 'Daha çox layihə və GitHub aktivliyi', button: 'GitHub-a keç' },
            footer: { description: 'Junior Front-end proqramçı. Sürətli və rahat veb tətbiqlər yaradıram', navigation: 'Naviqasiya', uxui: 'UX/UI dizayn', other: 'Digər işlər', contact: 'Əlaqə', telegram: 'Telegram', together: 'Birlikdə işləyək!', opportunities: 'Maraqlı layihələrə və yeni imkanlara açığam', contactButton: 'Mənimlə əlaqə', rights: 'Bütün hüquqlar qorunur.', github: 'GitHub', email: 'E-poçt', arrow: 'Yuxarı' },
            projects: { 1: 'Layihə React + TypeScript, animasiyalar üçün GSAP və Tailwind CSS ilə hazırlanıb.', 2: 'Layihə React + TypeScript, animasiyalar üçün GSAP və Tailwind CSS ilə hazırlanıb.', 3: 'Layihə React + TypeScript, animasiyalar üçün GSAP və Tailwind CSS ilə hazırlanıb.', 4: 'HTML və CSS ilə, əlavə kitabxanalardan istifadə edilmədən hazırlanıb.', 5: 'React + TypeScript, GSAP və Tailwind CSS istifadə olunub. Link hələ işləmir.', 6: 'HTML, Alpine.js, GSAP və Tailwind CSS ilə hazırlanıb. Rus və ingilis dilləri arasında keçid var.' },
            allProjects: { 1: 'Figma-da ilk sınaq maketi, tipoqrafiya və vurğu rəngləri məşqi' },
        },
    },
};

i18n.use(LanguageDetector).use(initReactI18next).init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'ru', 'sv', 'az'],
    interpolation: { escapeValue: false },
});

export default i18n;
