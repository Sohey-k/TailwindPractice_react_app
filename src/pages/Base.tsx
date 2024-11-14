import React from 'react';
import SlidingText from '../components/SlidingText';

export const Base: React.FC = () => {
  const text = "Welcome to Rearme Web Site!";
  const imageUrl = "../../public/Girl-Rearme.png"; // 画像の実際のパス

  return (
    <div className="p-6">
      <h1 className="font-['Stalinist_One'] text-4xl mb-6">Welcome to Rearme!</h1>
      <SlidingText text={text} imageUrl={imageUrl} />
    </div>
  );
};

