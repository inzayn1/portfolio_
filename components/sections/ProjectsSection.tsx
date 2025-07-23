'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Star, Users, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Yelp-Camp",
      description: "This application is a comprehensive solution for managing and hosting campgrounds, offering a range of features designed to enhance the user experience and streamline the process of camp management.The back-end is developed using JavaScript and the Express.js framework, which provides the necessary functionality for full CRUD (Create, Read, Update, Delete) operations.",
      image: "https://github.com/user-attachments/assets/db7c4344-3621-4db9-ac1a-429ef7282c86",
      tech: ["HTML", "Node.js", "express.js", "MongoDB", "Bootstrap"],
      githubUrl: "https://github.com/inzayn1/yelp-camp",
      
      featured: true,
      category: "Full Stack"
    },
    {
      title: "To-do's List",
      description: "This React-based to-do list app allows users to manage their daily tasks efficiently. Users can add, delete, and mark tasks as completed. The app stores tasks in the browser's local storage, ensuring they persist across sessions. Additionally, the app displays the current date and time, providing a complete overview of the day's activities. With a clean and responsive interface, this to-do list app is a practical tool for staying organized.",
      image: "https://github.com/user-attachments/assets/ae510511-713d-4907-b62a-28cf5579aa76",
      tech: ["HTML", "CSS", "BOOTSTRAP", "REACT"],
      githubUrl: "https://github.com/inzayn1/todolist-reactjs",
      liveUrl: "https://todolistreact-aman.netlify.app/",
      featured: true,
      category: "Web App"
    },
    {
      title: "Netflic-Clone",
      description: "Created a Netflix-style movie streaming website as a personal project, featuring a modern and user-friendly design. The platform allows users to browse, search, and view movie details, with content dynamically displayed to mimic a real streaming experience. Focused on clean visuals, smooth navigation, and overall user experience to closely resemble the feel of the original Netflix platform.",
      image: "https://github.com/user-attachments/assets/ddd428ed-0af0-4c89-994d-05141007e708",
      tech: [ "html", "javascript", "React" , "tailwind css"],
      githubUrl: "https://github.com/inzayn1/netflix-clone/tree/master/nefflix-clone-main",
      liveUrl: "",
      featured: true,
      category: "Mobile"
    },
  ];

  const filteredProjects = projects;

  return (
    <section id="projects" className="section-spacing bg-gray-800/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center content-spacing"
        >
          <h2 className="heading-xl text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="body-lg text-gray-300 max-w-3xl mx-auto">
            A collection of projects that showcase my technical skills and passion for creating 
            impactful solutions. Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        

        {/* Projects Grid */}
        <div className="grid-container grid-2">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="professional-card overflow-hidden h-full">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full caption font-medium">
                      Featured
                    </div>
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Action Buttons */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="btn-secondary caption"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="btn-primary caption"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="subheading-md text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="caption bg-primary/20 text-primary px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="body-md text-gray-300 mb-4">
                    {project.description}
                  </p>

                 
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded caption"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="btn-primary"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}