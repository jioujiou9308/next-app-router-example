export const metadata = {
  title: "創建你的第一個 App Router 項目 | Next.js Blog",
  description: "從頭開始設置一個 Next.js App Router 項目，並了解其目錄結構。",
};

export default function SetupPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">創建你的第一個 App Router 項目</h1>

          <div className="prose prose-blue max-w-none dark:prose-invert">
            <p className="text-lg mb-6">
              在本教程中，我們將從頭開始創建一個使用 Next.js App Router 的項目，並了解其基本目錄結構和配置。
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">前提條件</h2>
            <p className="mb-4">
              在開始之前，確保你已經安裝了以下工具：
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Node.js 18.17.0 或更高版本</li>
              <li>npm、yarn 或 pnpm 包管理器</li>
              <li>一個代碼編輯器，如 VS Code</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">創建 Next.js 項目</h2>
            <p className="mb-4">
              使用 create-next-app 是創建 Next.js 應用程序的最簡單方法。打開終端，運行以下命令：
            </p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-x-auto">
              <code>
{`npx create-next-app@latest my-app
# 或使用 yarn
yarn create next-app my-app
# 或使用 pnpm
pnpm create next-app my-app`}
              </code>
            </pre>

            <p className="mb-4">
              在安裝過程中，你會看到以下提示：
            </p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-x-auto">
              <code>
{`Would you like to use TypeScript? Yes
Would you like to use ESLint? Yes
Would you like to use Tailwind CSS? Yes
Would you like to use src/ directory? Yes
Would you like to use App Router? (recommended) Yes
Would you like to customize the default import alias? No`}
              </code>
            </pre>

            <p className="mb-4">
              確保選擇 "Yes" 對於 "Would you like to use App Router?"，這將設置項目使用 App Router 而不是 Pages Router。
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">項目結構</h2>
            <p className="mb-4">
              創建項目後，你會看到以下目錄結構：
            </p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-x-auto">
              <code>
{`my-app/
├── .next/
├── node_modules/
├── public/
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.json`}
              </code>
            </pre>

            <p className="mb-4">
              讓我們來了解一下這些文件和目錄的作用：
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">src/app/ 目錄</h3>
            <p className="mb-4">
              這是 App Router 的核心目錄。在這個目錄中，你將定義你的路由、佈局和頁面。
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><code>layout.tsx</code>: 根佈局，適用於所有頁面</li>
              <li><code>page.tsx</code>: 首頁的內容</li>
              <li><code>globals.css</code>: 全局 CSS 樣式</li>
              <li><code>favicon.ico</code>: 網站圖標</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">public/ 目錄</h3>
            <p className="mb-4">
              存放靜態資源，如圖片、字體等。這些資源可以通過根路徑直接訪問。
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">配置文件</h3>
            <p className="mb-4">
              項目包含多個配置文件：
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><code>next.config.js</code>: Next.js 配置文件</li>
              <li><code>tsconfig.json</code>: TypeScript 配置</li>
              <li><code>tailwind.config.js</code>: Tailwind CSS 配置</li>
              <li><code>postcss.config.js</code>: PostCSS 配置</li>
              <li><code>.eslintrc.json</code>: ESLint 配置</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">運行項目</h2>
            <p className="mb-4">
              進入項目目錄，運行開發服務器：
            </p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-x-auto">
              <code>
{`cd my-app
npm run dev
# 或使用 yarn
yarn dev
# 或使用 pnpm
pnpm dev`}
              </code>
            </pre>

            <p className="mb-4">
              打開瀏覽器，訪問 <code>http://localhost:3000</code>，你應該能看到 Next.js 的歡迎頁面。
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">創建你的第一個頁面</h2>
            <p className="mb-4">
              在 App Router 中，每個路由都由一個目錄表示，每個目錄中的 <code>page.tsx</code> 文件定義了該路由的 UI。
            </p>
            <p className="mb-4">
              讓我們創建一個關於頁面：
            </p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-x-auto">
              <code>
{`// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <div>
      <h1>關於我們</h1>
      <p>這是一個使用 Next.js App Router 創建的網站。</p>
    </div>
  );
}`}
              </code>
            </pre>

            <p className="mb-4">
              現在，你可以訪問 <code>http://localhost:3000/about</code> 來查看這個頁面。
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">創建共享佈局</h2>
            <p className="mb-4">
              在 App Router 中，你可以使用 <code>layout.tsx</code> 文件來創建共享佈局：
            </p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-x-auto">
              <code>
{`// src/app/blog/layout.tsx
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>博客</h1>
      <nav>
        <ul>
          <li><a href="/blog/post-1">文章 1</a></li>
          <li><a href="/blog/post-2">文章 2</a></li>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
}`}
              </code>
            </pre>

            <p className="mb-4">
              然後，創建博客首頁和文章頁面：
            </p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-x-auto">
              <code>
{`// src/app/blog/page.tsx
export default function BlogPage() {
  return <p>博客首頁</p>;
}

// src/app/blog/post-1/page.tsx
export default function Post1Page() {
  return <p>文章 1 的內容</p>;
}

// src/app/blog/post-2/page.tsx
export default function Post2Page() {
  return <p>文章 2 的內容</p>;
}`}
              </code>
            </pre>

            <p className="mb-4">
              現在，當你訪問 <code>/blog</code>、<code>/blog/post-1</code> 或 <code>/blog/post-2</code> 時，你會看到共享的博客佈局和特定頁面的內容。
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">結論</h2>
            <p className="mb-6">
              在本教程中，我們學習了如何創建一個使用 Next.js App Router 的項目，了解了其基本目錄結構，並創建了一些簡單的頁面和佈局。Next.js App Router 提供了一種直觀且強大的方式來組織你的應用程序，使得創建複雜的 Web 應用變得更加簡單。
            </p>

            <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
              <a href="/tutorial/introduction" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                ← Next.js App Router 簡介
              </a>
              <a href="/tutorial/routing" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                下一步：路由和佈局 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
