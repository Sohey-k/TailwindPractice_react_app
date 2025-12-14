import React from "react";

type Section = {
  title?: string;
  content?: string;
};

const sections: Section[] = [
  {
    title: "自己紹介",
    content:
      "こんにちは、トリパノームです。15年間の通信インフラ業務経験を経て、エンジニアとして活動しています。直近では、大規模複合施設にて10ヶ月間、Juniper機器（SRX4200、MX240、EX4650）を用いたVXLAN/EVPN環境の運用に従事し、700台以上の無線APをJuniper MIST経由で管理していました。AWS Solutions Architect Associate、JNCIA-Junos、CCNA、LPIC-2などの資格を保有し、インフラ自動化とクラウド技術を軸にキャリアを構築中です。現在、インフラエンジニア・SREポジションを中心に次のキャリアを探しています。",
  },
  {
    title: "REARMEの由来",
    content:
      "REARMEは再武装のスペイン語で、常に自分を再構築し、新たな挑戦を追い求めるという意味を込めて名付けました。\n技術やキャリアを常に進化させていく決意を表しています。",
  },
  {
    title: "自分の強み",
    content:
      "【自動化による効率化】\n Python ETLスクリプトで処理時間を3時間から10分に短縮。VBAでも業務効率50%改善を実現。\n \n【ネットワーク機器の運用経験】\n Juniper機器（SRX4200、MX240、EX4650）での実務経験。VXLAN/EVPN環境の運用実績。コンフィグ解析やACL設定の理解など、マルチベンダー環境への対応力あり。\n \n【大規模環境の運用経験】\n 700台以上の無線APをJuniper MIST経由で監視・運用。障害時の交換作業サポート含む運用業務に従事。\n \n【独学による技術習得力と生成AI活用】\n AWS Solutions Architect Associate（861/1000点）、JNCIA-Junos（97%）、CCNA、LPIC-2を取得。生成AI（Claude、ChatGPT等）を活用したプログラミング学習により、Python、TypeScript/React、Docker、Gitなど幅広い技術スタックを短期間で習得。AI支援によるコード生成、デバッグ、設計レビューを実践し、開発効率を大幅に向上。本ポートフォリオサイトもAIと協働で構築。",
  },
  {
    title: "趣味・興味",
    content:
      "音楽が好きで、90年代US/UKシーン〜デトロイトテクノ、エレクトロニカまで幅広く聴いてきました。過去にはクラブイベントのオーガナイズにも参加。音楽から得たデザイン感覚やカルチャーが、現在の制作活動にも影響を与えています。プログラミングやテック全般に興味を持ち、日々新しい技術を学ぶことを楽しんでいます。また、PC関連の知識を深めつつ、読書やサッカー観戦を通じてインスピレーションを得ています。",
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
    <div className="w-full h-full overflow-y-auto px-4 pt-8 pb-16 font-zenKaku">
      <h1 className="font-bold text-2xl pt-8">プロフィール</h1>
      <hr className="border-t-8 border-purple-600 my-4" />
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