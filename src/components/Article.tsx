import React, { useEffect, useState } from "react";
import { createClient } from "microcms-js-sdk";
import parse from "html-react-parser";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

// microCMSクライアントの作成
const createMicroCMSClient = () => {
  const serviceDomain = import.meta.env.VITE_SERVICE_DOMAIN;
  const apiKey = import.meta.env.VITE_MICROCMS_API_KEY;

  if (!serviceDomain || !apiKey) {
    throw new Error("microCMS environment variables are not set");
  }

  return createClient({ serviceDomain, apiKey });
};

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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const client = createMicroCMSClient();

      client
        .get({
          endpoint: "blogs",
          queries: {
            limit: 1,
            orders: "-publishedAt",
          },
        })
        .then((res) => {
          setArticle(res.contents[0]);
        })
        .catch((err) => {
          console.error("API Error:", err);
          setError("Failed to fetch article");
        });
    } catch (err) {
      console.warn("microCMS is not configured:", err);
      setError("microCMS is not configured");
    }
  }, []);

  if (error) {
    return <div>Blog is not available.</div>;
  }

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
        const codeNode = domNode.children[0];

        // class名から言語を取得（例: "language-javascript" → "javascript"）
        let language = "javascript"; // デフォルト
        if (codeNode.attribs && codeNode.attribs.class) {
          const match = codeNode.attribs.class.match(/language-(\w+)/);
          if (match) {
            language = match[1];
          }
        }

        // コード内容を取得（再帰的に取得）
        const getCodeContent = (node: any): string => {
          if (node.type === 'text') {
            return node.data;
          }
          if (node.children) {
            return node.children.map(getCodeContent).join('');
          }
          return '';
        };

        const codeContent = getCodeContent(codeNode);

        return (
          <SyntaxHighlighter language={language} style={dracula}>
            {codeContent}
          </SyntaxHighlighter>
        );
      }
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="prose max-w-none
        prose-headings:text-purple-600 
        prose-h2:border-b-2 prose-h2:border-yellow-400 prose-h2:pb-2
        prose-h3:text-purple-700
        prose-a:text-purple-600 prose-a:hover:text-purple-800
        prose-strong:text-purple-700
        prose-code:before:content-none prose-code:after:content-none
      ">
        <h1 className="text-2xl font-bold text-purple-600 mb-4">
          {article.title}
        </h1>
        {article.eyecatch && (
          <img
            src={article.eyecatch.url}
            alt={article.title}
            className="w-full h-auto rounded-lg shadow-md mb-6"
          />
        )}
        <div>{parse(article.content, options)}</div>
        <span className="text-sm text-gray-500 mt-6 block">
          Category: {article.category.name}
        </span>
      </article>
    </div>
  );
};

export default Articles;
