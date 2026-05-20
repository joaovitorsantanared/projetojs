import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    const { email, senha } = await request.json();

    // Validação dos campos
    if (!email || !senha) {
      return NextResponse.json(
        { message: "Preencha todos os campos" },
        { status: 400 }
      );
    }

    // Verifica se JWT_SECRET está definido
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET não definido no .env");
    }

    // Busca o usuário
    const usuario = await prisma.usuario.findUnique({ where: { email } });
    if (!usuario) {
      return NextResponse.json(
        { message: "Email ou senha inválidos" },
        { status: 401 }
      );
    }

    // Valida a senha
    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return NextResponse.json(
        { message: "Email ou senha inválidos" },
        { status: 401 }
      );
    }

    // Gera o token
    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

   const response = NextResponse.json(
  { token, message: "Login realizado com sucesso" }, // ← adicione token aqui
  { status: 200 }
);

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24
    });

    return response;

  } catch (error) {
    return NextResponse.json(
      { message: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}
