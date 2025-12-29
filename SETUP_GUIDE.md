# Quick Setup Guide

## Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

## Getting Started

### 1. Navigate to Project Directory
```bash
cd solar-energy-website
```

### 2. Install Dependencies
```bash
npm install
```

This will install:
- React 18
- Vite
- Tailwind CSS
- Lucide React Icons
- All necessary dev dependencies

### 3. Run Development Server
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### 4. Build for Production
```bash
npm run build
```

Production files will be in the `dist` folder.

### 5. Preview Production Build
```bash
npm run preview
```

## Project Features

### ✅ Complete Sections
1. **Header** - Sticky navigation with mobile menu
2. **Hero** - Full-screen hero with stats and CTAs
3. **About** - Company overview with image gallery
4. **Services** - 6 service cards with hover effects
5. **Process** - 4-step work process visualization
6. **Team** - Team member profiles with social links
7. **Testimonials** - Client testimonial slider
8. **Portfolio** - Filterable project gallery
9. **Blog** - Latest blog posts with metadata
10. **Newsletter** - Email subscription form
11. **Footer** - Comprehensive footer with links

### 🎨 Design Features
- Gradient backgrounds
- Smooth animations
- Hover effects
- Responsive design
- Modern color scheme (Green accent)
- Beautiful typography

### 📱 Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Customization Tips

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#your-color',
  secondary: '#your-color',
  accent: '#your-color',
}
```

### Update Images
Replace Unsplash URLs in components with your own images:
- Hero.jsx
- About.jsx
- Services.jsx
- Team.jsx
- Portfolio.jsx
- Blog.jsx
- Footer.jsx

### Modify Content
Each component file contains the content for that section.
Edit the text, titles, and descriptions directly in the component files.

### Add/Remove Sections
Edit `src/App.jsx` to add or remove sections from the page.

## Troubleshooting

### Port Already in Use
If port 5173 is in use:
```bash
npm run dev -- --port 3000
```

### Dependencies Not Installing
Try clearing npm cache:
```bash
npm cache clean --force
npm install
```

### Build Errors
Make sure all dependencies are installed:
```bash
rm -rf node_modules
npm install
```

## Performance Tips
- Images are optimized via Unsplash CDN
- Tailwind CSS is purged in production
- Vite provides fast HMR in development
- Code splitting is automatic with Vite

## Deployment

### Netlify
```bash
npm run build
# Deploy the 'dist' folder
```

### Vercel
```bash
npm run build
# Deploy the 'dist' folder
```

### GitHub Pages
```bash
npm run build
# Push the 'dist' folder to gh-pages branch
```

## Support
For issues or questions, refer to:
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

Enjoy building your solar energy website! ☀️
