import React, { useEffect, useState } from "react";
import { createClient } from "microcms-js-sdk";
import parse from "html-react-parser";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
    // 最新記事を1件取得
    client
      .get({
        endpoint: "blogs",
        queries: {
          limit: 1,
          orders: '-publishedAt' // 公開日の降順（新しい順）
        }
      })
      .then((res) => {
        console.log("API Response:", res);
        setArticle(res.contents[0]); // 配列の最初の要素
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  }, []);

  if (!article) {
    return <div>Loading...</div>;
  }

  const options = {
    replace: (domNode: any) => {
      // `<pre><code>` タグを探す
      if (
        domNode.name === "pre" &&
        domNode.children &&
        domNode.children[0]?.name === "code"
      ) {
        const codeContent = domNode.children[0].children[0].data; // コードの内容を取得
        return (
          <SyntaxHighlighter language="javascript" style={dracula}>
            {codeContent}
          </SyntaxHighlighter>
        );
      }
    },
  };

  return (
    <div className="container mx-auto prose-sm">
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
    </div>
  );
};

export default Articles;
