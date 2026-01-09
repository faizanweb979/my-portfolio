# Assets Directory

This directory contains static assets for the portfolio.

## Structure

```
assets/
├── images/
│   ├── hero/
│   │   └── developer-photo.jpg    # Your professional photo
│   ├── projects/
│   │   ├── project1.jpg           # Project screenshots
│   │   ├── project2.jpg
│   │   └── ...
│   └── icons/
│       └── favicon.ico
├── videos/
│   ├── react-workflow.mp4         # Coding workflow videos
│   └── gsap-animation.mp4
└── documents/
    └── resume.pdf                 # Your resume file
```

## Image Guidelines

### Project Screenshots
- **Format**: JPG or WebP for photos, PNG for graphics
- **Size**: 1200x800px minimum for project cards
- **Quality**: High quality but optimized for web
- **Naming**: Use descriptive names (e.g., `ecommerce-homepage.jpg`)

### Developer Photo
- **Format**: JPG or WebP
- **Size**: 400x400px minimum (square aspect ratio)
- **Style**: Professional, high-quality headshot
- **Background**: Clean, preferably solid color or subtle

### Icons and Graphics
- **Format**: SVG preferred, PNG as fallback
- **Size**: Vector graphics for scalability
- **Style**: Consistent with overall design theme

## Video Guidelines

### Workflow Videos
- **Format**: MP4 (H.264 codec)
- **Duration**: 1-3 minutes maximum
- **Size**: 1920x1080 or 1280x720
- **Audio**: Muted (videos should be silent)
- **Content**: Screen recordings of actual development work

## Optimization Tips

1. **Compress Images**: Use tools like TinyPNG or ImageOptim
2. **Use WebP**: Modern format with better compression
3. **Lazy Loading**: Implement for better performance
4. **CDN**: Consider using a CDN for faster loading
5. **Alt Text**: Always provide descriptive alt text

## Replacement Instructions

1. Replace all placeholder images with your actual content
2. Update file paths in components if you change naming
3. Ensure all images are optimized for web
4. Test loading performance after adding assets