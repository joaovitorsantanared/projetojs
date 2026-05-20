"use server";

export async function ValidarCadastro(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const confirm = formData.get("confirmPassword");

  // Simula latência de rede / processamento no servidor
  await new Promise((resolve) => setTimeout(resolve, 1500)); // espera 1.5s

  if (password !== confirm) {
    return { success: false, message: "As senhas não são as mesmas" };
  }

  if (email === "teste@empresa.com") {
    return { success: false, message: "Este email já foi cadastrado" };
  }

  return { success: true, message: "A sua conta foi criada com sucesso!" };
}
