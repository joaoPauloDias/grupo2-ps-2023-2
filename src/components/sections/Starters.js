import styles from '@/styles/sections/Starters.module.css';
import Container from '@/components/Container';
import Agua from '@img/agua';
import Fogo from '@img/fogo';
import Grama from '@img/planta';
import ElementalButton from '@/components/ElementalButton';
const Starters = () => {
  return (
    <section className={styles.startersSection}>
      <Container>
        <h2>CONHECENDO OS STARTERS</h2>
        <div className={styles.mainDiv}>
          <div className={styles.subDiv1}>
            <div className={styles.innerDiv1}>
              <ElementalButton
                component={<Agua />}
                color="var(--water)"
                title="AGUA"
                link="https://example.com"
              />
              <ElementalButton
                component={<Grama />}
                color="var(--plant)"
                title="PLANTA"
                link="https://example.com"
              />
              <ElementalButton
                component={<Fogo />}
                color="var(--main-color)"
                title="FOGO"
                link="https://example.com"
              />
            </div>
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
