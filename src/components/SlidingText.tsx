// src/components/SlidingText.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";

type SlidingTextProps = {
  text: string;
  imageUrl: string;
};

const SlidingText: React.FC<SlidingTextProps> = ({ text, imageUrl }) => {
  const [isImageComplete, setImageComplete] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const lines = text.split("\n");

  const letterAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-center md:space-x-8 w-full">
      {/* 画像 + グリッチエフェクト */}
      <div
        className="relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* メインロゴ - レコード回転 */}
        <motion.img
          src={imageUrl}
          alt="REARME Logo"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            rotate: isHovered ? 360 : 0
          }}
          transition={{
            opacity: { duration: 1 },
            rotate: {
              duration: 2,
              repeat: isHovered ? Infinity : 0,
              ease: "linear"
            }
          }}
          className="object-contain w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative z-10"
          onAnimationComplete={() => setImageComplete(true)}
        />

        {/* RGB分離エフェクト（赤）- 通常グリッチ */}
        <motion.img
          src={imageUrl}
          alt=""
          className="absolute top-0 left-0 object-contain w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 opacity-40 mix-blend-screen pointer-events-none"
          style={{ filter: "sepia(1) hue-rotate(0deg) saturate(6)" }}
          animate={{
            x: [0, -4, 3, -5, 2, -3, 4, -2, 0, 5, -4, 0],
            y: [0, 2, -3, 4, -2, 3, -4, 2, -3, 0, 3, 0],
            rotate: isHovered ? 360 : 0
          }}
          transition={{
            x: { duration: 0.8, repeat: Infinity, ease: "linear" },
            y: { duration: 0.8, repeat: Infinity, ease: "linear" },
            rotate: {
              duration: 2,
              repeat: isHovered ? Infinity : 0,
              ease: "linear"
            }
          }}
        />

        {/* RGB分離エフェクト（青）- 通常グリッチ */}
        <motion.img
          src={imageUrl}
          alt=""
          className="absolute top-0 left-0 object-contain w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 opacity-40 mix-blend-screen pointer-events-none"
          style={{ filter: "sepia(1) hue-rotate(180deg) saturate(6)" }}
          animate={{
            x: [0, 5, -2, 4, -3, 2, -5, 3, -2, 0, -4, 0],
            y: [0, -3, 2, -4, 3, -2, 4, -3, 2, 0, -2, 0],
            rotate: isHovered ? 360 : 0
          }}
          transition={{
            x: { duration: 0.7, repeat: Infinity, ease: "linear" },
            y: { duration: 0.7, repeat: Infinity, ease: "linear" },
            rotate: {
              duration: 2,
              repeat: isHovered ? Infinity : 0,
              ease: "linear"
            }
          }}
        />

        {/* グリーンのグリッチ */}
        <motion.img
          src={imageUrl}
          alt=""
          className="absolute top-0 left-0 object-contain w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mix-blend-screen pointer-events-none"
          style={{ filter: "sepia(1) hue-rotate(90deg) saturate(5)" }}
          animate={{
            x: [0, 3, -4, 5, -3, 4, -2, 3, -5, 2, 0],
            y: [0, -2, 3, -3, 4, -2, 3, -4, 2, -3, 0],
            opacity: [0.25, 0, 0.25, 0, 0.25],
            rotate: isHovered ? 360 : 0
          }}
          transition={{
            x: { duration: 0.6, repeat: Infinity, ease: "linear" },
            y: { duration: 0.6, repeat: Infinity, ease: "linear" },
            opacity: { duration: 0.6, repeat: Infinity, ease: "linear" },
            rotate: {
              duration: 2,
              repeat: isHovered ? Infinity : 0,
              ease: "linear"
            }
          }}
        />
      </div>

      {/* スライドテキスト */}
      {isImageComplete && (
        <motion.div
          className="hidden md:flex flex-col space-y-4"
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
                  className={`font-stalinist font-bold text-purple-600 ${lineIndex === 0
                    ? "text-3xl md:text-4xl lg:text-5xl"
                    : "text-1xl md:text-2xl lg:text-3xl"
                    }`}
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