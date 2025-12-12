// src/pages/Logs.tsx

import Articles from "../components/Article";

export const Logs = () => {
  return (
    <div className="pt-8 pb-8 font-zenKaku relative z-0">
      <h1 className="font-bold text-2xl pt-8">テックノート</h1>
      <hr className="border-t-2 border-purple-600 my-4" />
      <Articles />
    </div>
  );
};
