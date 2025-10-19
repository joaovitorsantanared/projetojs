// Importa o hook useState do React, usado para armazenar dados que mudam (como email e senha)
import { useState } from "react";

// Importa o componente de botão reutilizável criado anteriormente
import Botao from '../components/botao';

// Função principal do componente (por convenção, o nome começa com letra maiúscula)
export default function Formulario() {

  // Declara três estados (variáveis reativas)
  // email e senha armazenam o que o usuário digita
  // mostrar serve para alternar entre exibir e esconder a senha
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrar, setMostrar] = useState(false);

  // Função que é chamada quando o formulário é enviado
  // O "e" representa o evento do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página (comportamento padrão do HTML)

    // Exemplo simples: mostra os dados no console e alerta o usuário
    console.log("Email:", email);
    console.log("Senha:", senha);
    alert(`Tentativa de login com o email: ${email}`);
  };

  // Retorno visual do componente — JSX é como se fosse “HTML dentro do JavaScript”
  return (
    // O elemento <form> representa o formulário completo
    // Aqui usamos classes do Tailwind para definir estilo visual
    <form
      onSubmit={handleSubmit} // Chama a função handleSubmit quando o usuário clica em “Entrar”
      className="flex flex-col gap-4 bg-white/90 p-6 rounded-2xl shadow-md w-80"
    // flex flex-col → organiza os elementos em coluna
    // gap-4 → adiciona espaçamento entre os campos
    // bg-white/90 → fundo branco com leve transparência
    // p-6 → espaçamento interno
    // rounded-2xl → bordas arredondadas
    // shadow-md → sombra leve
    // w-80 → largura fixa de ~320px
    >

      {/* Campo de email */}
      <input
        type="email" // tipo de campo → valida formato de email
        placeholder="Digite seu email" // texto que aparece enquanto o campo está vazio
        value={email} // valor atual do input, ligado à variável "email"
        onChange={(e) => setEmail(e.target.value)} // atualiza o estado quando o usuário digita
        className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500"
        // p-3 → espaçamento interno
        // rounded-md → bordas levemente arredondadas
        // border → adiciona borda padrão
        // focus:ring → efeito de brilho verde quando o campo é selecionado
        required // torna o campo obrigatório
      />

      {/* Campo de senha, com botão para mostrar/ocultar */}
      <div className="relative">
        <input
          type={mostrar ? "text" : "password"} // alterna entre texto visível e oculto
          placeholder="Digite sua senha"
          value={senha} // valor atual do input
          onChange={(e) => setSenha(e.target.value)} // atualiza a senha em tempo real
          className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 w-full"
          required
        />

        {/* Botão de “Mostrar/Ocultar senha” */}
        <button
          type="button" // evita que o botão envie o formulário
          onClick={() => setMostrar(!mostrar)} // alterna o valor de mostrar (true/false)
          className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-600"
        // absolute → posiciona dentro do input
        // right-2 → distância de 2 unidades da borda direita
        // top-1/2 e -translate-y-1/2 → centraliza verticalmente
        // text-sm e text-gray-600 → define tamanho e cor do texto
        >
          {mostrar ? "Ocultar" : "Mostrar"} {/* alterna o texto conforme o estado */}
        </button>
      </div>

      {/* Links auxiliares abaixo e acima do botão */}
      <div className="text-center text-sm mt-3">
        {/* Link para recuperação de senha */}
        <a
          href="/esqueci-senha"
          className="text-green-600 hover:underline block"
        >
          Esqueci minha senha

          {/* Botão de envio do formulário */}
          {/* Usa o componente reutilizável “Botao”, que recebe uma propriedade “text” */}
          <Botao text="Entrar" tipo="submit" />


        </a>

        {/* Link para criação de conta */}
        <a
          href="/cadastro"
          className="text-green-600 hover:underline block"
        >
          Não tem conta? Cadastre-se
        </a>
      </div>
    </form>
  );
}
