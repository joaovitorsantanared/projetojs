"use client";

import styles from "./Sidebar.module.css";
import { useRouter, usePathname } from "next/navigation";

import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import FeedIcon from "@mui/icons-material/Feed";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LogoutIcon from "@mui/icons-material/Logout";

type SidebarProps = {
  isMinimized: boolean;
  setIsMinimized: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Sidebar({ isMinimized, setIsMinimized }: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <aside
      className={`${styles.sidebar} ${isMinimized ? styles.minimized : ""}`}
      style={{ width: isMinimized ? "80px" : "280px" }}
      onClick={() => setIsMinimized((prev) => !prev)}
    >
      {!isMinimized && (
        <div className={styles.profileimg}>
          <div className={styles.profile}>
            <div
              className={styles.imageWrapper}
              onClick={(e) => {
                e.stopPropagation();
                router.push("/editar-perfil");
              }}
            >
              <img
                src="/follow.png"
                alt="User"
                width={100}
                height={100}
                className={styles.downloadImg}
              />
            </div>
          </div>

          <div>
            <p className={styles.name}>Samuel Batista</p>
            <p className={styles.job}>Analista TI</p>
          </div>
        </div>
      )}

      <nav className={styles.nav}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            router.push("/bater-ponto");
          }}
          className={`${styles.button} ${
            pathname === "/bater-ponto" ? styles.active : ""
          }`}
          style={{
            justifyContent: isMinimized ? "center" : "flex-start",
          }}
        >
          <div className={styles.buttonContent}>
            <TimerOutlinedIcon />
            {!isMinimized && "Bater Ponto"}
          </div>
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            router.push("/relatorio-page");
          }}
          className={`${styles.button} ${
            pathname === "/relatorio-page" ? styles.active : ""
          }`}
          style={{
            justifyContent: isMinimized ? "center" : "flex-start",
          }}
        >
          <div className={styles.buttonContent}>
            <FeedIcon />
            {!isMinimized && "Relatórios"}
          </div>
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            router.push("/solicitacoes");
          }}
          className={`${styles.button} ${
            pathname === "/solicitacoes" ? styles.active : ""
          }`}
          style={{
            justifyContent: isMinimized ? "center" : "flex-start",
          }}
        >
          <div className={styles.buttonContent}>
            <WavingHandIcon />
            {!isMinimized && "Solicitações"}
          </div>
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            router.push("/ponto-espelho");
          }}
          className={`${styles.button} ${
            pathname === "/ponto-espelho" ? styles.active : ""
          }`}
          style={{
            justifyContent: isMinimized ? "center" : "flex-start",
          }}
        >
          <div className={styles.buttonContent}>
            <CalendarMonthIcon />
            {!isMinimized && "Ponto Espelho"}
          </div>
        </button>
      </nav>

      <nav className={styles.nav2}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            router.push("/");
          }}
          className={styles.logout}
          style={{
            justifyContent: isMinimized ? "center" : "flex-start",
          }}
        >
          <div className={styles.buttonContent}>
            <LogoutIcon />
            {!isMinimized && "Sair"}
          </div>
        </button>
      </nav>
    </aside>
  );
}
