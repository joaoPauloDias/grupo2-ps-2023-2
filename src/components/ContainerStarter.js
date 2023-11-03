import styles from '@/styles/ContainterStarter.module.css';
import React from 'react';
import ContainerBorder from './ContainerBorder';
const ContainerStarter = ({ children, color, bold }) => {
  const border = bold ? 'var(--default-border-width)' : '10px';

  return (
    <div className={styles.container}>
      <ContainerBorder color={color}>
        <div className={styles.containerStarter} style={{ color: color }}>
          {children}
        </div>
      </ContainerBorder>
    </div>
  );
};

export default ContainerStarter;
