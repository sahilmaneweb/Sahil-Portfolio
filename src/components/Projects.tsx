"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/site-data";
import realEstateImg from "/images/projects/File.png";
import ecommerceImg from "/images/projects/Kitsune.png";
import taskManagerImg from "/images/projects/Fsd.png";

const projectImages: { [key: string]: string } = {
  "real-estate": realEstateImg,
  "ecommerce": ecommerceImg,
  "task-manager": taskManagerImg,
};

export function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, from web applications to interactive experiences
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card className="card-gradient card-hover border-0 h-full flex flex-col overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={projectImages[project.id]}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>
                </CardHeader>
                
                <CardContent className="p-6 flex-1 flex flex-col">
                  <CardTitle className="text-xl mb-2 text-foreground">
                    {project.title}
                  </CardTitle>
                  
                  <CardDescription className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </CardDescription>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link, index) => (
                      <motion.div
                        key={link.name}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant={index === 0 ? "default" : "outline"}
                          size="sm"
                          className={index === 0 
                            ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                            : "border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                          }
                          onClick={() => window.open(link.url, "_blank")}
                        >
                          {link.name.includes("GitHub") ? (
                            <Github className="w-3 h-3 mr-1" />
                          ) : (
                            <ExternalLink className="w-3 h-3 mr-1" />
                          )}
                          {link.name}
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}