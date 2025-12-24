// src/pages/Arsenal.tsx

import { skillsData, certificationsData } from "../data/arsenalData";

export const Arsenal = () => {
  return (
    <div className="h-full overflow-y-auto px-4 pt-8 pb-8 font-zenKaku relative z-0">
      <h1 className="font-bold text-2xl pt-8">スキルセット</h1>
      <hr className="border-t-8 border-purple-600 my-4" />

      {/* スキルカード */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-purple-600 mb-4">技術スキル</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-yellow-300 rounded-lg shadow-md hover:bg-yellow-400 transition-all"
            >
              <h3 className="text-lg font-bold text-purple-600 mb-3">
                {skill.category}
              </h3>
              <p className="text-sm text-purple-800 mb-2 font-medium">
                {skill.skills}
              </p>
              <p className="text-xs text-purple-600 mt-3">
                {skill.experience}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 資格カード */}
      <section>
        <h2 className="text-xl font-bold text-purple-600 mb-4">資格・認定</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="p-6 bg-yellow-300 rounded-lg shadow-md hover:bg-yellow-400 transition-all"
            >
              <div className="text-3xl mb-3">📜</div>
              <h3 className="text-base font-bold text-purple-600 mb-2">
                {cert.name}
              </h3>
              <p className="text-sm text-purple-800">{cert.score}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};