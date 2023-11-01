import Image from 'next/image';
import styles from '../styles/AbouUsSection.module.css';
import Container from './Container';

const AboutUsSection = () => {
  return (
    <section className={styles['about-us-section']}>
      <Container>
        <div className={styles['about-us-text']}>
          <h3>SOBRE NOS</h3>
          <div className={styles.content}>
            <img
              src="/img/neko-comemorando.png"
              alt="Neko comemorando"
              style={{ width: '60%' }}
            />
          </div>
          <p>
            A IDE é a empresa júnior dos cursos Ciência e Engenharia da Computação da 
            Universidade Federal do Rio Grande do Sul. Formada por alunos interessados em 
            se tornarem empreendedores e profissionais excepcionais, a IDE fornece 
            soluções em software, como sites e sistemas, com preços abaixo do 
            mercado, aliados à excelência da UFRGS, o Instituto de Informática e seus 
            professores, que fornecem apoio técnico e aconselhamento aos estudantes.
            <div className={styles['logo-container']}>
              <Image
                src="/img/ide-logo.png"
                alt="ide-logo"
                width={80}
                height={50}
              />
            </div>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsSection;