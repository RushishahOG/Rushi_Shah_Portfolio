import { EditorialGrid, EditorialColumn } from '../components/ui/EditorialGrid';
import { CodeXml, ExternalLink, Zap } from 'lucide-react';
import Button from '../components/ui/Button';

const Projects = () => {
  const projects = [
    {
      title: "Neural Stock Engine",
      category: "AI / Finance",
      description: "A high-frequency trading simulation using reinforcement learning to optimize portfolio allocation in volatile markets.",
      tags: ["Python", "PyTorch", "FastAPI"]
    },
    {
      title: "GTM Optimizer",
      category: "Strategy / GenAI",
      description: "Automated market research and lead generation pipeline using LLMs to reduce manual effort by 40%.",
      tags: ["OpenAI", "Node.js", "Redis"]
    },
    {
      title: "Capital Plan 770",
      category: "Financial Modeling",
      description: "A comprehensive ₹770 Cr capital structuring plan for a mid-cap manufacturing firm.",
      tags: ["Excel", "VBA", "Consulting"]
    }
  ];

  return (
    <EditorialGrid>
      <EditorialColumn span={12} label="Latest Dispatches" icon={Zap}>
        <h2 className="text-8xl font-serif font-black tracking-tighter mb-12 leading-none">THE ARCHIVE OF WORKS<span className="text-accent">.</span></h2>
      </EditorialColumn>
      
      {projects.map((project, i) => (
        <EditorialColumn key={i} span={4} label={project.category} icon={CodeXml}>
          <div className="flex flex-col h-full">
            <h3 className="text-4xl font-serif mb-4 hover:text-accent transition-colors cursor-pointer leading-tight uppercase tracking-tighter">
              {project.title}
            </h3>
            <p className="text-sm text-neutral-600 mb-6 leading-relaxed flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] font-mono border border-neutral-300 px-2 py-0.5 uppercase tracking-widest opacity-60">
                  {tag}
                </span>
              ))}
            </div>
            <Button variant="link" className="p-0 flex items-center gap-2">
              View Project <ExternalLink size={14} />
            </Button>
          </div>
        </EditorialColumn>
      ))}
    </EditorialGrid>
  );
};

export default Projects;
