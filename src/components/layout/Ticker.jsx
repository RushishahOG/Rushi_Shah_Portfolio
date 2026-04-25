const Ticker = ({ items }) => {
  return (
    <div className="w-full bg-[#111111] text-[#F9F9F7] py-2 overflow-hidden border-b border-[#111111]">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items].map((item, index) => {
          const isUp = item.trend === 'up';
          const isDown = item.trend === 'down';
          
          return (
            <div key={index} className="flex items-center mx-12 font-mono text-[10px] uppercase tracking-widest">
              <span className={`mr-2 ${isUp ? 'text-green-500' : isDown ? 'text-red-500' : 'text-accent'}`}>
                {isUp ? '▲' : isDown ? '▼' : '✦'}
              </span>
              <span className="mr-2">{item.label}</span>
              <span className={isUp ? 'text-green-500' : isDown ? 'text-red-500' : ''}>
                {item.value}
              </span>
              <span className="text-neutral-500 ml-6 opacity-30 font-sans">///</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ticker;
