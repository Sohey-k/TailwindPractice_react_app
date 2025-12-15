// src/pages/Arsenal.tsx

import { ArsenalTable } from "../components/ArsenalTable";
import { skillsData, certificationsData } from "../data/arsenalData";

export const Arsenal = () => {
  return (
    <div className="h-full overflow-y-auto px-4 pt-8 pb-8 font-zenKaku relative z-0">
      <h1 className="font-bold text-2xl pt-8">スキルセット</h1>
      <hr className="border-t-8 border-purple-600 my-4" />

      {/* スキルテーブル */}
      <ArsenalTable
        type="skills"
        headers={["カテゴリ", "スキル", "経験"]}
        data={skillsData}
      />

      {/* 資格テーブル */}
      <div className="mt-10">
        <ArsenalTable
          type="certifications"
          headers={["資格名", "スコア/ステータス"]}
          data={certificationsData}
        />
      </div>
    </div>
  );
};