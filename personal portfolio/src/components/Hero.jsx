import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const Hero = () => {
  const handleDownloadResume = () => {
    // You can replace this with the actual resume file path
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Anuj_FullStack_Developer_Resume.pdf';
    link.click();
  };

  const handleContactMe = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-dark-900 dark:to-dark-800">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary-600 font-medium text-lg mb-4"
            >
              👋 Hello there! I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6"
            >
              <span className="text-gradient">Anuj</span>
              <br />
              <span className="text-slate-700 dark:text-slate-300">Full Stack Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl"
            >
              I craft innovative web applications using the MERN stack, bringing ideas to life 
              with clean code, modern design, and seamless user experiences. 
              Let's build something amazing together!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <button
                onClick={handleDownloadResume}
                className="btn-primary inline-flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </button>
              <button
                onClick={handleContactMe}
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Mail size={20} />
                Contact Me
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center lg:justify-start space-x-6"
            >
              <a
                href="https://github.com/anuj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-500 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/anuj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-500 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com/anuj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-500 transition-colors"
              >
                <ExternalLink size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-80 h-80 lg:w-96 lg:h-96"
              >
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full opacity-20 blur-xl"></div>
                
                {/* Profile image container */}
                <div className="relative w-full h-full bg-gradient-to-br from-primary-500 to-blue-600 rounded-full p-2">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Anuj - Full Stack Developer"
                    className="w-full h-full object-cover rounded-full border-4 border-white dark:border-dark-800"
                  />
                </div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white shadow-lg"
                >
                  ⚡
                </motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg"
                >
                  🚀
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-slate-400 dark:bg-slate-600 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 