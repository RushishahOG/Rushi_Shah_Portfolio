import { EditorialGrid, EditorialColumn } from '../components/ui/EditorialGrid';
import { Mail, Send, MapPin, Globe, Share2 } from 'lucide-react';
import Button from '../components/ui/Button';
import LinkedInCard from '../components/ui/LinkedInCard';

const Contact = () => {
  return (
    <EditorialGrid>
      <EditorialColumn span={12} label="Dispatch" icon={Send}>
        <h2 className="text-8xl font-serif font-black tracking-tighter mb-12 leading-none uppercase">Open For Wire<span className="text-accent">.</span></h2>
      </EditorialColumn>

      <EditorialColumn span={7} label="Correspondence" icon={Mail}>
        {/* ... existing correspondence code ... */}
        <div className="space-y-8 pr-12">
          <p className="text-2xl font-serif italic leading-relaxed">
            "Direct communication is the highest form of efficiency. Reach out for strategic collaborations or consulting inquiries."
          </p>
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <label className="font-mono text-[10px] uppercase tracking-widest opacity-50">Subject Header</label>
              <input type="text" placeholder="TYPE SUBJECT HERE..." className="w-full border-b border-[#111111] py-3 font-mono text-sm focus:outline-none focus:bg-neutral-50" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-mono text-[10px] uppercase tracking-widest opacity-50">Detailed Brief</label>
              <textarea rows={6} placeholder="TYPE YOUR MESSAGE HERE..." className="w-full border-b border-[#111111] py-3 font-serif text-lg focus:outline-none focus:bg-neutral-50 resize-none"></textarea>
            </div>
            <Button className="w-full h-16 text-xl">SEND DISPATCH</Button>
          </div>
        </div>
      </EditorialColumn>

      {/* LinkedIn Profile Card Section (In place of Coordinates) */}
      <EditorialColumn span={5} label="Digital Identity" icon={Share2} className="bg-[#111111] !p-0 overflow-hidden">
        <div className="h-full bg-[#1b1f23]">
          <LinkedInCard />
        </div>
      </EditorialColumn>
    </EditorialGrid>
  );
};

export default Contact;
