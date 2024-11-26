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
              <td>フロントエンド</td>
              <td>HTML, CSS</td>
              <td>実務半年ほど</td>
            </tr>
            <tr>
              <td>バックエンド</td>
              <td>PHP, Ruby, Python, JavaScript, TypeScript</td>
              <td>学習中</td>
            </tr>
            <tr>
              <td>フレームワーク</td>
              <td>Laravel, Rails, React</td>
              <td>学習中</td>
            </tr>
            <tr>
              <td>インフラ</td>
              <td>Docker, Git, GitHub, AWS, GCP</td>
              <td>学習中</td>
            </tr>
            <tr>
              <td>OS</td>
              <td>Linux, WSL2, Windows, Mac</td>
              <td>-</td>
            </tr>
            <tr>
              <td>ツール</td>
              <td>VBA</td>
              <td>実務半年ほど</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto mt-8">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="bg-yellow-300">
              <th>資格名</th>
              <th>ステータス</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AWS ソリューションアーキテクト アソシエイト</td>
              <td>取得済み</td>
            </tr>
            <tr>
              <td>CCNA</td>
              <td>取得済み</td>
            </tr>
            <tr>
              <td>LPIC-1</td>
              <td>取得済み</td>
            </tr>
            <tr>
              <td>Webクリエイター能力認定試験エキスパート</td>
              <td>取得済み</td>
            </tr>
            <tr>
              <td>ITパスポート</td>
              <td>取得予定</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
