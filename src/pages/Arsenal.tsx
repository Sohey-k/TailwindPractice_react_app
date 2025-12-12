// src/pages/Arsenal.tsx
export const Arsenal = () => {
  return (
    <div className="pt-8 pb-8 font-zenKaku relative z-0">
      <h1 className="font-bold text-2xl pt-2 pb-2">スキルセット</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full pt-2 pb-2">
          <thead>
            <tr className="bg-yellow-300">
              <th>カテゴリ</th>
              <th>スキル</th>
              <th>経験</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>プログラミング言語</td>
              <td>Python, TypeScript, JavaScript, Bash, VBA</td>
              <td>実務経験あり（Python ETL, VBA自動化）</td>
            </tr>
            <tr>
              <td>フレームワーク</td>
              <td>React, Flask</td>
              <td>React（本ポートフォリオ）, Flask（監視アプリ）</td>
            </tr>
            <tr>
              <td>ネットワーク機器</td>
              <td>Juniper（SRX/MX/EX）, Juniper MIST, Cisco</td>
              <td>実務10ヶ月（VXLAN/EVPN環境）</td>
            </tr>
            <tr>
              <td>クラウド/インフラ</td>
              <td>AWS, Docker, Git/GitHub, Vercel, Linux</td>
              <td>AWS SAA取得, CI/CD実践中</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto mt-8">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="bg-yellow-300">
              <th>資格名</th>
              <th>スコア/ステータス</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AWS Solutions Architect Associate</td>
              <td>取得済み（861/1000点）</td>
            </tr>
            <tr>
              <td>JNCIA-Junos</td>
              <td>取得済み（97%）</td>
            </tr>
            <tr>
              <td>CCNA</td>
              <td>取得済み</td>
            </tr>
            <tr>
              <td>LPIC-2</td>
              <td>取得済み</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};