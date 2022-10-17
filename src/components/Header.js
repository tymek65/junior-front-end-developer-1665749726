import styles from './Header.module.sass';
import classNames from 'classnames';

const Header = ({ isActive, text, icon }) => {
  return (
    <div className={styles.headerWrap}>
      <div
        className={classNames(styles.header, {
          [`${styles['header--active']}`]: isActive,
          [`${styles['header--withIcon']}`]: icon,
        })}
      >
        {icon}
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Header;
