# 🚀 Anuj - Full Stack Developer Portfolio

A modern, responsive portfolio website built with React.js, showcasing my skills, projects, and professional experience as a Full Stack Developer.

![Portfolio Preview](https://via.placeholder.com/800x400/3b82f6/white?text=Portfolio+Preview)

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes with persistence
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive Elements**: Hover effects and micro-interactions
- **Contact Form**: Functional contact form (ready for backend integration)
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI Library with functional components and hooks
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Framer Motion** - Animation library for smooth transitions
- **Lucide React** - Beautiful, customizable icons
- **Vite** - Fast development build tool

### Tools & Libraries
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
personal portfolio/
├── public/
│   ├── vite.svg
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   └── Projects.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Sections

### 1. **Hero Section**
- Personal introduction and tagline
- Call-to-action buttons (Download Resume, Contact Me)
- Profile image with animated elements
- Social media links

### 2. **About Section**
- Personal biography and journey
- Technical skills organized by categories
- Professional statistics
- Technologies and tools expertise

### 3. **Experience Section**
- Professional work history timeline
- Detailed role descriptions and achievements
- Technology stacks used in each role
- Company information and duration

### 4. **Projects Section**
- Featured project showcase
- Project descriptions and technologies
- Live demo and GitHub repository links
- GitHub statistics integration

### 5. **Contact Section**
- Contact form with validation
- Contact information cards
- Social media profiles
- Location and availability status

### 6. **Footer**
- Additional navigation links
- Social media links
- Copyright information
- Back to top functionality

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio-website.git
   cd portfolio-website/personal\ portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit `http://localhost:5173` to view the portfolio

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🎛️ Customization

### Personal Information
Update the following files to customize with your information:

1. **src/components/Hero.jsx** - Name, title, and introduction
2. **src/components/About.jsx** - Biography, skills, and statistics
3. **src/components/Experience.jsx** - Work history and achievements
4. **src/components/Projects.jsx** - Portfolio projects
5. **src/components/Contact.jsx** - Contact information
6. **index.html** - Meta tags and title

### Styling
- **Colors**: Modify `tailwind.config.js` for custom color schemes
- **Fonts**: Update font imports in `src/index.css`
- **Animations**: Adjust Framer Motion settings in components

### Content
- **Resume**: Replace `public/resume.pdf` with your actual resume
- **Images**: Update image URLs in components
- **Social Links**: Update social media profiles throughout the site

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Import the project
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Deploy!

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Other Platforms
The built files in the `dist` directory can be deployed to any static hosting service.

## 🔧 Performance Optimizations

- **Code Splitting**: Automatic code splitting with Vite
- **Image Optimization**: Optimized images and proper sizing
- **Bundle Analysis**: Use `npm run build` to analyze bundle size
- **Lazy Loading**: Components load as needed
- **Caching**: Proper caching headers for static assets

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Anuj** - Full Stack Developer
- Email: anuj@example.com
- LinkedIn: [linkedin.com/in/anuj](https://linkedin.com/in/anuj)
- GitHub: [github.com/anuj](https://github.com/anuj)
- Portfolio: [anuj.dev](https://anuj.dev)

---

⭐ If you found this portfolio template helpful, please give it a star on GitHub!

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for beautiful animations
- [Lucide](https://lucide.dev/) for the icon library
- [Unsplash](https://unsplash.com/) for placeholder images
- [Vite](https://vitejs.dev/) for the fast build tool
