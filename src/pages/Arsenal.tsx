// src/pages/Arsenal.tsx
export const Arsenal = () => {
  return (
    <div className="h-full overflow-y-auto px-4 pt-8 pb-16 font-zenKaku relative z-0">
      <h1 className="font-bold text-2xl pt-8">スキルセット</h1>
      <hr className="border-t-8 border-purple-600 my-4" />
      <div className="overflow-x-auto mt-6">
        <table className="table w-full">
          <thead>
            <tr className="bg-yellow-300">
              <th className="font-bold text-purple-600">カテゴリ</th>
              <th className="font-bold text-purple-600">スキル</th>
              <th className="font-bold text-purple-600">経験</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white hover:bg-yellow-50 text-purple-600">
              <td className="font-bold">プログラミング言語</td>
              <td>Python, TypeScript, JavaScript, Bash, VBA</td>
              <td>実務経験あり（Python ETL, VBA自動化）</td>
            </tr>
            <tr className="bg-yellow-100 hover:bg-yellow-50 text-purple-600">
              <td className="font-bold">フレームワーク</td>
              <td>React, Flask</td>
              <td>React（本ポートフォリオ）, Flask（監視アプリ）</td>
            </tr>
            <tr className="bg-white hover:bg-yellow-50 text-purple-600">
              <td className="font-bold">ネットワーク機器</td>
              <td>Juniper（SRX/MX/EX）, Juniper MIST, Cisco</td>
              <td>実務10ヶ月（VXLAN/EVPN環境）</td>
            </tr>
            <tr className="bg-yellow-100 hover:bg-yellow-50 text-purple-600">
              <td className="font-bold">クラウド/インフラ</td>
              <td>AWS, Docker, Git/GitHub, Vercel, Linux</td>
              <td>AWS SAA取得, CI/CD実践中</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto mt-10">
        <table className="table w-full">
          <thead>
            <tr className="bg-yellow-300 text-purple-600">
              <th className="font-bold text-purple-600">資格名</th>
              <th className="font-bold text-purple-600">スコア/ステータス</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white hover:bg-yellow-50 text-purple-600">
              <td className="font-bold">AWS Solutions Architect Associate</td>
              <td>取得済み（861/1000点）</td>
            </tr>
            <tr className="bg-yellow-100 hover:bg-yellow-50 text-purple-600">
              <td className="font-bold">JNCIA-Junos</td>
              <td>取得済み（97%）</td>
            </tr>
            <tr className="bg-white hover:bg-yellow-50 text-purple-600">
              <td className="font-bold">CCNA</td>
              <td>取得済み</td>
            </tr>
            <tr className="bg-yellow-100 hover:bg-yellow-50 text-purple-600">
              <td className="font-bold">LPIC-2</td>
              <td>取得済み</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};