import { EditorialGrid, EditorialColumn } from '../components/ui/EditorialGrid';
import { UserRound, Target, Award } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const About = () => {
  return (
    <EditorialGrid>
      <EditorialColumn span={8} label="Biography" icon={UserRound}>
        <h2 className="text-7xl font-serif font-black tracking-tighter mb-8 leading-none uppercase">The Editor-In-Chief<span className="text-accent">.</span></h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <div className="border border-[#111111] p-1 bg-white mb-4">
              <img src={profileImg} alt="Rushi Shah" className="w-full grayscale-editorial" />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6 text-lg leading-relaxed">
            <p className="drop-cap">
              Rushi Shah is a strategic thinker and engineer based in Ahmedabad, specializing in the intersection of Artificial Intelligence, Financial Modeling, and Management Consulting. With a focus on "From Data to Strategy to Impact," he builds systems that are as robust as they are visually impeccable.
            </p>
            <p>
              His background in GenAI and LLM automation allows him to bridge the gap between cutting-edge technology and real-world business value. Whether it's optimizing GTM strategies or building complex financial models, the goal remains the same: absolute clarity.
            </p>
          </div>
        </div>
      </EditorialColumn>

      <EditorialColumn span={4} label="Philosophy" icon={Target} className="bg-[#111111] text-[#F9F9F7]">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-serif mb-4 italic text-accent tracking-tighter">I. Precision First</h3>
            <p className="text-sm opacity-80 leading-relaxed font-mono uppercase tracking-wider">
              Every variable is a choice. Every line of code is a commitment to correctness.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-serif mb-4 italic text-accent tracking-tighter">II. Structural Integrity</h3>
            <p className="text-sm opacity-80 leading-relaxed font-mono uppercase tracking-wider">
              Design is not just appearance; it is the skeleton upon which information lives.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-serif mb-4 italic text-accent tracking-tighter">III. Human Impact</h3>
            <p className="text-sm opacity-80 leading-relaxed font-mono uppercase tracking-wider">
              Technology is a tool for strategy, and strategy is a tool for change.
            </p>
          </div>
        </div>
      </EditorialColumn>
    </EditorialGrid>
  );
};

export default About;
