import Image from 'next/image';
import styles from '../styles/Footer.module.css'

const  FooterSection = () => {
    return (
        <div className={styles['footer']}>
        <div className={styles['footer-content']}>
            <div className={styles['logo-conteiner']}>
                <Image src="/img/pokemon-logo.png" alt="pokemon-logo" width={20} height={20}/>
                <Image src="/img/instagram-logo.png" alt="instagram-logo" width={20} height={20}/>
                <Image src="/img/linkedin-logo.png" alt="linkedin-logo" width={20} height={20}/>
                <Image src="/img/ide-logo.png" alt="ide-logo" width={20} height={20}/>
            </div>
            <div className={styles['terms']}>
                <p>株式会社ポケモン (The Pokémon Company) © x IDE © Todos os direitos reservados.</p>
                <p>Termos de Uso | Política de Privacidade | Politica de Cookies</p>
            </div>
            <div className={styles['IDE-logo']}>
                <img src="/img/ide-logo.png" alt="ide-logo" />
            </div>
        </div>
    </div> 
    );
  };
  
  export default FooterSection;