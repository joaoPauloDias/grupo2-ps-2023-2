import styles from '@/styles/sections/Starters.module.css';
import borderstyles from '@/styles/borders.module.css';
import Container from '@/components/Container';
import ElementalButtonContainer from '../ElementalButtonContainer';
import ContainerStarter from '../ContainerStarter';
import {
  getBorderClassByColor,
  getBorderClassByType,
} from '@/utils/borderUtils';
import PokemonDisplay from '../PokemonDisplay';
import InfoDisplay from '../InfoDisplay';
const Starters = ({ type }) => {
  return (
    <section className={styles.startersSection}>
      <Container>
        <h2 className={styles.title}>CONHECENDO OS STARTERS</h2>
        <div className={styles.mainDiv}>
          <div
            className={`${styles.subDiv1} ${
              borderstyles.pixelCornersWrapper
            } ${getBorderClassByType()}`}
          >
            <div className={`${styles.innerDiv1} `}>
              <PokemonDisplay type="FOGO" />
              {/* <div className={styles.innerDiv1imageContainer}>
                <h2>ESCOLHA UM!</h2>
                <img
                  src="/img/neko-dormindo.png"
                  alt="Neko Dormindo"
                  style={{ width: '40%' }}
                />
              </div> */}
            </div>
            <div className={styles.innerDiv2}>
              <InfoDisplay type="AGUA" />
            </div>
          </div>
          <div className={styles.subDiv2}>
            <div className={styles.innerDiv1}>
              <ElementalButtonContainer />
            </div>
            <div className={styles.innerDiv2}>
              <ContainerStarter type="AGUA" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Starters;
