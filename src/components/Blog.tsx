import { motion } from 'motion/react';
import { BookOpen, Clock, ArrowRight, TrendingUp } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export function Blog() {
  const blogPosts = [
    {
      title: 'The Future of AI in Data Analytics',
      excerpt: 'Exploring how artificial intelligence is revolutionizing the way we analyze and interpret data, and what it means for the future of business intelligence.',
      category: 'AI & ML',
      readTime: '5 min read',
      date: 'Oct 2024',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
      link: '#',
      gradient: 'from-[#00FFFF] to-[#0066FF]',
    },
    {
      title: 'Building Intelligent Dashboards with Python',
      excerpt: 'A comprehensive guide to creating interactive and intelligent data visualization dashboards using Python, Plotly, and modern web frameworks.',
      category: 'Tutorial',
      readTime: '8 min read',
      date: 'Sep 2024',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      link: '#',
      gradient: 'from-[#8A2BE2] to-[#FF00FF]',
    },
    {
      title: 'Machine Learning Best Practices for 2024',
      excerpt: 'Essential tips and best practices for implementing machine learning solutions in production environments, from data preprocessing to model deployment.',
      category: 'Best Practices',
      readTime: '6 min read',
      date: 'Aug 2024',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop',
      link: '#',
      gradient: 'from-[#FF00FF] to-[#00FFFF]',
    },
  ];

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0f0f1e] to-[#0A0A0A]" />
      <motion.div
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#00FFFF]/10 rounded-full blur-[120px]"
        animate={{
          y: [0, 50, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
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
            <BookOpen className="w-8 h-8 text-[#00FFFF]" />
            <h2 className="text-4xl md:text-5xl">
              <span className="bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] bg-clip-text text-transparent">
                Latest Articles
              </span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Thoughts, insights, and tutorials on AI, data science, and software development
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="group bg-gradient-to-br from-[#1a1a2e]/80 to-[#0A0A0A]/80 border-white/10 backdrop-blur-sm hover:border-[#00FFFF]/50 transition-all duration-300 overflow-hidden h-full flex flex-col hover:transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-30 group-hover:opacity-40 transition-opacity duration-300`} />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className={`bg-gradient-to-r ${post.gradient} border-0 text-white`}>
                      {post.category}
                    </Badge>
                  </div>

                  {/* Trending Indicator for first post */}
                  {index === 0 && (
                    <motion.div
                      className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-red-500/80 backdrop-blur-sm rounded-full text-white text-sm"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <TrendingUp className="w-3 h-3" />
                      <span>Trending</span>
                    </motion.div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl text-white mb-3 group-hover:text-[#00FFFF] transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 mb-4 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More Button */}
                  <Button
                    variant="ghost"
                    className="w-full justify-between text-gray-300 hover:text-[#00FFFF] hover:bg-[#00FFFF]/10 group/btn"
                    onClick={() => window.open(post.link, '_blank')}
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Decorative corner gradient */}
                <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${post.gradient} opacity-0 group-hover:opacity-10 rounded-tr-full transition-opacity duration-300`} />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF]/10 hover:border-[#8A2BE2] hover:text-[#8A2BE2] group"
            onClick={() => window.open('#', '_blank')}
          >
            <span>View All Articles</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-[#00FFFF]/10 via-[#8A2BE2]/10 to-[#FF00FF]/10 border-white/10 backdrop-blur-sm p-8 md:p-12 text-center">
            <BookOpen className="w-12 h-12 text-[#00FFFF] mx-auto mb-4" />
            <h3 className="text-2xl text-white mb-2">
              Subscribe to my Newsletter
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Get the latest articles, tutorials, and insights delivered directly to your inbox.
              Join the community of developers and data enthusiasts!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-[#0A0A0A]/50 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00FFFF] transition-colors"
              />
              <Button
                className="bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] hover:from-[#8A2BE2] hover:to-[#FF00FF] text-white border-0 px-8"
              >
                Subscribe
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}