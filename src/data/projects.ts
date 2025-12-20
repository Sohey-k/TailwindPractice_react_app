export const projects = [
    {
        id: "portfolio",
        name: "Portfolio Website",
        icon: "🌐",
        shortDesc: "React + TypeScript で構築したポートフォリオサイト",
        description: "React、TypeScript、Tailwind CSSを使用して構築した個人ポートフォリオサイト。生成AI（Claude）と協働しながら開発し、レスポンシブデザイン、アニメーション、microCMSを活用したブログ機能を実装。",
        tech: ["React", "TypeScript", "Tailwind CSS", "Vercel", "microCMS"],
        githubUrl: "https://github.com/Sohey-k/rearme-portfolio",
        demoGif: "/REARME.gif"  // ← この行を追加
    },
    {
        id: "flask-ping",
        name: "Flask Ping Monitor",
        icon: "📡",
        shortDesc: "ネットワーク監視アプリケーション",
        description: "疎通確認したいホストを選択しpingボタンをクリックすると簡単にping疎通確認が可能。手打ちでping ipaddressを打つ必要なし。CSVから一括でホストを読み込み、SQLiteに保存して使用することも可能。ホスト新規登録、削除、編集などの機能を実装。実務で簡易的に作成し使用していたものに、CRUD機能やCSV読み込み機能を追加し、生成AI（Claude）との協業により迅速な開発に成功。",
        tech: ["Python", "Flask", "SQLite", "HTML/CSS"],
        githubUrl: "https://github.com/Sohey-k/flask-ping-monitor",
        demoGif: "/Flask_Ping_Monitor.gif"  // ← この行を追加
    },
    {
        id: "automation",
        name: "Juniper Syslog ETL Pipeline",
        icon: "🐍",
        shortDesc: "実務知見を元に再構築した高速ログ解析ツール",
        description: "ネットワーク運用における大規模ログ解析の知見をベースに、汎用的なツールとしてスクラッチで再設計・実装。ETL（抽出・加工・出力）手法を用いて、手作業では数時間を要する解析工程を約5分に短縮するパイプラインを構築しました。実務レベルのデータ処理ロジックと、ユーザー利便性を両立したプロトタイプです。",
        tech: ["Python", "Pandas", "Streamlit", "xlsxwriter"],
        githubUrl: "https://github.com/Sohey-k/juniper-syslog-filter",
        demoGif: "/junpsersyslogfilter.gif"  // ← この行を追加
    }
];