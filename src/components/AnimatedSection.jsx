export default function AnimatedSection({ children, delay = 0 }) {
    return (
        <div
            className="animate-fade-in"
            style={{
                animationDelay: `${delay}ms`,
                animationFillMode: 'both',
            }}
        >
            {children}
        </div>
    );
}
