import { ExternalLink, MoreHorizontal, Verified, Pencil } from 'lucide-react';
import linkedinBanner from '../../assets/linkedin-banner.png';
import profilePhoto from '../../assets/linkedin-profile.jpg';
import emplayLogo from '../../assets/emplay-logo.jpg';
import nirmaLogo from '../../assets/nirma-logo.jpg';

const LinkedInCard = () => {
  return (
    <div className="w-full bg-[#1b1f23] overflow-hidden border border-[#30363d] shadow-2xl font-googlesans normal-case tracking-normal text-left">
      {/* HEADER SECTION (BANNER IMAGE) */}
      <div className="relative w-full">
        <img
          src={linkedinBanner}
          alt="LinkedIn Banner"
          className="w-full h-auto block"
        />
        <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-white/30 transition-colors">
          <MoreHorizontal size={18} />
        </div>
      </div>

      {/* MAIN CONTENT SECTION */}
      <div className="px-6 md:px-8 pb-8 -mt-12 md:-mt-16 relative z-10">

        {/* Edit Pencil (Header Overlay) */}
        <div className="absolute right-8 top-20 md:top-24 text-gray-400 hover:text-white cursor-pointer">
          <Pencil size={20} />
        </div>

        <div className="flex flex-col justify-between items-start gap-6">

          {/* Top: Profile Image and Bio */}
          <div className="w-full">
            {/* Profile Image Overlap */}
            <div className="relative inline-block mb-4">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-[6px] border-[#1b1f23] overflow-hidden bg-[#2d333b]">
                <img
                  src={profilePhoto}
                  alt="Rushi Arpan Shah"
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '50%' }}
                />
              </div>
            </div>

            <div className="mt-1 w-full">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl md:text-3xl font-medium text-white tracking-tight normal-case font-googlesans">Rushi Arpan Shah</h1>
                <Verified className="text-[#71B7FB] w-6 h-6 shrink-0" />
                <span className="text-gray-400 text-[15px] font-medium shrink-0">He/Him</span>
              </div>

              <p className="text-white text-base md:text-[16px] leading-snug mb-2 w-full font-medium normal-case font-googlesans">
                Int. B.Tech CSE '25 – MBA '27, Nirma University | Backend Architectures | ML/DL | Agentic AI | Data Storyteller | 4× Hackathon Laureate
              </p>

              <div className="flex flex-wrap items-center gap-x-2 text-[14px] mb-2 text-gray-400 normal-case font-googlesans">
                <span>Vadodara, Gujarat, India</span>
                <span className="text-[#71B7FB] font-medium hover:underline cursor-pointer">Contact info</span>
              </div>

              <div className="mb-3">
                <a href="#" className="flex items-center gap-1.5 text-[#71B7FB] font-medium hover:underline text-[15px] normal-case font-googlesans">
                  Github Profile
                  <ExternalLink size={14} />
                </a>
              </div>

              <div className="text-[14px] text-[#71B7FB] font-medium flex gap-2 normal-case font-googlesans">
                <span className="hover:underline cursor-pointer">1,691 followers</span>
                <span className="text-gray-500 font-normal">•</span>
                <span className="hover:underline cursor-pointer">500+ connections</span>
              </div>
            </div>
          </div>

          {/* Bottom: Affiliations */}
          <div className="w-full mt-2">
            <div className="space-y-4">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 bg-white rounded overflow-hidden shrink-0 flex items-center justify-center p-1">
                  <img src={emplayLogo} className="w-full h-full object-contain" alt="Emplay Inc." />
                </div>
                <span className="text-sm font-medium text-white group-hover:text-[#71B7FB] group-hover:underline leading-tight transition-colors normal-case font-googlesans">
                  Emplay Inc.
                </span>
              </div>

              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 bg-[#f8f1e7] rounded overflow-hidden shrink-0 flex items-center justify-center p-1">
                  <img src={nirmaLogo} className="w-full h-full object-contain" alt="Nirma University" />
                </div>
                <span className="text-sm font-medium text-white group-hover:text-[#71B7FB] group-hover:underline leading-tight transition-colors normal-case font-googlesans">
                  Nirma University, Ahmedabad, Gujarat, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="https://www.linkedin.com/in/rushiarpanshah"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#71B7FB] text-[#1b1f23] hover:bg-[#5da6e8] transition-colors font-medium px-6 py-2 rounded-full text-base flex items-center normal-case font-googlesans"
          >
            View Full Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default LinkedInCard;
