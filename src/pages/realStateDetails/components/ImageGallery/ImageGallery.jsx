import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ImageGallery.module.css';

function ImageGallery({ images, title, onOpen }) {
  const safeImages = useMemo(() => (Array.isArray(images) ? images : []), [images]);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!safeImages.length) return null;

  function handleImageClick(index) {
    setActiveIndex(index);
    onOpen(index);
  }

  function goPrev(event) {
    event.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + safeImages.length) % safeImages.length);
  }

  function goNext(event) {
    event.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % safeImages.length);
  }

  return (
    <section className={styles.gallery}>
      <div className={styles.carouselContainer}>
          <button
            type="button"
            className={styles.slidesWrapper}
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            onClick={() => handleImageClick(activeIndex)}
            aria-label={`Ampliar imagem de ${title}`}
          >
            {safeImages.map((image, index) => (
              <span className={styles.slide} key={`${title}-slide-${index}`}>
                <img
                  src={image}
                  alt={`${title} ${index + 1}`}
                  className={styles.mainImage}
                />
              </span>
            ))}
          </button>

          <button
            type="button"
            onClick={goPrev}
            className={`${styles.navButton} ${styles.prevButton}`}
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={16} />
          </button>

          <button
            type="button"
            onClick={goNext}
            className={`${styles.navButton} ${styles.nextButton}`}
            aria-label="Próxima imagem"
          >
            <ChevronRight size={16} />
          </button>
        </div>
    </section>
  );
}

export default ImageGallery;
