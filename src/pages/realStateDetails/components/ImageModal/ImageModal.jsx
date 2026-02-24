import { X } from 'lucide-react';
import styles from './ImageModal.module.css';

function ImageModal({
  isOpen,
  title,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) {
  if (!isOpen || !images.length) return null;

  const currentImage = images[currentIndex] ?? images[0];
  const hasMultiple = images.length > 1;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label={title}>
      <button type="button" className={styles.backdrop} onClick={onClose} aria-label="Fechar modal" />
      <div className={styles.modal}>
        <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Fechar">
          <X size={20} />
        </button>

        <img src={currentImage} alt={title} className={styles.image} />

        {hasMultiple ? (
          <div className={styles.controls}>
            <button type="button" className={styles.navButton} onClick={onPrev}>
              Anterior
            </button>
            <span className={styles.counter}>
              {currentIndex + 1} / {images.length}
            </span>
            <button type="button" className={styles.navButton} onClick={onNext}>
              Próxima
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ImageModal;
