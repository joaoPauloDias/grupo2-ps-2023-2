import Image from 'next/image';
import styles from '@/styles/sections/Home.module.css';
import Container from '@/components/Container';
import ContainerBorder from '../ContainerBorder';
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
            <div className={styles.buttonContainer}>
              <ContainerBorder color="white">
                <button className={styles.startButton}>START</button>
              </ContainerBorder>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Home;
