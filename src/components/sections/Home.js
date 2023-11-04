import styles from '@/styles/sections/Home.module.css';
import Container from '@/components/Container';
import borderstyles from '@/styles/borders.module.css';
const Home = () => {
  return (
    <section className={styles.homeSection}>
      <Container>
        <div className={styles.content}>
          <img
            src="/img/neko-anotando.png"
            alt="Neko anotando"
            style={{ width: '50%' }}
          />
          <div className={styles.contentTitle}>
            <h2>
              <span>POKE</span>
              <span className={styles.redText}>IDE</span>
              <span>X</span>
            </h2>
            <div
              className={` ${borderstyles.pixelCornersWrapper} ${borderstyles.white} ${styles.buttonContainer}`}
            >
              <button className={styles.startButton}>START</button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Home;
