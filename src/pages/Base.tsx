// src/pages/Base.tsx
import React from "react";
import SlidingText from "../components/SlidingText";

export const Base: React.FC = () => {
  const text = "Welcome to Re:arme\nWeb Site!";
  const imageUrl = "/Rearme2.svg";

  return (
    <div className="w-full h-full flex justify-center items-center px-4">
      <SlidingText text={text} imageUrl={imageUrl} />
    </div>
  );
};