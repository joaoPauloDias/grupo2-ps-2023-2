import Link from 'next/link';
import styles from '@/styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/iniciais">INICIAIS</Link>
          </li>
          <li>
            <Link href="#aboutus">SOBRE</Link>
          </li>
          <li>
            <Link href="#sendmessage">FORMULARIO</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
