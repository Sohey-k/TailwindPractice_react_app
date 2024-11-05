// src/components/GlitchText.tsx

import "../../styles/glitchText.css"; // CSSファイルのインポート

const GlitchText = ({ text }: { text: string }) => {
    return (
      <div className="relative group cursor-not-allowed mechanical-hover">
        <span className="relative z-10 group-hover:text-transparent transition-colors duration-300">
          {text}
        </span>
        <span className="absolute top-0 left-0.5 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {text}
        </span>
        <span className="absolute top-0 -left-0.5 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {text}
        </span>
      </div>
    );
};

export default GlitchText;
