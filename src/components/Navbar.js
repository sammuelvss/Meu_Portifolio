"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Space_Mono } from "next/font/google";
import styles from "./Navbar.module.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <nav
        className={`${styles.navbar} ${isHome ? styles.navbarHome : styles.navbarPages}`}
      >
        {isHome && (
          <>
            <div className={styles.liquidGlassEffect}></div>
            <div className={styles.liquidGlassTint}></div>
            <div className={styles.liquidGlassShine}></div>
          </>
        )}

        <div
          className={`${styles.container} ${isHome ? styles.homeContainer : styles.pagesContainer}`}
        >
          {!isHome && (
            <Link href="/" className={`${styles.logo} ${spaceMono.className}`}>
              Sammuel Victor
            </Link>
          )}

          <ul className={styles.navLinks}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/sobre">Sobre</Link>
            </li>
            <li>
              <Link href="/academico">Acadêmico</Link>
            </li>
            <li>
              <Link href="/profissional">Profissional</Link>
            </li>
            <li>
              <Link href="/projetos">Projetos</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* --- ESPAÇADOR FANTASMA --- */}
      {/* Só aparece se NÃO for a página inicial */}
      {!isHome && <div className={styles.navbarSpacer}></div>}
    </>
  );
}
