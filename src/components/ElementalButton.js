import styles from '@/styles/ElementalButton.module.css';
import React from 'react';
import { getBorderClassByType } from '@/utils/borderUtils';
import { getSvgComponentByType, getColorByType } from '@/utils/typeUtils';
import borderstyles from '@/styles/borders.module.css';

const ElementalButton = ({ symbol_type, color_type, setType }) => {
  const marked = symbol_type === color_type;
  const color = getColorByType(color_type);

  const handleClick = (newType) => {
    setType(newType);
  };

  return (
    <>
      <button
        onClick={() => handleClick(symbol_type)}
        className={styles.container}
      >
        <div className={styles.title} style={{ color: color }}>
          {!color_type ? symbol_type : ''}
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
      </button>
    </>
  );
};

export default ElementalButton;
