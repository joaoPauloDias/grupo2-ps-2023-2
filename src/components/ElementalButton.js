import styles from '@/styles/ElementalButton.module.css';
import React from 'react';
import ContainerBorder from './ContainerBorder';
const ElementalButton = ({ component, color, title, link }) => {
  return (
    <>
      <a href={link} className={styles.container}>
        <div className={styles.title} style={{ color: color }}>
          {title}
        </div>
        <ContainerBorder color={color}>
          <div className={styles.rectangle} style={{ color: color }}>
            {React.cloneElement(component, { fill: color })}
          </div>
        </ContainerBorder>
      </a>
    </>
  );
};

export default ElementalButton;
