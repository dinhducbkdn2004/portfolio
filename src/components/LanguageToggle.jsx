import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
    const { language, toggleLanguage, isMounted } = useLanguage();

    if (!isMounted) {
        return <div className="h-8 w-8" />;
    }

    return (
        <button
            className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            onClick={toggleLanguage}
            aria-label={`Switch to ${
                language === 'vi' ? 'English' : 'Vietnamese'
            }`}
        >
            <Languages size={16} />
            <span className="sr-only">
                {language === 'vi' ? 'English' : 'Tiếng Việt'}
            </span>
        </button>
    );
}
