import Image from 'next/image';
import styles from '../styles/Footer.module.css'

const  FooterSection = () => {
    return (
        <div className={styles['footer-content']}>
            <div className={styles['logo-conteiner']}>
                <Image src="/img/pokemon-logo.png" alt="pokemon-logo" width={30} height={30}/>
                <Image src="/img/instagram-logo.png" alt="instagram-logo" width={30} height={30}/>
                <Image src="/img/linkedin-logo.png" alt="linkedin-logo" width={30} height={30}/>
                <Image src="/img/ide-logo.png" alt="ide-logo" width={30} height={30}/>
            </div>
            <div className={styles['terms']}>
                <h1><br /><br />株式会社ポケモン (The Pokémon Company) © x IDE © Todos os direitos reservados.</h1>
                <h2><br />Termos de Uso | Política de Privacidade | Politica de Cookies</h2>
            </div>
            <div className={styles['ide-logo']}>
                <img src="/img/ide-logo.png" alt="ide-logo" />
            </div>
        </div>
    );
  };
  
  export default FooterSection;