import styles from '@/styles/PokemonDisplay.module.css';
import PokemonImage from './PokemonImage';
import pokemonData from '@content/pokemons.json';
import { getImagePathByType } from '@/utils/typeUtils';

const PokemonDisplay = ({ type }) => {
  const { pokemons } = pokemonData[type];

  const imagePaths = pokemons.map((pokemon) => pokemon.imgUrl);

  return (
    <div className={styles.display}>
      {imagePaths.map((path, index) => (
        <PokemonImage key={index} path={path} type={type} />
      ))}
    </div>
  );
};

export default PokemonDisplay;
