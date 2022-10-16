import Navbar from '../../components/Navbar';
import SideBar from '../../components/SideBar';
import Footer from '../../components/Footer';
import styles from './Home.module.sass';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
const Home = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if (!id) navigate('task/0');
  }, [id, navigate]);
  return (
    <div className={styles.siteWrap}>
      <Navbar />
      <div className={styles.homeWrap}>
        <SideBar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
