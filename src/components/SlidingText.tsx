// SlidingText.tsx
import React from 'react';
import { motion } from 'framer-motion';

type SlidingTextProps = {
  text: string;
};

const SlidingText: React.FC<SlidingTextProps> = ({ text }) => {
  // 文字ごとにスプリット
  const letters = text.split('');

  // 各文字のアニメーション設定
  const letterAnimation = {
    hidden: { opacity: 0, x: 50 }, // 右から非表示で開始
    visible: { opacity: 1, x: 0 }, // 左に移動しながら表示
  };

  return (
    <motion.div
      className="flex" // 横並びにするため
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.3, // 各文字を0.1秒ずつ遅らせる
          },
        },
      }}
    >
      {letters.map((char, index) => (
        <motion.span key={index} variants={letterAnimation} className="font-stalinist text-5xl">
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SlidingText;
