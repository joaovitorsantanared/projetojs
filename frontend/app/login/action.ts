"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const senha = formData.get("password") as string;

  if (!email || !senha) redirect("/login?error=1");

  try {
    const usuario = await prisma.usuario.findUnique({ where: { email } });
    if (!usuario) redirect("/login?error=1");

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) redirect("/login?error=1");

    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" }
    );

    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24,
      path: "/",
    });

  } catch (error) {
    console.error("ERRO LOGIN:", error);
    redirect("/login?error=1");
  }

  redirect("/bater-ponto");
}