import Link from "next/link";

export const metadata = {
  title: "Next.js App Router 教學 | Next.js Blog",
  description: "學習如何使用 Next.js App Router 構建現代 Web 應用程序。",
};

export default function TutorialPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Next.js App Router 教學</h1>

          <div className="prose prose-blue max-w-none dark:prose-invert">
            <p className="text-lg mb-6">
              歡迎來到 Next.js App Router 教學！在這個教學中，我們將介紹如何使用 Next.js 13+ 的 App Router 功能構建現代 Web 應用程序。
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-3">學習目標</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>了解 Next.js App Router 的基本概念</li>
                <li>學習如何創建和組織路由</li>
                <li>掌握伺服器組件和客戶端組件的使用</li>
                <li>實現資料獲取和狀態管理</li>
                <li>整合身份驗證功能</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">教學目錄</h2>

            <div className="space-y-6">
              <TutorialCard
                number="01"
                title="Next.js App Router 簡介"
                description="了解 Next.js 13+ 中的 App Router 如何工作以及它的優勢。"
                href="/tutorial/introduction"
              />

              <TutorialCard
                number="02"
                title="創建你的第一個 App Router 項目"
                description="從頭開始設置一個 Next.js App Router 項目，並了解其目錄結構。"
                href="/tutorial/setup"
              />

              <TutorialCard
                number="03"
                title="路由和佈局"
                description="學習如何創建頁面、嵌套路由和共享佈局。"
                href="/tutorial/routing"
              />

              <TutorialCard
                number="04"
                title="伺服器組件與客戶端組件"
                description="深入了解 React Server Components，以及何時使用客戶端組件。"
                href="/tutorial/components"
              />

              <TutorialCard
                number="05"
                title="資料獲取"
                description="探索 Next.js App Router 中的資料獲取方法和緩存策略。"
                href="/tutorial/data-fetching"
              />

              <TutorialCard
                number="06"
                title="整合 NextAuth.js"
                description="學習如何在 Next.js App Router 中實現身份驗證功能。"
                href="/tutorial/authentication"
              />

              <TutorialCard
                number="07"
                title="部署你的應用"
                description="了解如何將你的 Next.js App Router 應用部署到生產環境。"
                href="/tutorial/deployment"
              />
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4">額外資源</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://nextjs.org/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Next.js 官方文檔
                </a>
              </li>
              <li>
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  React 官方文檔
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/vercel/next.js/tree/canary/examples"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Next.js 示例項目
                </a>
              </li>
            </ul>

            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg mt-10">
              <h2 className="text-xl font-bold mb-3">準備好開始了嗎？</h2>
              <p className="mb-4">
                從基礎開始，逐步學習 Next.js App Router 的各個方面。每個教學都包含詳細的解釋和代碼示例。
              </p>
              <Link
                href="/tutorial/introduction"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium inline-block"
              >
                開始學習
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TutorialCard({
  number,
  title,
  description,
  href,
}: {
  number: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
    >
      <div className="flex items-start gap-4">
        <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
          {number}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </Link>
  );
}
