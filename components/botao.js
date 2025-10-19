export default function Botao({ text, onClick, color = "#0F4F55" }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        color: "white",
        border: "none",
        padding: "15px",
        borderRadius: "15px",
        fontWeight: "bold",
        cursor: "pointer",
        boxShadow: "0 4px 0 rgba(0,0,0,0.3)",
        transition: "0.2s",
        width: "100%",
      }}
    >
      {text}
    </button>
  );
}
