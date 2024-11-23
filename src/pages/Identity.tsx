// src/pages/Identity.tsx
import React, { useState } from "react";

type Section = {
  title?: string;
  content?: string;
};

const sections: Section[] = [
  {
    title: "自己紹介",
    content:
      "初めまして!コニシと申します。\n現在、新たなチャレンジを求めて転職活動を進めています。まずはWebエンジニアやインフラエンジニアとして基礎を固め、幅広い分野で活躍できるエンジニアになることを目指しています。\n将来的には、DevOpsやSREといった分野にも挑戦し、効率的でスケーラブルなシステムを構築できるスキルを習得したいと考えています。\nまだまだ学びの途中ではありますが、どうぞよろしくお願いいたします!",
  },
  {
    title: "趣味・興味",
    content: "音楽が好きで、特にデザイン的なルーツは、これまで聞いてきた音楽に大きく影響されています。\nプログラミングやテック全般に興味を持ち、日々新しい技術を学ぶことを楽しんでいます。\nまた、PC関連の知識も深めつつ、読書やサッカー観戦を通じてインスピレーションを得ることが多いです。",
  },
  { title: "REARMEの由来", content: "REARMEは再武装のスペイン語で、常に自分を再構築し、新たな挑戦を追い求めるという意味を込めて名付けました。\n技術やキャリアを常に進化させていく決意を表しています。" },
  {
    title: "自分の強み",
    content: "探求心: 気になることがあれば、とことん調べることができ、時には時間を忘れて深掘りしてしまうことがあります。新しい技術や知識に対して貪欲に学ぶ姿勢が、成長の原動力です。\n\n好奇心: 様々な分野に興味を持ち、多方面にわたる知識を吸収することが得意です。その反面、興味がありすぎて、複数のことを同時に手を出してしまうこともありますが、それをうまく調整して学んでいます。\n\n集中力: 物事に集中すると、長時間でも作業に没頭できます。特に探求心とリンクしており、難解な問題に直面しても、集中して取り組むことができます。\n\n協調性: 周囲の状況を把握し、チーム内で最適な振る舞いをすることができます。意見の違いや価値観の違いがあっても、柔軟に対応し、円滑なコミュニケーションを心掛けています。\n\n適応力: 新しい環境や変化に素早く適応することが得意です。新しい挑戦にも積極的に取り組み、困難な状況でも柔軟に対応して結果を出しています。\n\n自走力: 独学で学び続けてきた結果、自分で調べながら問題を解決する力が身につきました。特に、生成AIサービスなどの新しい技術に触れることで、自信を持って自己解決する力が強化されました。",
  },
  { title: "Hobbies & Interests", content: "Coding, gaming, and reading." },
  {
    title: "Strengths in Action",
    content: "Proven problem-solving and teamwork.",
  },
  {
    title: "Future Plans",
    content: "Aiming to excel in DevOps and SRE roles.",
  },
];

const formatContent = (text: string) =>
  text.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

export const Identity = ({
  title = "未設定",
  content = "コンテンツがありません。",
}: Section) => {
  //オンマウスオーバー時に、usestateフックを設定。
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full mx-auto">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`collapse border border-base-300 bg-base-100 rounded-box my-2 ${
            openIndex === index
              ? "collapse-open bg-yellow-300"
              : "collapse-close"
          }`}
          onMouseEnter={() => setOpenIndex(index)} // マウスオーバーで開く
          onMouseLeave={() => setOpenIndex(null)} // マウスが離れたら閉じる
        >
          <input type="checkbox" id={`section-${index}`} />
          <label
            htmlFor={`section-${index}`}
            className="collapse-title text-lg font-bold cursor-pointer"
          >
            {section.title || title} {/* ここでtitleをデフォルト値として使う */}
          </label>
          <div className="collapse-content">
            <p>{formatContent(section.content || content)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
