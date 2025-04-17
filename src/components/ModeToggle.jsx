import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

function ThemeOption({ icon, value, isActive, onClick }) {
    return (
        <button
            className={`relative flex h-8 w-8 items-center justify-center rounded-full transition-all ${
                isActive
                    ? 'bg-secondary text-secondary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
            }`}
            role="radio"
            aria-checked={isActive}
            aria-label={`Switch to ${value} theme`}
            onClick={() => onClick(value)}
        >
            {icon}
            {isActive && (
                <span className="absolute inset-0 rounded-full border border-accent animate-fade-in"></span>
            )}
        </button>
    );
}

const THEME_OPTIONS = [
    {
        icon: <Sun size={16} />,
        value: 'light',
    },
    {
        icon: <Moon size={16} />,
        value: 'dark',
    },
];

export default function ModeToggle() {
    const [theme, setTheme] = useState('light');
    const [isMounted, setIsMounted] = useState(false);

    // Sử dụng local storage để lưu trữ theme
    useEffect(() => {
        setIsMounted(true);
        const storedTheme = localStorage.getItem('theme');
        if (
            storedTheme &&
            (storedTheme === 'light' || storedTheme === 'dark')
        ) {
            setTheme(storedTheme);
            applyTheme(storedTheme);
        } else {
            // Mặc định sử dụng light theme
            setTheme('light');
            applyTheme('light');
        }
    }, []);

    // Áp dụng theme
    const applyTheme = (newTheme) => {
        const root = document.documentElement;

        if (newTheme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }

        // Dispatch event để các component khác có thể phản ứng với sự thay đổi theme
        document.dispatchEvent(
            new CustomEvent('themeChange', { detail: { theme: newTheme } })
        );
    };

    const handleSetTheme = (value) => {
        setTheme(value);
        localStorage.setItem('theme', value);
        applyTheme(value);
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    };

    if (!isMounted) {
        return <div className="flex h-8 w-12" />;
    }

    return (
        <div
            className="inline-flex items-center overflow-hidden rounded-full bg-background ring-1 ring-border"
            role="radiogroup"
            onClick={toggleTheme}
        >
            {THEME_OPTIONS.map((option) => (
                <ThemeOption
                    key={option.value}
                    icon={option.icon}
                    value={option.value}
                    isActive={theme === option.value}
                    onClick={() => handleSetTheme(option.value)}
                />
            ))}
        </div>
    );
}
