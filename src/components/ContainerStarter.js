import styles from '@/styles/ContainterStarter.module.css';
import borderstyles from '@/styles/borders.module.css';
import {
  getBorderClassByColor,
  getBorderClassByType,
} from '@/utils/borderUtils';

const ContainerStarter = ({ children, type }) => {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.containerStarter} ${
          borderstyles.pixelCornersWrapper
        } ${getBorderClassByType(type)}`}
      >
        {children}
      </div>
    </div>
  );
};

export default ContainerStarter;
