import { useLoaderData } from 'react-router-dom';

import Navbar from '../../../components/Navbar/Navbar';
import BannerCarousel from '../../../components/BannerCarousel/BannerCarousel';
import Footer from '../../../components/Footer/Footer';
import AboutSection from '../components/AboutSection/AboutSection';
import RealStateSection from '../components/RealStateSection/RealStateSection';
import styles from './HomeView.module.css';

export function HomeView() {
  const { banners, mostImportantRealStates } = useLoaderData();

  return (
    <div className={styles.container}>
      <header className={styles.navbarArea}>
        <Navbar />
      </header>

      <main className={styles.contentArea}>
        <BannerCarousel banners={banners} />
        
        <AboutSection />
        
        <RealStateSection realStates={mostImportantRealStates} />
      </main>

      <Footer className={styles.footerArea} />
    </div>
  );
}
