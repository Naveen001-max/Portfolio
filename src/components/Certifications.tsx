import { motion } from 'motion/react';
import { Award, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import tataCertificate from 'figma:asset/70208497c8778df638cb61b35d516f687b411f7e.png';
import deloitteCertificate from 'figma:asset/b61fb93db5d2699a587c7ec41492c24b9b6a50cf.png';

export function Certifications() {
  const certifications = [
    {
      title: 'GenAI Powered Data Analytics Job Simulation',
      issuer: 'Tata (Forage)',
      date: 'August 2025',
      description: 'Completed practical tasks in exploratory data analysis and risk profiling, predicting delinquency with AI, business report and data storytelling for collections strategy, and implementing an AI-driven collections strategy.',
      skills: ['Generative AI', 'Data Analytics', 'Python', 'Risk Profiling', 'AI Implementation'],
      link: '#',
      color: 'from-[#00FFFF] to-[#0066FF]',
      image: tataCertificate,
    },
    {
      title: 'Data Analytics Job Simulation',
      issuer: 'Deloitte (Forage)',
      date: 'August 2025',
      description: 'Successfully completed practical tasks in data analysis and forensic technology as part of Deloitte\'s data analytics virtual experience program.',
      skills: ['Data Analysis', 'Forensic Technology', 'Business Intelligence', 'Data Visualization'],
      link: '#',
      color: 'from-[#8A2BE2] to-[#FF00FF]',
      image: deloitteCertificate,
    },
  ];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8A2BE2]/10 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

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
            <Award className="w-8 h-8 text-[#00FFFF]" />
            <h2 className="text-4xl md:text-5xl">
              <span className="bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="group relative bg-gradient-to-br from-[#1a1a2e]/80 to-[#0A0A0A]/80 border-white/10 backdrop-blur-sm hover:border-[#00FFFF]/50 transition-all duration-300 overflow-hidden h-full flex flex-col p-6 hover:transform hover:-translate-y-2">
                {/* Decorative gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Certificate Image (if available) */}
                  {cert.image && (
                    <motion.div
                      className="mb-4 rounded-lg overflow-hidden border border-white/10 hover:border-[#00FFFF]/50 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={cert.image}
                        alt={`${cert.title} Certificate`}
                        className="w-full h-auto object-cover"
                      />
                    </motion.div>
                  )}

                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Award className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <motion.div
                      className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-400">Verified</span>
                    </motion.div>
                  </div>

                  {/* Title and Issuer */}
                  <div className="mb-4">
                    <h3 className="text-xl text-white mb-2 group-hover:text-[#00FFFF] transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400">
                      <span className={`bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>
                        {cert.issuer}
                      </span>
                      <span>•</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 flex-1">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Skills Demonstrated:</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index * 0.2) + (skillIndex * 0.05) }}
                        >
                          <Badge
                            variant="outline"
                            className="border-white/20 text-gray-300 hover:border-[#00FFFF]/50 hover:text-[#00FFFF] transition-colors"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* View Certificate Button */}
                  <Button
                    className={`w-full bg-gradient-to-r ${cert.color} border-0 text-white hover:opacity-90 group/btn`}
                    onClick={() => window.open(cert.link, '_blank')}
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00FFFF]/10 to-[#8A2BE2]/10 border border-[#00FFFF]/30 rounded-full">
            <div className="w-2 h-2 bg-[#00FFFF] rounded-full animate-pulse" />
            <span className="text-gray-300">Continuously learning and earning new certifications</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}