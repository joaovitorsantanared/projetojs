import { ReactNode } from "react";
import styles from "./RelatorioCard.module.css";

interface RelatorioCardProps {
  title: string;
  value: string;
  subValue?: ReactNode;
  icon: ReactNode;
}

export default function RelatorioCard({
  title,
  value,
  subValue,
  icon,
}: RelatorioCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>

      <div className={styles.cardContainer}>
        <h1 className={styles.title}>{title}</h1>

        <p className={styles.value}>{value}</p>

        {subValue && <span className={styles.subValue}>{subValue}</span>}
      </div>
    </div>
  );
}
