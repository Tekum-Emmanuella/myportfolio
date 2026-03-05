import { BentoGrid } from "./components/BentoGrid";
import BentoCard from "./components/BentoCard";
import TechTicker from "./components/TechTicker";

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 mb-12">
          <h1 className="text-5xl font-black tracking-tighter">ENGINEER_PORTFOLIO</h1>
          <p className="text-neutral-500 font-mono text-sm">v2025.03.05 // STATUS: OPEN_FOR_WORK</p>
        </div>
        
        <BentoGrid>
          {/* Card 1: Featured Project with a custom "header" */}
          <BentoCard 
            title="AI Content Engine"
            description="A production-ready SaaS for generating semantic research reports using Gemini 1.5 Pro."
            className="md:col-span-2"
            header={<div className="h-full w-full bg-linear-to-br from-indigo-500/20 to-purple-500/20 rounded-xl" />}
          />
          
          {/* Card 2: Tech Stack with our new Ticker */}
          <BentoCard 
            title="Toolbox"
            description="My current weapon of choice for full-stack engineering."
          >
            <div className="mt-4">
              <TechTicker />
            </div>
          </BentoCard>

          {/* Card 3: Metrics (Small Card) */}
          <BentoCard 
            title="Lighthouse"
            description="100% Performance"
            className="text-center"
          >
             <div className="flex items-center justify-center h-20">
                <span className="text-4xl font-bold text-green-500">100</span>
             </div>
          </BentoCard>

          {/* Card 4: GitHub Graph Mockup */}
          <BentoCard 
            title="Activity"
            description="350+ Contributions in 2024"
            className="md:col-span-2"
          >
            <div className="flex gap-1 mt-4">
               {Array.from({ length: 40 }).map((_, i) => (
                 <div 
                   key={i} 
                   className={`h-3 w-3 rounded-sm ${i % 3 === 0? 'bg-green-500' : 'bg-neutral-200 dark:bg-neutral-800'}`} 
                 />
               ))}
            </div>
          </BentoCard>
        </BentoGrid>
      </div>
    </main>
  );
}