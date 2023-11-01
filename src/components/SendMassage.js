import React from 'react';
import styles from '../styles/SendMessage.module.css';

const SendMassage = () => {
  const handleEnviarClick = () => {
    // Lógica para enviar a mensagem, se necessário.
    // Você pode redirecionar para o topo da página assim:
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Envie uma mensagem para nós</h1>
      <div className={styles.retangulo}>
        <input className={styles.input} type="text" placeholder="Pokemon Favorito" />
      </div>
      <div className={styles.retangulo}>
        <textarea className={styles.input} placeholder="Mensagem"></textarea>
      </div>
      <div className={styles.retangulo}>
        <input className={styles.input} type="text" placeholder="Email" />
      </div>
      <div className={styles.retangulo}>
        <input className={styles.input} type="password" placeholder="Senha do cartão" />
      </div>
      <button className={styles.botao} onClick={handleEnviarClick}>
        Enviar
      </button>
    </div>
  );
};

export default SendMassage;