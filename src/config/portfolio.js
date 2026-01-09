/**
 * PORTFOLIO CONFIGURATION
 * Purpose: Centralized configuration for easy customization
 * Usage: Import and use throughout the application
 */

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Your Name",
    title: "Creative Developer",
    tagline: "Building beautiful, functional digital experiences",
    location: "San Francisco, CA",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    resumeUrl: "/resume/your-resume.pdf"
  },

  // Social Media Links
  social: {
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourusername",
    instagram: "https://instagram.com/yourusername"
  },

  // Navigation Menu Items
  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Visual Proof', href: '#visual-proof' },
    { name: 'Contact', href: '#contact' }
  ],

  // About Section Content
  about: {
    paragraphs: [
      "I'm a passionate full-stack developer with a love for creating beautiful, functional, and user-centered digital experiences. With expertise in modern web technologies, I bring ideas to life through clean code and thoughtful design.",
      
      "My journey in development started with curiosity and has evolved into a deep appreciation for the craft of building software that makes a difference. I specialize in React, Node.js, and modern web frameworks, always staying current with industry trends.",
      
      "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and the power of collaboration to solve complex problems.",
      
      "I'm currently seeking new opportunities to work with innovative teams and contribute to projects that challenge me to grow as a developer and make a positive impact."
    ]
  },

  // Contact Form Configuration
  contact: {
    formEndpoint: "/api/contact", // Replace with your form handler
    responseTime: "24 hours",
    methods: [
      {
        icon: "email",
        label: "Email",
        value: "your.email@example.com",
        href: "mailto:your.email@example.com"
      },
      {
        icon: "phone",
        label: "Phone",
        value: "+1 (555) 123-4567",
        href: "tel:+15551234567"
      },
      {
        icon: "location",
        label: "Location",
        value: "San Francisco, CA",
        href: null
      }
    ]
  },

  // Animation Settings
  animations: {
    // Reduce animations for users who prefer reduced motion
    respectReducedMotion: true,
    
    // Default animation durations
    durations: {
      fast: 0.2,
      normal: 0.3,
      slow: 0.5,
      slower: 0.8
    },
    
    // Scroll trigger settings
    scrollTrigger: {
      start: "top 80%",
      end: "bottom 60%",
      toggleActions: "play none none reverse"
    }
  },

  // GLOBAL THEME CONFIGURATION
  theme: {
    // PRIMARY BACKGROUND COLOR SYSTEM
    // #020617 - Very dark navy, near black, cinematic premium tone
    // This color is used consistently across ALL pages and components
    // Provides professional, premium feel while maintaining excellent readability
    background: {
      primary: "#020617",    // Main background - very dark navy
      secondary: "#0f172a",  // Slightly lighter for layered elements
      tertiary: "#1e293b"    // Card/component backgrounds
    },
    
    colors: {
      primary: "#3b82f6",
      secondary: "#64748b",
      accent: "#60a5fa",
      text: {
        primary: "#f1f5f9",
        secondary: "#94a3b8",
        muted: "#64748b"
      }
    },
    
    fonts: {
      primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
      mono: "'JetBrains Mono', 'Fira Code', monospace"
    }
  },

  // SEO Configuration
  seo: {
    title: "Your Name - Creative Developer Portfolio",
    description: "Full-stack developer specializing in React, Node.js, and modern web technologies. View my portfolio of creative projects and get in touch for collaboration.",
    keywords: ["developer", "react", "nodejs", "portfolio", "web development", "full-stack"],
    author: "Your Name",
    url: "https://yourportfolio.com",
    image: "/images/og-image.jpg"
  },

  // Analytics (optional)
  analytics: {
    googleAnalytics: "GA_MEASUREMENT_ID", // Replace with your GA4 ID
    hotjar: "HOTJAR_ID" // Replace with your Hotjar ID
  }
};

export default portfolioConfig;