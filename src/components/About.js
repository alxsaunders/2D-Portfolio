// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, education } from '../data/projects';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    About Me
                </motion.h2>

                <div className="about-content">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="about-text"
                    >
                        <div className="about-profile">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="profile-image-container"
                            >
                                <img
                                    src={personalInfo.profileImage}
                                    alt={personalInfo.name}
                                    className="profile-image"
                                />
                            </motion.div>

                            <div className="about-intro">
                                <h3>Software Engineer & Designer</h3>
                                <p>{personalInfo.bio}</p>
                            </div>
                        </div>

                        {/* <div className="about-details">
                            <div className="detail-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>{personalInfo.location}</span>
                            </div>
                            <div className="detail-item">
                                <i className="fas fa-envelope"></i>
                                <span>{personalInfo.email}</span>
                            </div>
                            <div className="detail-item">
                                <i className="fas fa-phone"></i>
                                <span>{personalInfo.phone}</span>
                            </div>
                        </div> */}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="about-education"
                    >
                        <h3>Education</h3>
                        <div className="education-list">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="education-item"
                                >
                                    <div className="education-year">{edu.year}</div>
                                    <div className="education-content">
                                        <h4>{edu.degree}</h4>
                                        <p>{edu.school}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;