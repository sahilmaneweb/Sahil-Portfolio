export const personal = {
  name: "Sahil Mane",
  title: "Aspiring Web Developer",
  email: "sahilmane@example.com", 
  summary: "I'm passionate about creating modern, responsive web applications with clean design and smooth user experiences. I love experimenting with new technologies and building projects that solve real-world problems.",
  photo: "/images/sahil.jpg",
  socials: [
    { 
      name: "instagram", 
      url: "https://instagram.com/sahil_mane_dev",
      icon: "Instagram"
    },
    { 
      name: "linkedin", 
      url: "https://linkedin.com/in/sahil-mane-dev",
      icon: "Linkedin"
    },
    { 
      name: "github", 
      url: "https://github.com/sahilmane",
      icon: "Github"
    },
    { 
      name: "mail", 
      url: "mailto:sahilmane@example.com?subject=Let's%20Connect&body=Hi%20Sahil,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!",
      icon: "Mail"
    }
  ],
  resumeUrl: "/resume.pdf"
};

export const projects = [
  {
    id: "real-estate",
    title: "Real Estate Web App",
    description: "A comprehensive property management platform with advanced search filters, user authentication, and admin dashboard. Built with modern technologies for optimal performance.",
    banner: "/images/projects/real-estate.jpg",
    tags: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "JWT"],
    links: [
      { name: "Live Demo", url: "https://real-estate-demo.vercel.app" },
      { name: "GitHub", url: "https://github.com/sahilmane/real-estate-app" }
    ]
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platform", 
    description: "Full-featured online store with cart functionality, payment integration, and inventory management. Responsive design optimized for mobile shopping.",
    banner: "/images/projects/ecommerce.jpg",
    tags: ["React", "Redux", "Stripe API", "Express", "MongoDB"],
    links: [
      { name: "Live Demo", url: "https://ecommerce-demo.vercel.app" },
      { name: "Admin Panel", url: "https://ecommerce-admin.vercel.app" }
    ]
  },
  {
    id: "task-manager",
    title: "Collaborative Task Manager",
    description: "Team productivity app with real-time collaboration, drag-and-drop task organization, and progress tracking. Perfect for remote teams.",
    banner: "/images/projects/task-manager.jpg", 
    tags: ["React", "TypeScript", "Socket.io", "Prisma", "Supabase"],
    links: [
      { name: "Live Demo", url: "https://task-manager-demo.vercel.app" },
      { name: "GitHub", url: "https://github.com/sahilmane/task-manager" }
    ]
  }
];

export const experience = [
  {
    company: "Scrappji",
    role: "Web Development Intern",
    period: "May 2024 – Aug 2024",
    details: [
      "Built comprehensive ERP client portal using Next.js and Tailwind CSS",
      "Implemented responsive design principles for mobile-first development", 
      "Collaborated with backend team to integrate REST APIs",
      "Optimized application performance resulting in 40% faster load times"
    ]
  },
  {
    company: "TechStart Solutions",
    role: "Frontend Developer Intern", 
    period: "Jan 2024 – Apr 2024",
    details: [
      "Developed interactive UI components using React and TypeScript",
      "Implemented state management with Redux for complex applications",
      "Participated in code reviews and agile development processes",
      "Created reusable component library improving development efficiency"
    ]
  }
];

export const skills = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
  Backend: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "GraphQL"],
  Tools: ["Git", "GitHub", "VS Code", "Figma", "Vercel", "Docker"],
  Databases: ["PostgreSQL", "MongoDB", "Supabase", "Firebase"]
};

export const navigation = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
];