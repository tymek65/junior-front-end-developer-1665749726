import styles from './Header.module.sass';
import { ReactComponent as Compass } from '../../assets/compass.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__link}>
        <Compass />
        <p>BUSINESS CONTEXT</p>
      </div>
    </div>
  );
};

export default Header;
