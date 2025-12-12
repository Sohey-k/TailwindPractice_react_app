// src/pages/Logs.tsx

import Articles from "../components/Article";

export const Logs = () => {
  return (
    <div className="p-6">
      <h1 className="font-bold text-2xl pt-2 pb-2">学習記録</h1>
      <hr className="border-t-2 border-purple-600 my-4" />
      <Articles />
    </div>
  );
};
