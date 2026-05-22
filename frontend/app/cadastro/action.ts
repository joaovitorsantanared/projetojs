"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function ValidarCadastro(formData: FormData) {
  const nome = formData.get("nome") as string;
  const email = formData.get("email") as string;
  const senha = formData.get("password") as string;

  if (!nome || !email || !senha) {
    return { success: false, message: "Preencha todos os campos!" };
  }

  try {
    const usuarioExistente = await prisma.usuario.findUnique({ where: { email } });

    if (usuarioExistente) {
      return { success: false, message: "Email já cadastrado" };
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    await prisma.usuario.create({
      data: { nome, email, senha: senhaCriptografada },
    });

  } catch (error) {
    console.error("ERRO CADASTRO:", error);
    return { success: false, message: "Erro ao conectar com o servidor!" };
  }

  redirect("/login");
}