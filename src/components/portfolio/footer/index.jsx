import React from 'react';
import ME from '../../../static/data/me';
import { useLanguage } from '../../../context/LanguageContext';

export default function Footer() {
    const { language } = useLanguage();
    const ui = ME.ui[language];

    return (
        <footer className="mx-auto max-w-4xl border-x border-t border-d-grid p-4 text-center text-sm text-muted-foreground screen-line-before">
            <div>
                © {new Date().getFullYear()} {ME.name}. {ui.copyright}
            </div>
            <div className="mt-1">{ui.builtWith}</div>
        </footer>
    );
}
