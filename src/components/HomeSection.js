import Image from 'next/image';
import styles from '../styles/HomeSection.module.css';
import Container from './Container';
const HomeSection = () => {
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
            <button className={styles.startButton}>START</button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeSection;
