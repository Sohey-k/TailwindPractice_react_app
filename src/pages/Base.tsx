import React from "react";
import SlidingText from "../components/SlidingText";

export const Base: React.FC = () => {
  const text = "Welcome to Re:arme\nWeb Site!";
  const imageUrl = "../../public/Girl-Rearme3.png"; // 画像の実際のパス

  return (
    <div className="p-[8rem]">
      <SlidingText text={text} imageUrl={imageUrl} />
    </div>
  );
};
