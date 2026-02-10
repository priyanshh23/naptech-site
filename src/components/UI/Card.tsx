import React from 'react';

import { twMerge } from 'tailwind-merge';

interface CardProps {
    className?: string;
    children: React.ReactNode;
    hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ className, children, hoverEffect = false }) => {
    return (
        <div
            className={twMerge(
                'bg-white rounded-xl border border-gray-100 shadow-lg overflow-hidden',
                hoverEffect && 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl',
                className
            )}
        >
            {children}
        </div>
    );
};
