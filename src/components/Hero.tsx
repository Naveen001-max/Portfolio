import { motion } from "motion/react";
import {
  Download,
  Mail,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "./ui/button";
import profileImage from 'figma:asset/9671a5d916b5777c0dada84d86a4afa8be171176.png';

export function Hero() {
  const handleDownloadResume = () => {
    // In real implementation, this would download the actual resume
    console.log("Download resume");
  };

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1a1a2e] to-[#0A0A0A]"></div>

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#00FFFF]/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#8A2BE2]/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#FF00FF]/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <motion.div
                className="inline-block px-4 py-2 bg-gradient-to-r from-[#00FFFF]/10 to-[#8A2BE2]/10 border border-[#00FFFF]/30 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <span className="bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] bg-clip-text text-transparent">
                  Welcome to my Portfolio
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-[#00FFFF] via-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent">
                  Innovative Python & AI Developer
                </span>
              </h1>

              <div className="h-1 w-32 bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] rounded-full" />

              <h2 className="text-xl md:text-2xl text-gray-300">
                Turning Data into Decisions
              </h2>

              <p className="text-gray-400 max-w-xl">
                Passionate about leveraging Python, AI, and Data
                Analytics to solve real-world problems.
                Specializing in machine learning, data
                visualization, and building intelligent systems
                that make an impact.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] hover:from-[#8A2BE2] hover:to-[#FF00FF] text-white border-0 shadow-lg shadow-[#00FFFF]/50 group"
                onClick={handleDownloadResume}
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF]/10 hover:border-[#8A2BE2] hover:text-[#8A2BE2]"
                onClick={scrollToContact}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              {[
                { icon: Github, href: "https://github.com/Naveen001-max", label: "GitHub" },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/naveen-singh-5865382a4",
                  label: "LinkedIn",
                },
                { icon: Twitter, href: "#", label: "Twitter" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00FFFF] hover:border-[#00FFFF] hover:shadow-lg hover:shadow-[#00FFFF]/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00FFFF] via-[#8A2BE2] to-[#FF00FF] blur-xl opacity-75 animate-pulse" />

              {/* Rotating gradient ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #00FFFF, #8A2BE2, #FF00FF, #00FFFF)",
                  padding: "4px",
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="w-full h-full rounded-full bg-[#0A0A0A]" />
              </motion.div>

              {/* Profile Image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#00FFFF]/50">
                <img
                  src={profileImage}
                  alt="Naveen Singh"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#00FFFF] rounded-full flex justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#00FFFF] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}