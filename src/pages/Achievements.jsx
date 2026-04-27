import { EditorialGrid, EditorialColumn } from '../components/ui/EditorialGrid';
import { Award, Star, Trophy } from 'lucide-react';
import { achievementsContent } from '../content';

const Achievements = () => {
  return (
    <EditorialGrid>
      <EditorialColumn span={12} label="Recognition" icon={Award}>
        <h2 className="text-8xl font-serif font-black tracking-tighter mb-12 leading-none uppercase">{achievementsContent.title}<span className="text-accent">{achievementsContent.highlight}</span></h2>
      </EditorialColumn>

      <EditorialColumn span={8} label="The Ledger of Impact" icon={Star}>
        <div className="space-y-12 pr-8">
          {achievementsContent.honors.map((honor, i) => (
            <div key={i} className="border-b border-neutral-200 pb-8 last:border-0">
              <h3 className="text-5xl font-serif mb-2 uppercase tracking-tighter">{honor.title}</h3>
              <div className="font-mono text-xs text-accent uppercase tracking-[0.2em] mb-4">{honor.issuer}</div>
              <p className="text-lg text-neutral-600 leading-relaxed italic">"{honor.description}"</p>
            </div>
          ))}
        </div>
      </EditorialColumn>

      <EditorialColumn span={4} label="Summary" icon={Trophy} className="bg-neutral-100">
        <div className="space-y-6">
          {achievementsContent.stats.map((stat, i) => (
            <div key={i} className="p-4 border-2 border-[#111111] bg-white">
              <div className="text-4xl font-serif font-black text-accent">{stat.value}</div>
              <div className="text-[10px] font-mono uppercase tracking-widest opacity-60">{stat.label}</div>
            </div>
          ))}
        </div>
      </EditorialColumn>
    </EditorialGrid>
  );
};

export default Achievements;