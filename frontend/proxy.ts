// proxy.ts na raiz do seu projeto

import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  // se não tiver token e for rota protegida
  if (!token && request.nextUrl.pathname.startsWith("/bater-ponto")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // caso contrário, continua normalmente
  return NextResponse.next();
}

export const config = {
  matcher: ["/bater-ponto/:path*"],
};
