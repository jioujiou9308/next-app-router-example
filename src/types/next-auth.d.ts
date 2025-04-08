import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * 擴展 User 類型，添加 id 屬性
   */
  interface User {
    id: string;
  }

  /**
   * 擴展 Session 類型，確保 user.id 可用
   */
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}
