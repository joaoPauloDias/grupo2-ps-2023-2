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
                A IDE é a empresa júnior dos cursos Ciência e Engenharia da
                Computação da Universidade Federal do Rio Grande do Sul. Formada
                por alunos interessados em se tornarem empreendedores e
                profissionais excepcionais, a IDE fornece soluções em software,
                como sites e sistemas, com preços abaixo do mercado, aliados à
                excelência da UFRGS, o Instituto de Informática e seus
                professores, que fornecem apoio técnico e aconselhamento aos
                estudantes.
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
