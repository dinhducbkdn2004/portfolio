import React, { useState, useEffect } from 'react';
import ModeToggle from '../../ModeToggle';
import LanguageToggle from '../../LanguageToggle';
import { useLanguage } from '../../../context/LanguageContext';
import ME from '../../../static/data/me';

export default function PanelSection() {
    const { language } = useLanguage();
    const ui = ME.ui[language];
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('overview');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = [
                'overview',
                'about',
                'skills',
                'experience',
                'projects',
            ];
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && window.scrollY >= section.offsetTop - 100) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-10 backdrop-blur-md border-b transition-all duration-300 
            ${
                scrolled
                    ? 'bg-background/95 shadow-md border-primary/10'
                    : 'bg-background/80 border-d-border'
            }`}
        >
            <div className="mx-auto max-w-4xl flex justify-between items-center p-4">
                <div
                    className={`font-medium transition-all duration-300 ${
                        scrolled ? 'text-primary' : ''
                    }`}
                >
                    Portfolio
                </div>
                <div className="hidden md:flex gap-6">
                    <a
                        href="#overview"
                        className={`transition-all duration-300 hover:text-primary relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 
                        ${
                            activeSection === 'overview'
                                ? 'text-primary after:w-full'
                                : 'after:w-0 hover:after:w-full'
                        }`}
                    >
                        {ui.overview}
                    </a>
                    <a
                        href="#about"
                        className={`transition-all duration-300 hover:text-primary relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 
                        ${
                            activeSection === 'about'
                                ? 'text-primary after:w-full'
                                : 'after:w-0 hover:after:w-full'
                        }`}
                    >
                        {ui.about}
                    </a>
                    <a
                        href="#skills"
                        className={`transition-all duration-300 hover:text-primary relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 
                        ${
                            activeSection === 'skills'
                                ? 'text-primary after:w-full'
                                : 'after:w-0 hover:after:w-full'
                        }`}
                    >
                        {ui.skills}
                    </a>
                    <a
                        href="#experience"
                        className={`transition-all duration-300 hover:text-primary relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 
                        ${
                            activeSection === 'experience'
                                ? 'text-primary after:w-full'
                                : 'after:w-0 hover:after:w-full'
                        }`}
                    >
                        {ui.experience}
                    </a>
                    <a
                        href="#projects"
                        className={`transition-all duration-300 hover:text-primary relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 
                        ${
                            activeSection === 'projects'
                                ? 'text-primary after:w-full'
                                : 'after:w-0 hover:after:w-full'
                        }`}
                    >
                        {ui.projects}
                    </a>
                </div>
                <div className="flex items-center gap-2">
                    <LanguageToggle />
                    <ModeToggle />
                </div>
            </div>
        </nav>
    );
}
