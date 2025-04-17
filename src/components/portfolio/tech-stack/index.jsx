import React from 'react';
import ME from '../../../static/data/me';
import { useLanguage } from '../../../context/LanguageContext';

function Skill({ skill }) {
    return (
        <div className="relative group flex flex-col items-center">
            <div className="w-8 h-8 flex items-center justify-center mb-4">
                <img
                    src={skill.icon}
                    alt={skill.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-muted-foreground whitespace-nowrap">
                {skill.name}
            </span>
        </div>
    );
}

function SkillGroup({ title, items }) {
    if (!items || items.length === 0) return null;

    return (
        <div className="my-2">
            <h3 className="text-base font-medium text-foreground mb-2">
                {title}
            </h3>
            <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-11 gap-1 gap-y-2">
                {items.map((item, index) => (
                    <Skill key={index} skill={item} />
                ))}
            </div>
        </div>
    );
}

export default function TechStackSection() {
    const { language } = useLanguage();
    const ui = ME.ui[language];

    return (
        <section
            id="skills"
            className="mx-auto max-w-4xl border-x border-d-grid p-4 screen-line-before screen-line-after"
        >
            <h2 className="text-2xl font-bold text-foreground mb-2">
                {ui.skills}
            </h2>
            <div className="space-y-0">
                <SkillGroup title={ui.programmingSkills} items={ME.skills} />
                <SkillGroup title={ui.libraries} items={ME.libraries} />
                <SkillGroup title={ui.tools} items={ME.tools} />
                <SkillGroup title={ui.databases} items={ME.databases} />
            </div>
        </section>
    );
}
