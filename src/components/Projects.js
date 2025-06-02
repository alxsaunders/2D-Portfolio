// src/components/Projects.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const Projects = () => {
    const [filter, setFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.type === filter);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    My Projects
                </motion.h2>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="filter-buttons"
                >
                    <button
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        All Projects
                    </button>
                    <button
                        className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
                        onClick={() => setFilter('web')}
                    >
                        Web Apps
                    </button>
                    <button
                        className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`}
                        onClick={() => setFilter('mobile')}
                    >
                        Mobile Apps
                    </button>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className="projects-grid"
                    layout
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="project-card"
                            onClick={() => openModal(project)}
                        >
                            <div className="project-image">
                                <img 
                                    src={`${process.env.PUBLIC_URL}${project.image}`} 
                                    alt={project.title} 
                                />
                                <div className="project-overlay">
                                    <div className="project-icons">
                                        {project.icons.map((icon, i) => (
                                            <span key={i} className="project-icon">{icon}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-type">
                                    <span className={`type-badge ${project.type}`}>
                                        {project.type === 'web' ? '🌐 Web App' : '📱 Mobile App'}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Project Modal */}
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="modal-overlay"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="modal-content"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="modal-close" onClick={closeModal}>
                                <i className="fas fa-times"></i>
                            </button>

                            <div className="modal-header">
                                <img 
                                    src={`${process.env.PUBLIC_URL}${selectedProject.image}`} 
                                    alt={selectedProject.title} 
                                />
                                <div className="modal-title-section">
                                    <h2>{selectedProject.title}</h2>
                                    <p className="modal-subtitle">{selectedProject.description}</p>
                                    <div className="modal-icons">
                                        {selectedProject.icons.map((icon, i) => (
                                            <span key={i} className="modal-icon">{icon}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="modal-body">
                                <p>{selectedProject.longDescription}</p>

                                <div className="modal-technologies">
                                    <h4>Technologies Used:</h4>
                                    <div className="tech-list">
                                        {selectedProject.technologies.map((tech, i) => (
                                            <span key={i} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="modal-links">
                                    {selectedProject.github !== '#' && (
                                        <a
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="modal-btn github-btn"
                                        >
                                            <i className="fab fa-github"></i> View Code
                                        </a>
                                    )}
                                    {selectedProject.deployed && selectedProject.deployed !== '#' && (
                                        <a
                                            href={selectedProject.deployed}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="modal-btn live-btn"
                                        >
                                            <i className="fas fa-external-link-alt"></i> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects;