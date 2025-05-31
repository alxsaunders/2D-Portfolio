// src/components/Navigation.js
import React, { useState, useEffect } from 'react';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <a href="#home" className="nav-logo" onClick={closeMenu}>
                    AS
                </a>

                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li>
                        <a href="#home" className="nav-link" onClick={closeMenu}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="nav-link" onClick={closeMenu}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="nav-link" onClick={closeMenu}>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="nav-link" onClick={closeMenu}>
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="nav-link" onClick={closeMenu}>
                            Contact
                        </a>
                    </li>
                </ul>

                <button className="nav-toggle" onClick={toggleMenu}>
                    <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
            </div>
        </nav>
    );
};

export default Navigation;