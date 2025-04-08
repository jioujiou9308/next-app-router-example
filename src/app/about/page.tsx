import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "關於我 | Next.js Blog",
  description: "了解更多關於這個 Next.js App Router 部落格的資訊。",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">關於這個專案</h1>
          
          <div className="prose prose-blue max-w-none dark:prose-invert">
            <p className="text-lg mb-6">
              這是一個使用 Next.js App Router 和 NextAuth.js 構建的部落格網站示例。
              這個專案旨在幫助你了解 Next.js 13+ 的新功能和最佳實踐。
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">專案特點</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>使用 Next.js App Router 進行路由管理</li>
              <li>使用 React Server Components 提高性能</li>
              <li>整合 NextAuth.js 實現身份驗證</li>
              <li>使用 Tailwind CSS 進行樣式設計</li>
              <li>支持暗黑模式</li>
              <li>響應式設計，適配各種設備</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">學習資源</h2>
            <p className="mb-6">
              這個專案包含了多篇教學文章，涵蓋了 Next.js App Router 的各個方面，
              包括伺服器組件、客戶端組件、資料獲取、路由等。你可以通過閱讀這些文章
              來深入了解 Next.js 的新功能。
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-3">想要學習更多？</h3>
              <p className="mb-4">
                查看我們的教學部分，了解如何從頭開始構建一個 Next.js App Router 應用程序。
              </p>
              <Link
                href="/tutorial"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium inline-block"
              >
                查看教學
              </Link>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">關於作者</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
              <div className="w-32 h-32 relative rounded-full overflow-hidden">
                <Image
                  src="/profile-placeholder.jpg"
                  alt="作者頭像"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Next.js 愛好者</h3>
                <p className="mb-4">
                  熱愛 Web 開發和新技術。專注於 React 和 Next.js 生態系統，
                  喜歡分享知識和經驗，幫助他人學習和成長。
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">聯繫我們</h2>
            <p className="mb-4">
              如果你有任何問題或建議，請隨時聯繫我們。我們很樂意聽取你的反饋！
            </p>
            <Link
              href="/contact"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
            >
              聯繫我們 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
