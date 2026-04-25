import { EditorialGrid, EditorialColumn } from '../components/ui/EditorialGrid';
import { Presentation, Download, FileText } from 'lucide-react';
import Button from '../components/ui/Button';

const CaseDecks = () => {
  const decks = [
    {
      title: "HBS Global Case Challenge",
      competition: "International Finalist",
      focus: "M&A Strategy",
      year: "2025"
    },
    {
      title: "Goldman Sachs Asset Mgmt",
      competition: "Winner",
      focus: "Portfolio Optimization",
      year: "2024"
    },
    {
      title: "Bain & Co. Case Crack",
      competition: "National Runner Up",
      focus: "GTM Transformation",
      year: "2024"
    }
  ];

  return (
    <EditorialGrid>
      <EditorialColumn span={12} label="Strategy & Analysis" icon={Presentation}>
        <h2 className="text-8xl font-serif font-black tracking-tighter mb-12 leading-none">THE DECK REPOSITORY<span className="text-accent">.</span></h2>
      </EditorialColumn>

      {decks.map((deck, i) => (
        <EditorialColumn key={i} span={4} label={`Case Study #${i + 1}`} icon={FileText}>
          <div className="border border-[#111111] p-6 h-full flex flex-col hover:bg-neutral-100 transition-colors cursor-pointer group">
            <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">{deck.year} // {deck.focus}</div>
            <h3 className="text-3xl font-serif mb-4 leading-tight uppercase">{deck.title}</h3>
            <p className="text-sm font-bold uppercase tracking-widest mb-8 flex-grow">{deck.competition}</p>
            <Button className="w-full justify-between group-hover:bg-accent transition-colors">
              Download Deck <Download size={14} />
            </Button>
          </div>
        </EditorialColumn>
      ))}
    </EditorialGrid>
  );
};

export default CaseDecks;
