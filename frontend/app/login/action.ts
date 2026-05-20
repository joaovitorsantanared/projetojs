"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  
  const res = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  
  if (!res.ok) {
    redirect("/login?error=1");
  }

  
  (await cookies()).set("token", data.token, {
    httpOnly: true,
    secure: false,
    path: "/",
  });

  redirect("/bater-ponto");
}
