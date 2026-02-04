import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './BannerCarousel.module.css';

export default function BannerCarousel({ banners }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]); // Reset timer on interaction/change

  if (!banners || banners.length === 0) return null;

  return (
    <div className={styles.carouselContainer}>
      <div 
        className={styles.slidesWrapper} 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div key={index} className={styles.slide}>
            <picture className={styles.picture}>
              {banner.imageMobile && (
                <source media="(max-width: 768px)" srcSet={banner.imageMobile} />
              )}
              <img src={banner.image} className={styles.image} />
            </picture>
          </div>
        ))}
      </div>

      <button onClick={prevSlide} className={`${styles.navButton} ${styles.prevButton}`} aria-label="Banner anterior">
        <ChevronLeft size={16} color="currentColor" />
      </button>
      
      <button onClick={nextSlide} className={`${styles.navButton} ${styles.nextButton}`} aria-label="Próximo banner">
        <ChevronRight size={16} color="currentColor" />
      </button>
    </div>
  );
}
