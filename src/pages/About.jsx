import { EditorialGrid, EditorialColumn } from '../components/ui/EditorialGrid';
import { UserRound, Target, Award } from 'lucide-react';
import profileImg from '../assets/linkedin/profile.jpg';
import { aboutContent } from '../content';

const About = () => {
  return (
    <EditorialGrid>
      <EditorialColumn span={8} label="Biography" icon={UserRound}>
        <h2 className="text-7xl font-serif font-black tracking-tighter mb-8 leading-none uppercase">{aboutContent.title}<span className="text-accent">{aboutContent.highlight}</span></h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <div className="border border-[#111111] p-1 bg-white mb-4">
              <img src={profileImg} alt={aboutContent.profile.alt} className="w-full grayscale-editorial" />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6 text-lg leading-relaxed">
            {aboutContent.sections.map((section, i) => (
              <p key={i} className={section.isDropCap ? 'drop-cap' : ''}>
                {section.title}
              </p>
            ))}
          </div>
        </div>
      </EditorialColumn>

      <EditorialColumn span={4} label="Philosophy" icon={Target} className="bg-[#111111] text-[#F9F9F7]">
        <div className="space-y-8">
          {aboutContent.philosophy.map((item, i) => (
            <div key={i}>
              <h3 className="text-2xl font-serif mb-4 italic text-accent tracking-tighter">{item.heading}</h3>
              <p className="text-sm opacity-80 leading-relaxed font-mono uppercase tracking-wider">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </EditorialColumn>
    </EditorialGrid>
  );
};

export default About;