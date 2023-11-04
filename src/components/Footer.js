import Image from 'next/image';
import styles from '@/styles/Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles['footer-content']}>
      <div className={styles['logo-conteiner']}>
        <Link href="https://www.pokemon.com/br/">
          <Image
            src="/img/pokemon-logo.png"
            alt="pokemon-logo"
            width={30}
            height={30}
          />
        </Link>
        <Link href="https://www.instagram.com/ide_jr/">
          <Image
            src="/img/instagram-logo.png"
            alt="instagram-logo"
            width={30}
            height={30}
          />
        </Link>
        <Link href="https://www.linkedin.com/company/empresa-j%C3%BAnior-ide/">
          <Image
            src="/img/linkedin-logo.png"
            alt="linkedin-logo"
            width={30}
            height={30}
          />
        </Link>
        <Link href="https://linktr.ee/idejr">
          <Image
            src="/img/ide-logo.png"
            alt="ide-logo"
            width={45}
            height={30}
          />{' '}
        </Link>
      </div>
      <div className={styles['terms']}>
        <h1>
          <br />
          <br />
          株式会社ポケモン (The Pokémon Company) © x IDE © Todos os direitos
          reservados.
        </h1>
        <h2>
          <br />
          Termos de Uso | Política de Privacidade | Politica de Cookies
        </h2>
      </div>
      <div className={styles['ide-logo']}>
        <img src="/img/ide-logo.png" alt="ide-logo" />
      </div>
    </div>
  );
};

export default Footer;
