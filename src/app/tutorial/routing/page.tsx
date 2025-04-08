export const metadata = {
  title: "路由和佈局 | Next.js Blog",
  description: "學習如何創建頁面、嵌套路由和共享佈局。",
};

export default function RoutingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">路由和佈局</h1>

          <div className="prose prose-blue max-w-none dark:prose-invert">
            <p className="text-lg mb-6">
              Next.js App Router 提供了一個直觀且強大的路由系統，讓你可以輕鬆創建複雜的應用程序結構。在本教程中，我們將學習如何創建頁面、嵌套路由和共享佈局。
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">文件系統路由</h2>
            <p className="mb-4">
              App Router 使用文件系統路由，這意味著你的文件結構直接映射到應用程序的 URL 路徑。每個目錄代表一個路由段，每個目錄中的 <code>page.tsx</code> 文件定義了該路由的 UI。
            </p>

            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-x-auto">
              <code>
{`app/
├── page.tsx         # 對應 /
├── about/
│   └── page.tsx     # 對應 /about
├── blog/
│   ├── page.tsx     # 對應 /blog
│   └── [slug]/
│       └── page.tsx # 對應 /blog/:slug`}
              </code>
            </pre>

            <h2 className="text-2xl font-bold mt-8 mb-4">創建基本頁面</h2>
            <p className="mb-4">
              在 App Router 中，每個路由都需要一個 <code>page.tsx</code> 文件來使其可公開訪問。以下是一個基本頁面的例子：
            </p>

            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-x-auto">
              <code>
{`// app/page.tsx
export default function Home() {
  return (
    <div>
      <h1>首頁</h1>
      <p>歡迎來到我的網站！</p>
    </div>
  );
}`}
              </code>
            </pre>

            <h2 className="text-2xl font-bold mt-8 mb-4">嵌套路由</h2>
            <p className="mb-4">
              你可以通過創建嵌套目錄來創建嵌套路由。例如，要創建一個 <code>/dashboard/settings</code> 路由，你可以這樣做：
            </p>

            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-x-auto">
              <code>
{`app/
├── dashboard/
│   ├── page.tsx           # 對應 /dashboard
│   └── settings/
│       └── page.tsx       # 對應 /dashboard/settings`}
              </code>
            </pre>

            <h2 className="text-2xl font-bold mt-8 mb-4">動態路由</h2>
            <p className="mb-4">
              App Router 支持動態路由，使用方括號 <code>[]</code> 來定義動態路由段。例如，要創建一個博客文章頁面，其中 URL 包含文章的 slug，你可以這樣做：
            </p>

            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-x-auto">
              <code>
{`// app/blog/[slug]/page.tsx
export default function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <h1>博客文章：{params.slug}</h1>
      <p>這是博客文章的內容。</p>
    </div>
  );
}`}
              </code>
            </pre>

            <p className="mb-4">
              在這個例子中，<code>params</code> 對象包含動態路由段的值。例如，如果 URL 是 <code>/blog/hello-world</code>，則 <code>params.slug</code> 的值將是 <code>"hello-world"</code>。
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">捕獲所有路由</h3>
            <p className="mb-4">
              你可以使用 <code>[...slug]</code> 語法來捕獲所有後續的路由段：
            </p>

            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-x-auto">
              <code>
{`// app/docs/[...slug]/page.tsx
export default function Docs({
  params,
}: {
  params: { slug: string[] };
}) {
  return (
    <div>
      <h1>文檔：{params.slug.join('/')}</h1>
      <p>這是文檔的內容。</p>
    </div>
  );
}`}
              </code>
            </pre>

            <p className="mb-4">
              這將匹配像 <code>/docs/a</code>、<code>/docs/a/b</code> 和 <code>/docs/a/b/c</code> 這樣的路由。
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">可選捕獲所有路由</h3>
            <p className="mb-4">
              你可以使用 <code>[[...slug]]</code> 語法來創建可選的捕獲所有路由：
            </p>

            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-x-auto">
              <code>
{`// app/docs/[[...slug]]/page.tsx
export default function Docs({
  params,
}: {
  params: { slug?: string[] };
}) {
  return (
    <div>
      <h1>文檔：{params.slug?.join('/') || '首頁'}</h1>
      <p>這是文檔的內容。</p>
    </div>
  );
}`}
              </code>
            </pre>

            <p className="mb-4">
              這將匹配 <code>/docs</code>、<code>/docs/a</code>、<code>/docs/a/b</code> 等路由。
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">佈局</h2>
            <p className="mb-4">
              佈局是 App Router 的一個強大功能，它允許你為多個頁面創建共享 UI。佈局使用 <code>layout.tsx</code> 文件定義，並自動應用於其所在目錄及其所有子目錄中的頁面。
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">根佈局</h3>
            <p className="mb-4">
              根佈局定義在 <code>app/layout.tsx</code> 文件中，它應用於應用程序中的所有頁面：
            </p>

            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-x-auto">
              <code>
{`// app/layout.tsx
import './globals.css';

export const metadata = {
  title: '我的網站',
  description: '使用 Next.js App Router 創建的網站',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body>
        <header>
          <nav>
            <a href="/">首頁</a>
            <a href="/about">關於</a>
            <a href="/blog">博客</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2023 我的網站</footer>
      </body>
    </html>
  );
}`}
              </code>
            </pre>

            <p className="mb-4">
              根佈局必須包含 <code>html</code> 和 <code>body</code> 標籤，以及 <code>children</code> 屬性，用於渲染子路由的內容。
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">嵌套佈局</h3>
            <p className="mb-4">
              你可以在任何目錄中創建 <code>layout.tsx</code> 文件來定義嵌套佈局：
            </p>

            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-x-auto">
              <code>
{`// app/blog/layout.tsx
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>博客</h1>
      <nav>
        <a href="/blog/post-1">文章 1</a>
        <a href="/blog/post-2">文章 2</a>
      </nav>
      <div>{children}</div>
    </div>
  );
}`}
              </code>
            </pre>

            <p className="mb-4">
              這個佈局將應用於 <code>/blog</code> 路由及其所有子路由，如 <code>/blog/post-1</code>、<code>/blog/post-2</code> 等。
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">模板</h3>
            <p className="mb-4">
              模板類似於佈局，但它們在導航時會為每個子頁面創建一個新實例。這對於需要在頁面之間保持狀態的功能（如動畫）很有用。模板使用 <code>template.tsx</code> 文件定義：
            </p>

            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-x-auto">
              <code>
{`// app/template.tsx
export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="template">{children}</div>;
}`}
              </code>
            </pre>

            <h2 className="text-2xl font-bold mt-8 mb-4">加載 UI</h2>
            <p className="mb-4">
              App Router 提供了一個內置的加載 UI 機制，使用 <code>loading.tsx</code> 文件：
            </p>

            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-x-auto">
              <code>
{`// app/blog/loading.tsx
export default function Loading() {
  return (
    <div className="loading">
      <p>正在加載博客內容...</p>
    </div>
  );
}`}
              </code>
            </pre>

            <p className="mb-4">
              當用戶導航到 <code>/blog</code> 或其子路由時，如果頁面正在加載，將顯示這個加載 UI。
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">錯誤處理</h2>
            <p className="mb-4">
              你可以使用 <code>error.tsx</code> 文件來定義錯誤 UI：
            </p>

            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-x-auto">
              <code>
{`// app/blog/error.tsx
'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>發生錯誤！</h2>
      <p>{error.message}</p>
      <button onClick={reset}>重試</button>
    </div>
  );
}`}
              </code>
            </pre>

            <p className="mb-4">
              注意 <code>error.tsx</code> 文件必須是客戶端組件（使用 <code>'use client'</code> 指令），因為它需要使用事件處理程序和 React hooks。
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">404 頁面</h2>
            <p className="mb-4">
              你可以使用 <code>not-found.tsx</code> 文件來定義 404 頁面：
            </p>

            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-x-auto">
              <code>
{`// app/not-found.tsx
export default function NotFound() {
  return (
    <div>
      <h2>404 - 頁面未找到</h2>
      <p>抱歉，您請求的頁面不存在。</p>
      <a href="/">返回首頁</a>
    </div>
  );
}`}
              </code>
            </pre>

            <h2 className="text-2xl font-bold mt-8 mb-4">路由組</h2>
            <p className="mb-4">
              路由組允許你將路由組織成邏輯組，而不影響 URL 結構。你可以使用括號 <code>()</code> 來創建路由組：
            </p>

            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-x-auto">
              <code>
{`app/
├── (marketing)/
│   ├── about/
│   │   └── page.tsx     # 對應 /about
│   └── contact/
│       └── page.tsx     # 對應 /contact
├── (shop)/
│   ├── products/
│   │   └── page.tsx     # 對應 /products
│   └── cart/
│       └── page.tsx     # 對應 /cart
└── page.tsx             # 對應 /`}
              </code>
            </pre>

            <p className="mb-4">
              在這個例子中，我們將路由分為 "marketing" 和 "shop" 兩個組，但這不會影響 URL 結構。
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">平行路由</h2>
            <p className="mb-4">
              平行路由允許你在同一個頁面上同時顯示多個路由。這對於創建複雜的 UI，如儀表板，非常有用。平行路由使用 <code>@</code> 前綴來定義：
            </p>

            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-x-auto">
              <code>
{`app/
├── dashboard/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── @analytics/
│   │   └── page.tsx
│   └── @notifications/
│       └── page.tsx`}
              </code>
            </pre>

            <p className="mb-4">
              然後，在佈局中使用這些平行路由：
            </p>

            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-x-auto">
              <code>
{`// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
  analytics,
  notifications,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <div className="grid grid-cols-2 gap-4">
        <div>{analytics}</div>
        <div>{notifications}</div>
      </div>
    </div>
  );
}`}
              </code>
            </pre>

            <h2 className="text-2xl font-bold mt-8 mb-4">攔截路由</h2>
            <p className="mb-4">
              攔截路由允許你在不改變 URL 的情況下顯示一個路由的內容。這對於創建模態框或彈出窗口非常有用。攔截路由使用 <code>(..)</code> 語法：
            </p>

            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-x-auto">
              <code>
{`app/
├── feed/
│   └── page.tsx           # 對應 /feed
└── (.)feed/
    └── photo/
        └── [id]/
            └── page.tsx   # 攔截 /feed/photo/:id`}
              </code>
            </pre>

            <h2 className="text-2xl font-bold mt-8 mb-4">結論</h2>
            <p className="mb-6">
              Next.js App Router 提供了一個強大且靈活的路由系統，讓你可以輕鬆創建複雜的應用程序結構。通過使用文件系統路由、佈局、模板和其他功能，你可以創建直觀且高效的用戶體驗。
            </p>

            <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
              <a href="/tutorial/setup" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                ← 創建你的第一個 App Router 項目
              </a>
              <a href="/tutorial/components" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                下一步：伺服器組件與客戶端組件 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
