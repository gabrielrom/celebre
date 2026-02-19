import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import styles from './CelebrePage.module.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function CelebrePage() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className={styles.container}>
      <header className={styles.navbarArea}>
        <Navbar />
      </header>

      <main className={styles.contentArea}>
        <Outlet />
      </main>

      <Footer className={styles.footerArea} />
    </div>
  );
}

export default CelebrePage;