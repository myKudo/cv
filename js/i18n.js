/* ============================================
   Internationalization (i18n) System
   FR / EN Language Toggle
   ============================================ */

const translations = {
    fr: {
        // Navigation
        "nav.home": "Accueil",
        "nav.about": "Profil",
        "nav.skills": "Compétences",
        "nav.experience": "Expériences",
        "nav.education": "Formation",
        "nav.contact": "Contact",

        // Hero
        "hero.greeting": "Bonjour, je suis",
        "hero.description": "Expert Azure & DevOps avec +13 ans d'expérience",
        "hero.contact": "Me Contacter",
        "hero.download": "Télécharger CV",

        // About
        "about.title": "Profil",
        "about.intro": "Architecte Solutions avec plus de <strong>13 ans d'expérience</strong>, expert <strong>Azure</strong> et <strong>DevOps</strong>.",
        "about.desc1": "J'interviens sur la conception et la réalisation de solutions <strong>cloud, data et IA</strong>, scalables et sécurisées. J'interviens sur des projets stratégiques avec une forte exigence métier, en assurant cohérence technique, performance et gouvernance.",
        "about.desc2": "Mon rôle transverse m'amène à <strong>encadrer les Tech Leads</strong> et à structurer les standards d'architecture et d'ingénierie.",
        "about.years": "Années d'expérience",
        "about.projects": "Projets réalisés",
        "about.companies": "Entreprises",
        "about.languages": "Langues",
        "about.french": "Français",
        "about.english": "Anglais",
        "about.native": "Langue maternelle",
        "about.fluent": "Courant",
        "about.hobbies": "Loisirs",
        "about.sport": "Sport",
        "about.music": "Musique",
        "about.travel": "Voyage",

        // Skills
        "skills.title": "Compétences",
        "skills.development": "Développement",
        "skills.security": "Sécurité & Observabilité",
        "skills.expertise": "Niveau d'expertise",
        "skills.cloud_arch": "Architecture Cloud & Solutions",
        "skills.data_eng": "Data Engineering & IA",
        "skills.dotnet": "Développement .NET / C#",

        // Experience
        "experience.title": "Expériences",
        "exp.upcoop1.desc": "Co Responsable du pôle architecture au sein de la Fabrik Digitale de Up Coop, en charge de l'accompagnement de l'ensemble des Tech Leads sur leurs projets.",
        "exp.upcoop1.item1": "Accompagnement des Tech Leads sur les choix d'architecture, bonnes pratiques et delivery",
        "exp.upcoop1.item2": "Mise en place des standards techniques : sécurité, qualité, monitoring",
        "exp.upcoop1.item3": "Animation des revues d'architecture et participation aux cadrages projets",
        "exp.upcoop1.item4": "Pilotage transverse de la stratégie FinOps et optimisation des coûts cloud",
        "exp.upcoop1.item5": "Data & AI: accompagnement à l'approche Data Mesh, migration vers Unity Catalog",
        "exp.upcoop1.item6": "DevSecOps : adoption de pratiques DevSecOps à l'échelle de l'organisation",

        "exp.upcoop2.desc": "Conception et déploiement d'un écosystème digital à destination des commerçants affiliés et des équipes back-office de Up Coop.",
        "exp.upcoop2.item1": "Architecture microservices orientée domaine (pattern CQRS : SQL en écriture, Cosmos DB en lecture)",
        "exp.upcoop2.item2": "Pipelines ETL distribués sur Databricks pour l'intégration de données partenaires",
        "exp.upcoop2.item3": "Infrastructure sécurisée : Azure Firewall, Private Endpoint, VNet, Application Gateway",
        "exp.upcoop2.item4": "Référent FinOps : optimisation des coûts, dimensionnement, gouvernance budgétaire",

        "exp.yoss.desc": "Participation à la création de la plateforme YOSS, une startup interne du groupe Adecco visant à réinventer la relation entre freelances et grands comptes.",
        "exp.yoss.item1": "Architecture et développement de microservices orientés Domain-Driven Design",
        "exp.yoss.item2": "Développement du frontend public avec Angular et TypeScript",
        "exp.yoss.item3": "Intégration de Cognitive Services pour la reconnaissance de documents",
        "exp.yoss.item4": "Mise en place de la CI/CD pipeline avec Azure DevOps",

        "exp.deloitte.title": "Projet TRex - Consultant .NET Senior & Architecte",
        "exp.deloitte.desc": "Participation à la conception et au développement de TRex, une solution interne de gestion et d'édition des déclarations fiscales des clients grands comptes de TAJ.",
        "exp.deloitte.item1": "Définition de l'architecture microservices déployée sur Azure Service Fabric",
        "exp.deloitte.item2": "Développement du backend applicatif en ASP.NET / WebAPI",
        "exp.deloitte.item3": "Développement du frontend desktop en WPF avec XAML",

        "exp.loreal.desc": "Refonte complète de SoLuxe, une application mobile métier destinée aux commerciaux de la division Luxe pour la prise de commande et le suivi des ventes sur le terrain.",
        "exp.loreal.item1": "Analyse de l'existant et refonte de l'architecture applicative",
        "exp.loreal.item2": "Conception et développement d'une Windows Store App moderne en XAML / C#",
        "exp.loreal.item3": "Mise en œuvre de la synchronisation offline/online avec SQLite",

        "exp.agb.desc": "Participation à la refonte complète du Core Banking System d'une grande banque privée, en partenariat avec Microsoft Consulting Services.",
        "exp.agb.item1": "Conception et implémentation de l'infrastructure applicative avec Windows Store App, Prism et MVVM",
        "exp.agb.item2": "Développement du noyau métier bancaire en collaboration avec Microsoft",
        "exp.agb.item3": "Réalisation d'interfaces riches et interactives en WPF / XAML",

        // Education
        "education.title": "Formation",
        "education.degree": "Master en Intelligence Artificielle",

        // Contact
        "contact.title": "Travaillons ensemble",
        "contact.desc": "N'hésitez pas à me contacter pour discuter de vos projets d'architecture, de transformation cloud ou de data.",
        "contact.phone": "Téléphone",
        "contact.website": "Site Web",
        "contact.form.name": "Votre nom",
        "contact.form.email": "Votre email",
        "contact.form.subject": "Sujet",
        "contact.form.message": "Votre message",
        "contact.form.send": "Envoyer",

        // Footer
        "footer.rights": "© 2024 Djilali SAHRAOUI. Tous droits réservés."
    },

    en: {
        // Navigation
        "nav.home": "Home",
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.experience": "Experience",
        "nav.education": "Education",
        "nav.contact": "Contact",

        // Hero
        "hero.greeting": "Hello, I am",
        "hero.description": "Azure & DevOps Expert with +13 years of experience",
        "hero.contact": "Contact Me",
        "hero.download": "Download CV",

        // About
        "about.title": "About Me",
        "about.intro": "Solution Architect with over <strong>13 years of experience</strong>, expert in <strong>Azure</strong> and <strong>DevOps</strong>.",
        "about.desc1": "I specialize in designing and implementing <strong>cloud, data, and AI solutions</strong> that are scalable and secure. I work on strategic projects with high business requirements, ensuring technical consistency, performance, and governance.",
        "about.desc2": "My cross-functional role leads me to <strong>mentor Tech Leads</strong> and establish architecture and engineering standards.",
        "about.years": "Years of Experience",
        "about.projects": "Projects Completed",
        "about.companies": "Companies",
        "about.languages": "Languages",
        "about.french": "French",
        "about.english": "English",
        "about.native": "Native",
        "about.fluent": "Fluent",
        "about.hobbies": "Hobbies",
        "about.sport": "Sports",
        "about.music": "Music",
        "about.travel": "Travel",

        // Skills
        "skills.title": "Skills",
        "skills.development": "Development",
        "skills.security": "Security & Observability",
        "skills.expertise": "Expertise Level",
        "skills.cloud_arch": "Cloud & Solutions Architecture",
        "skills.data_eng": "Data Engineering & AI",
        "skills.dotnet": ".NET / C# Development",

        // Experience
        "experience.title": "Experience",
        "exp.upcoop1.desc": "Co-Head of Architecture at Up Coop's Digital Factory, responsible for supporting all Tech Leads on their projects.",
        "exp.upcoop1.item1": "Supporting Tech Leads on architecture choices, best practices, and delivery",
        "exp.upcoop1.item2": "Implementing technical standards: security, quality, monitoring",
        "exp.upcoop1.item3": "Leading architecture reviews and participating in project scoping",
        "exp.upcoop1.item4": "Cross-functional FinOps strategy management and cloud cost optimization",
        "exp.upcoop1.item5": "Data & AI: Data Mesh approach support, Unity Catalog migration",
        "exp.upcoop1.item6": "DevSecOps: organization-wide adoption of DevSecOps practices",

        "exp.upcoop2.desc": "Design and deployment of a digital ecosystem for affiliated merchants and Up Coop back-office teams.",
        "exp.upcoop2.item1": "Domain-oriented microservices architecture (CQRS pattern: SQL for writes, Cosmos DB for reads)",
        "exp.upcoop2.item2": "Distributed ETL pipelines on Databricks for partner data integration",
        "exp.upcoop2.item3": "Secure infrastructure: Azure Firewall, Private Endpoint, VNet, Application Gateway",
        "exp.upcoop2.item4": "FinOps Lead: cost optimization, sizing, budget governance",

        "exp.yoss.desc": "Participated in creating the YOSS platform, an internal Adecco Group startup aiming to reinvent the relationship between freelancers and large companies.",
        "exp.yoss.item1": "Architecture and development of Domain-Driven Design microservices",
        "exp.yoss.item2": "Public frontend development with Angular and TypeScript",
        "exp.yoss.item3": "Cognitive Services integration for document recognition",
        "exp.yoss.item4": "CI/CD pipeline implementation with Azure DevOps",

        "exp.deloitte.title": "TRex Project - Senior .NET Consultant & Architect",
        "exp.deloitte.desc": "Participated in the design and development of TRex, an internal solution for managing and editing tax declarations for TAJ's large corporate clients.",
        "exp.deloitte.item1": "Microservices architecture definition deployed on Azure Service Fabric",
        "exp.deloitte.item2": "Backend application development in ASP.NET / WebAPI",
        "exp.deloitte.item3": "Desktop frontend development in WPF with XAML",

        "exp.loreal.desc": "Complete redesign of SoLuxe, a business mobile application for Luxury division sales representatives for order taking and field sales tracking.",
        "exp.loreal.item1": "Analysis of existing system and application architecture redesign",
        "exp.loreal.item2": "Design and development of a modern Windows Store App in XAML / C#",
        "exp.loreal.item3": "Implementation of offline/online synchronization with SQLite",

        "exp.agb.desc": "Participated in the complete redesign of a major private bank's Core Banking System, in partnership with Microsoft Consulting Services.",
        "exp.agb.item1": "Design and implementation of application infrastructure with Windows Store App, Prism, and MVVM",
        "exp.agb.item2": "Banking core business development in collaboration with Microsoft",
        "exp.agb.item3": "Development of rich and interactive interfaces in WPF / XAML",

        // Education
        "education.title": "Education",
        "education.degree": "Master's in Artificial Intelligence",

        // Contact
        "contact.title": "Let's Work Together",
        "contact.desc": "Feel free to contact me to discuss your architecture, cloud transformation, or data projects.",
        "contact.phone": "Phone",
        "contact.website": "Website",
        "contact.form.name": "Your name",
        "contact.form.email": "Your email",
        "contact.form.subject": "Subject",
        "contact.form.message": "Your message",
        "contact.form.send": "Send",

        // Footer
        "footer.rights": "© 2024 Djilali SAHRAOUI. All rights reserved."
    }
};

// i18n Class
class I18n {
    constructor() {
        this.currentLang = localStorage.getItem('cv-lang') || 'fr';
        this.init();
    }

    init() {
        this.updateLanguage(this.currentLang);
        this.setupToggle();
    }

    setupToggle() {
        const langToggle = document.getElementById('lang-toggle');
        if (!langToggle) return;

        const buttons = langToggle.querySelectorAll('.lang-btn');
        buttons.forEach(btn => {
            // Set initial active state
            if (btn.dataset.lang === this.currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }

            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                this.updateLanguage(lang);

                // Update active states
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }

    updateLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('cv-lang', lang);
        document.documentElement.lang = lang;

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            if (translation) {
                element.innerHTML = translation;
            }
        });

        // Update page title
        const titles = {
            fr: 'Djilali SAHRAOUI - Architecte Solutions / Data Architect',
            en: 'Djilali SAHRAOUI - Solution Architect / Data Architect'
        };
        document.title = titles[lang];
    }

    getTranslation(key) {
        return translations[this.currentLang]?.[key] || translations['fr'][key] || key;
    }
}

// Initialize i18n when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.i18n = new I18n();
});
