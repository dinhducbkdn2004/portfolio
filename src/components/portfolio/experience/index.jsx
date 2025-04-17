import React from 'react';
import ME from '../../../static/data/me';
import { useLanguage } from '../../../context/LanguageContext';

function ExperienceItem({ experience, language }) {
    return (
        <div className="space-y-1 border-l-2 border-d-grid pl-4 py-2">
            <div className="flex justify-between items-start">
                <h3 className="font-medium text-foreground">
                    {experience.position}
                </h3>
                <span className="text-sm text-muted-foreground">
                    {language === 'vi'
                        ? experience.period
                        : experience.periodEn || experience.period}
                </span>
            </div>
            <div className="text-muted-foreground">{experience.company}</div>
            <p className="text-sm text-foreground">
                {language === 'vi'
                    ? experience.description
                    : experience.descriptionEn}
            </p>
        </div>
    );
}

export default function ExperienceSection() {
    const { language } = useLanguage();
    const ui = ME.ui[language];
    // Kiểm tra nếu experiences không tồn tại hoặc rỗng
    const hasExperiences = ME.experiences && ME.experiences.length > 0;

    return (
        <section
            id="experience"
            className="mx-auto max-w-4xl border-x border-d-grid p-4 space-y-4 screen-line-before screen-line-after"
        >
            <h2 className="text-2xl font-bold text-foreground">
                {ui.experience}
            </h2>
            <div className="space-y-2">
                {hasExperiences ? (
                    ME.experiences.map((experience, index) => (
                        <ExperienceItem
                            key={index}
                            experience={experience}
                            language={language}
                        />
                    ))
                ) : (
                    <p className="text-muted-foreground">{ui.noExperience}</p>
                )}
            </div>
        </section>
    );
}
