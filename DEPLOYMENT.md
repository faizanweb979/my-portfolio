# Deployment Guide

This guide covers different deployment options for your premium developer portfolio.

## 🚀 Quick Deploy Options

### Vercel (Recommended)
Vercel offers the best experience for React applications with automatic deployments.

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Configure Domain** (Optional)
   - Add custom domain in Vercel dashboard
   - Update DNS settings

### Netlify
Great alternative with drag-and-drop deployment option.

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy via CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=build
   ```

3. **Or drag-and-drop**
   - Go to [netlify.com](https://netlify.com)
   - Drag the `build` folder to deploy

### GitHub Pages
Free hosting directly from your GitHub repository.

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 🔧 Pre-Deployment Checklist

### 1. Content Updates
- [ ] Replace all placeholder text with your information
- [ ] Add your actual project data in `src/data/projects.js`
- [ ] Update social media links in `src/config/portfolio.js`
- [ ] Add your resume PDF to `public/resume/`
- [ ] Replace placeholder images with your actual photos

### 2. SEO Optimization
- [ ] Update meta tags in `public/index.html`
- [ ] Add Open Graph image (`public/images/og-image.jpg`)
- [ ] Configure `src/config/portfolio.js` SEO settings
- [ ] Add Google Analytics ID (optional)

### 3. Performance Optimization
- [ ] Optimize all images (use WebP format)
- [ ] Test loading speed with Lighthouse
- [ ] Enable gzip compression on server
- [ ] Add service worker for caching (optional)

### 4. Testing
- [ ] Test on different devices and browsers
- [ ] Verify all links work correctly
- [ ] Check form submission (if using contact form)
- [ ] Test animations on slower devices

## 📱 Mobile Optimization

### Responsive Testing
Test on these breakpoints:
- Mobile: 375px (iPhone SE)
- Mobile Large: 414px (iPhone Pro Max)
- Tablet: 768px (iPad)
- Desktop: 1024px+

### Performance Tips
- Reduce animation complexity on mobile
- Optimize images for different screen densities
- Test on 3G network speeds

## 🔒 Security Considerations

### Environment Variables
For production deployments with backend integration:

1. **Create `.env.production`**
   ```
   REACT_APP_API_URL=https://your-api.com
   REACT_APP_CONTACT_ENDPOINT=https://your-form-handler.com
   ```

2. **Configure in hosting platform**
   - Vercel: Add in dashboard settings
   - Netlify: Add in site settings
   - Others: Follow platform documentation

### Contact Form Security
If implementing a contact form backend:
- Use CORS properly
- Implement rate limiting
- Validate all inputs
- Use HTTPS only
- Consider using services like Formspree or Netlify Forms

## 🌐 Custom Domain Setup

### DNS Configuration
1. **A Records** (for root domain)
   ```
   @ -> Your hosting provider's IP
   ```

2. **CNAME Records** (for www subdomain)
   ```
   www -> your-site.vercel.app
   ```

### SSL Certificate
Most modern hosting providers (Vercel, Netlify) provide automatic SSL certificates.

## 📊 Analytics Setup

### Google Analytics 4
1. Create GA4 property
2. Add measurement ID to `src/config/portfolio.js`
3. Implement tracking in components (optional)

### Performance Monitoring
Consider adding:
- Google PageSpeed Insights monitoring
- Lighthouse CI for continuous testing
- Real User Monitoring (RUM)

## 🔄 Continuous Deployment

### GitHub Actions (Example)
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'
```

## 🐛 Troubleshooting

### Common Issues

1. **Build Fails**
   - Check for TypeScript errors
   - Verify all imports are correct
   - Ensure all dependencies are installed

2. **Images Not Loading**
   - Check file paths are correct
   - Ensure images are in `public` folder
   - Verify image formats are supported

3. **Animations Not Working**
   - Check GSAP license for commercial use
   - Verify ScrollTrigger is properly imported
   - Test on different browsers

4. **Contact Form Issues**
   - Verify form endpoint is correct
   - Check CORS configuration
   - Test form validation

### Performance Issues
- Use React DevTools Profiler
- Implement code splitting
- Optimize bundle size with webpack-bundle-analyzer
- Consider lazy loading for heavy components

## 📞 Support

If you encounter issues during deployment:

1. Check the hosting provider's documentation
2. Review browser console for errors
3. Test locally with `npm run build && npx serve -s build`
4. Contact hosting support if needed

---

**Happy Deploying! 🚀**