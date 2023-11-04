import styles from '@/styles/sections/Home.module.css';
import Container from '@/components/Container';
import borderstyles from '@/styles/borders.module.css';
import Link from 'next/link';
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
              <Link href="#starters">
                <button className={styles.startButton}>START</button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Home;
