import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

// 這個中間件將在每個請求之前運行
export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // 定義需要保護的路由
  const protectedRoutes = ["/dashboard"];
  
  // 檢查當前路徑是否需要保護
  const isProtectedRoute = protectedRoutes.some((route) => 
    path === route || path.startsWith(`${route}/`)
  );

  if (isProtectedRoute) {
    // 獲取 JWT token
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    // 如果沒有 token，重定向到登入頁面
    if (!token) {
      const url = new URL("/login", request.url);
      url.searchParams.set("callbackUrl", encodeURI(request.url));
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}
