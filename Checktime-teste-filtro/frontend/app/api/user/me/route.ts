import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";
import bcrypt from "bcryptjs";

function getUsuarioFromRequest(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  if (!token) return null;
  return verifyToken(token);
}

export async function GET(req: NextRequest) {
  const payload = getUsuarioFromRequest(req);
  if (!payload) {
    return NextResponse.json({ message: "Não autenticado" }, { status: 401 });
  }

  const usuario = await prisma.usuario.findUnique({
    where: { id: payload.id },
    select: { id: true, nome: true, email: true },
  });

  if (!usuario) {
    return NextResponse.json({ message: "Usuário não encontrado" }, { status: 404 });
  }

  return NextResponse.json(usuario);
}

export async function PATCH(req: NextRequest) {
  const payload = getUsuarioFromRequest(req);
  if (!payload) {
    return NextResponse.json({ message: "Não autenticado" }, { status: 401 });
  }

  const { nome, email, novaSenha } = await req.json();

  const data: Record<string, unknown> = { nome, email };

  if (novaSenha) {
    data.senha = await bcrypt.hash(novaSenha, 10);
  }

  const usuario = await prisma.usuario.update({
    where: { id: payload.id },
    data,
    select: { id: true, nome: true, email: true },
  });

  return NextResponse.json(usuario);
}