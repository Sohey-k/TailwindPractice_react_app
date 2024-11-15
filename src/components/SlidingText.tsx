import React, { useState } from "react";
import { motion } from "framer-motion";

type SlidingTextProps = {
  text: string;
  imageUrl: string;
};

const SlidingText: React.FC<SlidingTextProps> = ({ text, imageUrl }) => {
  const [isTextComplete, setTextComplete] = useState(false); // テキストが完了したかの状態

  // 文字ごとにスプリット
  const letters = text.split("");

  // 各文字のアニメーション設定
  const letterAnimation = {
    hidden: { opacity: 0, x: 50 }, // 右から非表示で開始
    visible: { opacity: 1, x: 0 }, // 左に移動しながら表示
  };

  return (
    <div className="flex flex-col items-right">
      {/* スライドテキスト */}
      <motion.div
        className="flex" // 横並びにするため
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2, // 各文字を0.2秒ずつ遅らせる
            },
          },
        }}
        onAnimationComplete={() => setTextComplete(true)} // アニメーションが完了したら画像を表示
      >
        {letters.map((char, index) => (
          <motion.span
            key={index}
            variants={letterAnimation}
            className="font-stalinist font-bold text-black text-xl"
          >
            {char === " " ? "\u00A0" : char} {/* スペースを挿入 */}
          </motion.span>
        ))}
      </motion.div>

      {/* テキストアニメーションが完了したら画像を表示 */}
      {isTextComplete && (
        <motion.img
          src={imageUrl}
          alt="Fading in"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }} // 2秒かけてフェードイン
          className="object-cover w-96 h-96"
        />
      )}
    </div>
  );
};

export default SlidingText;
