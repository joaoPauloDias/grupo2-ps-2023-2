import styles from '@/styles/ElementalButtonContainer.module.css';
import ElementalButton from './ElementalButton';
import React from 'react';
const ElementalButtonContainer = ({ type, setType }) => {
  return (
    <div className={styles.buttonContainer}>
      <ElementalButton color_type={type} symbol_type="AGUA" setType={setType} />
      <ElementalButton
        color_type={type}
        symbol_type="PLANTA"
        setType={setType}
      />
      <ElementalButton color_type={type} symbol_type="FOGO" setType={setType} />
    </div>
  );
};

export default ElementalButtonContainer;
