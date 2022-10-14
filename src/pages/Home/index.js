import Navbar from '../../components/Navbar';
import SideBar from '../../components/SideBar';
import styles from './Home.module.sass';

const Home = () => {
  return (
    <div className={styles.homeWrap}>
      <Navbar />
      <SideBar />
    </div>
  );
};

export default Home;
