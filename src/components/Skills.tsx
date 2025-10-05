import { motion } from 'motion/react';
import { Code2, BarChart3, Wrench } from 'lucide-react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';

export function Skills() {
  const skillCategories = [
    {
      category: 'Programming',
      icon: Code2,
      color: 'from-[#00FFFF] to-[#0066FF]',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'SQL', level: 85 },
        { name: 'HTML/CSS', level: 80 },
        { name: 'JavaScript', level: 75 },
      ],
    },
    {
      category: 'Data Visualization',
      icon: BarChart3,
      color: 'from-[#8A2BE2] to-[#FF00FF]',
      skills: [
        { name: 'Tableau', level: 85 },
        { name: 'Power BI', level: 80 },
        { name: 'Excel', level: 90 },
        { name: 'Matplotlib/Seaborn', level: 85 },
      ],
    },
    {
      category: 'Tools & Frameworks',
      icon: Wrench,
      color: 'from-[#FF00FF] to-[#00FFFF]',
      skills: [
        { name: 'Jupyter Notebook', level: 90 },
        { name: 'Git/GitHub', level: 85 },
        { name: 'Pandas/NumPy', level: 85 },
        { name: 'Scikit-learn', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0A0A0A]" />
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-[#00FFFF]/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#8A2BE2]/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

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
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent solutions and transforming data into insights
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
            >
              <Card className="p-6 bg-gradient-to-br from-[#1a1a2e]/80 to-[#0A0A0A]/80 border-white/10 backdrop-blur-sm hover:border-[#00FFFF]/50 transition-all duration-300 h-full group hover:transform hover:-translate-y-2">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl text-white">
                    {category.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1), duration: 0.4 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">
                          {skill.name}
                        </span>
                        <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Custom Progress Bar */}
                      <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.2,
                            duration: 1,
                            ease: "easeOut"
                          }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/20"
                            animate={{
                              x: ['-100%', '100%'],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative corner gradient */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`} />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Also experienced with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Machine Learning',
              'Deep Learning',
              'Natural Language Processing',
              'Computer Vision',
              'REST APIs',
              'Data Mining',
              'Statistical Analysis',
              'Agile Development',
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + (index * 0.05) }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gradient-to-r from-[#00FFFF]/5 to-[#8A2BE2]/5 border border-white/10 rounded-full text-gray-300 hover:border-[#00FFFF]/50 hover:text-[#00FFFF] transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}