import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  try {
    // Pega o usuário pelo token
    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ erro: "Não autorizado" }, { status: 401 });
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET!) as { id: number };

    const body = await req.json();

    const ponto = await prisma.baterPonto.create({
      data: {
        acao: body.acao,       // "entrada" ou "saida" — vem do frontend
        usuarioId: payload.id,
      },
    });

    return NextResponse.json(ponto);

  } catch (error) {
    console.error(error);
    return NextResponse.json({ erro: String(error) }, { status: 500 });
  }
}
