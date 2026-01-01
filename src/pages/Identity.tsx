import React from "react";

type Section = {
  title?: string;
  content?: string;
};

const sections: Section[] = [
  {
    title: "自己紹介",
    content:
      "こんにちは、so-hey.KOです。15年間の通信インフラ業務経験を経て、エンジニアとして活動しています。直近では、大規模複合施設にて10ヶ月間、Juniper機器（SRX4200、MX240、EX4650）を用いたVXLAN/EVPN環境の運用に従事し、数百台の無線APをJuniper MIST経由で管理していました。AWS Solutions Architect Associate、JNCIA-Junos、CCNA、LPIC-2などの資格を保有し、インフラ自動化とクラウド技術を軸にキャリアを構築中です。現在、インフラエンジニア・DevOps/SREポジションを中心に次のキャリアを探しています。",
  },
  {
    title: "REARMEの由来",
    content:
      "REARMEは再武装のスペイン語で、常に自分を再構築し、新たな挑戦を追い求めるという意味を込めて名付けました。\n技術やキャリアを常に進化させていく決意を表しています。",
  },
  {
    title: "自分の強み",
    content:
      "【クラウドネイティブ開発とIaC】\n AWSサーバーレス（Lambda、S3、DynamoDB、CloudFront）でログ分析システムを構築し、4,733件/日のデータを約1分で自動処理。Terraformによるインフラコード化で環境の再現性を確保し、月額コスト$0.06で運用。\n \n【自動化とデータ処理】\n Python ETLパイプラインで大規模ログ解析を実装。手作業3時間の処理を5分に短縮（96%削減）。Pandas、Streamlit、FlaskによるWebアプリ開発で実務課題を解決。\n \n【ネットワークインフラ運用】\n Juniper機器（SRX4200、MX240、EX4650）のVXLAN/EVPN環境で実務経験。数百台の無線APをMIST経由で監視・運用。マルチベンダー環境でのコンフィグ解析とトラブルシューティング。\n \n【フルスタック開発力】\n React + TypeScript + Tailwind CSSによるモダンフロントエンド開発。Docker/Git/microCMSを活用した本格的なWebアプリケーション構築。生成AI（Claude、Copilot）と協働し、6時間でサーバーレス基盤を完成させるなど、高速な技術キャッチアップ力を実証。",
  },
  {
    title: "趣味・興味",
    content:
      "音楽が好きで、90年代US/UKシーン〜デトロイトテクノ、エレクトロニカまで幅広く聴いてきました。過去にはクラブイベントのオーガナイズにも参加。音楽から得たデザイン感覚やカルチャーが、現在の制作活動にも影響を与えています。プログラミングやテック全般に興味を持ち、日々新しい技術を学ぶことを楽しんでいます。また、PC関連の知識を深めつつ、読書やサッカー観戦を通じてインスピレーションを得ています。",
  },
];

// 🎓 資格情報（新規追加）
const certifications = [
  {
    name: "AWS Solutions Architect Associate",
    imageUrl: "https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
    badgeUrl: "https://www.credly.com/badges/463ffea8-a3ac-4c84-ae3f-f025c992250c/public_url",
    issuer: "Amazon Web Services",
    date: "2025"
  },
  {
    name: "CCNA",
    imageUrl: "https://images.credly.com/size/680x680/images/683783d8-eaac-4c37-a14d-11bd8a36321d/ccna_600.png",
    badgeUrl: "https://www.credly.com/badges/95de6b5b-5aeb-4219-a53c-be5b692f1f88/public_url",
    issuer: "Cisco",
    date: "2024"
  },
  {
    name: "JNCIA-Junos",
    imageUrl: "https://images.credly.com/size/680x680/images/115e08d1-6b0c-40b2-aa15-5906022f4db0/L_01_asso_JNCIA-Junos.png",
    badgeUrl: "https://www.credly.com/badges/da557ce8-4758-4334-843d-db70217d7e0e/public_url",
    issuer: "Juniper Networks",
    date: "2025"
  },
  {
    name: "LPIC-2",
    imageUrl: "https://images.credly.com/size/680x680/images/f4f1d8bf-e7d3-4b2a-9c0b-2d124ff701c3/blob",
    badgeUrl: "https://www.credly.com/badges/39b0a477-9966-46c8-814a-253b0a699103/public_url",
    issuer: "LPI",
    date: "2025"
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
    <div className="w-full h-full overflow-y-auto px-4 pt-8 pb-8 font-zenKaku">
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
          <p className="text-base text-purple-800 leading-relaxed">
            {formatContent(section.content)}
          </p>
        </div>
      ))}

      {/* 🎓 認証済み資格セクション（新規追加） */}
      <div className="mb-8 p-6 bg-yellow-300 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-purple-600 mb-4">
          認証済み資格
        </h2>
        <p className="text-base text-purple-800 mb-6">
          クリックすると Credly で検証できます
        </p>

        {/* バッジグリッド */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {certifications.map((cert) => (
            <a
              key={cert.name}
              href={cert.badgeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-300 hover:bg-yellow-400 p-4 rounded-lg shadow hover:shadow-lg transition-all hover:scale-105"
            >
              {/* バッジ画像 */}
              <div className="flex justify-center mb-3">
                <img
                  src={cert.imageUrl}
                  alt={cert.name}
                  className="w-20 h-20 object-contain"
                />
              </div>

              {/* 資格名 */}
              <h3 className="text-xs font-bold text-purple-600 text-center mb-1">
                {cert.name}
              </h3>

              {/* 発行元 */}
              <p className="text-xs text-purple-800 text-center opacity-70">
                {cert.issuer}
              </p>

              {/* 取得年 */}
              <p className="text-xs text-purple-600 text-center mt-1">
                {cert.date}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Identity;