import React, { useEffect, useRef, useState } from 'react';

export default function AnimatedSection({ children, delay = 0, animation = 'fade-up' }) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Khi phần tử vào viewport
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                    // Ngừng quan sát sau khi đã hiển thị
                    if (sectionRef.current) observer.unobserve(sectionRef.current);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.2, // Hiển thị khi 20% phần tử vào viewport
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [delay]);

    // Các animation class
    const animationClasses = {
        'fade-up': 'opacity-0 translate-y-10 transition-all duration-700 ease-out',
        'fade-in': 'opacity-0 transition-opacity duration-700 ease-out',
        'slide-in': 'opacity-0 -translate-x-10 transition-all duration-700 ease-out',
        'zoom-in': 'opacity-0 scale-95 transition-all duration-700 ease-out',
    };

    const visibleClasses = {
        'fade-up': 'opacity-100 translate-y-0',
        'fade-in': 'opacity-100',
        'slide-in': 'opacity-100 translate-x-0',
        'zoom-in': 'opacity-100 scale-100',
    };

    return (
        <div
            ref={sectionRef}
            className={`${animationClasses[animation]} ${isVisible ? visibleClasses[animation] : ''}`}
        >
            {children}
        </div>
    );
}
