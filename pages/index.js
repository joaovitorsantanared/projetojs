import { useState } from 'react'  // Para armazenar email e senha
import Botao from '../components/botao'  // Seu botão reutilizável
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Formulario from "../components/Formulario";

export default function Home() {


  return (
    <div>
      {/* Título principal */}
      <h1 >Tailwind está funcionando 🎉</h1>

      <h1>Login</h1>


      <Formulario />
    </div>




  )

}