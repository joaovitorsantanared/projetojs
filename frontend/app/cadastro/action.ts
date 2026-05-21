
"use server";

export async function ValidarCadastro(formData: FormData) {
  const nome = formData.get("nome") as string;
  const email = formData.get("email") as string;
  const senha = formData.get("password") as string;

  if (!nome || !email || !senha) {
    return { success: false, message: "Preencha todos os campos!" };
  }

  try{
    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : "http://localhost:3000";

    const response = await fetch(`${baseUrl}/api/cadastro`, {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, email, senha }),
      });

      const data = await response.json();

      if(!response.ok){
        return { success: false, message: data.message};
    }
    return { success: true, message: "Cadastro realizado com sucesso!" };

  } catch (error) {
    return { success: false, message: "Erro ao conectar com o servidor!" };
  } 
}

