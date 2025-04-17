import React from 'react';
import ME from '../../../static/data/me';
import { useLanguage } from '../../../context/LanguageContext';

export default function AboutSection() {
    const { language } = useLanguage();
    const ui = ME.ui[language];

    return (
        <section
            id="about"
            className="mx-auto max-w-4xl border-x border-d-grid p-4 space-y-4 screen-line-before screen-line-after"
        >
            <h2 className="text-2xl font-bold text-foreground">{ui.about}</h2>
            <div className="prose text-foreground max-w-none">
                <p className="text-muted-foreground">
                    {language === 'vi' ? ME.about : ME.aboutEn}
                </p>
            </div>
        </section>
    );
}
