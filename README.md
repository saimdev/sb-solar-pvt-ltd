# Solar Energy Website - SBSolar Clone

A complete replica of the SBSolar Solar Energy website built with React, Vite, Tailwind CSS, and Lucide React Icons.

## Features

- ✨ Modern, responsive design
- 🎨 Beautiful UI with Tailwind CSS
- ⚡ Fast performance with Vite
- 🎯 Lucide React icons throughout
- 📱 Mobile-first approach
- 🔄 Smooth animations and transitions
- 💼 Professional sections:
  - Hero with stats
  - About Us
  - Services showcase
  - Work Process
  - Expert Team
  - Client Testimonials
  - Portfolio/Projects
  - Latest Blog
  - Newsletter subscription
  - Footer with social links

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Project Structure

```
solar-energy-website/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Process.jsx
│   │   ├── Team.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Blog.jsx
│   │   ├── Newsletter.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  primary: '#0ea5e9',    // Blue
  secondary: '#f59e0b',  // Amber
  accent: '#10b981',     // Green
}
```

### Content

- Update text content in individual component files
- Replace images with your own (currently using Unsplash placeholders)
- Modify sections in `src/App.jsx`

## Components Overview

- **Header**: Sticky navigation with mobile menu
- **Hero**: Full-screen hero section with CTA
- **About**: Company introduction with features
- **Services**: Grid of solar energy services
- **Process**: Step-by-step work process
- **Team**: Team member showcase
- **Testimonials**: Client testimonial carousel
- **Portfolio**: Filterable project gallery
- **Blog**: Latest blog posts grid
- **Newsletter**: Email subscription form
- **Footer**: Multi-column footer with links

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a demo project created for educational purposes.

## Credits

- Design inspired by SBSolar WordPress Theme by Case-Themes
- Icons by Lucide React
- Images from Unsplash
