export const navLinks = [
    {
      id: 1,
      name: 'Inicio',
      href: '#home',
    },
    {
      id: 2,
      name: 'Conócenos',
      href: '#about',
    },
    {
      id: 3,
      name: 'Portafolio',
      href: '#work',
    },
    {
      id: 4,
      name: 'Productos',
      href: '#contact',
    },
    {
      id: 5,
      name: 'Servicios',
      href: '#contact',
    },
    {
      id: 6,
      name: 'Contacto',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
// src/constants/index.js

// src/constants/index.js

export const myProjects = [
  {
    title: "Automatización de Retrolavado para FEMSA Coca-Cola",
    desc: "Implementación y programación de la etapa de retrolavado de tanques para el sistema de producción de FEMSA Coca-Cola.",
    subdesc: "Nuestro equipo diseñó e implementó el sistema de control para optimizar el retrolavado, mejorando la eficiencia de limpieza y reduciendo el tiempo de inactividad de los tanques. Este proyecto permitió un ahorro significativo en recursos y cumplió con los estándares de calidad de la industria alimentaria.",
    spotlight: "", // Ruta de la imagen
    logo: "/assets/femsa-cocacola-2.png",
    logoStyle: { borderRadius: '50%' },
    tags: [
      { name: "PLC", path: "/assets/plc-logo.png" },
      { name: "Automatización", path: "/assets/automation-logo.png" },
    ],
    href: "https://femsa.com/proyectos-retrolavado",
    images: [
      "/assets/femsa-tanque1.jpg",
      "/assets/femsa-tanque2.jpg",
      "/assets/femsa-tanque3.jpg"
    ]
  },
  {
    title: "Diseño y Simulación de Máquina Dispensadora de Jugos",
    desc: "Desarrollo completo de una máquina dispensadora de jugos, modelada y simulada en 3D para optimizar su diseño y funcionalidad.",
    subdesc: "Este proyecto incluyó desde el diseño conceptual hasta la simulación 3D de todos los componentes de la máquina, permitiendo una visualización y pruebas detalladas antes de la fase de fabricación. Nuestro diseño innovador asegura precisión en la dispensación y facilidad de mantenimiento.",
    spotlight: "/assets/dispensadora-jugos.jpg",
    logo: "/assets/foto4.png",
    logoStyle: { borderRadius: '50%' },
    tags: [
      { name: "Modelado 3D", path: "/assets/3d-modeling-logo.png" },
      { name: "Simulación", path: "/assets/simulation-logo.png" },
    ],
    href: "https://example.com/dispensadora-jugos",
    images: [
      "/assets/dispensadora-sim1.jpg",
      "/assets/dispensadora-sim2.jpg",
      "/assets/dispensadora-sim3.jpg"
    ]
  },
  {
    title: "Coinly",
    desc: "Aplicación que te permite manejar de una manera más fácil y confiable tus finanzas.",
    subdesc: "Este proyecto incluye aliados como Tri,  analisis de movimientos fraudulentos y una intuitividad para que cualquier persona lo maneje.",
    spotlight: "/assets/dispensadora-jugos.jpg",
    logo: "../assets/LogoCoinly.jpg",
    logoStyle: { borderRadius: '50%' },
    tags: [
      { name: "Modelado 3D", path: "/assets/3d-modeling-logo.png" },
      { name: "Simulación", path: "/assets/simulation-logo.png" },
    ],
    href: " https://banking-iota-nine.vercel.app/sign-in",
    images: [
      "../assets/coinly.jpg",
    ]
  },
  {
    title: "Matchmaking para Colombia Tech Week 2024",
    desc: "Desarrollo de la funcionalidad de matchmaking para el evento Colombia Tech Week 2024, un evento tecnológico de gran envergadura en el país.",
    subdesc: "Implementamos una solución de matchmaking que permite a los participantes conectar con otros asistentes, facilitando el networking y la creación de oportunidades comerciales. La herramienta fue clave para maximizar el impacto del evento, brindando una experiencia personalizada a cada participante.",
    spotlight: "/assets/colombia-tech-week.jpg",
    logo: "/assets/foto2.png",
    logoStyle: { borderRadius: '50%' },
    tags: [
      { name: "Desarrollo Web", path: "/assets/web-development-logo.png" },
      { name: "Matchmaking", path: "/assets/matchmaking-logo.png" },
    ],
    href: "https://colomabiatechweek.com",
    images: [
      "/assets/techweek1.jpg",
    ]
  },
  {
    title: "Desarrollo de Apps Personalizadas - VOHGO",
    desc: "Creación de aplicaciones móviles personalizadas, como la app VOHGO, diseñada para satisfacer necesidades específicas de nuestros clientes.",
    subdesc: "Desarrollamos VOHGO, una app personalizada que integra diversas funciones únicas para optimizar la experiencia de sus usuarios. Con un enfoque en la usabilidad y el diseño intuitivo, nuestro equipo se aseguró de cumplir con los más altos estándares de calidad en cada etapa del proyecto.",
    spotlight: "/assets/vohgo-app.jpg",
    logo: "/assets/vohgo-logo.png",
    logoStyle: { borderRadius: '50%' },
    tags: [
      { name: "Desarrollo Móvil", path: "/assets/mobile-development-logo.png" },
      { name: "Personalización", path: "/assets/customization-logo.png" },
    ],
    href: "https://vohgo.com",
    images: [
      "/assets/vohgo1.jpg",
      "/assets/vohgo2.jpg",
      "/assets/vohgo3.jpg"
    ]
  },
];

  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];
