import styles from '@/styles/ElementalButtonContainer.module.css';
import ElementalButton from './ElementalButton';
import React from 'react';
const ElementalButtonContainer = ({ type }) => {
  return (
    <div className={styles.buttonContainer}>
      <ElementalButton type="AGUA" link="https://example.com" />
      <ElementalButton type="PLANTA" link="https://example.com" />
      <ElementalButton type="FOGO" link="https://example.com" />
    </div>
  );
};

export default ElementalButtonContainer;
