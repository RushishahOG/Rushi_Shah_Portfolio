import { Link } from 'react-router-dom';
import { EditorialGrid, EditorialColumn } from '../components/ui/EditorialGrid';
import { Presentation, Search } from 'lucide-react';
import Button from '../components/ui/Button';
import { caseDecksContent } from '../content';

const CaseDecks = () => {
  const { decks, title, highlight } = caseDecksContent;

  return (
    <EditorialGrid>
      <EditorialColumn span={12} label="Strategy & Analysis" icon={Presentation}>
        <h2 className="text-8xl font-serif font-black tracking-tighter mb-12 leading-none">{title}<span className="text-accent">{highlight}</span></h2>
      </EditorialColumn>

      {decks.map((deck, i) => (
        <EditorialColumn key={i} span={4} label={`Case Study #${i + 1}`} icon={Search}>
          <div className="border border-[#111111] p-6 h-full flex flex-col hover:bg-neutral-100 transition-colors cursor-pointer group">
            <div className="font-rubik text-[10px] uppercase tracking-widest text-accent mb-2">{deck.year} // {deck.competition} {deck.rank && `(${deck.rank})`}</div>
            <h3 className="text-3xl font-roboto mb-4 leading-tight uppercase">{deck.title}</h3>
            <p className="text-sm font-googlesans uppercase tracking-widest mb-2 flex-grow">{deck.domain}</p>
            <Link to={`/case-decks/${deck.slug}`} className="mt-auto">
              <Button className="w-full flex items-center justify-center gap-2 font-stack hover:bg-accent hover:text-[#F9F9F7] hover:border-accent transition-colors">
                <Search size={14} /> Explore Case Solution
              </Button>
            </Link>
          </div>
        </EditorialColumn>
      ))}
    </EditorialGrid>
  );
};

export default CaseDecks;
