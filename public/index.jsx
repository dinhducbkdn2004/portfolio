import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import ME from '../../../static/data/me';
import { useLanguage } from '../../../context/LanguageContext';

function OverviewLine({ icon, content }) {
    return (
        <div className="flex items-center space-x-2">
            <span className="text-muted-foreground">{icon}</span>
            <span className="text-foreground">{content}</span>
        </div>
    );
}

function ContactLine({ icon, content, href }) {
    return (
        <a
            href={href}
            className="flex items-center space-x-2 hover:text-primary transition-colors"
        >
            <span className="text-muted-foreground">{icon}</span>
            <span className="text-foreground">{content}</span>
        </a>
    );
}

export default function OverviewSection() {
    const { language } = useLanguage();
    const [roleIndex, setRoleIndex] = useState(0);
    const [visible, setVisible] = useState(true);
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

    return (
        <section
            id="overview"
            className="flex flex-row items-center pt-12 mx-auto max-w-4xl border-x border-d-grid p-4 space-y-3 screen-line-before screen-line-after"
        >
            <div className="flex items-center space-x-2">
                <img
                    src={ME.avatar}
                    alt="avatar"
                    className="w-32 h-32 rounded-full object-cover object-center border-2 border-d-grid"
                />
                <div>
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
            <div className="top-2 ml-auto">
                <div>
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
                <div>
                    {ME.socials.map((social) => (
                        <a href={social.link} key={social.name}>
                            <span className="text-muted-foreground">
                                {social.icon}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
