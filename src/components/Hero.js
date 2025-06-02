// src/components/Hero.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// Remove the import and use public URL instead

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="home" className="hero">
            {/* Video Background */}
            <div className="video-background">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="background-video"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        minWidth: '100%',
                        minHeight: '100%',
                        width: 'auto',
                        height: 'auto',
                        transform: 'translate(-50%, -50%)',
                        objectFit: 'cover',
                        zIndex: -1
                    }}
                >
                    <source src={`${process.env.PUBLIC_URL}/videos/video.mp4`} type="video/mp4" />
                </video>
                <div className="video-overlay"></div>
            </div>

            {/* Parallax Elements */}
            <motion.div
                className="parallax-element circle-1"
                animate={{
                    x: mousePosition.x * 0.1,
                    y: mousePosition.y * 0.1
                }}
                transition={{ type: "spring", stiffness: 50 }}
            />
            <motion.div
                className="parallax-element circle-2"
                animate={{
                    x: mousePosition.x * -0.05,
                    y: mousePosition.y * -0.05
                }}
                transition={{ type: "spring", stiffness: 30 }}
            />
            <motion.div
                className="parallax-element square-1"
                animate={{
                    x: mousePosition.x * 0.08,
                    y: mousePosition.y * 0.08
                }}
                transition={{ type: "spring", stiffness: 40 }}
            />

            {/* Main Content */}
            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="hero-text"
                >
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="hero-title"
                    >
                        Alex Saunders
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="hero-subtitle-container"
                    >
                        <h2 className="hero-subtitle">
                            Software Engineer<span className="separator">/</span>Designer
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.6 }}
                        className="hero-description"
                    >
                        Creating innovative digital experiences through code and design
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 2 }}
                        className="hero-buttons"
                    >
                        <a href="#projects" className="btn btn-primary">
                            View My Work
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Get In Touch
                        </a>
                    </motion.div>
                </motion.div>

                {/* Floating Social Icons */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 2.4 }}
                    className="social-links"
                >
                    <a
                        href="https://github.com/alxsaunders"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/alex-saunders-665729238/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3 }}
                className="scroll-indicator"
            >
                <div className="scroll-arrow">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p>Scroll to explore</p>
            </motion.div>
        </section>
    );
};

export default Hero;