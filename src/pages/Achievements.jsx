import { EditorialGrid, EditorialColumn } from '../components/ui/EditorialGrid';
import { Award, Star, Trophy } from 'lucide-react';
import { achievementsContent } from '../content';

const certificateImages = [
  "src/assets/DotSlash 8.0 2nd runners up.jpg",
  "src/assets/Finnovate IIT Gandhinagar 3rd Position Certificate.jpg",
  "src/assets/Innovest 2.0 2nd Runners Up - Ecell Nirma University.jpg",
  "src/assets/1st Position Hack-NU-Thon Rapid Ops Track.jpg",
  "src/assets/Certificate of Excellence in  ArthNeeti 5.0 - IIM Nagpur.jpg",
  "src/assets/Bloomberg Market Concepts.jpg",
  "src/assets/Certificate of Excellence in Pitch Deck Submission of InsightX Strategy Challenge.png",
  "src/assets/In That Case X INDmoney Case Competition - Kirorimal college.jpg",
  "src/assets/Grant Thornton Bharat CASEino Case Competition 22nd Finalist Certificate.jpg",
];

const certificates = [
  {
    title: "DotSlash 8.0 – 2nd Runner-Up",
    subtitle: "National Hackathon | SVNIT Surat",
    highlight: "Top 3 Finish – Competitive Hackathon",
    meta: {
      domain: ["Hackathon", "Problem Solving", "Tech Innovation"],
      type: "National Level Hackathon",
      achievement: "2nd Runner-Up"
    },
    description:
      "Secured a top 3 position at DotSlash 8.0 by building an innovative and scalable solution under time-constrained conditions, demonstrating strong problem-solving and technical execution."
  },
  {
    title: "FINNOVATE Hack 2024 – Participant",
    subtitle: "IIT Gandhinagar | FinTech Hackathon",
    highlight: "Financial Technology Innovation Track",
    meta: {
      domain: ["FinTech", "Innovation", "Financial Systems"],
      type: "Hackathon",
      achievement: "Participant"
    },
    description:
      "Participated in FINNOVATE Hack 2024 at IIT Gandhinagar, working on financial technology challenges and contributing to innovative solutions in digital finance and system transformation."
  },
  {
    title: "Innovest 2.0 – 2nd Runner-Up",
    subtitle: "E-Cell, Nirma University",
    highlight: "Top 3 – Innovation & Entrepreneurship Challenge",
    meta: {
      domain: ["Innovation", "Entrepreneurship", "Strategy"],
      type: "University Competition",
      achievement: "2nd Runner-Up"
    },
    description:
      "Achieved 2nd runner-up position at Innovest 2.0 by presenting a high-impact idea combining innovation, strategic thinking, and entrepreneurial execution."
  },
  {
    title: "HackNU-Thon 6.0 – 1st Position",
    subtitle: "RapidOps Track | Nirma University",
    highlight: "Winner – Innovation & Problem Solving",
    meta: {
      domain: ["Hackathon", "Innovation", "Product Thinking"],
      type: "Hackathon",
      achievement: "Winner"
    },
    description:
      "Won 1st place at HackNU-Thon 6.0 (RapidOps Track) by developing an impactful solution demonstrating strong innovation, teamwork, and end-to-end problem-solving capabilities."
  },
  {
    title: "ARTHNEETI 5.0 – National Finalist",
    subtitle: "IIM Nagpur | Tangerine Trails 2025",
    highlight: "Top Performer at National Finals",
    meta: {
      domain: ["Consulting", "Strategy", "AI", "EdTech"],
      type: "National Case Competition",
      achievement: "Finalist"
    },
    description: "Reached the national finals of ArthNeeti 5.0, a premier case competition hosted by IIM Nagpur, solving real-world business problems in the EdTech and AI space."
  },
  {
    title: "Bloomberg Market Concepts (BMC)",
    subtitle: "Bloomberg for Education",
    highlight: "Certified in Financial Markets",
    meta: {
      domain: ["Finance", "Markets", "Investment Analysis"],
      type: "Professional Certification",
      achievement: "Completed"
    },
    description: "Completed Bloomberg Market Concepts certification covering economic indicators, equities, fixed income, and currency markets with hands-on exposure to Bloomberg Terminal insights."
  },
  {
    title: "InsightX Strategy Challenge – Winner",
    subtitle: "Masters' Union | Unstop",
    highlight: "1st Place – Pitch Deck Strategy Challenge",
    meta: {
      domain: ["Strategy", "Consulting", "Business Analysis"],
      type: "Pitch Deck Competition",
      achievement: "Winner"
    },
    description: "Led a winning team in the InsightX Strategy Challenge by delivering a structured and high-impact pitch deck focused on strategic problem-solving and business storytelling."
  },
  {
    title: "In That Case × INDmoney – 1st Position",
    subtitle: "Kirori Mal College, University of Delhi",
    highlight: "Rank 1 out of 1100+ Teams",
    meta: {
      domain: ["Fintech", "Personal Finance", "Digital Wealth"],
      type: "National Case Competition",
      achievement: "Winner"
    },
    description: "Secured first place in a national-level fintech competition by developing innovative solutions in personal finance and digital wealth management."
  },
  {
    title: "Grant Thornton CASEino – National Finalist",
    subtitle: "Grant Thornton Bharat",
    highlight: "Top 22 out of 4000+ Teams",
    meta: {
      domain: ["Strategy", "Consulting", "Operations", "BFSI"],
      type: "National Case Competition",
      achievement: "Finalist"
    },
    description: "Recognized as a top 22 finalist in CASEino for delivering a comprehensive turnaround strategy across operations, finance, and growth."
  }
];

const Achievements = () => {
  return (
    <EditorialGrid>
      <EditorialColumn span={12} label="Recognition" icon={Award}>
        <h2 className="text-8xl font-serif font-black tracking-tighter mb-12 leading-none uppercase">{achievementsContent.title}<span className="text-accent">{achievementsContent.highlight}</span></h2>
      </EditorialColumn>

      <EditorialColumn span={8} label="The Ledger of Impact" icon={Star}>
        <div className="cert-carousel-container pr-8">
          <div className="cert-carousel-track">
            {[...certificates, ...certificates].map((cert, i) => (
              <div key={i} className="cert-card border border-[#111111] bg-white p-0 overflow-hidden">
                <div className="cert-image-container bg-neutral-50 p-4 flex items-center justify-center">
                  <img
                    src={certificateImages[i % certificateImages.length]}
                    alt={cert.title}
                    className="cert-image max-w-full h-auto max-h-48 object-contain"
                  />
                </div>
                <div className="cert-content p-5">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl font-serif font-bold uppercase tracking-tight">{cert.title}</h3>
                    <span className="cert-badge text-[10px] font-mono uppercase tracking-widest px-3 py-1 bg-accent text-white whitespace-nowrap">
                      {cert.meta.achievement}
                    </span>
                  </div>
                  <p className="text-sm font-mono text-neutral-500 uppercase tracking-wider mb-3">{cert.subtitle}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.meta.domain.map((d, j) => (
                      <span key={j} className="cert-tag text-[10px] font-mono uppercase tracking-widest px-2 py-1 bg-neutral-100 text-neutral-600">
                        {d}
                      </span>
                    ))}
                  </div>
                  <p className="text-base text-neutral-600 leading-relaxed font-body">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cert-carousel-fade-top"></div>
          <div className="cert-carousel-fade-bottom"></div>
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