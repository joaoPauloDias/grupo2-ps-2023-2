import styles from '@/styles/ElementalButtonContainer.module.css';
import ElementalButton from './ElementalButton';
import React from 'react';
const ElementalButtonContainer = ({ type }) => {
  return (
    <div className={styles.buttonContainer}>
      <ElementalButton
        color_type={type}
        symbol_type="AGUA"
        link="https://example.com"
      />
      <ElementalButton
        color_type={type}
        symbol_type="PLANTA"
        link="https://example.com"
      />
      <ElementalButton
        color_type={type}
        symbol_type="FOGO"
        link="https://example.com"
      />
    </div>
  );
};

export default ElementalButtonContainer;
