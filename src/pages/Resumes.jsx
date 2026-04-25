import { EditorialGrid, EditorialColumn } from '../components/ui/EditorialGrid';
import { FileText, Download, Zap, TrendingUp, Target } from 'lucide-react';
import Button from '../components/ui/Button';

const Resumes = () => {
  const resumeTypes = [
    {
      title: "AI / Machine Learning",
      file: "/resume-ai.pdf",
      icon: Zap,
      description: "Specialized in LLM automation, GenAI pipelines, and predictive neural architectures.",
      color: "text-blue-600"
    },
    {
      title: "Financial Analyst",
      file: "/resume-finance.pdf",
      icon: TrendingUp,
      description: "Expertise in complex financial modeling, capital structuring, and equity research.",
      color: "text-green-600"
    },
    {
      title: "Management Consulting",
      file: "/resume-consulting.pdf",
      icon: Target,
      description: "Focused on GTM optimization, business strategy, and EBITDA value creation.",
      color: "text-accent"
    }
  ];

  return (
    <EditorialGrid>
      <EditorialColumn span={12} label="The Dossier" icon={FileText}>
        <h2 className="text-8xl font-serif font-black tracking-tighter mb-12 leading-none uppercase">Choose Your Edition<span className="text-accent">.</span></h2>
        <p className="text-xl font-serif italic mb-8 max-w-2xl">
          "A tailored perspective for a tailored strategy. Select the professional record that aligns with your operational needs."
        </p>
      </EditorialColumn>

      {resumeTypes.map((resume, i) => (
        <EditorialColumn key={i} span={4} label={`Edition 0${i + 1}`} icon={resume.icon}>
          <div className="flex flex-col h-full border border-[#111111] p-8 hover:bg-neutral-50 transition-all group">
            <h3 className={`text-4xl font-serif mb-4 leading-tight uppercase ${resume.color}`}>
              {resume.title}
            </h3>
            <p className="text-sm text-neutral-600 mb-8 flex-grow leading-relaxed">
              {resume.description}
            </p>
            <div className="space-y-3">
              <a href={resume.file} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full justify-between group-hover:bg-accent transition-colors">
                  View PDF <FileText size={14} />
                </Button>
              </a>
              <a href={resume.file} download className="block">
                <Button variant="secondary" className="w-full justify-between">
                  Download <Download size={14} />
                </Button>
              </a>
            </div>
          </div>
        </EditorialColumn>
      ))}

      <EditorialColumn span={12} className="bg-neutral-100 text-center py-12">
        <div className="max-w-xl mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-40 mb-4">Official Verification</p>
          <p className="text-sm italic text-neutral-500">
            All records are updated for the 2026 Portfolio Edition. For specific inquiries or custom verification, please contact the dispatch center.
          </p>
        </div>
      </EditorialColumn>
    </EditorialGrid>
  );
};

export default Resumes;
