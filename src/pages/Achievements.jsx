import { EditorialGrid, EditorialColumn } from '../components/ui/EditorialGrid';
import { Award, Star, Trophy } from 'lucide-react';

const Achievements = () => {
  const honors = [
    {
      title: "Best Young Consultant",
      issuer: "Strategic Forum",
      desc: "Awarded for exceptional impact in EBITDA optimization for mid-sized manufacturing firms."
    },
    {
      title: "Dean's Merit List",
      issuer: "Academic Board",
      desc: "Recognized for consistent excellence in Financial Modeling and AI Research."
    },
    {
      title: "Hackathon Champion",
      issuer: "Tech Innovation Hub",
      desc: "Won 1st place for building an automated equity research agent using LLMs."
    }
  ];

  return (
    <EditorialGrid>
      <EditorialColumn span={12} label="Recognition" icon={Award}>
        <h2 className="text-8xl font-serif font-black tracking-tighter mb-12 leading-none uppercase">Honors & Merits<span className="text-accent">.</span></h2>
      </EditorialColumn>

      <EditorialColumn span={8} label="The Ledger of Impact" icon={Star}>
        <div className="space-y-12 pr-8">
          {honors.map((honor, i) => (
            <div key={i} className="border-b border-neutral-200 pb-8 last:border-0">
              <h3 className="text-5xl font-serif mb-2 uppercase tracking-tighter">{honor.title}</h3>
              <div className="font-mono text-xs text-accent uppercase tracking-[0.2em] mb-4">{honor.issuer}</div>
              <p className="text-lg text-neutral-600 leading-relaxed italic">"{honor.desc}"</p>
            </div>
          ))}
        </div>
      </EditorialColumn>

      <EditorialColumn span={4} label="Summary" icon={Trophy} className="bg-neutral-100">
        <div className="space-y-6">
          <div className="p-4 border-2 border-[#111111] bg-white">
            <div className="text-4xl font-serif font-black text-accent">05+</div>
            <div className="text-[10px] font-mono uppercase tracking-widest opacity-60">National Wins</div>
          </div>
          <div className="p-4 border-2 border-[#111111] bg-white">
            <div className="text-4xl font-serif font-black text-accent">12+</div>
            <div className="text-[10px] font-mono uppercase tracking-widest opacity-60">Key Projects</div>
          </div>
          <div className="p-4 border-2 border-[#111111] bg-white">
            <div className="text-4xl font-serif font-black text-accent">99th</div>
            <div className="text-[10px] font-mono uppercase tracking-widest opacity-60">Percentile Performance</div>
          </div>
        </div>
      </EditorialColumn>
    </EditorialGrid>
  );
};

export default Achievements;
