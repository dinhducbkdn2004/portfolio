import React from 'react';
import ME from '../../../static/data/me';
import { useLanguage } from '../../../context/LanguageContext';

function Skill({ skill, isDarkMode }) {
    return (
        <div className="relative group flex flex-col items-center">
            <div className="w-8 h-8 flex items-center justify-center mb-4">
                <img
                    src={
                        isDarkMode && skill.iconDark
                            ? skill.iconDark
                            : skill.icon
                    }
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

function ArchitectureItem({ name, description }) {
    return (
        <div className="px-3 py-1.5 rounded-md border border-d-grid bg-card hover:bg-card/80 transition-colors">
            <div className="font-medium text-sm text-foreground">{name}</div>
            {description && (
                <div className="text-xs text-muted-foreground mt-1">
                    {description}
                </div>
            )}
        </div>
    );
}

function SkillGroup({ title, items, isDarkMode }) {
    if (!items || items.length === 0) return null;

    return (
        <div className="my-2">
            <h3 className="text-base font-medium text-foreground mb-2">
                {title}
            </h3>
            <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-11 gap-1 gap-y-2 cursor-pointer">
                {items.map((item, index) => (
                    <Skill key={index} skill={item} isDarkMode={isDarkMode} />
                ))}
            </div>
        </div>
    );
}

function ArchitectureGroup({ title, items }) {
    if (!items || items.length === 0) return null;

    return (
        <div className="my-4">
            <h3 className="text-base font-medium text-foreground mb-2">
                {title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {items.map((item, index) => (
                    <ArchitectureItem
                        key={index}
                        name={item.name}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default function TechStackSection({ isDarkMode }) {
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
                <SkillGroup
                    title={ui.programmingSkills}
                    items={ME.skills}
                    isDarkMode={isDarkMode}
                />
                <SkillGroup
                    title={ui.libraries}
                    items={ME.libraries}
                    isDarkMode={isDarkMode}
                />
                <SkillGroup
                    title={ui.tools}
                    items={ME.tools}
                    isDarkMode={isDarkMode}
                />
                <SkillGroup
                    title={ui.databases}
                    items={ME.databases}
                    isDarkMode={isDarkMode}
                />
                <ArchitectureGroup
                    title={ui.architectures}
                    items={ME.architectures}
                />
                <ArchitectureGroup
                    title={language === 'vi' ? 'Ngôn ngữ' : 'Languages'}
                    items={ME.languages.map((lang) => ({
                        name: language === 'vi' ? lang.name : lang.nameEn,
                        description:
                            language === 'vi'
                                ? lang.description
                                : lang.descriptionEn,
                    }))}
                />
            </div>
        </section>
    );
}
