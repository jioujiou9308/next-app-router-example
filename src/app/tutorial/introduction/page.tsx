export const metadata = {
  title: "Next.js App Router 簡介 | Next.js Blog",
  description: "了解 Next.js 13+ 中的 App Router 如何工作以及它的優勢。",
};

export default function IntroductionPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Next.js App Router 簡介</h1>

          <div className="prose prose-blue max-w-none dark:prose-invert">
            <p className="text-lg mb-6">
              Next.js 13 引入了全新的 App Router，這是一個基於 React Server Components 構建的路由系統，提供了更強大的功能和更好的開發體驗。
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">什麼是 App Router？</h2>
            <p className="mb-4">
              App Router 是 Next.js 13 中引入的一個新的路由系統，它與之前的 Pages Router 並存，但提供了更多的功能和更好的性能。App Router 基於文件系統路由，但它使用了一個名為 <code>app</code> 的目錄，而不是 <code>pages</code> 目錄。
            </p>

            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold mb-2">Pages Router vs App Router</h3>
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left">特性</th>
                    <th className="px-4 py-2 text-left">Pages Router</th>
                    <th className="px-4 py-2 text-left">App Router</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                  <tr>
                    <td className="px-4 py-2">目錄</td>
                    <td className="px-4 py-2"><code>pages/</code></td>
                    <td className="px-4 py-2"><code>app/</code></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">渲染模型</td>
                    <td className="px-4 py-2">客戶端渲染</td>
                    <td className="px-4 py-2">伺服器組件</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">資料獲取</td>
                    <td className="px-4 py-2">getServerSideProps, getStaticProps</td>
                    <td className="px-4 py-2">fetch API 與緩存</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">佈局</td>
                    <td className="px-4 py-2">_app.js, _document.js</td>
                    <td className="px-4 py-2">layout.js (嵌套)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">App Router 的主要特點</h2>

            <h3 className="text-xl font-bold mt-6 mb-3">1. 嵌套路由和佈局</h3>
            <p className="mb-4">
              App Router 允許你創建嵌套的路由和佈局。你可以為特定的路由創建佈局，這些佈局將應用於該路由及其所有子路由。
            </p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-x-auto">
              <code>
{`// app/blog/layout.tsx
export default function BlogLayout({ children }) {
  return (
    <div>
      <h1>Blog</h1>
      {children}
    </div>
  );
}`}
              </code>
            </pre>

            <h3 className="text-xl font-bold mt-6 mb-3">2. 伺服器組件</h3>
            <p className="mb-4">
              App Router 默認使用 React Server Components，這意味著你的組件默認在伺服器上渲染，只有在需要時才會在客戶端渲染。這可以減少發送到客戶端的 JavaScript 數量，提高性能。
            </p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-x-auto">
              <code>
{`// 這是一個伺服器組件
export default function Page() {
  return <h1>Hello, World!</h1>;
}`}
              </code>
            </pre>

            <h3 className="text-xl font-bold mt-6 mb-3">3. 資料獲取</h3>
            <p className="mb-4">
              App Router 提供了新的資料獲取方法，使得在伺服器組件中獲取資料變得更加簡單。
            </p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-x-auto">
              <code>
{`// 在伺服器組件中獲取資料
async function getData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <div>{data.title}</div>;
}`}
              </code>
            </pre>

            <h3 className="text-xl font-bold mt-6 mb-3">4. 流式渲染</h3>
            <p className="mb-4">
              App Router 支持流式渲染，這意味著伺服器可以逐步發送 HTML 到客戶端，而不是等待所有資料都準備好後才發送。這可以提高用戶體驗，尤其是在資料獲取較慢的情況下。
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">5. 並行路由</h3>
            <p className="mb-4">
              App Router 引入了並行路由的概念，允許你在同一個頁面上同時顯示多個路由。這對於創建複雜的 UI，如儀表板，非常有用。
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">6. 攔截路由</h3>
            <p className="mb-4">
              攔截路由允許你在不改變 URL 的情況下顯示一個路由的內容。這對於創建模態框或彈出窗口非常有用。
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">App Router 的目錄結構</h2>
            <p className="mb-4">
              在 App Router 中，目錄結構決定了路由結構。以下是一個典型的 App Router 目錄結構：
            </p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-x-auto">
              <code>
{`app/
├── layout.tsx      # 根佈局
├── page.tsx        # 首頁
├── about/
│   └── page.tsx    # /about 路由
├── blog/
│   ├── layout.tsx  # 博客佈局
│   ├── page.tsx    # /blog 路由
│   └── [slug]/     # 動態路由
│       └── page.tsx # /blog/:slug 路由`}
              </code>
            </pre>

            <h2 className="text-2xl font-bold mt-8 mb-4">特殊文件</h2>
            <p className="mb-4">
              App Router 使用特殊的文件名來定義路由和佈局：
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><code>page.tsx</code>: 定義路由的 UI 和獨有功能</li>
              <li><code>layout.tsx</code>: 定義共享 UI，適用於多個頁面</li>
              <li><code>loading.tsx</code>: 創建加載 UI</li>
              <li><code>error.tsx</code>: 創建錯誤 UI</li>
              <li><code>not-found.tsx</code>: 創建 404 UI</li>
              <li><code>route.tsx</code>: 創建 API 端點</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">結論</h2>
            <p className="mb-6">
              Next.js App Router 是一個強大的路由系統，它提供了許多新的功能和改進，使得構建現代 Web 應用程序變得更加簡單和高效。通過使用 App Router，你可以充分利用 React Server Components 的優勢，提高應用程序的性能和用戶體驗。
            </p>

            <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
              <a href="/tutorial" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                ← 返回教學目錄
              </a>
              <a href="/tutorial/setup" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                下一步：創建你的第一個 App Router 項目 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
