import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Target, Download } from 'lucide-react';
import ME from '../../../static/data/me';
import { useLanguage } from '../../../context/LanguageContext';

function OverviewLine({ icon, content }) {
    return (
        <div className="flex items-center space-x-2 justify-center md:justify-start">
            <span className="text-muted-foreground flex-shrink-0">{icon}</span>
            <span className="text-foreground">{content}</span>
        </div>
    );
}

function ContactLine({ icon, content, href }) {
    return (
        <a
            href={href}
            className="flex items-center space-x-2 hover:text-primary transition-colors justify-center md:justify-start"
        >
            <span className="text-muted-foreground flex-shrink-0">{icon}</span>
            <span className="text-foreground">{content}</span>
        </a>
    );
}

export default function OverviewSection({ isDarkMode }) {
    const { language } = useLanguage();
    const ui = ME.ui[language];
    const [roleIndex, setRoleIndex] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isFlipped, setIsFlipped] = useState(false);
    const roles = ['Frontend Developer', 'Software Engineer', 'Web Developer'];

    useEffect(() => {
        const fadeTimeout = setInterval(() => {
            setVisible(false);

            setTimeout(() => {
                setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
                setVisible(true);
            }, 500);
        }, 3000);

        return () => clearInterval(fadeTimeout);
    }, []);

    const flipStyles = {
        container: {
            width: '8rem',
            height: '8rem',
            perspective: '1000px',
            cursor: 'pointer',
        },
        inner: {
            position: 'relative',
            width: '100%',
            height: '100%',
            transition: 'transform 0.6s',
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : '',
        },
        front: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            borderRadius: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            border: '2px solid var(--d-grid)',
            boxShadow:
                '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
        back: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderRadius: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            border: '2px solid var(--d-grid)',
            boxShadow:
                '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
    };

    return (
        <section
            id="overview"
            className="flex flex-col mx-auto max-w-4xl border-x border-d-grid p-4 md:p-6 screen-line-before screen-line-after"
        >
            <div className="flex flex-col md:flex-row items-center pt-8 pb-4 relative">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                    <div
                        style={flipStyles.container}
                        onMouseEnter={() => setIsFlipped(true)}
                        onMouseLeave={() => setIsFlipped(false)}
                        className="mx-auto md:mx-0"
                    >
                        <div style={flipStyles.inner}>
                            <img
                                src={ME.avatar}
                                alt="avatar"
                                style={flipStyles.front}
                            />
                            <img
                                src={ME.avatar2}
                                alt="avatar 2"
                                style={flipStyles.back}
                            />
                        </div>
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl font-bold text-foreground">
                            {ME.name}
                        </h1>
                        <div className="h-6 overflow-hidden">
                            <p
                                className={`text-md text-muted-foreground transition-all duration-500 transform
                                ${
                                    visible
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-0 opacity-0'
                                }`}
                            >
                                {roles[roleIndex]}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-6 md:mt-0 md:absolute md:top-8 md:right-0 flex flex-col space-y-2 w-full md:w-auto items-center md:items-start">
                    <OverviewLine
                        icon={<MapPin size={16} />}
                        content={language === 'vi' ? ME.address : ME.addressEn}
                    />
                    <ContactLine
                        icon={<Phone size={16} />}
                        content={ME.phoneNumber}
                        href={`tel:${ME.phoneNumber}`}
                    />
                    <ContactLine
                        icon={<Mail size={16} />}
                        content={ME.email}
                        href={`mailto:${ME.email}`}
                    />
                </div>
            </div>

            <div className="flex justify-center mb-6 mt-2">
                <div className="flex flex-row items-center gap-2 flex-wrap justify-center">
                    <span className="text-sm text-muted-foreground">
                        Contact me:
                    </span>
                    {ME.socials.map((social) => (
                        <a
                            className="w-6 h-6 hover:text-primary transition-colors cursor-pointer hover:scale-110 duration-300"
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={social.name}
                        >
                            <img
                                src={
                                    isDarkMode && social.iconDark
                                        ? social.iconDark
                                        : social.icon
                                }
                                alt={social.name}
                                className="w-6 h-6"
                            />
                        </a>
                    ))}
                    <a
                        className="flex items-center justify-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-110"
                        href={ME.cvPath}
                        download
                        title={ui.downloadCV}
                    >
                        <Download size={14} />
                        <span>{ui.downloadCV}</span>
                    </a>
                </div>
            </div>

            <div className="w-full mt-2 pt-6 border-t border-d-grid">
                <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-2">
                    <span className="text-muted-foreground mb-2 md:mb-0 md:pt-1 flex-shrink-0">
                        <Target size={18} />
                    </span>
                    <div className="text-center md:text-left">
                        <h3 className="text-base font-medium text-foreground mb-1">
                            {ui.objective}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            {language === 'vi' ? ME.about : ME.aboutEn}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
