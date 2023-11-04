import styles from '@/styles/InfoDisplay.module.css';
import pokemonData from '@content/pokemons.json';

const InfoDisplay = ({ type }) => {
  const { fraquezas, superEfetivo } = pokemonData[type];

  return (
    <div
      className={styles.infoDisplay}
      style={{
        background: `url('/img/neko-piscando.png') no-repeat center`,
        backgroundSize: 'contain',
      }}
    >
      <div className={styles.infoContainer}>
        <div className={styles.infoLeft}>
          <h3>FRA:</h3>
          <ul>
            {fraquezas.map((item, index) => (
              <li key={index}>
                <img src={item.imgUrl} alt={`Fraqueza ${index + 1}`} />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.infoRight}>
          <h3>SE:</h3>
          <ul>
            {superEfetivo.map((item, index) => (
              <li key={index}>
                <img src={item.imgUrl} alt={`Super Efetivo ${index + 1}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoDisplay;
