import styles from '@/styles/sections/Starters.module.css';
import Container from '@/components/Container';
import Agua from '@img/agua';
const Starters = () => {
  return (
    <section className={styles.startersSection}>
      <Container>
        <h2>CONHECENDO OS STARTERS</h2>
        <div className={styles.mainDiv}>
          <div className={styles.subDiv1}>
            <div className={styles.innerDiv1}></div>
            <div className={styles.innerDiv2}></div>
          </div>
          <div className={styles.subDiv2}>
            <div className={styles.innerDiv1}></div>
            <div className={styles.innerDiv2}></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Starters;
