"use client";

import { motion } from "framer-motion";
import { Download, Instagram, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { personal } from "@/data/site-data";

const iconMap = {
  Instagram,
  Linkedin,
  Github,
  Mail,
};

export function About() {
  const handleResumeDownload = () => {
    // In a real app, this would download the actual resume
    window.open(personal.resumeUrl, "_blank");
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, passion, and the technologies I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <Card className="card-gradient card-hover border-0 p-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  {personal.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                  {personal.summary}
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  I specialize in creating responsive, user-friendly interfaces and have experience 
                  working with modern frameworks and libraries. My goal is to write clean, 
                  maintainable code while delivering exceptional user experiences.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={handleResumeDownload}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume
                    </Button>
                  </motion.div>
                </div>

                <div className="flex justify-center md:justify-start space-x-4">
                  {personal.socials.map((social) => {
                    const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary transition-all duration-300"
                      >
                        <IconComponent className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative z-10"
              >
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden card-hover bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <img src={personal.photo} alt={personal.name} className="w-full h-full object-cover" />
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}