import styles from '@/styles/ElementalButton.module.css';
import React from 'react';
import { getBorderClassByType } from '@/utils/borderUtils';
import { getSvgComponentByType, getColorByType } from '@/utils/typeUtils';
import borderstyles from '@/styles/borders.module.css';

const ElementalButton = ({ type, link }) => {
  const color = getColorByType(type);
  return (
    <>
      <a href={link} className={styles.container}>
        <div className={styles.title} style={{ color: color }}>
          {type}
        </div>
        <div
          className={`${styles.rectangle} ${
            borderstyles.pixelCornersWrapper
          } ${getBorderClassByType(type)}`}
          style={{ color: color }}
        >
          {React.cloneElement(getSvgComponentByType(type), { fill: color })}
        </div>
      </a>
    </>
  );
};

export default ElementalButton;
