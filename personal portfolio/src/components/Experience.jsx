import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "TechStart Inc.",
      location: "San Francisco, CA",
      duration: "Jan 2023 - Present",
      type: "Full-time",
      description: [
        "Led development of a scalable e-commerce platform serving 100K+ users using React, Node.js, and MongoDB",
        "Implemented microservices architecture reducing system response time by 40%",
        "Mentored 3 junior developers and established code review processes",
        "Built real-time analytics dashboard using Socket.io and Chart.js"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "AWS", "Docker", "TypeScript"],
      companyUrl: "https://techstart.com"
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "WebSolutions Co.",
      location: "Remote",
      duration: "Mar 2022 - Dec 2022",
      type: "Full-time",
      description: [
        "Developed and maintained 5+ client websites using the MERN stack",
        "Integrated third-party APIs and payment gateways (Stripe, PayPal)",
        "Optimized database queries resulting in 60% faster page load times",
        "Collaborated with UI/UX designers to implement responsive designs"
      ],
      technologies: ["React.js", "Express.js", "MySQL", "TailwindCSS", "Git"],
      companyUrl: "https://websolutions.com"
    },
    {
      id: 3,
      title: "Frontend Developer Intern",
      company: "StartupLab",
      location: "New York, NY",
      duration: "Jun 2021 - Feb 2022",
      type: "Internship",
      description: [
        "Built responsive web applications using React.js and modern CSS frameworks",
        "Participated in daily standups and sprint planning meetings",
        "Wrote unit tests achieving 85% code coverage",
        "Contributed to open-source projects and internal component library"
      ],
      technologies: ["React.js", "JavaScript", "CSS3", "Jest", "Figma"],
      companyUrl: "https://startuplab.com"
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="section-padding bg-slate-50 dark:bg-dark-800">
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
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              My professional journey and the amazing teams I've worked with to build impactful solutions.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px bg-slate-300 dark:bg-dark-600"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary-600 rounded-full border-4 border-white dark:border-dark-800 z-10"></div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-dark-700 hover:shadow-xl transition-shadow"
                    >
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            exp.type === 'Full-time' 
                              ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                              : 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
                          }`}>
                            {exp.type}
                          </span>
                          <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                            <Calendar size={14} className="mr-1" />
                            {exp.duration}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-primary-600 dark:text-primary-400">
                            <Building size={16} className="mr-2" />
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium hover:underline"
                            >
                              {exp.company}
                            </a>
                            <ExternalLink size={14} className="ml-1" />
                          </div>
                          <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                            <MapPin size={14} className="mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-slate-600 dark:text-slate-400 text-sm flex items-start">
                            <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-slate-100 dark:bg-dark-800 text-slate-700 dark:text-slate-300 text-xs rounded border border-slate-200 dark:border-dark-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's connect and see how we can create something amazing together.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary inline-flex items-center gap-2"
            >
              <ExternalLink size={20} />
              Get In Touch
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 