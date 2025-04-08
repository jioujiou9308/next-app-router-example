# Next.js Blog with App Router

這是一個使用 Next.js App Router 和 NextAuth.js 構建的個人部落格網站示例。這個專案旨在幫助你了解 Next.js 13+ 的新功能和最佳實踐。

## 專案特點

- 使用 Next.js App Router 進行路由管理
- 使用 React Server Components 提高性能
- 整合 NextAuth.js 實現身份驗證
- 使用 Tailwind CSS 進行樣式設計
- 支持暗黑模式
- 響應式設計，適配各種設備

## 目錄結構

```
src/
├── app/                  # App Router 目錄
│   ├── api/              # API 路由
│   │   └── auth/         # NextAuth.js API 路由
│   ├── blog/             # 博客頁面
│   │   └── [slug]/       # 動態博客文章頁面
│   ├── about/            # 關於頁面
│   ├── login/            # 登入頁面
│   ├── dashboard/        # 儀表板頁面（受保護）
│   ├── tutorial/         # 教學頁面
│   ├── layout.tsx        # 根佈局
│   ├── page.tsx          # 首頁
│   └── providers.tsx     # NextAuth 提供者
├── components/           # 共享組件
└── middleware.ts         # 中間件（路由保護）
```

## 開始使用

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

在瀏覽器中打開 [http://localhost:3000](http://localhost:3000) 查看結果。

## 功能演示

1. **首頁**: 顯示最新文章和特色內容
2. **博客頁面**: 顯示所有文章列表
3. **文章頁面**: 顯示單篇文章內容
4. **關於頁面**: 顯示關於作者的信息
5. **登入頁面**: 使用 NextAuth.js 進行身份驗證
6. **儀表板**: 登入後可以管理文章（受保護頁面）
7. **教學頁面**: 學習如何使用 Next.js App Router

## 身份驗證

這個專案使用 NextAuth.js 進行身份驗證。你可以使用以下測試帳號登入：

- **電子郵件**: user@example.com
- **密碼**: password

你也可以配置 GitHub 和 Google 登入。在 `.env.local` 文件中添加以下環境變數：

```
NEXTAUTH_SECRET=your_secret_key
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## 學習資源

這個專案包含了多篇教學文章，涵蓋了 Next.js App Router 的各個方面。查看 `/tutorial` 路由以了解更多。

要了解更多關於 Next.js 的信息，請查看以下資源：

- [Next.js 文檔](https://nextjs.org/docs) - 了解 Next.js 功能和 API。
- [學習 Next.js](https://nextjs.org/learn) - 一個互動式 Next.js 教程。
- [Next.js GitHub 倉庫](https://github.com/vercel/next.js) - 歡迎您的反饋和貢獻！
- [NextAuth.js 文檔](https://next-auth.js.org/getting-started/introduction) - 了解如何使用 NextAuth.js 進行身份驗證。

## 部署

部署 Next.js 應用程序的最簡單方法是使用 [Vercel 平台](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)，這是 Next.js 的創建者提供的服務。

查看 [Next.js 部署文檔](https://nextjs.org/docs/app/building-your-application/deploying) 了解更多詳情。

## 貢獻

歡迎貢獻！如果你有任何問題或建議，請隨時提出問題或提交拉取請求。
