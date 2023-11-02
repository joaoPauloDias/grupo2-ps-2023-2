import styles from '@/styles/ElementalButton.module.css';
import React from 'react';
const ElementalButton = ({ component, color, title, link }) => {
  return (
    <>
      <a href={link} className={styles.container}>
        <div className={styles.title} style={{ color: color }}>
          {title}
        </div>
        <div className={styles.rectangle} style={{ color: color }}>
          {React.cloneElement(component, { fill: color })}
        </div>
      </a>
    </>
  );
};

export default ElementalButton;
