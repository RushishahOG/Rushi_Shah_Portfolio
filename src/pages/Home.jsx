import Button from '../components/ui/Button';
import { EditorialGrid, EditorialColumn } from '../components/ui/EditorialGrid';
import { 
  TrendingUp, 
  Zap, 
  Layers, 
  Cpu, 
  Sparkles,
  ArrowRight 
} from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Home = () => {
  return (
    <EditorialGrid>
      {/* Main Headline Section */}
      <EditorialColumn span={9} className="newsprint-texture" label="Main Editorial" icon={Zap}>
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-serif font-black tracking-tighter mb-8 leading-[0.8]">
            THE FUTURE IS PRINTED<span className="text-accent">.</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-12 border-t border-[#111111] pt-8">
            <div className="w-full md:w-1/3">
              <div className="border border-[#111111] p-1 bg-white aspect-square overflow-hidden grayscale-editorial mb-4">
                <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="font-mono text-[10px] uppercase text-center text-neutral-500 tracking-widest">
                Fig 1.1 / The Apprentice Of Life
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="drop-cap text-lg text-neutral-600 leading-relaxed mb-8 text-justify">
                In an era of fleeting digital interfaces and ephemeral trends, we return to the authority of the printed word.
                Absolute clarity. Structural integrity. Visual excellence. These are the pillars of the new digital age.
                Our mission is to translate complex engineering into human experiences that feel as permanent and trusted
                as the morning edition. Every line of code is a headline. Every component is a column.
              </div>
              <div className="flex gap-4">
                <Button>Full Portfolio</Button>
                <Button variant="secondary">Case Studies</Button>
              </div>
            </div>
          </div>
        </div>
      </EditorialColumn>

      {/* Sidebar / Market Watch */}
      <EditorialColumn span={3} className="bg-[#111111] text-[#F9F9F7] !p-0" label="Market Watch" icon={TrendingUp}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-white/10">
            <div className="flex justify-between items-end mb-4">
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-50">Frontend S&P</span>
              <span className="text-accent font-bold text-lg">▲ 98.4%</span>
            </div>
            <div className="h-24 flex items-end gap-1">
              {[40, 70, 45, 90, 65, 80, 55, 95].map((h, i) => (
                <div key={i} className="flex-1 bg-accent/20 border-t border-accent" style={{ height: `${h}%` }}></div>
              ))}
            </div>
          </div>

          <div className="p-6 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest border-b border-white/10 pb-2">Top Performers</h4>
            {[
              { name: "React / Next.js", val: "+14.2%" },
              { name: "Tailwind CSS", val: "+22.8%" },
              { name: "TypeScript", val: "+09.1%" },
              { name: "Node.js", val: "+11.4%" },
            ].map((stat, i) => (
              <div key={i} className="flex justify-between items-center group cursor-pointer">
                <span className="text-xs font-mono uppercase group-hover:text-accent transition-colors">{stat.name}</span>
                <span className="text-xs font-mono text-accent">{stat.val}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto p-6 border-t border-white/10 bg-white/5">
            <p className="text-[10px] font-mono uppercase tracking-widest mb-4 opacity-50">Urgent Dispatch</p>
            <p className="text-xs italic leading-relaxed">
              "Available for immediate hire. Specializing in high-density editorial interfaces."
            </p>
          </div>
        </div>
      </EditorialColumn>

      {/* Featured Sections */}
      <EditorialColumn span={4} label="Infrastructure" icon={Layers}>
        <h3 className="text-3xl mb-4">Architecture of Record</h3>
        <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
          Why our backend systems are built like historical archives. Resilience through simplicity.
        </p>
        <Button variant="link" className="p-0 flex items-center gap-2">
          Deep Dive <ArrowRight size={14} />
        </Button>
      </EditorialColumn>

      <EditorialColumn span={4} label="Aesthetics" icon={Sparkles}>
        <h3 className="text-3xl mb-4">The Golden Ratio</h3>
        <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
          Applying classical layout theory to modern component architecture. Typography is destiny.
        </p>
        <Button variant="link" className="p-0 flex items-center gap-2">
          Read More <ArrowRight size={14} />
        </Button>
      </EditorialColumn>

      <EditorialColumn span={4} label="Hardware" icon={Cpu}>
        <h3 className="text-3xl mb-4">Silicon & Ink</h3>
        <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
          Bridging the gap between tactile print media and high-frequency digital displays.
        </p>
        <Button variant="link" className="p-0 flex items-center gap-2">
          View Specs <ArrowRight size={14} />
        </Button>
      </EditorialColumn>

      {/* Advertisement / Decorative */}
      <EditorialColumn span={12} className="!p-0" noPadding>
        <div className="bg-[#E5E5E0] py-12 px-6 text-center border-b border-[#111111]">
          <div className="max-w-2xl mx-auto border-4 border-[#111111] p-8 bg-[#F9F9F7]">
            <div className="font-mono text-[10px] uppercase tracking-[0.4em] mb-4 opacity-30">ADVERTISEMENT</div>
            <h3 className="text-4xl md:text-6xl font-serif mb-6 italic tracking-tighter">BUILD SOMETHING WORTH PRINTING.</h3>
            <p className="font-body text-neutral-500 mb-8 max-w-md mx-auto">
              Join the movement of developers returning to clarity. No blurs, no shadows, just pure information.
            </p>
            <Button className="px-12">Learn The Way</Button>
          </div>
        </div>
      </EditorialColumn>
    </EditorialGrid>
  );
};

export default Home;
