
type Props = {
    filtro: string;
    setFiltro: (valor: string) => void;
  };
  
  export default function Filter({
    filtro,
    setFiltro,
  }: Props) {
    return (
      <div style={{marginTop:"20px"}}>
       <form className="filter" style={ {gap:"6px"} }>
           
           {/* APROVADOS */}

           <input
           className="btn btn-lg checked:bg-[#0C5051] checked:text-white checked:border-[#0C5051] border-2 rounded-2xl"
           type="radio"
           aria-label="Aprovados"
           checked={filtro === "Aprovado"}
           onChange={() => setFiltro("Aprovado")}
           />

           {/* PENDENTES */}

           <input
           className="btn btn-lg checked:bg-[#0C5051] checked:text-white checked:border-[#0C5051] border-2 rounded-2xl"
           type="radio"
           aria-label="Pendentes"
           checked={filtro === "Pendente"}
           onChange={() => setFiltro("Pendente")}
           />

           {/* RECUSADOS (Caso for implementar)

           <input
           className="btn btn-lg checked:bg-[#0C5051] checked:text-white checked:border-[#0C5051] border-2 rounded-2xl"
           type="radio"
           aria-label="Pendentes"
           checked={filtro === "Recusado"}
           onChange={() => setFiltro("Recusado")}
           /> 
           /*}

           {/* RESET */}

           <input
               className="btn btn-lg border-2 rounded-2xl"
               type="reset"
               value="×"
               onClick={() => setFiltro("")}
               />
       </form>
  
      </div>
    );
}