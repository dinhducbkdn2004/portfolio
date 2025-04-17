import React, { useEffect, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

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
        icon: <Monitor size={16} />,
        value: 'system',
    },
    {
        icon: <Moon size={16} />,
        value: 'dark',
    },
];

export default function ModeToggle() {
    const [theme, setTheme] = useState('system');
    const [isMounted, setIsMounted] = useState(false);

    // Sử dụng local storage để lưu trữ theme
    useEffect(() => {
        setIsMounted(true);
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
            applyTheme(storedTheme);
        } else {
            // Mặc định sử dụng system theme
            const prefersDark = window.matchMedia(
                '(prefers-color-scheme: dark)'
            ).matches;
            applyTheme(prefersDark ? 'dark' : 'light');
        }
    }, []);

    // Theo dõi thay đổi system theme
    useEffect(() => {
        if (theme === 'system') {
            const mediaQuery = window.matchMedia(
                '(prefers-color-scheme: dark)'
            );
            const handleChange = (e) => {
                applyTheme(e.matches ? 'dark' : 'light');
            };

            mediaQuery.addEventListener('change', handleChange);
            return () => mediaQuery.removeEventListener('change', handleChange);
        }
    }, [theme]);

    // Áp dụng theme
    const applyTheme = (newTheme) => {
        const root = document.documentElement;

        if (
            newTheme === 'dark' ||
            (newTheme === 'system' &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    };

    const handleSetTheme = (value) => {
        setTheme(value);
        localStorage.setItem('theme', value);
        applyTheme(value);
    };

    if (!isMounted) {
        return <div className="flex h-8 w-24" />;
    }

    return (
        <div
            className="inline-flex items-center overflow-hidden rounded-full bg-background ring-1 ring-border"
            role="radiogroup"
        >
            {THEME_OPTIONS.map((option) => (
                <ThemeOption
                    key={option.value}
                    icon={option.icon}
                    value={option.value}
                    isActive={theme === option.value}
                    onClick={handleSetTheme}
                />
            ))}
        </div>
    );
}
