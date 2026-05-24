import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>Meu Portfólio</Link>
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/sobre">Sobre</Link></li>
          <li><Link href="/academico">Acadêmico</Link></li>
          <li><Link href="/profissional">Profissional</Link></li>
          <li><Link href="/projetos">Projetos</Link></li>
        </ul>
      </div>
    </nav>
  );
}
