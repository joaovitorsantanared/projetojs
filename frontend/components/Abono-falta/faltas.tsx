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

function Faltas() {
  const [form, setForm] = useState<FormState>({
    dia: "",
    mes: "",
    ano: "",
    justificativa: "",
    arquivo: null,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === "arquivo" && files) {
      setForm((f) => ({ ...f, arquivo: files[0] || null }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  }

  function handleDatePartChange(part: "dia" | "mes" | "ano", value: string) {
    // Adicione validações se necessário, por exemplo:
    // if (part === "dia" && (parseInt(value) < 1 || parseInt(value) > 31)) return;
    // if (part === "mes" && (parseInt(value) < 1 || parseInt(value) > 12)) return;
    // if (part === "ano" && value.length > 4) return;
  
    setForm((f) => ({ ...f, [part]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(form);
    alert("Solicitação enviada (mock). Veja o console.");
  }

  function handleBack(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    window.history.back();
  }

  return (
    <div className="app-bg">
      <div className="card">
        <h1 className="card-title">ABONO DE FALTA</h1>

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
              </div>
            </div>
          </div>
            {/* JUSTIFICATIVA */}
          <div className="field-group">
            <label className="field-label">Justificativa:</label>
            <textarea
              name="justificativa"
              placeholder="Digite aqui a justificativa de abono de falta..."
              value={form.justificativa}
              onChange={handleChange}
              rows={5}
            />
          </div>
            {/* ANEXO */}
          <div className="field-group">
            <label className="field-label">Anexo:</label>

            <div className="file-row">
              <label className="file-button">
                ESCOLHER ARQUIVO
                <input type="file" name="arquivo" onChange={handleChange} />
              </label>
              <span className="file-name">
                {form.arquivo
                  ? form.arquivo.name
                  : "Nenhum arquivo selecionado"}
              </span>
            </div>
          </div>
              {/* BOTÕES */}
          <div className="actions">
            <button type="submit" className="submit-btn">
              SOLICITAR
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