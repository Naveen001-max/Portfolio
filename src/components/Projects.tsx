import { motion } from 'motion/react';
import { Github, ExternalLink, Sparkles } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function Projects() {
  const projects = [
    {
      title: 'Jarvis AI Assistant',
      description: 'An intelligent AI assistant built with Python that can perform various tasks including voice commands, data processing, API integrations, and automation. Features natural language processing and multi-functional capabilities.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
      tags: ['Python', 'AI', 'NLP', 'APIs', 'Voice Recognition'],
      github: '#',
      demo: '#',
      gradient: 'from-[#00FFFF] to-[#0066FF]',
    },
    {
      title: 'Data Visualization Dashboards',
      description: 'Interactive and insightful dashboards created using Tableau and Power BI. These dashboards transform complex datasets into actionable insights with beautiful visualizations, filters, and real-time data updates.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      tags: ['Tableau', 'Power BI', 'Data Analytics', 'SQL', 'Excel'],
      github: '#',
      demo: '#',
      gradient: 'from-[#8A2BE2] to-[#FF00FF]',
    },
    {
      title: 'Image & Video Data Analysis',
      description: 'Comprehensive data analysis project utilizing Python libraries like Seaborn, Matplotlib, and Pandas to analyze and visualize patterns in image and video datasets. Includes statistical analysis and predictive modeling.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      tags: ['Python', 'Seaborn', 'Matplotlib', 'Pandas', 'Computer Vision'],
      github: '#',
      demo: '#',
      gradient: 'from-[#FF00FF] to-[#00FFFF]',
    },
    {
      title: 'Machine Learning Pipeline',
      description: 'End-to-end machine learning pipeline for predictive analytics. Includes data preprocessing, feature engineering, model training, evaluation, and deployment. Built with Scikit-learn and optimized for performance.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop',
      tags: ['Python', 'Scikit-learn', 'ML', 'Data Science', 'Deployment'],
      github: '#',
      demo: '#',
      gradient: 'from-[#0066FF] to-[#8A2BE2]',
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background */}
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
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-[#00FFFF]" />
            <h2 className="text-4xl md:text-5xl">
              <span className="bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <Sparkles className="w-8 h-8 text-[#8A2BE2]" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore my latest work in AI, data analytics, and software development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="group bg-gradient-to-br from-[#1a1a2e]/80 to-[#0A0A0A]/80 border-white/10 backdrop-blur-sm hover:border-[#00FFFF]/50 transition-all duration-300 overflow-hidden h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                  
                  {/* Hover Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Button
                      size="sm"
                      className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className={`bg-gradient-to-r ${project.gradient} border-0 text-white`}
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl text-white mb-3 group-hover:text-[#00FFFF] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.2) + (tagIndex * 0.05) }}
                      >
                        <Badge
                          variant="outline"
                          className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent border-white/20 hover:border-[#00FFFF]/50 transition-colors`}
                        >
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  {/* Desktop Action Buttons */}
                  <div className="hidden md:flex gap-3 pt-4 border-t border-white/10">
                    <Button
                      variant="outline"
                      className="flex-1 border-white/20 text-gray-300 hover:border-[#00FFFF] hover:text-[#00FFFF] hover:bg-[#00FFFF]/10"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button
                      className={`flex-1 bg-gradient-to-r ${project.gradient} border-0 text-white hover:opacity-90`}
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Demo
                    </Button>
                  </div>

                  {/* Mobile Action Buttons */}
                  <div className="flex md:hidden gap-3 pt-4 border-t border-white/10">
                    <Button
                      size="icon"
                      variant="outline"
                      className="border-white/20 text-gray-300 hover:border-[#00FFFF] hover:text-[#00FFFF]"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button
                      className={`flex-1 bg-gradient-to-r ${project.gradient} border-0 text-white`}
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Demo
                    </Button>
                  </div>
                </div>

                {/* Decorative corner gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`} />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Want to see more?</p>
          <Button
            size="lg"
            variant="outline"
            className="border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF]/10 hover:border-[#8A2BE2] hover:text-[#8A2BE2]"
            onClick={() => window.open('#', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            Visit My GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}