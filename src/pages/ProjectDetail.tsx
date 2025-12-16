// src/pages/ProjectDetail.tsx
import { useParams, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import { projects } from "../data/projects";

export const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return <div>プロジェクトが見つかりません</div>;
    }

    return (
        <div className="h-full overflow-y-auto px-4 pt-8 pb-8 font-zenKaku">
            <h1 className="font-bold text-2xl pt-8">ポートフォリオ</h1>
            <hr className="border-t-8 border-purple-600 my-4" />
            <button
                onClick={() => navigate("/deployment")}
                className="flex items-center gap-2 text-purple-600 hover:text-purple-800 mb-6"
            >
                <IoArrowBack /> 一覧に戻る
            </button>

            <div className="flex items-center gap-3 mb-6">
                <span className="text-5xl">{project.icon}</span>
                <h1 className="text-3xl font-bold text-purple-600">{project.name}</h1>
            </div>

            {/* ↓ この部分を追加 */}
            {project.demoGif && (
                <div className="mb-6 rounded-lg overflow-hidden border-2 border-purple-200 max-w-md">
                    <img
                        src={project.demoGif}
                        alt={`${project.name}のデモ`}
                        className="w-full h-auto"
                    />
                </div>
            )}
            {/* ↑ ここまで追加 */}

            <div className="mb-6">
                <h2 className="font-bold text-purple-600 mb-2 text-xl">概要</h2>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
            </div>

            <div className="mb-6">
                <h2 className="font-bold text-purple-600 mb-2 text-xl">使用技術</h2>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all"
            >
                <FaGithub className="text-xl" />
                GitHubで見る
            </a>
        </div >
    );
};