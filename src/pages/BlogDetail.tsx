// src/pages/BlogDetail.tsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createClient } from "microcms-js-sdk";
import parse from "html-react-parser";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { IoArrowBack } from "react-icons/io5";

// microCMSクライアントの作成（エラーハンドリング対応）
const createMicroCMSClient = () => {
    const serviceDomain = import.meta.env.VITE_SERVICE_DOMAIN;
    const apiKey = import.meta.env.VITE_MICROCMS_API_KEY;

    // APIキーがない場合はnullを返す（throwしない）
    if (!serviceDomain || !apiKey) {
        return null;
    }

    return createClient({ serviceDomain, apiKey });
};

interface Article {
    id: string;
    title: string;
    content: string;
    eyecatch: { url: string };
    category: { name: string };
    publishedAt: string;
}

export const BlogDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState<Article | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArticle = async () => {
            if (!id) return;

            try {
                const client = createMicroCMSClient();

                // microCMSが設定されていない場合
                if (!client) {
                    console.warn("microCMS is not configured");
                    setError("ブログ機能は現在利用できません（microCMS未設定）");
                    setLoading(false);
                    return;
                }

                const res = await client.get({
                    endpoint: "blogs",
                    contentId: id,
                });

                setArticle(res);
                setLoading(false);
            } catch (err) {
                console.error("API Error:", err);
                setError("記事の取得に失敗しました");
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id]);

    // コードブロックのシンタックスハイライト設定
    const options = {
        replace: (domNode: any) => {
            if (
                domNode.name === "pre" &&
                domNode.children &&
                domNode.children[0]?.name === "code"
            ) {
                const codeNode = domNode.children[0];

                // 言語を取得（例: "language-javascript" → "javascript"）
                let language = "javascript"; // デフォルト
                if (codeNode.attribs && codeNode.attribs.class) {
                    const match = codeNode.attribs.class.match(/language-(\w+)/);
                    if (match) {
                        language = match[1];
                    }
                }

                // コード内容を再帰的に取得
                const getCodeContent = (node: any): string => {
                    if (node.type === "text") {
                        return node.data;
                    }
                    if (node.children) {
                        return node.children.map(getCodeContent).join("");
                    }
                    return "";
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

    if (loading) {
        return (
            <div className="h-full overflow-y-auto px-4 pt-8 pb-8 font-zenKaku">
                <h1 className="font-bold text-2xl pt-8">テックノート</h1>
                <hr className="border-t-8 border-purple-600 my-4" />
                <p className="text-center text-purple-600 mt-8">読み込み中...</p>
            </div>
        );
    }

    if (error || !article) {
        return (
            <div className="h-full overflow-y-auto px-4 pt-8 pb-8 font-zenKaku">
                <h1 className="font-bold text-2xl pt-8">テックノート</h1>
                <hr className="border-t-8 border-purple-600 my-4" />
                <p className="text-center text-red-600 mt-8">
                    {error || "記事が見つかりません"}
                </p>
                <button
                    onClick={() => navigate("/logs")}
                    className="flex items-center gap-2 text-purple-600 hover:text-purple-800 mx-auto mt-4"
                >
                    <IoArrowBack /> 一覧に戻る
                </button>
            </div>
        );
    }

    return (
        <div className="h-full overflow-y-auto px-4 pt-8 pb-8 font-zenKaku">
            <h1 className="font-bold text-2xl pt-8">テックノート</h1>
            <hr className="border-t-8 border-purple-600 my-4" />

            {/* 一覧に戻るボタン */}
            <button
                onClick={() => navigate("/logs")}
                className="flex items-center gap-2 text-purple-600 hover:text-purple-800 mb-6"
            >
                <IoArrowBack /> 一覧に戻る
            </button>

            {/* 記事本文 */}
            <article className="container mx-auto">
                {/* アイキャッチ画像 */}
                {article.eyecatch && (
                    <img
                        src={article.eyecatch.url}
                        alt={article.title}
                        className="w-full h-auto rounded-lg shadow-md mb-6"
                    />
                )}

                {/* タイトル */}
                <h1 className="text-3xl font-bold text-purple-600 mb-4">
                    {article.title}
                </h1>

                {/* メタ情報 */}
                <div className="flex items-center gap-4 mb-6 text-sm text-purple-800">
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full font-semibold">
                        {article.category.name}
                    </span>
                    <span>
                        {new Date(article.publishedAt).toLocaleDateString("ja-JP", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </span>
                </div>

                {/* 本文 */}
                <div
                    className="prose max-w-none
          prose-headings:text-purple-600 
          prose-h2:border-b-2 prose-h2:border-yellow-400 prose-h2:pb-2
          prose-h3:text-purple-700
          prose-a:text-purple-600 prose-a:hover:text-purple-800
          prose-strong:text-purple-700
          prose-code:before:content-none prose-code:after:content-none
          prose-img:rounded-lg prose-img:shadow-md
        "
                >
                    {parse(article.content, options)}
                </div>
            </article>
        </div>
    );
};
