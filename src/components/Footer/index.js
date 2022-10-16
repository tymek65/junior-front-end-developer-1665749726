import styles from './Footer.module.sass';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <p>Terms of service</p>
        <p>Privacy policy</p>
        <p>Copyright</p>
      </div>
      <div>
        <p>nerds.family Version 1.2</p>
        <p>Last Update 10/09/2022</p>
      </div>
    </div>
  );
};

export default Footer;
