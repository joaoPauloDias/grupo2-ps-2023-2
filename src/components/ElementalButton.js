import styles from '@/styles/ElementalButton.module.css';
import React from 'react';
import { getBorderClassByType } from '@/utils/borderUtils';
import { getSvgComponentByType, getColorByType } from '@/utils/typeUtils';
import borderstyles from '@/styles/borders.module.css';

const ElementalButton = ({ symbol_type, color_type, link }) => {
  const marked = symbol_type == color_type;
  const color = getColorByType(color_type);
  return (
    <>
      <a href={link} className={styles.container}>
        <div className={styles.title} style={{ color: color }}>
          {symbol_type}
        </div>
        <div
          className={`${styles.rectangle}  ${
            borderstyles.pixelCornersWrapper
          } ${getBorderClassByType(color_type)}`}
          style={{ backgroundColor: marked ? color : 'transparent' }}
        >
          {React.cloneElement(getSvgComponentByType(symbol_type), {
            fill: marked ? 'white' : color,
          })}
        </div>
      </a>
    </>
  );
};

export default ElementalButton;
