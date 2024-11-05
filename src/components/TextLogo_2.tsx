// src/components/TextLogo_2.tsx

import GlitchText from "./GlitchText";

type TextLogoProps = {
  className?: string; // classNameをオプションで受け取る
};

const Textlogo_2 = ({ className }: TextLogoProps) => {
  return (
    <h1 className={`font-stalinist font-bold text-black ${className}`}>
      <GlitchText text="RE:ARME" />
    </h1>
  );
};

export default Textlogo_2;
