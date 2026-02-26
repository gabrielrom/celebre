import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import styles from './ImageModal.module.css';

const DRAG_THRESHOLD = 5;

function ImageModal({
  isOpen,
  title,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({ isDragging: false, startX: 0, startY: 0, startPanX: 0, startPanY: 0 });
  const hasDraggedRef = useRef(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen || currentIndex !== undefined) {
      setIsZoomed(false);
      setPan({ x: 0, y: 0 });
    }
  }, [isOpen, currentIndex]);

  if (!isOpen || !images.length) return null;

  const currentImage = images[currentIndex] ?? images[0];
  const hasMultiple = images.length > 1;

  const canPan = () => isZoomed;

  function handlePointerDown(e) {
    if (!canPan()) return;
    e.preventDefault();
    setIsDragging(true);
    dragRef.current = {
      isDragging: true,
      startX: e.clientX,
      startY: e.clientY,
      startPanX: pan.x,
      startPanY: pan.y,
    };
    hasDraggedRef.current = false;
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e) {
    const { isDragging, startX, startY, startPanX, startPanY } = dragRef.current;
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD) {
      hasDraggedRef.current = true;
    }
    setPan({ x: startPanX + dx, y: startPanY + dy });
  }

  function handlePointerUp(e) {
    if (dragRef.current.isDragging) {
      dragRef.current.isDragging = false;
      setIsDragging(false);
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  }

  function handleImageClick(e) {
    e.stopPropagation();
    if (hasDraggedRef.current) {
      hasDraggedRef.current = false;
      return;
    }
    setIsZoomed((z) => !z);
  }

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label={title}>
      <button type="button" className={styles.backdrop} onClick={onClose} aria-label="Fechar modal" />
      <div className={styles.modal}>
        <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Fechar">
          <X size={20} />
        </button>

        <div
          className={`${styles.imageWrapper} ${isZoomed ? styles.zoomed : ''}`}
          onClick={handleImageClick}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleImageClick(e);
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={isZoomed ? 'Reduzir imagem (arraste para mover)' : 'Ampliar imagem'}
          style={isZoomed ? { cursor: isDragging ? 'grabbing' : 'grab' } : undefined}
        >
          <div
            className={`${styles.imageInner} ${isZoomed ? styles.zoomed : ''}`}
            style={
              isZoomed && (pan.x !== 0 || pan.y !== 0)
                ? { transform: `translate(${pan.x}px, ${pan.y}px)` }
                : undefined
            }
          >
            <img src={currentImage} alt={title} className={styles.image} />
          </div>
        </div>

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
