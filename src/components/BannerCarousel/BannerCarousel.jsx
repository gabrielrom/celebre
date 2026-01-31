import { useEffect, useRef, useState } from 'react'
import styles from './BannerCarousel.module.css'

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)

    handleChange()

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }

    mediaQuery.addListener(handleChange)
    return () => mediaQuery.removeListener(handleChange)
  }, [])

  return prefersReducedMotion
}

function BannerCarousel({ banners = [], autoScrollMs = 1500, className }) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const viewportRef = useRef(null)
  const timeoutRef = useRef(null)
  const isAutoScrollingRef = useRef(false)
  const activeIndexRef = useRef(0)

  const [activeIndex, setActiveIndex] = useState(0)
  const [slideWidth, setSlideWidth] = useState(0)

  const clearAutoScroll = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  const scrollToIndex = (idx) => {
    const viewport = viewportRef.current
    if (!viewport) return

    const width = viewport.clientWidth
    const left = idx * width

    isAutoScrollingRef.current = true

    viewport.scrollTo({
      left,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })

    // Libera resets depois do scroll suave
    window.setTimeout(() => {
      isAutoScrollingRef.current = false
    }, prefersReducedMotion ? 0 : 500)
  }

  const scheduleAutoScroll = () => {
    clearAutoScroll()
    if (!Array.isArray(banners) || banners.length <= 1) return
    if (!viewportRef.current || slideWidth <= 0) return

    timeoutRef.current = window.setTimeout(() => {
      const next = (activeIndexRef.current + 1) % banners.length
      scrollToIndex(next)
      scheduleAutoScroll()
    }, autoScrollMs)
  }

  const handleScroll = () => {
    const viewport = viewportRef.current
    if (!viewport || slideWidth <= 0) return

    const idx = Math.round(viewport.scrollLeft / slideWidth)
    const clamped = Math.max(0, Math.min(idx, banners.length - 1))

    if (clamped !== activeIndexRef.current) {
      activeIndexRef.current = clamped
      setActiveIndex(clamped)
    }

    if (!isAutoScrollingRef.current) {
      scheduleAutoScroll()
    }
  }

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const update = () => {
      const width = viewport.clientWidth
      setSlideWidth(width)
      viewport.scrollTo({ left: activeIndexRef.current * width, behavior: 'auto' })
    }

    update()

    if (typeof ResizeObserver === 'undefined') return

    const ro = new ResizeObserver(() => update())
    ro.observe(viewport)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    activeIndexRef.current = activeIndex
  }, [activeIndex])

  useEffect(() => {
    scheduleAutoScroll()
    return () => clearAutoScroll()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoScrollMs, slideWidth, banners?.length])

  return (
    <section className={`${styles.carousel}${className ? ` ${className}` : ''}`}>
      <div ref={viewportRef} className={styles.viewport} onScroll={handleScroll}>
        {banners.map((banner, idx) => (
          <div key={`${idx}-${banner.src}`} className={styles.slide}>
            <div className={styles.slideContent}>
              <img
                className={styles.image}
                src={banner.src}
                alt={banner.alt ?? ''}
                loading="lazy"
                decoding="async"
                draggable="false"
              />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.indicators} aria-hidden="true">
        {banners.map((_, idx) => (
          <span
            key={idx}
            className={`${styles.indicator}${
              idx === activeIndex ? ` ${styles.indicatorActive}` : ''
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default BannerCarousel
