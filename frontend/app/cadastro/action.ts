
"use server";

export async function ValidarCadastro(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return { success: false, message: "Preencha todos os campos!" };
  }

  if (email === "teste@empresa.com") {
    return { success: false, message: "Este email já está cadastrado." };
  }


  return {
    success: true,
    message: "Cadastro realizado com sucesso!",
  };
}

