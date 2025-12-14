// src/pages/Deployment.tsx
import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export const Deployment = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      name: "Portfolio Website",
      icon: "🌐",
      shortDesc: "React + TypeScript で構築したポートフォリオサイト",
      description: "React、TypeScript、Tailwind CSSを使用して構築した個人ポートフォリオサイト。生成AI（Claude）と協働しながら開発し、レスポンシブデザイン、アニメーション、microCMSを活用したブログ機能を実装。",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vercel", "microCMS"],
      githubUrl: "https://github.com/Sohey-k/portfolio"
    },
    {
      name: "Flask Ping Monitor",
      icon: "📡",
      shortDesc: "ネットワーク監視アプリケーション",
      description: "Flaskを使用したPing疎通確認アプリケーション。複数のホストを定期的に監視し、結果をSQLiteに保存。Webインターフェースで監視状況を可視化。",
      tech: ["Python", "Flask", "SQLite", "HTML/CSS"],
      githubUrl: "https://github.com/Sohey-k/flask-ping-monitor"
    },
    {
      name: "Python Automation Scripts",
      icon: "🐍",
      shortDesc: "業務効率化スクリプト集",
      description: "業務効率化のために作成したPythonスクリプト集。ETL処理、ログ解析、レポート生成などを自動化。処理時間を3時間から10分に短縮した実績あり。",
      tech: ["Python", "pandas", "openpyxl"],
      githubUrl: "https://github.com/Sohey-k/automation-scripts"
    }
  ];

  return (
    <div className="h-full overflow-y-auto px-4 pt-8 pb-8 font-zenKaku relative z-0">
      <h1 className="font-bold text-2xl pt-8">ポートフォリオ</h1>
      <hr className="border-t-8 border-purple-600 my-4" />

      <p className="mb-6 text-purple-800">
        これまでに制作したプロジェクトをご紹介します。
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(index)}
            className="block p-6 bg-yellow-300 rounded-lg shadow-md hover:bg-yellow-400 transition-all cursor-pointer"
          >
            <div className="text-4xl mb-2">{project.icon}</div>
            <h3 className="text-xl font-bold text-purple-600 mb-2">
              {project.name}
            </h3>
            <p className="text-sm text-purple-800">{project.shortDesc}</p>
            <p className="text-xs text-purple-600 mt-2">クリックで詳細を表示</p>
          </div>
        ))}
      </div>

      {/* モーダル */}
      {selectedProject !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-2 sm:p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full my-8 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-6">
              {/* ヘッダー */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{projects[selectedProject].icon}</span>
                  <h2 className="text-2xl font-bold text-purple-600">
                    {projects[selectedProject].name}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <IoClose className="text-3xl" />
                </button>
              </div>

              {/* 説明 */}
              <div className="mb-4">
                <h3 className="font-bold text-purple-600 mb-2">概要</h3>
                <p className="text-gray-700 leading-relaxed">
                  {projects[selectedProject].description}
                </p>
              </div>

              {/* 使用技術 */}
              <div className="mb-6">
                <h3 className="font-bold text-purple-600 mb-2">使用技術</h3>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHubリンク */}

              <a href={projects[selectedProject].githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all"
              >
                <FaGithub className="text-xl" />
                GitHubで見る
              </a>
            </div>
          </div>
        </div>
      )
      }
    </div >
  );
};