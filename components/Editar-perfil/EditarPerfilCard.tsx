"use client";

import { useState } from "react";
import styles from "./EditarPerfilCard.module.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function EditarPerfilCard() {
  const [formData, setFormData] = useState({
    nome: "Samuel Batista Medeiros da Silva",
    matricula: "******************",
    email: "samuel.batista@checktime.com.br",
    senhaAtual: "******************",
    novaSenha: "",
    confirmarSenha: "",
  });

  const [showNovaSenha, setShowNovaSenha] = useState(false);
  const [showConfirmarSenha, setShowConfirmarSenha] = useState(false);
  const [avatar, setAvatar] = useState("/follow.png"); // Foto inicial
  const [fileName, setFileName] = useState("Nenhum arquivo escolhido");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setAvatar(url);
      setFileName(file.name);
    } else {
      setFileName("Nenhum arquivo escolhido");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2 className={styles.title}>EDITAR O PERFIL</h2>

        <div>
          <label className={styles.label} htmlFor="nome">Nome completo:</label>
          <input
            id="nome"
            name="nome"
            type="text"
            value={formData.nome}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div>
          <label className={styles.label} htmlFor="matricula">Matrícula:</label>
          <input
            id="matricula"
            name="matricula"
            type="password"
            value={formData.matricula}
            readOnly
            className={styles.input}
          />
        </div>

        <div>
          <label className={styles.label} htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.passwordWrapper}>
          <label className={styles.label} htmlFor="novaSenha">Nova senha :</label>
          <input
            id="novaSenha"
            name="novaSenha"
            type={showNovaSenha ? "text" : "password"}
            placeholder="Digite sua senha"
            value={formData.novaSenha}
            onChange={handleChange}
            className={styles.input}
          />
          <span
            className={styles.eyeIcon}
            onClick={() => setShowNovaSenha(!showNovaSenha)}
          >
            {showNovaSenha ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </span>
        </div>

        <div className={styles.passwordWrapper}>
          <label className={styles.label} htmlFor="confirmarSenha">Confirmar nova senha :</label>
          <input
            id="confirmarSenha"
            name="confirmarSenha"
            type={showConfirmarSenha ? "text" : "password"}
            placeholder="Confirme sua senha"
            value={formData.confirmarSenha}
            onChange={handleChange}
            className={styles.input}
          />
          <span
            className={styles.eyeIcon}
            onClick={() => setShowConfirmarSenha(!showConfirmarSenha)}
          >
            {showConfirmarSenha ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </span>
        </div>

        <button type="submit" className={styles.button}>
          SOLICITAR ALTERAÇÃO
        </button>
      </form>

      <div className={styles.rightPanel}>
        <img
          src={avatar} 
          alt="Foto do usuário"
          className={styles.avatar}
        />
        <label className={styles.chooseFileBtn}>
          ESCOLHER ARQUIVO
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </label>
        <p style={{ marginTop: "8px", fontSize: "0.9rem", color: "#555" }}>{fileName}</p>
      </div>
    </div>
  );
}
