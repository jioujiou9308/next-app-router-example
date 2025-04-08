import { notFound } from "next/navigation";
import Link from "next/link";

// 模擬從資料庫獲取單篇文章
async function getPostBySlug(slug: string) {
  // 在實際應用中，這裡會從資料庫或 API 獲取數據
  const posts = [
    {
      id: 1,
      title: "Next.js App Router 簡介",
      content: `
# Next.js App Router 簡介

Next.js 13 引入了全新的 App Router，這是一個基於 React Server Components 構建的路由系統，提供了更強大的功能和更好的開發體驗。

## 什麼是 App Router？

App Router 是 Next.js 13 中引入的一個新的路由系統，它與之前的 Pages Router 並存，但提供了更多的功能和更好的性能。App Router 基於文件系統路由，但它使用了一個名為 \`app\` 的目錄，而不是 \`pages\` 目錄。

## App Router 的主要特點

### 1. 嵌套路由和佈局

App Router 允許你創建嵌套的路由和佈局。你可以為特定的路由創建佈局，這些佈局將應用於該路由及其所有子路由。

\`\`\`jsx
// app/blog/layout.tsx
export default function BlogLayout({ children }) {
  return (
    <div>
      <h1>Blog</h1>
      {children}
    </div>
  );
}
\`\`\`

### 2. 伺服器組件

App Router 默認使用 React Server Components，這意味著你的組件默認在伺服器上渲染，只有在需要時才會在客戶端渲染。這可以減少發送到客戶端的 JavaScript 數量，提高性能。

\`\`\`jsx
// 這是一個伺服器組件
export default function Page() {
  return <h1>Hello, World!</h1>;
}
\`\`\`

### 3. 資料獲取

App Router 提供了新的資料獲取方法，使得在伺服器組件中獲取資料變得更加簡單。

\`\`\`jsx
// 在伺服器組件中獲取資料
async function getData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <div>{data.title}</div>;
}
\`\`\`

### 4. 流式渲染

App Router 支持流式渲染，這意味著伺服器可以逐步發送 HTML 到客戶端，而不是等待所有資料都準備好後才發送。這可以提高用戶體驗，尤其是在資料獲取較慢的情況下。

## 結論

Next.js App Router 是一個強大的路由系統，它提供了許多新的功能和改進，使得構建現代 Web 應用程序變得更加簡單和高效。通過使用 App Router，你可以充分利用 React Server Components 的優勢，提高應用程序的性能和用戶體驗。
      `,
      date: "2025-04-08",
      author: "Next.js 愛好者",
      slug: "nextjs-app-router-introduction",
      category: "教學",
    },
    {
      id: 2,
      title: "使用 NextAuth.js 實現身份驗證",
      content: `
# 使用 NextAuth.js 實現身份驗證

NextAuth.js 是一個完整的身份驗證解決方案，專為 Next.js 應用程序設計。它支持多種身份驗證提供者，包括社交登錄（如 Google、Facebook、GitHub 等）和基於憑證的登錄。

## 安裝 NextAuth.js

首先，你需要安裝 NextAuth.js：

\`\`\`bash
npm install next-auth
\`\`\`

## 配置 NextAuth.js

在 App Router 中，你需要在 \`app/api/auth/[...nextauth]/route.ts\` 文件中配置 NextAuth.js：

\`\`\`typescript
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // 添加更多提供者...
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
\`\`\`

## 創建一個 SessionProvider

為了在你的應用程序中使用 NextAuth.js，你需要創建一個 SessionProvider 組件：

\`\`\`typescript
// app/providers.tsx
"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
\`\`\`

然後在你的根佈局中使用這個 Provider：

\`\`\`typescript
// app/layout.tsx
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
\`\`\`

## 使用 NextAuth.js 進行身份驗證

現在你可以在客戶端組件中使用 NextAuth.js 的 hooks 進行身份驗證：

\`\`\`typescript
"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        已登入為 {session.user?.email} <br />
        <button onClick={() => signOut()}>登出</button>
      </>
    );
  }
  return (
    <>
      未登入 <br />
      <button onClick={() => signIn()}>登入</button>
    </>
  );
}
\`\`\`

## 保護路由

你可以使用 NextAuth.js 的 middleware 功能來保護路由：

\`\`\`typescript
// middleware.ts
export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard/:path*"],
};
\`\`\`

這將保護 \`/dashboard\` 路由及其所有子路由，只有已登入的用戶才能訪問。

## 結論

NextAuth.js 是一個強大的身份驗證解決方案，它可以幫助你在 Next.js 應用程序中快速實現身份驗證功能。通過使用 NextAuth.js，你可以輕鬆地添加社交登錄和基於憑證的登錄，並保護你的路由。
      `,
      date: "2025-04-07",
      author: "安全專家",
      slug: "nextauth-authentication",
      category: "安全",
    },
    {
      id: 3,
      title: "Next.js 中的伺服器組件與客戶端組件",
      content: `
# Next.js 中的伺服器組件與客戶端組件

React Server Components 是 React 的一個新特性，它允許開發者在伺服器上渲染 React 組件，而不是在客戶端。Next.js App Router 默認使用 React Server Components，但也支持客戶端組件。

## 伺服器組件

伺服器組件是在伺服器上渲染的組件，它們的 JavaScript 不會發送到客戶端。這意味著你可以在伺服器組件中使用伺服器端的 API 和資源，而不用擔心這些代碼會被發送到客戶端。

伺服器組件的優點：

1. 減少客戶端 JavaScript 的大小
2. 直接訪問伺服器資源（如資料庫）
3. 將敏感資訊保留在伺服器上
4. 改善初始頁面加載性能

在 Next.js App Router 中，所有組件默認都是伺服器組件，除非你明確指定它為客戶端組件。

\`\`\`jsx
// 這是一個伺服器組件
export default function ServerComponent() {
  return <div>這個組件在伺服器上渲染</div>;
}
\`\`\`

## 客戶端組件

客戶端組件是在客戶端渲染的組件，它們的 JavaScript 會發送到客戶端。這意味著你可以在客戶端組件中使用瀏覽器 API 和 React hooks。

要創建一個客戶端組件，你需要在文件頂部添加 \`"use client"\` 指令：

\`\`\`jsx
"use client";

// 這是一個客戶端組件
import { useState } from "react";

export default function ClientComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>計數: {count}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
    </div>
  );
}
\`\`\`

客戶端組件的優點：

1. 可以使用 React hooks
2. 可以使用瀏覽器 API
3. 可以添加交互性和事件處理程序

## 何時使用伺服器組件與客戶端組件

### 使用伺服器組件的情況：

- 獲取資料
- 訪問後端資源（直接）
- 保持敏感資訊在伺服器上
- 保持大型依賴在伺服器上
- 不需要交互性的 UI

### 使用客戶端組件的情況：

- 添加交互性和事件處理程序
- 使用 React hooks
- 使用瀏覽器 API
- 使用基於類的生命週期方法

## 混合使用伺服器組件和客戶端組件

你可以在同一個應用程序中混合使用伺服器組件和客戶端組件。一個常見的模式是在伺服器組件中獲取資料，然後將資料作為 props 傳遞給客戶端組件：

\`\`\`jsx
// ServerComponent.js
import ClientComponent from "./ClientComponent";

async function getData() {
  const res = await fetch("https://api.example.com/data");
  return res.json();
}

export default async function ServerComponent() {
  const data = await getData();
  return <ClientComponent data={data} />;
}
\`\`\`

\`\`\`jsx
// ClientComponent.js
"use client";

import { useState } from "react";

export default function ClientComponent({ data }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id} onClick={() => setSelectedItem(item)}>
            {item.name}
          </li>
        ))}
      </ul>
      {selectedItem && <div>選中的項目: {selectedItem.name}</div>}
    </div>
  );
}
\`\`\`

## 結論

Next.js App Router 中的伺服器組件和客戶端組件提供了一種強大的方式來構建現代 Web 應用程序。通過正確選擇何時使用伺服器組件和何時使用客戶端組件，你可以優化你的應用程序的性能和用戶體驗。
      `,
      date: "2025-04-06",
      author: "React 大師",
      slug: "server-client-components",
      category: "進階",
    },
  ];

  const post = posts.find((post) => post.slug === slug);
  
  if (!post) {
    notFound();
  }

  return post;
}

// 生成靜態元數據
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: "文章未找到",
      description: "抱歉，我們找不到您要查看的文章。",
    };
  }

  return {
    title: `${post.title} | Next.js Blog`,
    description: post.content.substring(0, 160),
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  // 將 Markdown 內容轉換為 HTML
  // 在實際應用中，你可能會使用 remark 或 marked 等庫來處理 Markdown
  const contentHtml = post.content
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>')
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-5 mb-2">$1</h3>')
    .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*)\*/gim, '<em>$1</em>')
    .replace(/\n/gim, '<br />')
    .replace(/```([\s\S]*?)```/g, (match, p1) => {
      return `<pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-x-auto"><code>${p1.replace(/\n/g, '<br />')}</code></pre>`;
    });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-6 md:p-8">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded">
              {post.category}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {post.date}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-8">
            <span>作者: {post.author}</span>
          </div>
        </div>

        <div 
          className="prose prose-blue max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
          >
            ← 返回文章列表
          </Link>
        </div>
      </article>
    </div>
  );
}
