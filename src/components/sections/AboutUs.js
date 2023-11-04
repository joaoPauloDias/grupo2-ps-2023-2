import styles from '@/styles/sections/AboutUs.module.css';
import Container from '@/components/Container';

const AboutUs = () => {
  return (
    <section id="aboutus" className={styles.aboutussection}>
      <Container>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2>SOBRE NOS</h2>
            <div className={styles.textformat}>
              <p>
                A IDE é a empresa júnior dos cursos <br />
                Ciência e Engenharia da Computação da <br />
                Universidade Federal do Rio Grande do  <br />
                Sul. Formada por alunos interessados em <br />
                se tornarem empreendedores e <br />
                profissionais excepcionais, a IDE fornece <br />
                soluções em software, como sites e <br />
                sistemas, com preços abaixo do <br />
                mercado, aliados à excelência da UFRGS, <br />
                o Instituto de Informática e seus <br />
                professores, que fornecem apoio técnico <br />
                e aconselhamento aos estudantes.
              </p>
              <img
                src="/img/ide-logo.png"
                alt="Logo IDE"
                className={styles.imgIDE}
              />
            </div>
          </div>
          <img
            src="/img/neko-comemorando.png"
            alt="Neko comemorando"
            className={styles.imgWrapper}
          />
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;