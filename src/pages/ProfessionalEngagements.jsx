import { EditorialGrid, EditorialColumn } from '../components/ui/EditorialGrid';
import { Briefcase, Building2 } from 'lucide-react';
import { professionalEngagementsContent } from '../content';

const ProfessionalEngagements = () => {
  return (
    <EditorialGrid>
      <EditorialColumn span={12} label="Work History" icon={Briefcase}>
        <h2 className="text-8xl font-serif font-black tracking-tighter mb-12 leading-none uppercase">
          {professionalEngagementsContent.title}
          <span className="text-accent">{professionalEngagementsContent.highlight}</span>
        </h2>
      </EditorialColumn>

      {professionalEngagementsContent.engagements.map((engagement, i) => (
        <EditorialColumn key={i} span={6} label={engagement.company} icon={Building2}>
          <div className="flex flex-col h-full border border-[#111111] p-6 bg-neutral-50">
            {/* Logo Placeholder */}
            <div className="w-16 h-16 bg-neutral-200 mb-4 flex items-center justify-center font-bold text-xs uppercase">
              Logo
            </div>
            
            <h3 className="text-3xl font-serif mb-2 leading-tight uppercase tracking-tighter">
              {engagement.role}
            </h3>
            <p className="text-sm font-mono text-neutral-500 mb-4 uppercase tracking-wider">
              {engagement.period}
            </p>
            <p className="text-sm text-neutral-600 mb-6 leading-relaxed flex-grow">
              {engagement.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {engagement.tags.map(tag => (
                <span key={tag} className="text-[10px] font-mono border border-neutral-300 px-2 py-0.5 uppercase tracking-widest opacity-60">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </EditorialColumn>
      ))}
    </EditorialGrid>
  );
};

export default ProfessionalEngagements;
