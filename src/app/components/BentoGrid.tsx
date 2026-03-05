import React from 'react';

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export const BentoGrid = ({ children, className = "" }: BentoGridProps) => {
  return (
    <div
      className={`grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[20rem] ${className}`}
    >
      {children}
    </div>
  );
};