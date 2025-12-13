// src/pages/Logs.tsx

import Articles from "../components/Article";

export const Logs = () => {
  return (
    <div className="h-full overflow-y-auto px-4 pt-8 pb-16 font-zenKaku relative z-0">
      <h1 className="font-bold text-2xl pt-8">テックノート</h1>
      <hr className="border-t-8 border-purple-600 my-4" />
      <Articles />
    </div>
  );
};
