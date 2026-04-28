import { EditorialGrid, EditorialColumn } from '../components/ui/EditorialGrid';
import { Award, Star, Trophy } from 'lucide-react';
import { achievementsContent } from '../content';

const linkedInPosts = [
  "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7451256849133207552?collapsed=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:share:7415686611683717120?collapsed=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7380997322874208256?collapsed=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7362789166851440640?collapsed=1"
];

const Achievements = () => {
  return (
    <EditorialGrid>
      <EditorialColumn span={12} label="Recognition" icon={Award}>
        <h2 className="text-8xl font-serif font-black tracking-tighter mb-12 leading-none uppercase">{achievementsContent.title}<span className="text-accent">{achievementsContent.highlight}</span></h2>
      </EditorialColumn>

      <EditorialColumn span={8} label="The Ledger of Impact" icon={Star}>
        <div className="linkedin-posts-container pr-4">
          {linkedInPosts.map((postUrl, i) => (
            <div key={i} className="linkedin-post mb-6">
              <iframe
                src={postUrl}
                height="500"
                width="100%"
                frameBorder="0"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen=""
                title={`LinkedIn post ${i + 1}`}
              />
            </div>
          ))}
        </div>
      </EditorialColumn>

      <EditorialColumn span={4} label="Summary" icon={Trophy} className="bg-neutral-100">
        <div className="space-y-6">
          {achievementsContent.stats.map((stat, i) => (
            <div key={i} className="p-4 border-2 border-[#111111] bg-white">
              <div className="text-4xl font-serif font-black text-accent">{stat.value}</div>
              <div className="text-[10px] font-mono uppercase tracking-widest opacity-60">{stat.label}</div>
            </div>
          ))}
        </div>
      </EditorialColumn>
    </EditorialGrid>
  );
};

export default Achievements;