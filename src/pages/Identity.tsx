import React from "react";

type Section = {
  title?: string;
  content?: string;
};

const sections: Section[] = [
  {
    title: "自己紹介",
    content:
      "初めまして!コニシと申します。\n現在、新たなチャレンジを求めて転職活動を進めています。まずはWebエンジニアやインフラエンジニアとして基礎を固め、幅広い分野で活躍できるエンジニアになることを目指しています。\nまだまだ学びの途中ではありますが、どうぞよろしくお願いいたします!",
  },
  {
    title: "REARMEの由来",
    content:
      "REARMEは再武装のスペイン語で、常に自分を再構築し、新たな挑戦を追い求めるという意味を込めて名付けました。\n技術やキャリアを常に進化させていく決意を表しています。",
  },
  {
    title: "自分の強み",
    content:
      "【探求心】: 興味を持ったことを徹底的に調べ、学び続ける姿勢が成長の原動力です。\n【好奇心】:  多くの分野に興味を持ち、幅広い知識を吸収しています。複数のことに同時に取り組むこともありますが、調整しながら着実に学んでいます。\n【集中力】: 物事に集中すると長時間取り組むことができ、難しい課題にも根気強く対応できます。\n【協調性】: チーム内で状況を把握し、柔軟に対応することで円滑なコミュニケーションを心掛けています。\n【適応力】: 新しい環境や変化にも素早くなじみ、挑戦を楽しみながら結果を出すことができます。\n【自走力】: 独学を続ける中で身につけた問題解決力を活かし、新しい技術にも積極的に取り組み、自信を持って自己解決できる力を磨いています。",
  },
  {
    title: "エンジニア志望の動機",
    content:
      "私はHTMLとCSSを用いたWebサイト制作をきっかけにプログラミングに興味を持ちましたが、一時は情熱を失い技術から離れていました。しかし、再び学び直した際、その進化に感動し、ProgateやプログラミングスクールでRuby on Railsを学び、プログラミングの楽しさを再発見しました。\nその後、派遣業務でExcelの自動化に取り組む中で技術への情熱が復活し、独学でVBAや関数を活用した仕組みを構築。これをきっかけに、コンピューターサイエンス、Web技術、ネットワーク、Linux、フロントエンド・バックエンド、クラウドなど、幅広い基礎技術を習得しました。\n現在は生成AIなどの新領域に挑戦しつつ、これまでに培った技術を組み合わせて、課題解決に役立つシステムやサービスを提供できるエンジニアを目指しています。最終目標は、技術を通じて人々の生活や業務を効率化し、より良い未来づくりに貢献することです。",
  },
  {
    title: "趣味・興味",
    content:
      "音楽が好きで、特にデザイン的なルーツは、これまで聞いてきた音楽に大きく影響されています。\nプログラミングやテック全般に興味を持ち、日々新しい技術を学ぶことを楽しんでいます。\nまた、PC関連の知識も深めつつ、読書やサッカー観戦を通じてインスピレーションを得ることが多いです。",
  },
];

const formatContent = (text: string = "") =>
  text.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

export const Identity = () => {
  return (
    <div className="w-full mx-auto pt-16 font-zenKaku">
      {sections.map((section, index) => (
        <div 
          key={index} 
          className="mb-8 p-6 bg-yellow-300 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold text-purple-600 mb-4">
            {section.title}
          </h2>
          <p className="text-purple-800 leading-relaxed">
            {formatContent(section.content)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Identity;