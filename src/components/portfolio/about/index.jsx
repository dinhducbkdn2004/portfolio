import React from 'react';
import {
    Sparkles,
    BookOpen,
    Calendar,
    BookText,
    GraduationCap,
    Briefcase,
    Users,
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
                <div className="flex items-center mb-3 group-hover:text-primary transition-colors justify-center md:justify-start">
                    <BookOpen size={18} className="flex-shrink-0 mr-2" />
                    <h3 className="font-medium">
                        {language === 'vi'
                            ? education.school
                            : education.schoolEn}
                    </h3>
                </div>

                {/* Period với hiệu ứng */}
                <div className="flex items-center text-sm text-muted-foreground mb-2 justify-center md:justify-start">
                    <Calendar size={14} className="flex-shrink-0 mr-2" />
                    <span>
                        {language === 'vi'
                            ? education.period
                            : education.periodEn}
                    </span>
                </div>

                {/* Major và GPA div bọc ngoài để căn giữa trên mobile */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-3">
                    {/* Major với hiệu ứng */}
                    <div className="px-3 py-1.5 rounded-md border border-d-grid bg-background/50 inline-block text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:border-primary/30">
                        {language === 'vi'
                            ? education.major
                            : education.majorEn}
                    </div>

                    {/* GPA với hiệu ứng */}
                    <div className="px-3 py-1.5 rounded-md border border-d-grid bg-background/50 inline-block text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:border-primary/30">
                        {language === 'vi' ? 'GPA: ' : 'GPA: '}
                        <span className="text-primary">{education.gpa}</span>
                    </div>
                </div>

                {/* Description với hiệu ứng */}
                <div className="text-sm text-muted-foreground">
                    <div className="flex items-start justify-center md:justify-start">
                        <BookText
                            size={14}
                            className="flex-shrink-0 mr-2 mt-1"
                        />
                        <p className="text-center md:text-left">
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
            <div className="absolute left-4 top-[4.5rem] bottom-8 w-px bg-gradient-to-b from-primary/50 via-d-border to-transparent animate-pulse md:block hidden"></div>
        </div>
    );
}

