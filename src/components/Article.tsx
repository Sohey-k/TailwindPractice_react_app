import React, { useEffect, useState } from "react";
import { createClient } from "microcms-js-sdk";
import parse from 'html-react-parser';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// microCMSクライアントの作成
const client = createClient({
  serviceDomain: import.meta.env.VITE_SERVICE_DOMAIN, // サービスID
  apiKey: import.meta.env.VITE_MICROCMS_API_KEY, // APIキー
});

interface Article {
  id: string;
  title: string;
  content: string;
  eyecatch: { url: string };
  category: { name: string };
  status: string;
}

const Articles: React.FC = () => {
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    // microCMSから記事データを取得
    client
      .get({
        endpoint: "blogs",
        contentId: "k98xnv8jw77", // 特定のコンテンツIDを指定
      })
      .then((res) => {
        console.log("API Response:", res); // デバッグ用にレスポンスを確認
        setArticle(res);
      })
      .catch((err) => {
        console.error("API Error:", err); // エラーハンドリングを確認
      });
  }, []);

  if (!article) {
    return <div>Loading...</div>;
  }

  const options = {
    replace: (domNode: any) => {
      // `<pre><code>` タグを探す
      if (domNode.name === 'pre' && domNode.children && domNode.children[0]?.name === 'code') {
        const codeContent = domNode.children[0].children[0].data; // コードの内容を取得
        return (
          <SyntaxHighlighter language="javascript" style={dracula}>
            {codeContent}
          </SyntaxHighlighter>
        );
      }
    }
  };
  

  return (
    <div className="container mx-auto">
      <h2 className="font-bold">{article.title}</h2>
      {article.eyecatch && (
        <img
          src={article.eyecatch.url}
          alt={article.title}
          className="w-full h-auto"
        />
      )}
      <div>{parse(article.content, options)}</div>
      <span className="text-sm text-gray-500">
        Category: {article.category.name}
      </span>
      <span
        className={`ml-4 text-sm ${article.status === "published" ? "text-green-500" : "text-red-500"}`}
      >
        {article.status === "published" ? "Published" : "Draft"}
      </span>
    </div>
  );
};

export default Articles;
