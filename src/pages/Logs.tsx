// src/pages/Logs.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createClient } from "microcms-js-sdk";

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
  category: { id: string; name: string };
  publishedAt: string;
}

export const Logs = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("全て");
  const [categories, setCategories] = useState<string[]>(["全て"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
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
          queries: {
            limit: 100, // 全件取得（記事数に応じて調整）
            orders: "-publishedAt",
          },
        });

        setArticles(res.contents);
        setFilteredArticles(res.contents);

        const categoryNames: string[] = res.contents.map(
          (article: Article) => article.category.name
        );
        const uniqueCategories: string[] = [
          "全て",
          ...Array.from(new Set(categoryNames)),
        ];
        setCategories(uniqueCategories);

        setLoading(false);
      } catch (err) {
        console.error("API Error:", err);
        setError("記事の取得に失敗しました");
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // カテゴリフィルタリング
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "全て") {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(
        articles.filter((article) => article.category.name === category)
      );
    }
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

  if (error) {
    return (
      <div className="h-full overflow-y-auto px-4 pt-8 pb-8 font-zenKaku">
        <h1 className="font-bold text-2xl pt-8">テックノート</h1>
        <hr className="border-t-8 border-purple-600 my-4" />
        <p className="text-center text-red-600 mt-8">{error}</p>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto px-4 pt-8 pb-8 font-zenKaku">
      <h1 className="font-bold text-2xl pt-8">テックノート</h1>
      <hr className="border-t-8 border-purple-600 my-4" />

      <p className="mb-6 text-base text-purple-800">
        技術的な学びや実装のメモを記録しています。
      </p>

      {/* カテゴリフィルター */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-lg font-bold transition-all ${selectedCategory === category
              ? "bg-purple-600 text-white"
              : "bg-purple-100 text-purple-600 hover:bg-purple-200"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 記事一覧（カード形式） */}
      {filteredArticles.length === 0 ? (
        <p className="text-center text-purple-600 mt-8">
          該当する記事がありません
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <Link
              key={article.id}
              to={`/logs/${article.id}`}
              className="block bg-yellow-300 rounded-lg shadow-md hover:bg-yellow-400 transition-all overflow-hidden"
            >
              {/* アイキャッチ画像 */}
              {article.eyecatch && (
                <img
                  src={article.eyecatch.url}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              )}

              {/* コンテンツ */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-purple-600 mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex justify-between items-center text-sm text-purple-800">
                  <span className="font-semibold">{article.category.name}</span>
                  <span>
                    {new Date(article.publishedAt).toLocaleDateString("ja-JP")}
                  </span>
                </div>
                <p className="text-xs text-purple-600 mt-2">詳細を見る →</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
