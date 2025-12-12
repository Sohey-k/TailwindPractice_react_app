// src/pages/Logs.tsx

import Articles from "../components/Article";

export const Logs = () => {
  return (
    <div className="p-6">
      <h1 className="font-bold text-2xl pt-2 pb-2">学習記録</h1>
      <div className="divider divider-primary"></div>  // 紫色
      <Articles />
    </div>
  );
};
