import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github, Twitter, Send, MapPin } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real implementation, this would send the form data
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ns4483382@gmail.com',
      href: 'mailto:ns4483382@gmail.com',
      gradient: 'from-[#00FFFF] to-[#0066FF]',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7011393407',
      href: 'tel:+917011393407',
      gradient: 'from-[#8A2BE2] to-[#FF00FF]',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'G-182C East Jawahar Nagar, Loni Ghaziabad, UP 201102',
      href: '#',
      gradient: 'from-[#FF00FF] to-[#00FFFF]',
    },
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/naveen-singh-5865382a4', color: '#0077B5' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/Naveen001-max', color: '#ffffff' },
    { icon: Twitter, label: 'Twitter', href: '#', color: '#1DA1F2' },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#00FFFF]/10 rounded-full blur-[150px]"
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
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
            I'm always open to discussing new opportunities and ideas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-gradient-to-br from-[#1a1a2e]/80 to-[#0A0A0A]/80 border-white/10 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-300 mb-2 block">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-[#0A0A0A]/50 border-white/10 text-white placeholder:text-gray-500 focus:border-[#00FFFF] focus:ring-2 focus:ring-[#00FFFF]/20 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-300 mb-2 block">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-[#0A0A0A]/50 border-white/10 text-white placeholder:text-gray-500 focus:border-[#00FFFF] focus:ring-2 focus:ring-[#00FFFF]/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-gray-300 mb-2 block">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-[#0A0A0A]/50 border-white/10 text-white placeholder:text-gray-500 focus:border-[#00FFFF] focus:ring-2 focus:ring-[#00FFFF]/20 transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-300 mb-2 block">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-[#0A0A0A]/50 border-white/10 text-white placeholder:text-gray-500 focus:border-[#00FFFF] focus:ring-2 focus:ring-[#00FFFF]/20 transition-all resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] hover:from-[#8A2BE2] hover:to-[#FF00FF] text-white border-0 shadow-lg shadow-[#00FFFF]/50 group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="block"
                >
                  <Card className="p-6 bg-gradient-to-br from-[#1a1a2e]/60 to-[#0A0A0A]/60 border-white/10 backdrop-blur-sm hover:border-[#00FFFF]/50 transition-all duration-300 group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <motion.div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <info.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                        <p className="text-white group-hover:text-[#00FFFF] transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <Card className="p-8 bg-gradient-to-br from-[#1a1a2e]/60 to-[#0A0A0A]/60 border-white/10 backdrop-blur-sm">
              <h3 className="text-xl text-white mb-6">Connect With Me</h3>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (index * 0.1), type: "spring" }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="aspect-square rounded-xl bg-white/5 border border-white/10 hover:border-[#00FFFF] flex items-center justify-center text-gray-400 hover:text-[#00FFFF] transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00FFFF]/0 to-[#8A2BE2]/0 group-hover:from-[#00FFFF]/10 group-hover:to-[#8A2BE2]/10 transition-all duration-300" />
                    <social.icon className="w-6 h-6 relative z-10" />
                  </motion.a>
                ))}
              </div>
            </Card>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Card className="p-6 bg-gradient-to-r from-[#00FFFF]/10 to-[#8A2BE2]/10 border-[#00FFFF]/30 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-3 h-3 bg-green-400 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <div>
                    <p className="text-white">Currently Available</p>
                    <p className="text-sm text-gray-400">for freelance projects and collaborations</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}