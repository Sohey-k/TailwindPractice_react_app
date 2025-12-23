# REARME Portfolio

<img src="public/Rearme5.png" alt="REARME Logo" width="200">

## 🎯 このサイトについて

RE:ARME（再武装）をコンセプトに作成した個人ポートフォリオサイトです。
「常に進化し続けるエンジニア」という姿勢を表現するため、生成AI（Claude）と協働しながら開発しました。
エレクトロニック風フォント/グリッチエフェクトを取り入れたデザインが特徴です。

**🔗 サイトはこちら:** https://rearme.vercel.app/

**🔗 デモ画像:**

<img src="public/REARME.gif" alt="REARME.gif" width="200">

## 🛠️ 使っている技術

- **フロントエンド:** React 18, TypeScript
- **スタイリング:** Tailwind CSS, DaisyUI
- **アニメーション:** Framer Motion
- **CMS:** microCMS（ブログ機能）
- **デプロイ:** Vercel
- **デザインツール:** GIMP, InkScape

## ✨ 実装した機能

- ロゴのグリッチエフェクトアニメーション（マウスホバーでレコードのように回転します）
- スマホ・タブレット対応のレスポンシブデザイン
- microCMSと連携したブログ機能（最新記事を自動表示）
- モーダルウィンドウ付きのプロジェクト紹介ページ
- カスタムデザインのテーブル表示

## 🎨 デザインのこだわり

**REARMEの由来**  
スペイン語で「再び武装する」を意味する言葉です。常に自分を再構築し、新たな挑戦を追い求めるという想いを込めて名付けました。

**ビジュアルの背景**  
90年代US/UKのクラブカルチャーとエレクトロニックミュージックから影響を受けています。
黄色と紫のコントラスト、グリッチエフェクトなど、テクノ/エレクトロの世界観を表現しました。

## 📦 ローカルで動かす方法

> **前提条件**  
> Node.js と npm がインストールされている必要があります。


```bash
# パッケージのインストール
npm install

# 開発サーバーの起動
npm run dev

# 本番用ビルド
npm run build
```

## 📝 環境変数（microCMS）

このサイトには microCMS を使用したブログ機能が含まれています。
ブログ機能を有効にする場合は、.env ファイルに以下の環境変数を設定してください。


```env
VITE_SERVICE_DOMAIN=your_microcms_service_domain
VITE_MICROCMS_API_KEY=your_microcms_api_key
```

## ⚠️ Blog機能について（重要）

このポートフォリオサイトは、microCMS が利用できない環境でも全体が表示される設計になっています。

- microCMS の環境変数が 設定されていない場合

    - サイト全体は正常にレンダリングされます

    - Blog セクションのみ Blog is not available. と表示されます

- microCMS の環境変数が 正しく設定されている場合

    - 最新のブログ記事が表示されます

これは、外部API（CMS）が利用できない状況でも
ポートフォリオとしての閲覧性を損なわないための設計判断です。

## 🚀 開発のポイント

- 生成AI（Claude）を積極的に活用し、効率的に開発を進めました
- 外部API（microCMS）の失敗が全体表示に影響しないよう、コンポーネント単位でエラーハンドリングを実装
- Vercelの自動デプロイ機能で、GitHubへのプッシュと同時にサイトが更新されます
- ロゴデザインはInkScapeとGIMPで自作しました

## 📄 ライセンス

MIT License

## 👤 作った人

**Sohey-K**  
インフラエンジニア

- GitHub: [@Sohey-k](https://github.com/Sohey-k)
- X: [@reep_of_face](https://x.com/reep_of_face)
