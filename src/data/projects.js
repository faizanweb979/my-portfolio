/**
 * PROJECTS DATA
 * Purpose: Centralized project information for portfolio
 * Structure: Array of project objects with complete details
 * Usage: Used by Projects component and ProjectDetail page
 */

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.",
    longDescription: `A comprehensive full-stack e-commerce solution built with modern web technologies. This platform features user authentication, product management, shopping cart functionality, secure payment processing with Stripe, and real-time inventory tracking.

Key features include:
• User registration and authentication system
• Product catalog with search and filtering
• Shopping cart with persistent storage
• Secure payment processing via Stripe API
• Admin dashboard for inventory management
• Real-time order tracking and notifications
• Responsive design for all device types

The project showcases modern development practices including component-based architecture, RESTful API design, database optimization, and secure payment handling.`,
    image: "/images/project1.jpg",
    images: [
      "/images/project1-1.jpg",
      "/images/project1-2.jpg",
      "/images/project1-3.jpg"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind CSS", "JWT", "Cloudinary"],
    category: "Full Stack",
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/username/ecommerce-platform",
    duration: "3 months",
    role: "Full Stack Developer",
    featured: true,
    challenges: [
      "Implementing secure payment processing with Stripe",
      "Optimizing database queries for large product catalogs",
      "Creating responsive design for complex shopping interfaces",
      "Managing real-time inventory updates across multiple users"
    ],
    solutions: [
      "Integrated Stripe webhooks for secure payment confirmation",
      "Implemented database indexing and query optimization",
      "Used CSS Grid and Flexbox for responsive layouts",
      "Implemented WebSocket connections for real-time updates"
    ]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    longDescription: `A modern task management solution designed for team collaboration and productivity. Built with React and Firebase, this application provides real-time synchronization across all team members.

The application features:
• Kanban-style board with drag-and-drop functionality
• Real-time collaboration with live updates
• Team member assignment and notifications
• Project timeline and deadline tracking
• File attachments and comment system
• Advanced filtering and search capabilities
• Mobile-responsive design

This project demonstrates expertise in real-time applications, state management, and collaborative software design.`,
    image: "/images/project2.jpg",
    images: [
      "/images/project2-1.jpg",
      "/images/project2-2.jpg",
      "/images/project2-3.jpg"
    ],
    technologies: ["React", "Firebase", "Material-UI", "Socket.io", "Redux", "React DnD"],
    category: "Frontend",
    liveUrl: "https://example-taskmanager.com",
    githubUrl: "https://github.com/username/task-manager",
    duration: "2 months",
    role: "Frontend Developer",
    featured: false,
    challenges: [
      "Implementing smooth drag-and-drop interactions",
      "Managing complex state for real-time collaboration",
      "Optimizing performance with large task lists",
      "Creating intuitive user experience for team workflows"
    ],
    solutions: [
      "Used React DnD library for smooth drag-and-drop",
      "Implemented Redux for predictable state management",
      "Added virtualization for large lists performance",
      "Conducted user testing to refine interface design"
    ]
  },
  {
    id: 3,
    title: "AI Chat Assistant",
    description: "Intelligent chatbot powered by OpenAI API with natural language processing and context-aware responses.",
    longDescription: `An advanced AI-powered chat assistant that leverages OpenAI's GPT models to provide intelligent, context-aware responses. Built with Python FastAPI backend and React frontend.

Core capabilities:
• Natural language understanding and generation
• Context-aware conversation management
• Multi-turn dialogue support
• Custom knowledge base integration
• Real-time streaming responses
• User session management
• Conversation history and analytics

This project demonstrates proficiency in AI integration, API development, and creating intuitive conversational interfaces.`,
    image: "/images/project3.jpg",
    images: [
      "/images/project3-1.jpg",
      "/images/project3-2.jpg",
      "/images/project3-3.jpg"
    ],
    technologies: ["Python", "FastAPI", "OpenAI API", "React", "WebSocket", "PostgreSQL", "Redis"],
    category: "AI/ML",
    liveUrl: "https://example-chatbot.com",
    githubUrl: "https://github.com/username/ai-chat-assistant",
    duration: "4 months",
    role: "Full Stack Developer",
    featured: true,
    challenges: [
      "Managing conversation context across multiple turns",
      "Implementing real-time streaming responses",
      "Optimizing API costs and response times",
      "Creating natural conversation flow"
    ],
    solutions: [
      "Implemented context window management with token counting",
      "Used WebSocket for real-time streaming",
      "Added response caching and request optimization",
      "Designed conversation state machine for flow control"
    ]
  },
  {
    id: 4,
    title: "Mobile Fitness Tracker",
    description: "Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features.",
    longDescription: `A comprehensive fitness tracking application built with React Native, providing users with workout planning, progress tracking, and social engagement features.

Key features:
• Custom workout plan creation and scheduling
• Exercise library with video demonstrations
• Progress tracking with charts and analytics
• Social features for sharing achievements
• Nutrition logging and meal planning
• Integration with wearable devices
• Offline mode for gym usage

The app demonstrates mobile development expertise, data visualization, and creating engaging user experiences for health and fitness.`,
    image: "/images/project4.jpg",
    images: [
      "/images/project4-1.jpg",
      "/images/project4-2.jpg",
      "/images/project4-3.jpg"
    ],
    technologies: ["React Native", "Expo", "Firebase", "Redux", "Chart.js", "AsyncStorage"],
    category: "Mobile",
    liveUrl: "https://apps.apple.com/app/fitness-tracker",
    githubUrl: "https://github.com/username/fitness-tracker",
    duration: "5 months",
    role: "Mobile Developer",
    featured: false,
    challenges: [
      "Creating smooth animations on mobile devices",
      "Managing offline data synchronization",
      "Integrating with various fitness APIs",
      "Optimizing performance for older devices"
    ],
    solutions: [
      "Used React Native Reanimated for 60fps animations",
      "Implemented Redux Persist for offline capabilities",
      "Created unified API layer for multiple integrations",
      "Added performance monitoring and optimization"
    ]
  },
  {
    id: 5,
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for business analytics with real-time data visualization and customizable reports.",
    longDescription: `A powerful business intelligence dashboard that transforms complex data into actionable insights through interactive visualizations and real-time analytics.

Dashboard features:
• Real-time data streaming and updates
• Interactive charts and graphs with D3.js
• Customizable dashboard layouts
• Advanced filtering and drill-down capabilities
• Automated report generation
• Multi-tenant architecture
• Export functionality for presentations

This project showcases expertise in data visualization, real-time systems, and creating intuitive interfaces for complex business data.`,
    image: "/images/project5.jpg",
    images: [
      "/images/project5-1.jpg",
      "/images/project5-2.jpg",
      "/images/project5-3.jpg"
    ],
    technologies: ["D3.js", "React", "Express", "PostgreSQL", "Socket.io", "Chart.js", "PDF.js"],
    category: "Data Viz",
    liveUrl: "https://example-dashboard.com",
    githubUrl: "https://github.com/username/data-dashboard",
    duration: "4 months",
    role: "Frontend Developer",
    featured: true,
    challenges: [
      "Rendering large datasets without performance issues",
      "Creating responsive visualizations for all screen sizes",
      "Implementing real-time data updates",
      "Designing intuitive data exploration interfaces"
    ],
    solutions: [
      "Implemented data virtualization and lazy loading",
      "Used responsive D3.js patterns and SVG optimization",
      "Added WebSocket connections for live data streams",
      "Created guided tour and contextual help system"
    ]
  },
  {
    id: 6,
    title: "Blockchain Voting System",
    description: "Decentralized voting platform built on Ethereum with smart contracts ensuring transparency and security.",
    longDescription: `A secure, transparent voting system built on the Ethereum blockchain, ensuring immutable vote records and complete transparency in the electoral process.

System features:
• Smart contract-based vote recording
• Voter identity verification system
• Real-time vote counting and results
• Transparent audit trail
• Mobile-friendly voting interface
• Multi-language support
• Administrative dashboard for election management

This project demonstrates blockchain development skills, smart contract security, and creating user-friendly interfaces for complex decentralized systems.`,
    image: "/images/project6.jpg",
    images: [
      "/images/project6-1.jpg",
      "/images/project6-2.jpg",
      "/images/project6-3.jpg"
    ],
    technologies: ["Solidity", "Web3.js", "React", "Ethereum", "Truffle", "MetaMask", "IPFS"],
    category: "Blockchain",
    liveUrl: "https://example-voting.com",
    githubUrl: "https://github.com/username/blockchain-voting",
    duration: "6 months",
    role: "Blockchain Developer",
    featured: false,
    challenges: [
      "Ensuring smart contract security and gas optimization",
      "Creating user-friendly Web3 interactions",
      "Managing blockchain transaction costs",
      "Implementing scalable vote counting mechanisms"
    ],
    solutions: [
      "Conducted thorough security audits and testing",
      "Built intuitive MetaMask integration flows",
      "Implemented batch processing for cost efficiency",
      "Used layer 2 solutions for scalability"
    ]
  }
];

export default projects;