// src/components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/projects';

const Skills = () => {
    const skillCategories = {
        'Frontend': ['JavaScript', 'React.js', 'HTML/CSS', 'Bootstrap', 'Three.js'],
        'Backend': ['Node.js', 'Express.js', 'Python', 'REST APIs'],
        'Database': ['MySQL', 'MongoDB'],
        'Design': ['PhotoShop', 'Video Editing', 'Animation'],
        'Programming': ['C++', 'C#']
    };

    const getSkillIcon = (skill) => {
        const icons = {
            'JavaScript': '⚡',
            'React.js': '⚛️',
            'Node.js': '🟢',
            'Python': '🐍',
            'MySQL': '🗄️',
            'MongoDB': '🍃',
            'HTML/CSS': '🎨',
            'PhotoShop': '🖼️',
            'Three.js': '🌐',
            'C++': '⚙️',
            'C#': '💻'
        };
        return icons[skill] || '🔧';
    };

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Skills & Technologies
                </motion.h2>

                <div className="skills-grid">
                    {Object.entries(skillCategories).map(([category, categorySkills], categoryIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                            viewport={{ once: true }}
                            className="skill-category"
                        >
                            <h3>{category}</h3>
                            <div className="skills-list">
                                {categorySkills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: (categoryIndex * 0.2) + (skillIndex * 0.1)
                                        }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05 }}
                                        className="skill-item"
                                    >
                                        <span className="skill-icon">{getSkillIcon(skill)}</span>
                                        <span className="skill-name">{skill}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Interactive Skills Cloud */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="skills-cloud"
                >
                    <h3>All Technologies</h3>
                    <div className="cloud-container">
                        {skills.map((skill, index) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.2,
                                    color: "#4ecdc4",
                                    transition: { duration: 0.2 }
                                }}
                                className="cloud-skill"
                                style={{
                                    fontSize: `${Math.random() * 0.5 + 1}rem`,
                                    animationDelay: `${index * 0.1}s`
                                }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;