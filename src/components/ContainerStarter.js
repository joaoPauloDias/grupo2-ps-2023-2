import styles from '@/styles/ContainterStarter.module.css';
import borderstyles from '@/styles/borders.module.css';
import { getBorderClassByType } from '@/utils/borderUtils';
import pokemonData from '@content/pokemons.json';

const ContainerStarter = ({ type }) => {
  let content;

  if (type) {
    const { description } = pokemonData[type];
    content = <p className={styles.description}>{description}</p>;
  } else {
    content = (
      <img
        src="/img/logo-pixelado-roxo.png"
        alt="Logo Pixelado Roxo"
        style={{ width: '12%' }}
      />
    );
  }

  return (
    <div className={styles.container}>
      <div
        className={`${styles.containerStarter} ${
          type
            ? borderstyles.pixelCornersDescriptionWrapper
            : borderstyles.pixelCornersWrapper
        } ${getBorderClassByType(type)}`}
      >
        {content}
      </div>
    </div>
  );
};

export default ContainerStarter;
