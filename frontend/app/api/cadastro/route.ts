import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const { nome, email, senha } = await request.json();

    if (!nome || !email || !senha) {
      return NextResponse.json(
        { message: "Preencha todos os campos" },
        { status: 400 }
      );
    }

    const usuarioExistente = await prisma.usuario.findUnique({ where: { email } });

    if (usuarioExistente) {
      return NextResponse.json(
        { message: "Email já cadastrado" },
        { status: 400 }
      );
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const usuario = await prisma.usuario.create({
      data: { nome, email, senha: senhaCriptografada },
      select: { id: true, nome: true, email: true }
    });

    return NextResponse.json(
      { mensagem: "Usuário cadastrado com sucesso", usuario },
      { status: 201 }
    );

  } catch (error) {
    console.error("ERRO DETALHADO:", error);
    return NextResponse.json(
      { message: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}