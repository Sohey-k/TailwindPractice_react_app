// src/components/SlidingText.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";

type SlidingTextProps = {
  text: string;
  imageUrl: string;
};

const SlidingText: React.FC<SlidingTextProps> = ({ text, imageUrl }) => {
  const [isImageComplete, setImageComplete] = useState(false);

  const lines = text.split("\n");

  const letterAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-center md:space-x-8 w-full">
      {/* 画像フェードイン */}
      <motion.img
        src={imageUrl}
        alt="Zoom In"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="object-contain w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
        onAnimationComplete={() => setImageComplete(true)}
      />

      {/* スライドテキスト */}
      {isImageComplete && (
        <motion.div
          className="hidden md:flex flex-col space-y-2"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
                ease: "easeOut",
                duration: 10,
              },
            },
          }}
        >
          {lines.map((line, lineIndex) => (
            <motion.div key={lineIndex} className="flex">
              {line.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  variants={letterAnimation}
                  className="font-stalinist font-bold text-black text-xl"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default SlidingText;