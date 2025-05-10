import React, { createContext, useContext, useState, useEffect } from 'react';

// Tạo context để lưu trữ và cập nhật ngôn ngữ
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('vi');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsMounted(true);
            const storedLanguage = localStorage.getItem('language') || 'vi';
            setLanguage(storedLanguage);
            document.documentElement.setAttribute('lang', storedLanguage);
        }
    }, []);

    const toggleLanguage = () => {
        const newLanguage = language === 'vi' ? 'en' : 'vi';
        setLanguage(newLanguage);
        if (typeof window !== 'undefined') {
            localStorage.setItem('language', newLanguage);
        }
        document.documentElement.setAttribute('lang', newLanguage);
    };

    return (
        <LanguageContext.Provider
            value={{ language, toggleLanguage, isMounted }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

// Hook để sử dụng context trong các component
export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
