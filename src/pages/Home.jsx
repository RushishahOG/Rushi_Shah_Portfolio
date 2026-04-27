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
import { homeContent } from '../content';

const iconMap = {
  Layers,
  Sparkles,
  Cpu
};

const Home = () => {
  return (
    <EditorialGrid>
      <EditorialColumn span={9} className="newsprint-texture" label="Main Editorial" icon={Zap}>
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-serif font-black tracking-tighter mb-8 leading-[0.8]">
            {homeContent.headline.title}<span className="text-accent">{homeContent.headline.highlight}</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-12 border-t border-[#111111] pt-8">
            <div className="w-full md:w-1/3">
              <div className="border border-[#111111] p-1 bg-white aspect-square overflow-hidden grayscale-editorial mb-4">
                <img src={profileImg} alt={homeContent.profile.alt} className="w-full h-full object-cover" />
              </div>
              <div className="font-mono text-[10px] uppercase text-center text-neutral-500 tracking-widest">
                {homeContent.profile.caption}
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="drop-cap text-lg text-neutral-600 leading-relaxed mb-8 text-justify">
                {homeContent.intro.text}
              </div>
              <div className="flex gap-4">
                {homeContent.buttons.map((btn, i) => (
                  <Button key={i} variant={btn.variant === 'secondary' ? 'secondary' : 'default'}>
                    {btn.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </EditorialColumn>

      <EditorialColumn span={3} className="bg-[#111111] text-[#F9F9F7] !p-0" label="Market Watch" icon={TrendingUp}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-white/10">
            <div className="flex justify-between items-end mb-4">
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-50">{homeContent.marketWatch.label}</span>
              <span className="text-accent font-bold text-lg">{homeContent.marketWatch.value}</span>
            </div>
            <div className="h-24 flex items-end gap-1">
              {homeContent.marketWatch.chartData.map((h, i) => (
                <div key={i} className="flex-1 bg-accent/20 border-t border-accent" style={{ height: `${h}%` }}></div>
              ))}
            </div>
          </div>

          <div className="p-6 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest border-b border-white/10 pb-2">Top Performers</h4>
            {homeContent.marketWatch.topPerformers.map((stat, i) => (
              <div key={i} className="flex justify-between items-center group cursor-pointer">
                <span className="text-xs font-mono uppercase group-hover:text-accent transition-colors">{stat.name}</span>
                <span className="text-xs font-mono text-accent">{stat.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto p-6 border-t border-white/10 bg-white/5">
            <p className="text-[10px] font-mono uppercase tracking-widest mb-4 opacity-50">Urgent Dispatch</p>
            <p className="text-xs italic leading-relaxed">
              "{homeContent.marketWatch.dispatch}"
            </p>
          </div>
        </div>
      </EditorialColumn>

      {homeContent.features.map((feature, i) => {
        const FeatureIcon = iconMap[feature.icon];
        return (
          <EditorialColumn key={i} span={4} label={feature.label} icon={FeatureIcon}>
            <h3 className="text-3xl mb-4">{feature.title}</h3>
            <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
              {feature.description}
            </p>
            <Button variant="link" className="p-0 flex items-center gap-2">
              {feature.link} <ArrowRight size={14} />
            </Button>
          </EditorialColumn>
        );
      })}

      <EditorialColumn span={12} className="!p-0" noPadding>
        <div className="bg-[#E5E5E0] py-12 px-6 text-center border-b border-[#111111]">
          <div className="max-w-2xl mx-auto border-4 border-[#111111] p-8 bg-[#F9F9F7]">
            <div className="font-mono text-[10px] uppercase tracking-[0.4em] mb-4 opacity-30">ADVERTISEMENT</div>
            <h3 className="text-4xl md:text-6xl font-serif mb-6 italic tracking-tighter">{homeContent.advertisement.title}</h3>
            <p className="font-body text-neutral-500 mb-8 max-w-md mx-auto">
              {homeContent.advertisement.description}
            </p>
            <Button className="px-12">{homeContent.advertisement.button}</Button>
          </div>
        </div>
      </EditorialColumn>
    </EditorialGrid>
  );
};

export default Home;