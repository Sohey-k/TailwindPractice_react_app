import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export const Deployment = () => {
  return (
    <div className="h-full overflow-y-auto px-4 pt-8 pb-16 font-zenKaku">
      <h1 className="font-bold text-2xl pt-8">ワークス</h1>
      <hr className="border-t-8 border-purple-600 my-4" />

      <p className="mb-6 text-purple-800">
        これまでに制作したプロジェクトをご紹介します。
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/deployment/${project.id}`}
            className="block p-6 bg-yellow-300 rounded-lg shadow-md hover:bg-yellow-400 transition-all"
          >
            <div className="text-4xl mb-2">{project.icon}</div>
            <h3 className="text-xl font-bold text-purple-600 mb-2">
              {project.name}
            </h3>
            <p className="text-sm text-purple-800">{project.shortDesc}</p>
            <p className="text-xs text-purple-600 mt-2">詳細を見る →</p>
          </Link>
        ))}
      </div>
    </div>
  );
};