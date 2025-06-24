import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      href: 'https://github.com/anuj',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/anuj',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Twitter size={20} />,
      label: 'Twitter',
      href: 'https://twitter.com/anuj',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Mail size={20} />,
      label: 'Email',
      href: 'mailto:anuj@example.com',
      color: 'hover:text-primary-600'
    }
  ];

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 dark:bg-dark-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
              <h3 className="text-2xl font-bold">Anuj</h3>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Full Stack Developer passionate about creating digital experiences that matter. 
              Building the future, one line of code at a time.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 bg-slate-800 dark:bg-dark-800 rounded-lg text-slate-400 ${social.color} transition-colors border border-slate-700 dark:border-dark-700 hover:border-primary-500`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-3 text-slate-400">
              <p>San Francisco, CA</p>
              <a
                href="mailto:anuj@example.com"
                className="block hover:text-white transition-colors"
              >
                anuj@example.com
              </a>
              <a
                href="tel:+15551234567"
                className="block hover:text-white transition-colors"
              >
                +1 (555) 123-4567
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 dark:border-dark-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-400 text-sm flex items-center gap-2"
            >
              © {currentYear} Anuj. Made with{' '}
              <Heart size={16} className="text-red-500" fill="currentColor" />
              {' '}and lots of ☕
            </motion.p>

            <div className="flex items-center space-x-6">
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <ArrowUp size={16} />
                <span>Back to Top</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 