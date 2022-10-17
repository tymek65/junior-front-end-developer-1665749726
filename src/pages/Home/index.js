import Navbar from '../../components/Navbar';
import SideBar from '../../components/SideBar';
import Footer from '../../components/Footer';
import styles from './Home.module.sass';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { tasks } from '../../data/tasks';
const Home = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if (!id) {
      const taskIndex = tasks.map((task) => task.status).indexOf('active');
      navigate(`task/${taskIndex !== -1 ? taskIndex : tasks.length - 1}`);
    }
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
