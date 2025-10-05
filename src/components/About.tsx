import { motion } from 'motion/react';
import { GraduationCap, Calendar } from 'lucide-react';
import { Card } from './ui/card';

export function About() {
  const education = [
    {
      year: 'Mar 2022 - Mar 2023',
      title: '12th Grade',
      institution: 'Flora Dale Sr. Sec School, Dilshad Garden',
      description: 'Completed Higher Secondary Education',
      status: 'completed',
    },
    {
      year: 'Sep 2023 - Sep 2027',
      title: 'B.Tech (AI & DS)',
      institution: 'IIMT College Of Engineering, Greater Noida',
      description: 'Currently pursuing Bachelor of Technology specializing in Artificial Intelligence and Data Science',
      status: 'ongoing',
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0f0f1e] to-[#0A0A0A]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-gradient-to-br from-[#1a1a2e]/80 to-[#0A0A0A]/80 border-white/10 backdrop-blur-sm hover:border-[#00FFFF]/50 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl text-[#00FFFF]">
                    My Journey
                  </h3>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  I'm Naveen Singh, an innovative Python developer with a strong foundation in Artificial Intelligence 
                  and Data Science, eager to apply technical skills to enhance software solutions. Born on May 23, 2005, 
                  I'm currently pursuing my B.Tech from IIMT College of Engineering, Greater Noida.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Adept at writing efficient, clean code and collaborating with cross-functional teams to deliver 
                  high-quality projects. Proactive software engineer specializing in Python development with a background 
                  in AI and Data Science. Excellent at integrating machine learning models into real-world applications 
                  and improving system efficiency through innovative coding practices and thorough debugging.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  As a passionate and driven Python Developer Intern, I bring strong problem-solving abilities, a solid 
                  foundation in Python programming, and a keen interest in backend development, automation, and AI integration. 
                  I am ready to learn new technologies and frameworks, take ownership of tasks, and contribute meaningfully 
                  to team goals. With a proactive mindset and a passion for continuous learning, I aim to grow into a 
                  full-stack or AI-focused developer role in the future.
                </p>

                <div className="flex flex-wrap gap-3 pt-4">
                  {['Problem Solver', 'Team Player', 'Quick Learner', 'Innovation Focused'].map((trait, index) => (
                    <motion.span
                      key={trait}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="px-4 py-2 bg-gradient-to-r from-[#00FFFF]/10 to-[#8A2BE2]/10 border border-[#00FFFF]/30 rounded-full text-sm text-[#00FFFF]"
                    >
                      {trait}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right Column - Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl text-[#8A2BE2]">
                Education Timeline
              </h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00FFFF] via-[#8A2BE2] to-[#FF00FF]" />

              <div className="space-y-8">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-16"
                  >
                    {/* Timeline dot */}
                    <motion.div
                      className={`absolute left-3 w-6 h-6 rounded-full border-4 ${
                        item.status === 'ongoing'
                          ? 'bg-[#00FFFF] border-[#00FFFF]/30 shadow-lg shadow-[#00FFFF]/50'
                          : 'bg-[#8A2BE2] border-[#8A2BE2]/30 shadow-lg shadow-[#8A2BE2]/50'
                      }`}
                      animate={
                        item.status === 'ongoing'
                          ? {
                              scale: [1, 1.2, 1],
                              opacity: [1, 0.8, 1],
                            }
                          : {}
                      }
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    <Card className="p-6 bg-gradient-to-br from-[#1a1a2e]/60 to-[#0A0A0A]/60 border-white/10 backdrop-blur-sm hover:border-[#8A2BE2]/50 transition-all duration-300 hover:transform hover:-translate-y-1">
                      <div className="flex items-start justify-between mb-2">
                        <span className="px-3 py-1 bg-gradient-to-r from-[#8A2BE2]/20 to-[#FF00FF]/20 border border-[#8A2BE2]/30 rounded-full text-sm text-[#8A2BE2]">
                          {item.year}
                        </span>
                        {item.status === 'ongoing' && (
                          <motion.span
                            className="px-3 py-1 bg-[#00FFFF]/20 border border-[#00FFFF]/30 rounded-full text-sm text-[#00FFFF]"
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            Ongoing
                          </motion.span>
                        )}
                      </div>
                      <h4 className="text-xl text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-[#8A2BE2] text-sm mb-2">
                        {item.institution}
                      </p>
                      <p className="text-gray-400">
                        {item.description}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
