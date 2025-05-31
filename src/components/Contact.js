// src/components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/projects';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center' }}
                >
                    Let's Work Together
                </motion.h2>

                <div className="contact-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="contact-info"
                        style={{ maxWidth: '600px', textAlign: 'center', width: '100%' }}
                    >
                        <h3>Get In Touch</h3>
                        <p>
                            I'm always interested in new opportunities and exciting projects.
                            Whether you have a question or just want to say hi, feel free to reach out!
                        </p>

                        <div className="contact-details" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', marginTop: '2rem' }}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="contact-item"
                                style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                            >
                                <i className="fas fa-envelope"></i>
                                <div style={{ textAlign: 'left' }}>
                                    <h4>Email</h4>
                                    <p>{personalInfo.email}</p>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="contact-item"
                                style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                            >
                                <i className="fas fa-phone"></i>
                                <div style={{ textAlign: 'left' }}>
                                    <h4>Phone</h4>
                                    <p>{personalInfo.phone}</p>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="contact-item"
                                style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                            >
                                <i className="fas fa-map-marker-alt"></i>
                                <div style={{ textAlign: 'left' }}>
                                    <h4>Location</h4>
                                    <p>{personalInfo.location}</p>
                                    <small>(willing to relocate/preferably remote)</small>
                                </div>
                            </motion.div>
                        </div>

                        <div className="contact-social" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
                            <a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-btn"
                            >
                                <i className="fab fa-github"></i>
                                GitHub
                            </a>
                            <a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-btn"
                            >
                                <i className="fab fa-linkedin"></i>
                                LinkedIn
                            </a>
                            <a
                                href="/images/AlexSaundersResume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-btn"
                            >
                                <i className="fas fa-file-pdf"></i>
                                Resume
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center' }}
                    >
                        © 2025 Alex Saunders
                    </motion.p>
                </div>
            </footer>
        </section>
    );
};

export default Contact;