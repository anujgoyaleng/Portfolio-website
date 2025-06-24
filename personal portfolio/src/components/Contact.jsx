import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'anuj@example.com',
      href: 'mailto:anuj@example.com'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'San Francisco, CA',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      href: 'https://github.com/anuj',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/anuj',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Twitter size={24} />,
      label: 'Twitter',
      href: 'https://twitter.com/anuj',
      color: 'hover:text-blue-400'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // This will be replaced with actual backend call later
      // For now, simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Let's Start a Conversation
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you're a company looking to hire, or you're a fellow developer 
                  wanting to collaborate, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-4 p-4 bg-slate-50 dark:bg-dark-800 rounded-lg border border-slate-200 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
                  >
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-slate-900 dark:text-white font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-900 dark:text-white font-medium">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="pt-8 border-t border-slate-200 dark:border-dark-700">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-slate-100 dark:bg-dark-800 rounded-lg text-slate-600 dark:text-slate-400 ${social.color} transition-colors border border-slate-200 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-600`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-slate-50 dark:bg-dark-800 rounded-2xl p-8 border border-slate-200 dark:border-dark-700">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Send Me a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-dark-900 border border-slate-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-dark-900 border border-slate-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white dark:bg-dark-900 border border-slate-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 resize-vertical"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  {/* Submit Status */}
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center space-x-2 p-3 rounded-lg ${
                        submitStatus === 'success'
                          ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                          : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                      }`}
                    >
                      {submitStatus === 'success' ? (
                        <CheckCircle size={20} />
                      ) : (
                        <AlertCircle size={20} />
                      )}
                      <span className="text-sm">
                        {submitStatus === 'success'
                          ? 'Message sent successfully! I\'ll get back to you soon.'
                          : 'Failed to send message. Please try again.'}
                      </span>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 