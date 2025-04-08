import Link from "next/link";

// 模擬從資料庫獲取博客文章
async function getBlogPosts() {
  // 在實際應用中，這裡會從資料庫或 API 獲取數據
  return [
    {
      id: 1,
      title: "Next.js App Router 簡介",
      excerpt: "了解 Next.js 13+ 中的 App Router 如何工作以及它的優勢。",
      date: "2025-04-08",
      author: "Next.js 愛好者",
      slug: "nextjs-app-router-introduction",
      category: "教學",
    },
    {
      id: 2,
      title: "使用 NextAuth.js 實現身份驗證",
      excerpt: "如何在 Next.js 應用中整合 NextAuth.js 實現用戶身份驗證。",
      date: "2025-04-07",
      author: "安全專家",
      slug: "nextauth-authentication",
      category: "安全",
    },
    {
      id: 3,
      title: "Next.js 中的伺服器組件與客戶端組件",
      excerpt: "深入了解 Next.js 中的伺服器組件和客戶端組件，以及何時使用它們。",
      date: "2025-04-06",
      author: "React 大師",
      slug: "server-client-components",
      category: "進階",
    },
    {
      id: 4,
      title: "使用 Next.js 構建 API 路由",
      excerpt: "學習如何在 Next.js App Router 中創建和使用 API 路由。",
      date: "2025-04-05",
      author: "API 專家",
      slug: "api-routes-in-nextjs",
      category: "API",
    },
    {
      id: 5,
      title: "Next.js 中的靜態與動態渲染",
      excerpt: "了解 Next.js 中的靜態生成和動態渲染之間的區別。",
      date: "2025-04-04",
      author: "性能優化專家",
      slug: "static-vs-dynamic-rendering",
      category: "性能",
    },
    {
      id: 6,
      title: "使用 Tailwind CSS 與 Next.js",
      excerpt: "如何在 Next.js 項目中有效地使用 Tailwind CSS。",
      date: "2025-04-03",
      author: "UI 設計師",
      slug: "tailwind-with-nextjs",
      category: "樣式",
    },
  ];
}

export const metadata = {
  title: "部落格文章 | Next.js Blog",
  description: "瀏覽我們所有的部落格文章，學習 Next.js App Router 的最佳實踐。",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">部落格文章</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          探索我們的文章集合，學習 Next.js App Router 的最佳實踐和技巧。
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* 側邊欄 */}
        <div className="lg:w-1/4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-4">分類</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                >
                  全部文章
                </Link>
              </li>
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    href={`/blog/category/${category.toLowerCase()}`}
                    className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 文章列表 */}
        <div className="lg:w-3/4">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.date}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      作者: {post.author}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                    >
                      閱讀更多 →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
