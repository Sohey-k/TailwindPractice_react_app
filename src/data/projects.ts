export const projects = [
    {
        id: "portfolio",
        name: "Portfolio Website",
        icon: "🌐",
        shortDesc: "React + TypeScript で構築したポートフォリオサイト",
        description: "React、TypeScript、Tailwind CSSを使用して構築した個人ポートフォリオサイト。生成AI（Claude）と協働しながら開発し、レスポンシブデザイン、アニメーション、microCMSを活用したブログ機能を実装。",
        tech: ["React", "TypeScript", "Tailwind CSS", "Vercel", "microCMS"],
        githubUrl: "https://github.com/Sohey-k/rearme-portfolio",
        demoGif: "/public/REARME.gif"  // ← この行を追加
    },
    {
        id: "flask-ping",
        name: "Flask Ping Monitor",
        icon: "📡",
        shortDesc: "ネットワーク監視アプリケーション",
        description: "疎通確認したいホストを選択しpingボタンをクリックすると簡単にping疎通確認が可能。手打ちでping ipaddressを打つ必要なし。CSVから一括でホストを読み込み、SQLiteに保存して使用することも可能。ホスト新規登録、削除、編集などの機能を実装。実務で簡易的に作成し使用していたものに、CRUD機能やCSV読み込み機能を追加し、生成AI（Claude）との協業により迅速な開発に成功。",
        tech: ["Python", "Flask", "SQLite", "HTML/CSS"],
        githubUrl: "https://github.com/Sohey-k/flask-ping-monitor",
        demoGif: "/public/Flask_Ping_Monitor.gif"  // ← この行を追加
    },
    {
        id: "automation",
        name: "Python Automation Scripts",
        icon: "🐍",
        shortDesc: "業務効率化スクリプト集",
        description: "業務効率化のために作成したPythonスクリプト集。ETL処理、ログ解析、レポート生成などを自動化。処理時間を3時間から10分に短縮した実績あり。",
        tech: ["Python", "pandas", "openpyxl"],
        githubUrl: "https://github.com/Sohey-k/automation-scripts",
        demoGif: "/demo/portfolio-demo.gif"  // ← この行を追加
    }
];