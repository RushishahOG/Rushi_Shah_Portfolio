import NewspaperHeader from './NewspaperHeader';
import Ticker from './Ticker';
import { Mail, CodeXml, UserRound } from 'lucide-react';
import { SpeedInsights } from "@vercel/speed-insights/next";

const Layout = ({ children }) => {
  const stats = [
    { label: "AI AUTOMATION", value: "+35% EFFICIENCY", trend: "up" },
    { label: "GTM OPTIMIZATION", value: "-40% MANUAL EFFORT", trend: "up" },
    { label: "HEDGE FUND STRATEGY", value: "+67% RETURN", trend: "up" },
    { label: "SHARPE RATIO", value: "0.43", trend: "down" },
    { label: "M&A VALUE CREATION", value: "₹40–60 Cr", trend: "up" },
    { label: "CAPITAL STRUCTURING", value: "₹770 Cr PLAN", trend: "up" },
    { label: "CONSULTING IMPACT", value: "EBITDA 2% → 9%", trend: "up" },
    { label: "AVAILABILITY", value: "SELECTIVE", trend: "down" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F9F7]">
      <NewspaperHeader />
      <Ticker items={stats} />
      <SpeedInsights />

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="mt-auto border-t-[6px] border-[#111111] bg-[#F9F9F7] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div>
              <h2 className="text-5xl font-serif font-black mb-4 tracking-tighter text-accent uppercase">RUSHI SHAH<span className="text-accent">.</span></h2>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                Printed in Ahmedabad | Vol. I No. 001 | © 2026 Rushi Shah
              </div>
            </div>
            <div className="flex gap-16">
              <div className="flex flex-col gap-3">
                <span className="font-bold uppercase text-[10px] tracking-widest border-b border-[#111111] pb-1">Socials</span>
                <a href="#" className="text-xs font-mono uppercase tracking-widest hover:text-accent flex items-center gap-2"><CodeXml size={10} /> Github</a>
                <a href="#" className="text-xs font-mono uppercase tracking-widest hover:text-accent flex items-center gap-2"><UserRound size={10} /> Linkedin</a>
                <a href="#" className="text-xs font-mono uppercase tracking-widest hover:text-accent flex items-center gap-2"><Mail size={10} /> Email</a>
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-bold uppercase text-[10px] tracking-widest border-b border-[#111111] pb-1">Legal</span>
                <a href="#" className="text-xs font-mono uppercase tracking-widest hover:text-accent">Privacy Policy</a>
                <a href="#" className="text-xs font-mono uppercase tracking-widest hover:text-accent">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
