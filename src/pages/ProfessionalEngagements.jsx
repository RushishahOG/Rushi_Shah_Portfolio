import { EditorialGrid, EditorialColumn } from '../components/ui/EditorialGrid';
import { Briefcase, Building2 } from 'lucide-react';
import { professionalEngagementsContent } from '../content';
import routedIcon from '../assets/professionalEngagements/routed.png';
import emplayIcon from '../assets/professionalEngagements/emplay.png';

const ProfessionalEngagements = () => {
  const getLogo = (company) => {
    if (company.includes("RoutedAI")) return routedIcon;
    if (company.includes("Emplay")) return emplayIcon;
    return null;
  };

  return (
    <EditorialGrid>
      <EditorialColumn span={12} label={professionalEngagementsContent.section_title} icon={Briefcase}>
        <h2 className="text-8xl font-serif font-black tracking-tighter mb-12 leading-none uppercase">
          {professionalEngagementsContent.title}
          <span className="text-accent">{professionalEngagementsContent.highlight}</span>
        </h2>
      </EditorialColumn>

      {professionalEngagementsContent.engagements.map((engagement, i) => (
        <EditorialColumn key={i} span={12} label={engagement.company} icon={Building2}>
          <div className="border border-[#111111] p-8 bg-neutral-50 mb-12">
            <div className="flex justify-between items-start mb-6 border-b border-[#111111] pb-6">
              <div className="flex items-center gap-4">
                {getLogo(engagement.company) && (
                  <img src={getLogo(engagement.company)} alt={engagement.company} className="w-12 h-12 object-contain" />
                )}
                <div>
                  <h3 className="text-4xl font-serif font-black uppercase tracking-tighter mb-2">
                    {engagement.role}
                  </h3>
                  <p className="text-lg font-bold text-accent uppercase tracking-widest">{engagement.company}</p>
                </div>
              </div>
              <div className="text-right font-mono text-sm">
                <p className="font-bold uppercase">{engagement.duration}</p>
                <p className="opacity-60">{engagement.location}</p>
              </div>
            </div>

            <p className="text-2xl font-serif italic mb-8">"{engagement.headline}"</p>

            {engagement.company.includes("RoutedAI") && (
              <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative w-full pt-[56.25%] border border-[#111111]">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/xIrffL0h9YE?si=T5l3Dan0FnOVZ_LN" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="relative w-full pt-[56.25%] border border-[#111111]">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/O8qWvnkyAF8?si=MrLDqXKOA9vtCRB-" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

            {engagement.company.includes("Emplay") && (
              <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative w-full pt-[56.25%] border border-[#111111]">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/-tI3qJ4ZNwU?si=lxzH5APp03H2Psoz&amp;start=39" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="relative w-full pt-[56.25%] border border-[#111111]">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/WEZ7urD91yA?si=WXyum7azbQLZUPXe&amp;start=53" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest opacity-50 mb-2">Context</h4>
                <p className="text-sm leading-relaxed">{engagement.context}</p>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest opacity-50 mb-2">Problem</h4>
                <p className="text-sm leading-relaxed">{engagement.problem}</p>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="font-mono text-xs uppercase tracking-widest opacity-50 mb-4">Key Actions</h4>
              <ul className="grid grid-cols-1 gap-2 list-disc list-inside text-sm">
                {engagement.key_actions.map((action, j) => (
                  <li key={j}>{action}</li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest opacity-50 mb-4">Business Impact</h4>
                <ul className="space-y-2 list-disc list-inside text-sm">
                  {engagement.business_impact.map((impact, j) => (
                    <li key={j}>{impact}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest opacity-50 mb-2">Strategic Outcome</h4>
                <p className="text-sm leading-relaxed italic">{engagement.strategic_outcome}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-6 border-t border-[#111111]">
              {engagement.skills.map(skill => (
                <span key={skill} className="text-[10px] font-mono border border-[#111111] px-3 py-1 uppercase tracking-widest">
                  {skill}
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
