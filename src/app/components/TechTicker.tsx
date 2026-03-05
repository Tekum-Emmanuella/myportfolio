'use client';
import { motion } from 'framer-motion';

const techStack = [
  'React',
  'TypeScript',
  'Next.js',
  'TailwindCSS',
  'Framer Motion',
  'Node.js',
  'GraphQL',
  'Prisma',
  'Postgres',
  'Docker',
];

const TechTicker = () => {
  // Double the array for a seamless loop
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <div className="flex overflow-hidden py-2 select-none">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap gap-8"
      >
        {duplicatedStack.map((tech, idx) => (
          <span 
            key={idx} 
            className="text-sm font-mono font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default TechTicker;