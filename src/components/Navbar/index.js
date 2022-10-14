import { ReactComponent as NavbarLogo } from '../../assets/Union.svg';
import styles from './Navbar.module.sass';
import profileAvatar from '../../assets/profileAvatar.png';
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <NavbarLogo />
      <img src={profileAvatar} alt="" />
    </div>
  );
};

export default Navbar;
