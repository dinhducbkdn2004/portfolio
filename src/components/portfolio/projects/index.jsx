import React, { useState, useRef, useEffect } from 'react';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import ME from '../../../static/data/me';
import { useLanguage } from '../../../context/LanguageContext';

function ProjectCard({ project, language, isOpen, onToggle }) {
    const ui = ME.ui[language];
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);

    // Measure content height when it changes
    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
        }
    }, [isOpen]);

    return (
        <div className="project-card border border-d-grid rounded-lg p-4 space-y-3 bg-card text-card-foreground">
            <h3 className="font-medium text-lg text-foreground">
                {project.name}
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span>{language === 'vi' ? project.type : project.typeEn}</span>
                <span>•</span>
                <span>
                    {ui.teamSize}: {project.teamSize}
                </span>
                <span>•</span>
                <span>
                    {language === 'vi' ? project.period : project.periodEn}
                </span>
            </div>
            <p className="text-sm text-muted-foreground">
                {language === 'vi'
                    ? project.description
                    : project.descriptionEn}
            </p>
            <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="pt-2">
                <button
                    onClick={onToggle}
                    className="flex items-center text-sm text-primary hover:underline focus:outline-none transition-all duration-300 group"
                >
                    <span className="mr-1">{isOpen ? ui.less : ui.more}</span>
                    {isOpen ? (
                        <ChevronUp
                            size={16}
                            className="transition-transform group-hover:-translate-y-0.5"
                        />
                    ) : (
                        <ChevronDown
                            size={16}
                            className="transition-transform group-hover:translate-y-0.5"
                        />
                    )}
                </button>
            </div>

            <div 
                className="overflow-hidden transition-all relative"
                style={{ 
                    height: contentHeight,
                    opacity: isOpen ? 1 : 0,
                    transition: 'height var(--animation-duration-medium) var(--animation-timing), opacity var(--animation-duration-medium) var(--animation-timing)'
                }}
            >
                <div ref={contentRef} className="space-y-4 border-t border-d-grid pt-3 mt-2">
                    <div className="animate-fadeIn" style={{ animationDelay: '100ms' }}>
                        <h4 className="font-medium text-sm mb-2">{ui.role}</h4>
                        <p className="text-sm text-muted-foreground">
                            {project.role}
                        </p>
                    </div>

                    {project.features && (
                        <div className="animate-fadeIn" style={{ animationDelay: '200ms' }}>
                            <h4 className="font-medium text-sm mb-2">
                                {ui.features}
                            </h4>
                            <ul className="list-disc pl-5 space-y-1">
                                {(language === 'vi'
                                    ? project.features
                                    : project.featuresEn
                                ).map((feature, index) => (
                                    <li
                                        key={index}
                                        className="text-sm text-muted-foreground"
                                    >
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.responsibilities && (
                        <div className="animate-fadeIn" style={{ animationDelay: '300ms' }}>
                            <h4 className="font-medium text-sm mb-2">
                                {ui.responsibilities}
                            </h4>
                            <ul className="list-disc pl-5 space-y-1">
                                {(language === 'vi'
                                    ? project.responsibilities
                                    : project.responsibilitiesEn
                                ).map((resp, index) => (
                                    <li
                                        key={index}
                                        className="text-sm text-muted-foreground"
                                    >
                                        {resp}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.link && (
                        <div className="pt-4 pb-2 animate-fadeIn z-10 relative" style={{ animationDelay: '400ms' }}>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/80 transition-all duration-300 shine-effect"
                            >
                                {ui.viewProject}
                                <ExternalLink size={14} className="ml-1.5" />
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function ProjectsSection() {
    const { language } = useLanguage();
    const ui = ME.ui[language];
    const [openProjectIndex, setOpenProjectIndex] = useState(null);

    const handleToggleProject = (index) => {
        if (openProjectIndex === index) {
            setOpenProjectIndex(null); // Đóng project hiện tại nếu đang mở
        } else {
            setOpenProjectIndex(index); // Mở project mới, đóng project cũ
        }
    };

    return (
        <section
            id="projects"
            className="mx-auto max-w-4xl border-x border-d-grid p-4 space-y-4 screen-line-before screen-line-after"
        >
            <h2 className="text-2xl font-bold text-foreground">
                {ui.projects}
            </h2>
            <div className="grid grid-cols-1 gap-6">
                {ME.projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                        language={language}
                        isOpen={openProjectIndex === index}
                        onToggle={() => handleToggleProject(index)}
                    />
                ))}

                {/* GitHub link */}
                <div className="mt-2 border-t border-d-grid pt-6 text-center">
                    <p className="text-muted-foreground mb-3">
                        {ui.moreProjects}
                    </p>
                    <a
                        href="https://github.com/dinhducbkdn2004"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-background border border-d-grid rounded-full hover:bg-card transition-all duration-300 shine-effect animate-smooth-scale"
                    >
                        <Github size={18} className="text-primary" />
                        <span className="font-medium">GitHub</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
