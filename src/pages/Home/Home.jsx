import React, { useState, useEffect } from 'react';
import LinePattern from '../../components/patterns/LinePattern';
import AboutSection from '../../components/portfolio/about';
import ExperienceSection from '../../components/portfolio/experience';
import Footer from '../../components/portfolio/footer';
import OverviewSection from '../../components/portfolio/overview';
import PanelSection from '../../components/portfolio/panel';
import ProjectsSection from '../../components/portfolio/projects';
import TechStackSection from '../../components/portfolio/tech-stack';
import AnimatedSection from '../../components/AnimatedSection';

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const handleThemeChange = (e) => {
            setIsDarkMode(e.detail.theme === 'dark');
        };

        document.addEventListener('themeChange', handleThemeChange);

        const timer = setTimeout(() => {
            setLoading(false);

            const hash = window.location.hash;
            if (hash) {
                setTimeout(() => {
                    const element = document.getElementById(hash.substring(1));
                    if (element) {
                        const navHeight = 50;
                        const y =
                            element.getBoundingClientRect().top +
                            window.pageYOffset -
                            navHeight;
                        window.scrollTo({
                            top: y,
                            behavior: 'smooth',
                        });
                    }
                }, 100);
            }
        }, 2000);

        return () => {
            clearTimeout(timer);
            document.removeEventListener('themeChange', handleThemeChange);
        };
    }, []);

    if (loading) {
        return (
            <div
                className={`fixed inset-0 flex items-center justify-center bg-white dark:bg-[#0c0a1d] z-50 transition-all duration-500`}
            >
                <div className="flex flex-col items-center animate-fadeIn">
                    <div className="relative w-20 h-20">
                        <svg
                            className="w-full h-full text-primary"
                            viewBox="0 0 500 500"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M150 100C150 100 200 100 250 100C300 100 350 125 375 175C400 225 400 275 375 325C350 375 300 400 250 400C200 400 150 400 150 400L150 100Z"
                                stroke="currentColor"
                                strokeWidth="20"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                pathLength="1"
                                className="path-animation"
                            />
                        </svg>
                    </div>
                    <p className="mt-6 text-lg text-muted-foreground code-text">
                        Loading<span className="animate-pulse">...</span>
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen w-full pb-8 overflow-x-hidden">
            <div className="relative">
                <PanelSection />
            </div>

            <AnimatedSection delay={100} animation="fade-in">
                <LinePattern className="relative h-4" />
                <OverviewSection isDarkMode={isDarkMode} />
            </AnimatedSection>

            <AnimatedSection delay={200} animation="fade-up">
                <LinePattern className="relative h-4" />
                <AboutSection />
            </AnimatedSection>

            <AnimatedSection delay={300} animation="slide-in">
                <LinePattern className="relative h-4" />
                <TechStackSection isDarkMode={isDarkMode} />
            </AnimatedSection>

            <AnimatedSection delay={400} animation="zoom-in">
                <LinePattern className="relative h-4" />
                <ExperienceSection />
            </AnimatedSection>

            <AnimatedSection delay={500} animation="fade-up">
                <LinePattern className="relative h-4" />
                <ProjectsSection />
            </AnimatedSection>

            <AnimatedSection delay={600} animation="fade-in">
                <LinePattern className="relative h-4" />
                <Footer />
            </AnimatedSection>
        </div>
    );
}
