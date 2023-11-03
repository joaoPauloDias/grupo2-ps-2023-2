import styles from '@/styles/sections/Starters.module.css';
import Container from '@/components/Container';
import ElementalButtonContainer from '../ElementalButtonContainer';
import ContainerStarter from '../ContainerStarter';
import ContainerBorder from '../ContainerBorder';
const Starters = () => {
  const color = '#603b88';
  return (
    <section className={styles.startersSection}>
      <Container>
        <h2 className={styles.title}>CONHECENDO OS STARTERS</h2>
        <div className={styles.mainDiv}>
          <div className={styles.subDiv1}>
            <ContainerBorder color={color}>
              <div className={styles.innerDiv1}>
                <div className={styles.innerDiv1imageContainer}>
                  <h2>ESCOLHA UM!</h2>
                  <img
                    src="/img/neko-dormindo.png"
                    alt="Neko Dormindo"
                    style={{ width: '40%' }}
                  />
                </div>
              </div>
              <div className={styles.innerDiv2}></div>
            </ContainerBorder>
          </div>
          <div className={styles.subDiv2}>
            <div className={styles.innerDiv1}>
              <ElementalButtonContainer color={color} />
            </div>
            <div className={styles.innerDiv2}>
              <ContainerStarter color={color}>
                <img
                  src="/img/logo-pixelado-roxo.png"
                  alt="Logo Pixelado Roxo"
                  style={{ width: '12%' }}
                />
              </ContainerStarter>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Starters;
