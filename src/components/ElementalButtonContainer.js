import styles from '@/styles/ElementalButtonContainer.module.css';
import ElementalButton from './ElementalButton';
import Agua from '@img/agua';
import Fogo from '@img/fogo';
import Grama from '@img/planta';
import React from 'react';
const ElementalButtonContainer = ({ color }) => {
  return (
    <div className={styles.buttonContainer}>
      <ElementalButton
        component={<Agua />}
        color={color}
        title="AGUA"
        link="https://example.com"
      />
      <ElementalButton
        component={<Grama />}
        color={color}
        title="PLANTA"
        link="https://example.com"
      />
      <ElementalButton
        component={<Fogo />}
        color={color}
        title="FOGO"
        link="https://example.com"
      />
    </div>
  );
};

export default ElementalButtonContainer;
