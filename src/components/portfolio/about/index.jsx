import React from 'react';
import {
    Sparkles,
    BookOpen,
    Calendar,
    BookText,
    GraduationCap,
} from 'lucide-react';
import ME from '../../../static/data/me';
import { useLanguage } from '../../../context/LanguageContext';

// Component hiển thị Education với hiệu ứng
function EducationCard({ education, language, index }) {
    const animationDelay = `${(index + 1) * 100}ms`;

    return (
        <div
            className="relative mt-6 mb-8 group animate-fadeIn"
            style={{ animationDelay }}
        >
            {/* Card với hiệu ứng hover */}
            <div className="rounded-lg border border-d-grid p-4 transition-all duration-500 bg-card/40 backdrop-blur-sm hover:shadow-md hover:bg-card/70 hover:border-primary/30 project-card">
                {/* School name với icon và hiệu ứng */}
                <div className="flex items-center mb-3 group-hover:text-primary transition-colors">
                    <BookOpen size={18} className="flex-shrink-0 mr-2" />
                    <h3 className="font-medium">
                        {language === 'vi'
                            ? education.school
                            : education.schoolEn}
                    </h3>
                </div>

                {/* Period với hiệu ứng */}
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar size={14} className="flex-shrink-0 mr-2" />
                    <span>
                        {language === 'vi'
                            ? education.period
                            : education.periodEn}
                    </span>
                </div>

                {/* Major với hiệu ứng */}
                <div className="px-3 py-1.5 rounded-md border border-d-grid bg-background/50 mb-3 inline-block text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:border-primary/30">
                    {language === 'vi' ? education.major : education.majorEn}
                </div>

                {/* GPA với hiệu ứng */}
                <div className="px-3 py-1.5 rounded-md border border-d-grid bg-background/50 mb-3 inline-block text-sm font-medium ml-2 transition-all duration-300 hover:bg-primary/10 hover:border-primary/30">
                    {language === 'vi' ? 'GPA: ' : 'GPA: '}
                    <span className="text-primary">{education.gpa}</span>
                </div>

                {/* Description với hiệu ứng */}
                <div className="text-sm text-muted-foreground">
                    <div className="flex items-start">
                        <BookText
                            size={14}
                            className="flex-shrink-0 mr-2 mt-1"
                        />
                        <p>
                            {language === 'vi'
                                ? education.description
                                : education.descriptionEn}
                        </p>
                    </div>
                </div>

                {/* Decorative elements */}
                <Sparkles
                    size={14}
                    className="absolute top-2 right-2 text-primary/40 opacity-0 group-hover:opacity-100 transition-opacity"
                />
            </div>

            {/* Decorative vertical line with animation */}
            <div className="absolute left-4 top-[4.5rem] bottom-8 w-px bg-gradient-to-b from-primary/50 via-d-border to-transparent animate-pulse"></div>
        </div>
    );
}

export default function AboutSection() {
    const { language } = useLanguage();
    const ui = ME.ui[language];

    return (
        <section
            id="about"
            className="mx-auto max-w-4xl border-x border-d-grid p-4 space-y-6 screen-line-before screen-line-after"
        >
            {/* Thông tin cá nhân */}
            <h2 className="text-2xl font-bold text-foreground">{ui.about}</h2>
            <div className="prose text-foreground max-w-none">
                <p className="text-muted-foreground">
                    {language === 'vi' ? ME.personalInfo : ME.personalInfoEn}
                </p>
            </div>

            {/* Học vấn */}
            <div
                className="mt-8 animate-fadeIn"
                style={{ animationDelay: '100ms' }}
            >
                <h2 className="text-2xl font-bold text-foreground flex items-center">
                    <GraduationCap size={24} className="mr-2 text-primary" />
                    {ui.education}
                </h2>

                <div className="mt-4">
                    {ME.education.map((edu, index) => (
                        <EducationCard
                            key={index}
                            education={edu}
                            language={language}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
