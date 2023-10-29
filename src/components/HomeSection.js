import Image from 'next/image';
import styles from '../styles/HomeSection.module.css';

const HomeSection = () => {
  return (
    <section className={styles.homeSection}>
      <div className={styles.content}>
        <Image
          src="/../public/img/neko-anotando.png"
          alt="Neko anotando"
          width={400}
          height={400}
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
    </section>
  );
};

export default HomeSection;
