// src/pages/Base.tsx
import React from "react";
import SlidingText from "../components/SlidingText";

export const Base: React.FC = () => {
  const text = "RE:ARME\nRELOAD - REBUILD - RECODE";
  const imageUrl = "/Rearme5.png";

  return (
    <div className="w-full h-full flex justify-center items-center px-4">
      <SlidingText text={text} imageUrl={imageUrl} />
    </div>
  );
};