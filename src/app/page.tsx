import Image from "next/image";
import Link from "next/link";

async function getLatestPosts() {
  // 在實際應用中，這裡會從資料庫或 API 獲取數據
  // 這裡我們使用模擬數據
  return [
    {
      id: 1,
      title: "Next.js App Router 簡介",
      excerpt: "了解 Next.js 13+ 中的 App Router 如何工作以及它的優勢。",
      date: "2025-04-08",
      author: "Next.js 愛好者",
      slug: "nextjs-app-router-introduction",
    },
    {
      id: 2,
      title: "使用 NextAuth.js 實現身份驗證",
      excerpt: "如何在 Next.js 應用中整合 NextAuth.js 實現用戶身份驗證。",
      date: "2025-04-07",
      author: "安全專家",
      slug: "nextauth-authentication",
    },
    {
      id: 3,
      title: "Next.js 中的伺服器組件與客戶端組件",
      excerpt: "深入了解 Next.js 中的伺服器組件和客戶端組件，以及何時使用它們。",
      date: "2025-04-06",
      author: "React 大師",
      slug: "server-client-components",
    },
  ];
}

export default async function Home() {
  const latestPosts = await getLatestPosts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* 英雄區塊 */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-xl overflow-hidden mb-16">
        <div className="px-8 py-16 md:px-16 md:py-20 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            歡迎來到 Next.js 部落格
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            這是一個使用 Next.js App Router 和 NextAuth 構建的個人部落格網站。
            探索 Next.js 13+ 的強大功能！
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/blog"
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium text-lg inline-block text-center"
            >
              瀏覽文章
            </Link>
            <Link
              href="/about"
              className="bg-transparent text-white border border-white hover:bg-white/10 px-6 py-3 rounded-md font-medium text-lg inline-block text-center"
            >
              關於我
            </Link>
          </div>
        </div>
      </div>

      {/* 最新文章區塊 */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">最新文章</h2>
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            查看全部 →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {post.date} · {post.author}
                </p>
                <h3 className="text-xl font-bold mb-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                >
                  閱讀更多 →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 功能區塊 */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Next.js App Router 特色</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            title="伺服器組件"
            description="使用 React 伺服器組件減少客戶端 JavaScript 並提高性能。"
            icon={<ServerIcon />}
          />
          <FeatureCard
            title="路由嵌套"
            description="基於文件系統的路由支持嵌套佈局和頁面組織。"
            icon={<RouteIcon />}
          />
          <FeatureCard
            title="資料獲取"
            description="簡化的資料獲取方法，支持伺服器端渲染和增量靜態再生。"
            icon={<DataIcon />}
          />
        </div>
      </div>

      {/* CTA 區塊 */}
      <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          準備好開始使用 Next.js App Router 了嗎？
        </h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          探索這個示例專案，學習如何使用 Next.js 13+ 的新功能構建現代 Web 應用程序。
        </p>
        <Link
          href="/tutorial"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium text-lg inline-block"
        >
          查看教學
        </Link>
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="text-blue-600 dark:text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

function ServerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
      />
    </svg>
  );
}

function RouteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
      />
    </svg>
  );
}

function DataIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
      />
    </svg>
  );
}
