'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface BentoCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  header?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

const BentoCard: React.FC<BentoCardProps> = ({ 
  title, 
  description, 
  icon, 
  header, 
  className = "", 
  children 
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.015, y: -5 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
      className={`group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl dark:border-neutral-800 dark:bg-black ${className}`}
    >
      {/* Background decoration or Header */}
      <div className="absolute inset-0 z-0 opacity-10 transition-opacity group-hover:opacity-20">
        {header}
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          {icon && <div className="mb-4 text-neutral-600 dark:text-neutral-400">{icon}</div>}
          {title && (
            <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
              {title}
            </h3>
          )}
          {description && (
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </motion.div>
  );
};

export default BentoCard;