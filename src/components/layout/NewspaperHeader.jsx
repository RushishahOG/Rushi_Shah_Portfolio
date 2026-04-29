import { useRef } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../ui/ThemeToggle';
import { animate, stagger, splitText } from 'https://esm.sh/animejs';

const NewspaperHeader = () => {
  const headingRef = useRef(null);
  const animationRef = useRef(null);
  const charsRef = useRef(null);
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="header-deco bg-[#F9F9F7] border-b-[6px] border-[#111111]">

      {/* Top Bar */}
      <div className="container mx-auto px-4 py-6 flex justify-between items-center border-b border-[#111111]">

        {/* Name / Brand */}
        <div className="flex-1 flex items-center text-[#111111]">
          <Link to="/">
            <h1 
              ref={headingRef}
              onMouseEnter={() => {
                if (!headingRef.current) return;
                
                if (!charsRef.current) {
                  const { chars } = splitText(headingRef.current, { words: false, chars: true });
                  charsRef.current = chars;
                }

                if (animationRef.current) {
                  animationRef.current.restart();
                } else {
                  animationRef.current = animate(charsRef.current, {
                    y: [
                      { to: '-2.75rem', ease: 'outExpo', duration: 600 },
                      { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
                    ],
                    rotate: {
                      from: '-1turn',
                      delay: 0
                    },
                    delay: stagger(50),
                    ease: 'inOutCirc'
                  });
                }
              }}
              className="text-4xl md:text-5xl lg:text-7xl font-serif font-black tracking-tighter leading-none m-0 hover:text-accent transition-colors inline-block"
            >
              RUSHI SHAH<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* Center Box (Repositioned as Value Proposition) */}
        <div className="hidden lg:flex flex-1 justify-center">
          <div className="border border-[#111111] p-4 flex flex-col items-center text-center max-w-[280px] font-stack">

            <div className="text-[11px] uppercase tracking-widest mb-1 border-b border-[#111111] w-full pb-1 font-bold">
              AI • Finance • Strategy
            </div>

            <div className="text-[12px] font-bold uppercase italic py-1">
              " From Data to Strategy to Impact "
            </div>

            <div className="text-[10px] font-serif mt-1 opacity-60">
              Portfolio Edition · 2026
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="flex-1 flex justify-end gap-4">
          <Link to="/resumes">
            <button className="header-btn bg-[#111111] text-[#F9F9F7] px-8 py-3 text-xs font-googlesans font-bold uppercase tracking-widest hover:bg-accent transition-colors flex items-center gap-2">
              <span className="icon-resume-color"></span> View Resume
            </button>
          </Link>
          <Link to="/broadcast">
            <button className="header-btn bg-[#111111] text-[#F9F9F7] px-8 py-3 text-xs font-googlesans font-bold uppercase tracking-widest hover:bg-accent transition-colors flex items-center gap-2">
              <span className="icon-video-color"></span> Broadcast
            </button>
          </Link>
        </div>
      </div>

      {/* Date and Edition Bar */}
      <div className="container mx-auto px-4 py-2 flex justify-between items-center text-[10px] font-mono uppercase tracking-[0.2em] border-b border-[#111111]">
        <div className="flex-1">
          {today}
        </div>

        <div className="flex-1 text-center hidden md:block">
          Focus: AI/ML · GenAI · Financial Modeling · Consulting
        </div>

        <div className="flex-1 text-right flex justify-end items-center gap-4">
          <span>Open to Internships</span>
          <ThemeToggle />
        </div>
      </div>

      {/* Navigation */}
      <nav className="container mx-auto px-4 py-3 flex justify-center gap-12 font-googlesans font-medium text-xs uppercase tracking-[0.3em]">

        <Link to="/about" className="nav-link hover:text-accent border-b border-transparent hover:border-accent transition-all">
          About
        </Link>

        <Link to="/projects" className="nav-link hover:text-accent border-b border-transparent hover:border-accent transition-all">
          Projects
        </Link>

        <Link to="/case-decks" className="nav-link hover:text-accent border-b border-transparent hover:border-accent transition-all">
          Case Competitions Decks
        </Link>

        <Link to="/professional-engagements" className="nav-link hover:text-accent border-b border-transparent hover:border-accent transition-all">
          Engagements
        </Link>

        <Link to="/achievements" className="nav-link hover:text-accent border-b border-transparent hover:border-accent transition-all">
          Achievements
        </Link>

        <Link to="/contact" className="nav-link hover:text-accent border-b border-transparent hover:border-accent transition-all">
          Contact
        </Link>

      </nav>
    </header>
  );
};

export default NewspaperHeader;