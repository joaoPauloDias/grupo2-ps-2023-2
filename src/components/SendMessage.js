import React, { useState } from 'react';
import styles from '../styles/SendMessage.module.css';

const SendMessage = () => {
  const [pokemonFavorito, setPokemonFavorito] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [email, setEmail] = useState('');
  const [senhaCartao, setSenhaCartao] = useState('');

  const handleEnviarClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setPokemonFavorito('');
    setMensagem('');
    setEmail('');
    setSenhaCartao('');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Envie uma mensagem para nós</h1>
      <div className={styles.retangulo}>
        <input
          className={styles.input}
          type="text"
          placeholder="Pokemon Favorito"
          value={pokemonFavorito}
          onChange={(e) => setPokemonFavorito(e.target.value)}
        />
      </div>
      <div className={styles.retangulo}>
        <textarea
          className={styles.input}
          placeholder="Mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        ></textarea>
      </div>
      <div className={styles.retangulo}>
        <input
          className={styles.input}
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.retangulo}>
        <input
          className={styles.input}
          type="password"
          placeholder="Senha do cartão"
          value={senhaCartao}
          onChange={(e) => setSenhaCartao(e.target.value)}
        />
      </div>
      <button className={styles.botao} onClick={handleEnviarClick}>
        Enviar
      </button>
    </div>
  );
};

export default SendMessage;