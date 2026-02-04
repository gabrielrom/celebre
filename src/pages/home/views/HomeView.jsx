import Navbar from '../../../components/Navbar/Navbar';
import BannerCarousel from '../../../components/BannerCarousel/BannerCarousel';
import styles from './HomeView.module.css';
import bannerImage from '../../../assets/banner1.png';
import bannerImageMobile from '../../../assets/mobile-image.png';

export function HomeView() {
  const banners = [
    { image: bannerImage, imageMobile: bannerImageMobile, alt: 'Banner Promocional 1' },
    { image: bannerImage, imageMobile: bannerImageMobile, alt: 'Banner Promocional 2' },
    { image: bannerImage, imageMobile: bannerImageMobile, alt: 'Banner Promocional 3' }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.navbarArea}>
        <Navbar />
      </header>

      <main className={styles.contentArea}>
        <BannerCarousel banners={banners} />
        
        <div className={styles.innerContent}>
          <h1 className={styles.title}>Home Page</h1>
        </div>
      </main>

      <footer className={styles.footerArea}>
        {/* Footer content will go here */}
      </footer>
    </div>
  );
}
