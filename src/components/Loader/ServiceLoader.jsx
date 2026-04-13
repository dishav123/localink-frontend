// components/ServiceLoader.jsx
export default function ServiceLoader({ message = "Sending your code" }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-20 rounded-3xl backdrop-blur-[2px] bg-white/60">
      <div className="flex flex-col items-center gap-4 bg-white border border-gray-200 rounded-2xl px-9 py-7 shadow-sm">

        {/* Worker SVG */}
        <svg width="118" height="102" viewBox="0 0 118 102" xmlns="http://www.w3.org/2000/svg">
          <style>{`
            .arm-g  { transform-origin: 72px 54px; animation: swing 0.42s ease-in-out infinite alternate; }
            @keyframes swing { from{transform:rotate(-28deg)} to{transform:rotate(16deg)} }
            .body-g { animation: bob 0.84s ease-in-out infinite; }
            @keyframes bob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(2px)} }
            .legs-g { animation: lshift 0.84s ease-in-out infinite; transform-origin: 59px 88px; }
            @keyframes lshift { 0%,100%{transform:skewX(0deg)} 50%{transform:skewX(2deg)} }
            .dust-g { animation: dpop 0.42s ease-out infinite alternate; transform-origin: 72px 86px; }
            @keyframes dpop { from{opacity:0;transform:scale(0.2) translateY(0)} to{opacity:0.65;transform:scale(1) translateY(-3px)} }
          `}</style>

          <rect x="12" y="90" width="94" height="5" rx="2.5" fill="#ede8e0"/>
          <ellipse cx="73" cy="90" rx="11" ry="4" fill="#d4c4b0"/>
          <rect x="69" y="82" width="8" height="10" rx="1.5" fill="#b8a898"/>

          <g className="body-g">
            <g className="legs-g">
              <rect x="48" y="74" width="9" height="18" rx="4.5" fill="#4a7fa5"/>
              <rect x="61" y="74" width="9" height="18" rx="4.5" fill="#4a7fa5"/>
              <rect x="44" y="88" width="15" height="7" rx="3.5" fill="#2c3e50"/>
              <rect x="58" y="88" width="15" height="7" rx="3.5" fill="#2c3e50"/>
            </g>
            <rect x="44" y="48" width="30" height="30" rx="8" fill="#e36e2a"/>
            <ellipse cx="59" cy="36" rx="14" ry="13" fill="#f5cba7"/>
            <ellipse cx="59" cy="26" rx="17" ry="7" fill="#e36e2a"/>
            <rect x="42" y="24" width="34" height="8" rx="2" fill="#c85c1c"/>
            <circle cx="54" cy="37" r="2" fill="#6b4c38"/>
            <circle cx="64" cy="37" r="2" fill="#6b4c38"/>
            <path d="M53 43 Q59 47 65 43" stroke="#a0745a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            <g className="arm-g">
              <rect x="72" y="50" width="10" height="20" rx="5" fill="#f5cba7" transform="rotate(-8,77,50)"/>
              <rect x="78" y="60" width="5" height="24" rx="2" fill="#8B5E3C" transform="rotate(-8,80,60)"/>
              <rect x="70" y="78" width="22" height="9" rx="3" fill="#4a4a4a" transform="rotate(-8,81,82)"/>
            </g>
            <rect x="34" y="52" width="12" height="20" rx="6" fill="#f5cba7"/>
          </g>

          <g className="dust-g">
            <circle cx="68" cy="88" r="5" fill="#d4c4b0" opacity="0.6"/>
            <circle cx="79" cy="86" r="3.5" fill="#d4c4b0" opacity="0.5"/>
            <circle cx="61" cy="84" r="3" fill="#d4c4b0" opacity="0.4"/>
          </g>
        </svg>

        {/* Message + progress bar */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-gray-400 tracking-wide">
            {message}
            <DotGroup />
          </p>
          <div className="w-28 h-[3px] bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-[#e36e2a] rounded-full animate-loader-bar" />
          </div>
        </div>

      </div>
    </div>
  );
}

function DotGroup() {
  return (
    <>
      <span className="inline-block animate-dot1">.</span>
      <span className="inline-block animate-dot2">.</span>
      <span className="inline-block animate-dot3">.</span>
    </>
  );
}