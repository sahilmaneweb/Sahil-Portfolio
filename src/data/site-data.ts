export const personal = {
  name: "Sahil Mane",
  title: "Aspiring Full Stack Developer",
  email: "manesahil2808@gmail.com", 
  summary: "I'm passionate about creating modern, responsive web applications with clean design and smooth user experiences. I love experimenting with new technologies and building projects that solve real-world problems.",
  photo: "/sahil.jpg",
  socials: [
    { 
      name: "instagram", 
      url: "https://instagram.com/sahil_mane_1304",
      icon: "Instagram"
    },
    { 
      name: "linkedin", 
      url: "https://linkedin.com/in/sahil-mane-b113032ba",
      icon: "Linkedin"
    },
    { 
      name: "github", 
      url: "https://github.com/sahilmaneweb",
      icon: "Github"
    },
    { 
      name: "mail", 
      url: "mailto:manesahil2808@gmail.com?subject=Let's%20Connect&body=Hi%20Sahil,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!",
      icon: "Mail"
    }
  ],
  resumeUrl: "/Resume.pdf"
};

export const projects = [
  {
    id: "file-cloud",
    title: "File-Cloud",
    description: "A secure platform to upload, manage, and share files with short URLs and password protection.",
    banner: "/images/projects/File-cloud.png",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "Clerk", "Nodemailer"],
    links: [
      { name: "Live Demo", url: "https://file-cloud-ashy.vercel.app/" },
      { name: "GitHub", url: "https://github.com/sahilmaneweb/FileCloud" }
    ]
  },
  {
    id: "ecommerce",
    title: "Kitsune Store", 
    description: "An e-commerce site for browsing, ordering, and tracking products with admin order and product management.",
    banner: "/images/projects/Kitsune.png",
    tags: ["React", "Tailwind", "Node.js", "Express.js", "MongoDB", "JWT", "ImageKit", "Nodemailer"],
    links: [
      { name: "Live Demo", url: "https://kitsune-shop-five.vercel.app/" },
      { name: "Admin Panel", url: "https://kitsune-shop-admin.vercel.app/" },
      { name: "GitHub", url: "https://github.com/sahilmaneweb/kitsune-shop" }
    ]
  },
  {
    id: "task-manager",
    title: "FSD Management System",
    description: "A role-based system for admins, mentors, and students to manage projects, batches, and attendance.",
    banner: "/images/projects/Fsd.png", 
    tags: ["Angular", "Spring Boot", "PostgreSQL", "JWT"],
    links: [
      { name: "Live Demo", url: "https://fsd-project-sigma.vercel.app/" },
      { name: "GitHub", url: "https://github.com/sahilmaneweb/FsdProject" }
    ]
  }
];

export const experience = [
  {
    company: "DevionX",
    role: "Full Stack Developer Intern",
    period: "Dec 2024 – Mar 2025",
    details: [
      "Built responsive web apps with Next.js, TailwindCSS, and performance optimizations.",
      "Implemented SSR/SSG, lazy loading, code splitting, and image optimization.", 
      "Designed modern, mobile-first UI/UX with accessibility and cross-device support.",
      "Managed projects with Git/GitHub and deployed on Vercel & Netlify."
    ]
  }
];

export const skills = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "Spring Boot", "REST APIs"],
  Tools: ["Git", "GitHub", "VS Code", "Vercel", "Clerk", "Postman"],
  Databases: ["PostgreSQL", "MongoDB", "Supabase"]
};

export const navigation = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
];