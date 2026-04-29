import { EditorialGrid, EditorialColumn } from '../components/ui/EditorialGrid';
import { Mail, Send, Share2 } from 'lucide-react';
import Button from '../components/ui/Button';
import LinkedInCard from '../components/ui/LinkedInCard';
import { contactContent } from '../content';

const Contact = () => {
  return (
    <EditorialGrid>
      <EditorialColumn span={12} label="Dispatch" icon={Send}>
        <h2 className="text-8xl font-serif font-black tracking-tighter mb-12 leading-none uppercase">{contactContent.title}<span className="text-accent">{contactContent.highlight}</span></h2>
      </EditorialColumn>

      <EditorialColumn span={7} label="Correspondence" icon={Mail}>
        <div className="space-y-8 pr-12">
          <p className="text-2xl font-serif italic leading-relaxed">
            "{contactContent.intro.text}"
          </p>
          <div className="space-y-6">
            <div className="flex flex-col gap-1">
              <label className="font-mono text-[10px] uppercase tracking-widest opacity-50">{contactContent.form.subject.label}</label>
              <input type="text" placeholder={contactContent.form.subject.placeholder} className="input-style w-full py-3 font-mono text-sm" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-mono text-[10px] uppercase tracking-widest opacity-50">{contactContent.form.message.label}</label>
              <textarea rows={6} placeholder={contactContent.form.message.placeholder} className="input-style w-full py-3 font-serif text-lg resize-none"></textarea>
            </div>
            <Button className="w-full h-14 text-lg flex items-center justify-center gap-2 [&_.icon-send-color]:!bg-current">
              <span className="icon-send-color"></span>
              {contactContent.form.button}
            </Button>
          </div>
        </div>
      </EditorialColumn>

      <EditorialColumn span={5} label={contactContent.social.title} icon={Share2} className="bg-[#111111] !p-0 overflow-hidden">
        <div className="h-full bg-[#1b1f23]">
          <LinkedInCard />
        </div>
      </EditorialColumn>
    </EditorialGrid>
  );
};

export default Contact;