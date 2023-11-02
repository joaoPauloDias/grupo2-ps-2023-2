import Image from 'next/image';
import styles from '../styles/Footer.module.css'

const  FooterSection = () => {
    return (
        <div className={styles['footer']}>
        <div className={styles['footer-content']}>
            <div className={styles['logo-conteiner']}>
                <img src="/img/pokemon-logo.png" alt="pokemon-logo"/>
                <img src="/img/instagram-logo.png" alt="instagram-logo"/>
                <img src="/img/linkedin-logo.png" alt="linkedin-logo"/>
                <img src="/img/ide-logo.png" alt="ide-logo"/>
            </div>
            <div className={styles['terms']}>
                <p>Termos de Uso</p>
                <p>Política de Privacidade</p>
            </div>
        </div>
    </div> 
    );
  };
  
  export default FooterSection;