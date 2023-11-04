import styles from '@/styles/sections/Starters.module.css';
import borderstyles from '@/styles/borders.module.css';
import Container from '@/components/Container';
import ElementalButtonContainer from '../ElementalButtonContainer';
import ContainerStarter from '../ContainerStarter';
import { getBorderClassByType } from '@/utils/borderUtils';
import PokemonDisplay from '../PokemonDisplay';
import InfoDisplay from '../InfoDisplay';
import { getColorByType } from '@/utils/typeUtils';
import React, { useState } from 'react';

const Starters = () => {
  const [type, setType] = useState();
  return (
    <section id="starters" className={styles.startersSection}>
      <Container>
        <div className={styles.mainDiv}>
          <h2
            className={`${styles.title} ${!type ? styles.textCenter : ''}`}
            style={{ color: getColorByType(type) }}
          >
            {type ? type : `CONHECENDO OS STARTERS`}
          </h2>
          <div
            className={`${styles.subDiv1} ${
              type ? '' : borderstyles.pixelCornersWrapper
            } ${getBorderClassByType()}`}
          >
            <div className={`${styles.innerDiv1} `}>
              {type ? (
                <PokemonDisplay type={type} />
              ) : (
                <div className={styles.innerDiv1imageContainer}>
                  <h2>ESCOLHA UM!</h2>
                  <img
                    src="/img/neko-dormindo.png"
                    alt="Neko Dormindo"
                    style={{ width: '40%' }}
                  />
                </div>
              )}
            </div>
            <div className={styles.innerDiv2}>
              {type ? (
                <InfoDisplay type={type} />
              ) : (
                <div className={styles.infoContainer}>
                  <div className={styles.infoWrapper}>
                    <img
                      className={styles.open}
                      src="/img/aspas.png"
                      alt="Aspas"
                    />
                    <p>
                      Treinadores Pokémon enfrentam uma decisão crucial ao
                      escolher seu Pokémon inicial, pois isso moldará suas
                      aventuras. Os tipos - Água, Fogo e Planta - influenciam as
                      batalhas e estratégias. Água domina Fogo, Fogo vence
                      Planta, e Planta supera Água. Escolher com sabedoria é a
                      chave para o sucesso nas jornadas Pokémon. Conheça um
                      pouco mais sobre esses tipos!
                    </p>
                    <img
                      className={styles.close}
                      src="/img/aspas.png"
                      alt="Aspas"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className={styles.subDiv2}>
            <div className={styles.innerDiv1}>
              <ElementalButtonContainer type={type} setType={setType} />
            </div>
            <div className={styles.innerDiv2}>
              <ContainerStarter type={type} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Starters;
