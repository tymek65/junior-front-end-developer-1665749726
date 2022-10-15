import Main from '../../components/Main';
import Navbar from '../../components/Navbar';
import SideBar from '../../components/SideBar';
import styles from './Home.module.sass';

const Home = () => {
  return (
    <div className={styles.siteWrap}>
      <Navbar />
      <div className={styles.homeWrap}>
        <SideBar />
        <Main />
      </div>
    </div>
  );
};

export default Home;
