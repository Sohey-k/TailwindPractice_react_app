import React, { useState } from "react";
import { motion } from "framer-motion";

type SlidingTextProps = {
  text: string;
  imageUrl: string;
};

const SlidingText: React.FC<SlidingTextProps> = ({ text, imageUrl }) => {
  const [isImageComplete, setImageComplete] = useState(false);

  // 行ごとにテキストを分割
  const lines = text.split("\n");

  // 文字ごとにスライドインするアニメーション設定
  const letterAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
      {/* 画像フェードイン */}
      <motion.img
        src={imageUrl}
        alt="Zoom In"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="object-cover w-64 h-64 md:w-96 md:h-96"
        onAnimationComplete={() => setImageComplete(true)}
      />

      {/* スライドテキスト - スマホサイズでは非表示 */}
      {isImageComplete && (
        <motion.div
          className="hidden md:flex flex-col space-y-2" // mdサイズ以上で表示
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08, // 各文字を0.1秒ずつ遅らせて表示
                ease: "easeOut", // シャープに切れ味のあるアニメーション
                duration: 10, // 短めの表示時間でよりシャープに
              },
            },
          }}
        >
          {lines.map((line, lineIndex) => (
            <motion.div key={lineIndex} className="flex">
              {line.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  variants={letterAnimation} // 各文字にアニメーションを適用
                  className="font-stalinist font-bold text-black text-xl"
                >
                  {char === " " ? "\u00A0" : char} {/* スペースを挿入 */}
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
