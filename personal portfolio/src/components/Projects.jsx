import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration. Features include admin dashboard, order tracking, and real-time notifications.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe", "Socket.io"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/anuj/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.anuj.dev",
      featured: true,
      stats: { stars: 124, forks: 42 }
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and deadline tracking.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "TailwindCSS", "Socket.io"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/anuj/task-manager",
      liveUrl: "https://taskflow.anuj.dev",
      featured: true,
      stats: { stars: 89, forks: 23 }
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts, interactive maps, weather alerts, and historical data visualization using Chart.js.",
      technologies: ["React.js", "Chart.js", "OpenWeather API", "Mapbox", "TailwindCSS"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/anuj/weather-dashboard",
      liveUrl: "https://weather.anuj.dev",
      featured: false,
      stats: { stars: 56, forks: 18 }
    },
    {
      id: 4,
      title: "Social Media API",
      description: "RESTful API for a social media platform with user authentication, post management, real-time messaging, and advanced search functionality.",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary", "Redis"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/anuj/social-api",
      liveUrl: "https://api-docs.anuj.dev",
      featured: false,
      stats: { stars: 73, forks: 31 }
    },
    {
      id: 5,
      title: "Learning Management System",
      description: "A comprehensive LMS platform with course creation, student enrollment, progress tracking, quiz system, and video streaming capabilities.",
      technologies: ["React.js", "Node.js", "MongoDB", "AWS S3", "FFmpeg", "WebRTC"],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/anuj/lms-platform",
      liveUrl: "https://learn.anuj.dev",
      featured: true,
      stats: { stars: 198, forks: 67 }
    },
    {
      id: 6,
      title: "Crypto Portfolio Tracker",
      description: "Real-time cryptocurrency portfolio tracker with price alerts, market analysis, and portfolio performance insights using WebSocket connections.",
      technologies: ["Vue.js", "Node.js", "CoinGecko API", "WebSocket", "Chart.js"],
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/anuj/crypto-tracker",
      liveUrl: "https://crypto.anuj.dev",
      featured: false,
      stats: { stars: 45, forks: 12 }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              A showcase of my recent work and side projects that demonstrate my skills 
              in full-stack development, UI/UX design, and problem-solving.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className={`bg-white dark:bg-dark-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-dark-700 ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Project Links Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white dark:bg-dark-800 rounded-full text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors shadow-lg"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white dark:bg-dark-800 rounded-full text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors shadow-lg"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Project Title & Stats */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <Star size={12} />
                        {project.stats.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork size={12} />
                        {project.stats.forks}
                      </div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-md border border-primary-200 dark:border-primary-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-dark-700">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Projects Button */}
          <motion.div 
            variants={cardVariants}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/anuj"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Github size={20} />
              View More on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 