function ExperienceCard({ experience, language, index }) {
    const animationDelay = `${(index + 1) * 100}ms`;

    return (
        <div
            className="relative mt-6 mb-8 group animate-fadeIn"
            style={{ animationDelay }}
        >
            <div className="rounded-lg border border-d-grid p-4 transition-all duration-500 bg-card/40 backdrop-blur-sm hover:shadow-md hover:bg-card/70 hover:border-primary/30 project-card">
                <div className="flex items-center mb-3 group-hover:text-primary transition-colors justify-center md:justify-start">
                    <Briefcase size={18} className="flex-shrink-0 mr-2" />
                    <h3 className="font-medium">
                        {language === 'vi'
                            ? experience.company
                            : experience.companyEn}
                    </h3>
                </div>

                <div className="flex items-center text-sm text-muted-foreground mb-2 justify-center md:justify-start">
                    <Calendar size={14} className="flex-shrink-0 mr-2" />
                    <span>
                        {language === 'vi'
                            ? experience.period
                            : experience.periodEn}
                    </span>
                </div>

                <div className="mb-3 flex justify-center md:justify-start">
                    <div className="px-3 py-1.5 rounded-md border border-d-grid bg-background/50 inline-block text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:border-primary/30">
                        {language === 'vi'
                            ? experience.position
                            : experience.positionEn}
                    </div>
                </div>

                <div className="text-sm text-muted-foreground">
                    <div className="flex items-start justify-center md:justify-start">
                        <BookText
                            size={14}
                            className="flex-shrink-0 mr-2 mt-1"
                        />
                        <div className="text-left">
                            <ul className="list-disc pl-4 space-y-1">
                                {(language === 'vi'
                                    ? experience.description
                                    : experience.descriptionEn
                                ).map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <Sparkles
                    size={14}
                    className="absolute top-2 right-2 text-primary/40 opacity-0 group-hover:opacity-100 transition-opacity"
                />
            </div>

            <div className="absolute left-4 top-[4.5rem] bottom-8 w-px bg-gradient-to-b from-primary/50 via-d-border to-transparent animate-pulse md:block hidden"></div>
        </div>
    );
}

function ActivityCard({ activity, language, index }) {
    const animationDelay = `${(index + 1) * 100}ms`;

    return (
        <div
            className="relative mt-6 mb-8 group animate-fadeIn"
            style={{ animationDelay }}
        >
            <div className="rounded-lg border border-d-grid p-4 transition-all duration-500 bg-card/40 backdrop-blur-sm hover:shadow-md hover:bg-card/70 hover:border-primary/30 project-card">
                <div className="flex items-center mb-3 group-hover:text-primary transition-colors justify-center md:justify-start">
                    <Users size={18} className="flex-shrink-0 mr-2" />
                    <h3 className="font-medium">{activity.organization}</h3>
                </div>

                <div className="flex items-center text-sm text-muted-foreground mb-2 justify-center md:justify-start">
                    <Calendar size={14} className="flex-shrink-0 mr-2" />
                    <span>
                        {language === 'vi'
                            ? activity.period
                            : activity.periodEn}
                    </span>
                </div>

                <div className="mb-3 flex justify-center md:justify-start">
                    <div className="px-3 py-1.5 rounded-md border border-d-grid bg-background/50 inline-block text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:border-primary/30">
                        {language === 'vi' ? activity.role : activity.roleEn}
                    </div>
                </div>

                <div className="text-sm text-muted-foreground">
                    <div className="flex items-start justify-center md:justify-start">
                        <BookText
                            size={14}
                            className="flex-shrink-0 mr-2 mt-1"
                        />
                        <div className="text-left">
                            <ul className="list-disc pl-4 space-y-1">
                                {(language === 'vi'
                                    ? activity.description
                                    : activity.descriptionEn
                                ).map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <Sparkles
                    size={14}
                    className="absolute top-2 right-2 text-primary/40 opacity-0 group-hover:opacity-100 transition-opacity"
                />
            </div>

            <div className="absolute left-4 top-[4.5rem] bottom-8 w-px bg-gradient-to-b from-primary/50 via-d-border to-transparent animate-pulse md:block hidden"></div>
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
            <h2 className="text-2xl font-bold text-foreground text-center md:text-left">
                {ui.about}
            </h2>
            <div className="prose text-foreground max-w-none">
                <p className="text-muted-foreground text-center md:text-left text-sm">
                    {language === 'vi' ? ME.personalInfo : ME.personalInfoEn}
                </p>
            </div>

            {/* Học vấn */}
            <div
                className="mt-8 animate-fadeIn"
                style={{ animationDelay: '100ms' }}
            >
                <h2 className="text-2xl font-bold text-foreground flex items-center justify-center md:justify-start">
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

            {/* Kinh nghiệm */}
            {ME.experience && ME.experience.length > 0 && (
                <div
                    className="mt-8 animate-fadeIn"
                    style={{ animationDelay: '200ms' }}
                >
                    <h2 className="text-2xl font-bold text-foreground flex items-center justify-center md:justify-start">
                        <Briefcase size={24} className="mr-2 text-primary" />
                        {ui.experience}
                    </h2>

                    <div className="mt-4">
                        {ME.experience.map((exp, index) => (
                            <ExperienceCard
                                key={index}
                                experience={exp}
                                language={language}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Hoạt động */}
            {ME.activities && ME.activities.length > 0 && (
                <div
                    className="mt-8 animate-fadeIn"
                    style={{ animationDelay: '300ms' }}
                >
                    <h2 className="text-2xl font-bold text-foreground flex items-center justify-center md:justify-start">
                        <Users size={24} className="mr-2 text-primary" />
                        {ui.activities}
                    </h2>

                    <div className="mt-4">
                        {ME.activities.map((act, index) => (
                            <ActivityCard
                                key={index}
                                activity={act}
                                language={language}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}
