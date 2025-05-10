import React, { useState, useEffect, useCallback } from 'react';
import ModeToggle from '../../ModeToggle';
import LanguageToggle from '../../LanguageToggle';
import { useLanguage } from '../../../context/LanguageContext';
import ME from '../../../static/data/me';

export default function PanelSection() {
    const { language } = useLanguage();
    const ui = ME.ui[language];
    const [scrolled, setScrolled] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState('overview');
    const [mounted, setMounted] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Typed text effect state
    const [typedText, setTypedText] = useState('');
    const [fullText, setFullText] = useState(
        language === 'vi'
            ? 'Xin chào, tôi là lập trình viên!'
            : 'Hello, I am a developer!'
    );
    const [typingIndex, setTypingIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Update text when language changes
    useEffect(() => {
        if (!mounted) return;

        const newText =
            language === 'vi'
                ? 'Xin chào, tôi là lập trình viên!'
                : 'Hello, I am a developer!';

        setFullText(newText);
        // Reset typing animation when language changes
        setTypedText('');
        setTypingIndex(0);
        setIsTyping(true);
    }, [language, mounted]);

    // Typing effect
    useEffect(() => {
        if (!mounted) return;

        let typingTimer;
        if (isTyping && typingIndex < fullText.length) {
            typingTimer = setTimeout(() => {
                setTypedText((prev) => prev + fullText.charAt(typingIndex));
                setTypingIndex((prev) => prev + 1);
            }, 100);
        } else if (typingIndex >= fullText.length) {
            // Pause at the end
            typingTimer = setTimeout(() => {
                setIsTyping(false);
                setTypingIndex(fullText.length - 1);
            }, 2000);
        } else if (!isTyping && typingIndex > 0) {
            // Backspace effect
            typingTimer = setTimeout(() => {
                setTypedText((prev) => prev.slice(0, -1));
                setTypingIndex((prev) => prev - 1);
            }, 50);
        } else if (!isTyping && typingIndex === 0) {
            // Restart typing
            typingTimer = setTimeout(() => {
                setIsTyping(true);
            }, 500);
        }

        return () => clearTimeout(typingTimer);
    }, [typingIndex, isTyping, fullText, mounted]);

    // Smooth scroll function
    const scrollToSection = useCallback((id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const navHeight = 80; // Chiều cao của navbar
        const y =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            navHeight;

        window.scrollTo({
            top: y,
            behavior: 'smooth',
        });
    }, []);

    // Handle scroll events
    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;
        setScrollY(currentScrollY);
        setScrolled(currentScrollY > 20);

        const sections = ['overview', 'about', 'skills', 'projects'];

        // Cải thiện phát hiện section hiện tại
        const viewportHeight = window.innerHeight;

        for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section) {
                const rect = section.getBoundingClientRect();
                // Phần tử được xem là đang hiển thị khi nó nằm trong 40% chiều cao viewport
                if (
                    rect.top <= viewportHeight * 0.4 &&
                    rect.bottom >= viewportHeight * 0.1
                ) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        }
    }, []);

    useEffect(() => {
        if (mounted) {
            window.addEventListener('scroll', handleScroll, { passive: true });
            handleScroll(); // Gọi một lần để thiết lập trạng thái ban đầu
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [mounted, handleScroll]);

    // Đóng mobile menu khi click vào link
    const handleMobileNavClick = (id) => {
        scrollToSection(id);
        setMobileMenuOpen(false);
    };

    if (!mounted) return null;

    return (
        <>
            {/* Navbar */}
            <nav
                className={`fixed top-0 left-0 right-0 z-10 backdrop-blur-md border-b transition-all duration-500 
                ${
                    scrolled
                        ? 'bg-background/95 shadow-md border-primary/10 py-2'
                        : 'bg-background/80 border-d-border py-4'
                }`}
            >
                <div className="mx-auto max-w-4xl flex justify-between items-center px-6">
                    <div
                        className={`font-semibold text-lg transition-all duration-500 ${
                            scrolled ? 'text-primary scale-95' : 'scale-100'
                        }`}
                    >
                        <span className="code-text">{'< Portfolio />'}</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex gap-6">
                        {['overview', 'about', 'skills', 'projects'].map(
                            (section) => (
                                <a
                                    key={section}
                                    href={`#${section}`}
                                    className={`transition-all duration-300 hover:text-primary relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 code-text text-sm 
                                ${
                                    activeSection === section
                                        ? 'text-primary after:w-full'
                                        : 'after:w-0 hover:after:w-full'
                                }`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(section);
                                    }}
                                >
                                    {ui[section]}
                                </a>
                            )
                        )}
                    </div>

                    <div className="flex items-center gap-3">
                        <LanguageToggle />
                        <ModeToggle />

                        {/* Hamburger button */}
                        <button
                            className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1.5 focus:outline-none"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            <span
                                className={`block w-6 h-0.5 bg-foreground transform transition duration-300 ease-in-out ${
                                    mobileMenuOpen
                                        ? 'rotate-45 translate-y-2'
                                        : ''
                                }`}
                            />
                            <span
                                className={`block w-6 h-0.5 bg-foreground transition duration-200 ${
                                    mobileMenuOpen ? 'opacity-0' : ''
                                }`}
                            />
                            <span
                                className={`block w-6 h-0.5 bg-foreground transform transition duration-300 ease-in-out ${
                                    mobileMenuOpen
                                        ? '-rotate-45 -translate-y-2'
                                        : ''
                                }`}
                            />
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                        mobileMenuOpen
                            ? 'max-h-60 opacity-100'
                            : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="flex flex-col space-y-3 py-3 px-6 bg-background/95 backdrop-blur-md border-t border-border">
                        {['overview', 'about', 'skills', 'projects'].map(
                            (section) => (
                                <a
                                    key={section}
                                    href={`#${section}`}
                                    className={`py-2 px-4 rounded-md transition-all duration-300 ${
                                        activeSection === section
                                            ? 'bg-primary/10 text-primary'
                                            : 'hover:bg-primary/5'
                                    }`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleMobileNavClick(section);
                                    }}
                                >
                                    {ui[section]}
                                </a>
                            )
                        )}
                    </div>
                </div>
            </nav>

            {/* Hero Section with Parallax Effect */}
            <div className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Dots Pattern */}
                <div
                    className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5"
                    style={{
                        transform: `translateY(${scrollY * 0.1}px)`,
                    }}
                ></div>

                {/* SVG D Animation */}
                <div
                    className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-5 dark:opacity-10"
                    style={{
                        transform: `scale(${1 + scrollY * 0.001}) translateY(${
                            scrollY * 0.05
                        }px)`,
                    }}
                >
                    <svg
                        className="w-[800px] h-[800px] text-primary"
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

                {/* Hero Content with Parallax Effect */}
                <div
                    className="container px-4 mx-auto relative z-10"
                    style={{
                        transform: `translateY(${scrollY * 0.3}px)`,
                        opacity: Math.max(0, 1 - scrollY * 0.002),
                        transition: 'transform 0.1s ease-out',
                    }}
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
                            {ME.name}
                        </h1>
                        <div className="h-16 flex justify-center items-center">
                            <h2 className="text-xl md:text-3xl font-medium text-foreground code-text relative">
                                {typedText}
                                <span className="animate-pulse">|</span>
                            </h2>
                        </div>
                        <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
                            {language === 'vi' ? ME.shortBioVi : ME.shortBioEn}
                        </p>

                        <div className="mt-10 animate-float">
                            <a
                                href="#overview"
                                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-medium text-lg hover:scale-105 active:scale-95"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('overview');
                                }}
                            >
                                {language === 'vi' ? 'Khám phá' : 'Explore'}
                                <svg
                                    className="ml-2 w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Floating Elements with Parallax Effect */}
                <div
                    className="absolute top-1/4 left-10 w-16 h-16 bg-primary/20 rounded-full animate-float"
                    style={{
                        animationDelay: '0.5s',
                        transform: `translateY(${
                            scrollY * -0.2
                        }px) translateX(${scrollY * 0.05}px)`,
                    }}
                ></div>
                <div
                    className="absolute bottom-1/3 right-10 w-20 h-20 bg-purple-500/20 rounded-full animate-float"
                    style={{
                        animationDelay: '1.2s',
                        transform: `translateY(${
                            scrollY * -0.15
                        }px) translateX(${scrollY * -0.05}px)`,
                    }}
                ></div>
                <div
                    className="absolute top-1/3 right-1/4 w-8 h-8 bg-blue-500/20 rounded-full animate-float"
                    style={{
                        animationDelay: '0.8s',
                        transform: `translateY(${scrollY * -0.25}px)`,
                    }}
                ></div>
            </div>
        </>
    );
}
