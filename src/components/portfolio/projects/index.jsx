import React from 'react';
import ME from '../../../static/data/me';
import { useLanguage } from '../../../context/LanguageContext';

function ProjectCard({ project, language }) {
    return (
        <div className="border border-d-grid rounded-lg p-4 space-y-3 bg-card text-card-foreground">
            <h3 className="font-medium text-lg text-foreground">
                {project.name}
            </h3>
            <p className="text-sm text-muted-foreground">
                {language === 'vi'
                    ? project.description
                    : project.descriptionEn}
            </p>
            <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function ProjectsSection() {
    const { language } = useLanguage();
    const ui = ME.ui[language];

    return (
        <section
            id="projects"
            className="mx-auto max-w-4xl border-x border-d-grid p-4 space-y-4 screen-line-before screen-line-after"
        >
            <h2 className="text-2xl font-bold text-foreground">
                {ui.projects}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ME.projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                        language={language}
                    />
                ))}
            </div>
        </section>
    );
}
