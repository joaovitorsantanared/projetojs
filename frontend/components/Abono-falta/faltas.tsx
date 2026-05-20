"use client";

import React, { useState } from "react";
import "./faltas.css";

interface FormState {
  dia: string;
  mes: string;
  ano: string;
  justificativa: string;
  arquivo: File | null;
}

interface Erros {
  dia?: string[];
  mes?: string[];
  ano?: string[];
  justificativa?: string[];
  arquivo?: string;
  geral?: string;
}

function Faltas() {
  const [form, setForm] = useState<FormState>({
    dia: "",
    mes: "",
    ano: "",
    justificativa: "",
    arquivo: null,
  });

  const [erros, setErros] = useState<Erros>({});
  const [enviando, setEnviando] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === "arquivo" && files) {
      setForm((f) => ({ ...f, arquivo: files[0] || null }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
    // Limpa o erro do campo ao digitar
    setErros((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleDatePartChange(part: "dia" | "mes" | "ano", value: string) {
    setForm((f) => ({ ...f, [part]: value }));
    setErros((prev) => ({ ...prev, [part]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErros({});
    setEnviando(true);
    setSucesso(false);

    try {
      const formData = new FormData();
      formData.append("dia", form.dia);
      formData.append("mes", form.mes);
      formData.append("ano", form.ano);
      formData.append("justificativa", form.justificativa);
      if (form.arquivo) formData.append("anexo", form.arquivo);

      const res = await fetch("/api/abono", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
       
        if (data.detalhes) {
          setErros(data.detalhes);
        } else {
          
          setErros({ geral: data.erro });
        }
        return;
      }

      
      setSucesso(true);
      setForm({ dia: "", mes: "", ano: "", justificativa: "", arquivo: null });

    } catch {
      setErros({ geral: "Erro ao conectar com o servidor. Tente novamente." });
    } finally {
      setEnviando(false);
    }
  }

  function handleBack(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    window.history.back();
  }

  return (
    <div className="app-bg">
      <div className="card">
        <h1 className="card-title">ABONO DE FALTA</h1>

        {sucesso && (
          <p className="msg-sucesso">Solicitação enviada com sucesso!</p>
        )}

        {erros.geral && (
          <p className="msg-erro">{erros.geral}</p>
        )}

        <form onSubmit={handleSubmit} className="card-form">
          {/* DATA */}
          <div className="field-group">
            <label className="field-label">Data:</label>
            <div className="date-row">
              <div className="date-field">
                <span>Dia</span>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="DD"
                  name="dia"
                  value={form.dia}
                  onChange={(e) => handleDatePartChange("dia", e.target.value)}
                />
                {erros.dia && <span className="erro-campo">{erros.dia[0]}</span>}
              </div>

              <div className="date-field">
                <span>Mês</span>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="MM"
                  name="mes"
                  value={form.mes}
                  onChange={(e) => handleDatePartChange("mes", e.target.value)}
                />
                {erros.mes && <span className="erro-campo">{erros.mes[0]}</span>}
              </div>

              <div className="date-field">
                <span>Ano</span>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="AAAA"
                  name="ano"
                  value={form.ano}
                  onChange={(e) => handleDatePartChange("ano", e.target.value)}
                />
                {erros.ano && <span className="erro-campo">{erros.ano[0]}</span>}
              </div>
            </div>
          </div>

          
          <div className="field-group">
            <label className="field-label">Justificativa:</label>
            <textarea
              name="justificativa"
              placeholder="Digite aqui a justificativa de abono de falta..."
              value={form.justificativa}
              onChange={handleChange}
              rows={5}
            />
            {erros.justificativa && (
              <span className="erro-campo">{erros.justificativa[0]}</span>
            )}
          </div>

         
          <div className="field-group">
            <label className="field-label">Anexo:</label>
            <div className="file-row">
              <label className="file-button">
                ESCOLHER ARQUIVO
                <input type="file" name="arquivo" onChange={handleChange} />
              </label>
              <span className="file-name">
                {form.arquivo ? form.arquivo.name : "Nenhum arquivo selecionado"}
              </span>
            </div>
            {erros.arquivo && (
              <span className="erro-campo">{erros.arquivo}</span>
            )}
          </div>

          
          <div className="actions">
            <button type="submit" className="submit-btn" disabled={enviando}>
              {enviando ? "ENVIANDO..." : "SOLICITAR"}
            </button>
            <button className="back-link" onClick={handleBack}>
              VOLTAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Faltas;