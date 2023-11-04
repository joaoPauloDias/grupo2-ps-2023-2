import borderstyles from '@/styles/borders.module.css';
import styles from '@/styles/PokemonImage.module.css';
import { getBorderClassByType } from '@/utils/borderUtils';

const PokemonImage = ({ path, type }) => {
  return (
    <div
      className={`${styles.wrapper} ${
        borderstyles.pixelCornersWrapper
      } ${getBorderClassByType(type)}`}
    >
      <img src={path} />
    </div>
  );
};

export default PokemonImage;
