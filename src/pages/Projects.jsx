import { EditorialGrid, EditorialColumn } from '../components/ui/EditorialGrid';
import { CodeXml, ExternalLink, Zap } from 'lucide-react';
import Button from '../components/ui/Button';
import { projectsContent } from '../content';

const Projects = () => {
  return (
    <EditorialGrid>
      <EditorialColumn span={12} label="Latest Dispatches" icon={Zap}>
        <h2 className="text-8xl font-serif font-black tracking-tighter mb-12 leading-none">{projectsContent.title}<span className="text-accent">{projectsContent.highlight}</span></h2>
      </EditorialColumn>
      
      {projectsContent.projects.map((project, i) => (
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