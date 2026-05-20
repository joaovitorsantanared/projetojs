import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { writeFile } from "fs/promises";
import path from "path";

type Erroscampos = {
    dia?: string[];
    mes?: string[];
    ano?: string[];
    justificativa?: string[];
};

function validarcampos(
    campos:{
        dia: string;
        mes: string;
        ano: string;
        justificativa: string;

    }): Erroscampos {
    const erros: Erroscampos = {};
    
    const dia = Number(campos.dia);
    if (!campos.dia || !/^\d{1,2}$/.test(campos.dia)) {
    erros.dia = ["Dia inválido"];
  } else if (dia < 1 || dia > 31) {
    erros.dia = ["Dia deve ser entre 1 e 31"];
  }

   const mes = Number(campos.mes);
  if (!campos.mes || !/^\d{1,2}$/.test(campos.mes)) {
    erros.mes = ["Mês inválido"];
  } else if (mes < 1 || mes > 12) {
    erros.mes = ["Mês deve ser entre 1 e 12"];
  }

   const ano = Number(campos.ano);
  if (!campos.ano || !/^\d{4}$/.test(campos.ano)) {
    erros.ano = ["Ano inválido"];
  } else if (ano < 2000 || ano > 2100) {
    erros.ano = ["Ano deve ser entre 2000 e 2100"];
  }

   if (!campos.justificativa || campos.justificativa.trim() === "") {
    erros.justificativa = ["Justificativa é obrigatória"];
  } else if (campos.justificativa.trim().length < 10) {
    erros.justificativa = ["Justificativa deve ter ao menos 10 caracteres"];
  } else if (campos.justificativa.trim().length > 1000) {
    erros.justificativa = ["Justificativa deve ter no máximo 1000 caracteres"];
  }

  return erros;
}

export async function POST (request: NextRequest) {
    try {
        const formData = await request.formData();
        
        const campos = {
            dia: formData.get("dia") as string,
            mes: formData.get("mes") as string,
            ano: formData.get("ano") as string,
            justificativa: formData.get("justificativa") as string,
        };

        const erros = validarcampos(campos);
            if (Object.keys(erros).length > 0) {
             return NextResponse.json(
                {erro: "dados inválidos", detalhes: erros},
                {status: 422}
            );
        }
        const dia = Number(campos.dia);
        const mes = Number(campos.mes);
        const ano = Number(campos.ano);
    
        const dataFalta = new Date(ano, mes - 1, dia);
        if (
            dataFalta.getFullYear() !== ano ||
            dataFalta.getMonth() !== mes - 1 ||
            dataFalta.getDate() !== dia
        ){
            return NextResponse.json(
                {erro: "data inválida"},
                {status: 422}
            );
        }
        let anexoUrl: string | null = null;
        const arquivo = formData.get("arquivo") as File | null;

        if (arquivo && arquivo.size > 0) {
      const MAX_SIZE = 5 * 1024 * 1024; // 5MB
      const TIPOS_PERMITIDOS = ["image/jpeg", "image/png", "application/pdf"];

      if (arquivo.size > MAX_SIZE) {
        return NextResponse.json(
          { erro: "Arquivo muito grande. Máximo: 5MB" },
          { status: 422 }
        );
      }

      if (!TIPOS_PERMITIDOS.includes(arquivo.type)) {
        return NextResponse.json(
          { erro: "Tipo de arquivo não permitido. Use JPG, PNG ou PDF" },
          { status: 422 }
        );
      }

      const bytes = await arquivo.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const nomeArquivo = `${Date.now()}_${arquivo.name.replace(/\s/g, "_")}`;
      const caminho = path.join(process.cwd(), "public/uploads", nomeArquivo);

      await writeFile(caminho, buffer);
      anexoUrl = `/uploads/${nomeArquivo}`;
    }

   
    const abono = await prisma.abonoDeFalta.create({
      data: {
        dataFalta,
        justificativa: campos.justificativa.trim(),
        anexoUrl,
      },
    });

    return NextResponse.json(abono, { status: 201 });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { erro: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}