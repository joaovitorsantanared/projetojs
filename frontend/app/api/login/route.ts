import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  if (email === "teste@empresa.com" && password === "123456") {
    return NextResponse.json({
      ok: true,
      token: "meu-token-fake",
    });
  }

  return NextResponse.json(
    { ok: false, error: "Credenciais inválidas" },
    { status: 401 }
  );
}
