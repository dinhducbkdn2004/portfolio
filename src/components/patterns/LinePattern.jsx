import React from 'react';

export default function LinePattern({ className = '' }) {
    return (
        <div
            className={`w-full border-t border-b border-d-grid my-4 ${className}`}
        >
            <div className="h-px bg-gradient-to-r from-transparent via-d-border to-transparent" />
        </div>
    );
}
