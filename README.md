# Premium Developer Portfolio

A modern, highly animated, 3D-inspired developer portfolio built with React, Tailwind CSS, Framer Motion, and GSAP. This portfolio showcases a clean, premium design with smooth animations and responsive layouts.

## 🚀 Features

- **Modern Design**: Dark premium theme with glassmorphism effects
- **Smooth Animations**: GSAP ScrollTrigger and Framer Motion for premium interactions
- **3D Effects**: CSS 3D transforms and perspective animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Efficient animations and lazy loading
- **Accessible**: WCAG compliant with proper focus management
- **Clean Code**: Well-commented, reusable components

## 🛠 Tech Stack

- **Frontend**: React 19, JavaScript ES6+
- **Styling**: Tailwind CSS, Custom CSS
- **Animations**: Framer Motion, GSAP, ScrollTrigger
- **Routing**: React Router DOM
- **Build Tool**: Create React App
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   └── Header.jsx          # Navigation with hamburger menu
│   ├── home/
│   │   └── Hero.jsx            # Hero section with 3D text
│   ├── about/
│   │   └── About.jsx           # About section with scroll reveals
│   ├── skills/
│   │   ├── Skills.jsx          # Skills section with dynamic card
│   │   └── SkillCard.jsx       # Interactive skill showcase
│   ├── projects/
│   │   ├── Projects.jsx        # Projects grid with animations
│   │   └── ProjectCard.jsx     # Individual project cards
│   ├── visual-proof/
│   │   └── VisualProof.jsx     # Workflow videos section
│   ├── contact/
│   │   └── Contact.jsx         # Contact form and information
│   └── common/
│       ├── CtaButton.jsx       # Reusable CTA button
│       └── SocialIcons.jsx     # Social media icons
├── pages/
│   ├── HomePage.jsx            # Main portfolio page
│   └── ProjectDetail.jsx       # Individual project details
├── data/
│   └── projects.js             # Centralized project data
├── App.js                      # Main app component
└── App.css                     # Global styles and animations
```

## 🎨 Design System

### Colors
- **Background**: Deep navy (#0f172a)
- **Primary**: Refined blue (#3b82f6)
- **Text Primary**: Off-white (#f1f5f9)
- **Text Secondary**: Muted gray-blue (#94a3b8)

### Typography
- **Font**: Inter (system fallbacks included)
- **Hierarchy**: Clear heading scales with proper contrast

### Components
- **Buttons**: Soft rounded edges with hover lift and glow
- **Cards**: Glassmorphism effects with subtle shadows
- **Animations**: Smooth easing with purposeful motion

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/premium-portfolio.git
   cd premium-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 📝 Customization Guide

### 1. Personal Information
Update the following files with your information:

- `src/components/home/Hero.jsx` - Name and title
- `src/components/about/About.jsx` - Personal description
- `src/components/contact/Contact.jsx` - Contact details
- `src/components/common/SocialIcons.jsx` - Social media links

### 2. Projects
Edit `src/data/projects.js` to add your projects:

```javascript
{
  id: 1,
  title: "Your Project Title",
  description: "Brief description",
  longDescription: "Detailed description...",
  technologies: ["React", "Node.js", "etc"],
  category: "Full Stack",
  liveUrl: "https://your-project.com",
  githubUrl: "https://github.com/you/project",
  // ... more fields
}
```

### 3. Skills
Update `src/components/skills/Skills.jsx` with your skills:

```javascript
const skills = [
  {
    title: "Your Skill",
    description: "Description of your expertise",
    technologies: ["Tech1", "Tech2"],
    icon: "🎨",
    color: "from-blue-500 to-cyan-500"
  }
];
```

### 4. Images
Replace placeholder images in the `public/images/` directory:
- Project screenshots
- Developer photo for hero section
- Any additional assets

### 5. Resume
Add your resume PDF to `public/resume/` and update the download link in the About section.

## 🎯 Performance Tips

- **Images**: Optimize all images (WebP format recommended)
- **Animations**: Use `will-change` CSS property sparingly
- **Lazy Loading**: Implement for images and heavy components
- **Bundle Size**: Analyze with `npm run build` and optimize imports

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1440px
- **Large Desktop**: 1440px+

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Framer Motion** - For smooth React animations
- **GSAP** - For advanced scroll-triggered animations
- **Tailwind CSS** - For utility-first styling
- **Uiverse.io** - Inspiration for social icons
- **Vercel/Apple** - Design inspiration for navigation

## 📞 Support

If you have any questions or need help customizing the portfolio:

- Create an issue on GitHub
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile]

---

**Built with ❤️ by [Your Name]**