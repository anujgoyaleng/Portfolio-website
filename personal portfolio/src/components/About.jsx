import { motion } from 'framer-motion';
import { Code2, Database, Globe, Server, Smartphone, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      technologies: ["React.js", "Next.js", "JavaScript ES6+", "TypeScript", "Tailwind CSS", "HTML5/CSS3"]
    },
    {
      category: "Backend",
      icon: <Server className="w-6 h-6" />,
      technologies: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "JWT Auth", "Socket.io"]
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6" />,
      technologies: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Firebase", "Mongoose"]
    },
    {
      category: "Tools & Others",
      icon: <Code2 className="w-6 h-6" />,
      technologies: ["Git/GitHub", "Docker", "AWS", "Vercel", "Postman", "VS Code"]
    },
    {
      category: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ["React Native", "Expo", "Flutter", "Progressive Web Apps"]
    },
    {
      category: "DevOps",
      icon: <Zap className="w-6 h-6" />,
      technologies: ["CI/CD", "Nginx", "Linux", "Cloud Services", "API Testing"]
    }
  ];

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
    <section id="about" className="section-padding bg-white dark:bg-dark-900">
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
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Passionate about creating digital experiences that make a difference
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Bio Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                My Journey
              </h3>
              
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  Hello! I'm Anuj, a passionate full-stack developer with over 3 years of experience 
                  in creating digital solutions that bridge the gap between idea and reality. My journey 
                  in tech started with curiosity about how websites work, and it has evolved into a 
                  deep love for building scalable, user-centric applications.
                </p>
                
                <p>
                  I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and have 
                  a keen eye for modern design principles. Whether it's crafting pixel-perfect user 
                  interfaces or architecting robust backend systems, I thrive on solving complex 
                  problems with elegant solutions.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or sharing my knowledge through tech blogs and community 
                  meetups. I believe in continuous learning and staying updated with the latest 
                  industry trends.
                </p>
                
                <p>
                  I'm always excited to work on projects that challenge me to grow and make a 
                  positive impact. Let's connect and build something amazing together!
                </p>
              </div>

              {/* Quick Stats */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 dark:border-dark-700"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">3+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">∞</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Coffee Cups</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Skills Grid */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                Technical Skills
              </h3>
              
              <motion.div 
                variants={containerVariants}
                className="grid gap-6"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.category}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="bg-slate-50 dark:bg-dark-800 rounded-xl p-6 border border-slate-200 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                        {skill.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {skill.category}
                      </h4>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white dark:bg-dark-700 text-slate-700 dark:text-slate-300 text-sm rounded-full border border-slate-200 dark:border-dark-600 hover:border-primary-300 dark:hover:border-primary-500 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 