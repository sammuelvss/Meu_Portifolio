"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Space_Mono } from "next/font/google";
import styles from "./Navbar.module.css";
import TemaClaroBotao from "./TemaClaroBotao";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav
      className={`${styles.navbar} ${isHome ? styles.navbarHome : styles.navbarPages}`}
    >
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
        </ul>

        <TemaClaroBotao />
      </div>
    </nav>
  );
}
