// src/pages/Base.tsx
import React from "react";
import SlidingText from "../components/SlidingText";

export const Base: React.FC = () => {
  const text = "Welcome to Re:arme\nWeb Site!";
  const imageUrl = "/Rearme2.svg";

  return (
    <div className="flex justify-center items-center h-[calc(100vh-100px)] overflow-hidden px-4">
      <SlidingText text={text} imageUrl={imageUrl} />
    </div>
  );
};