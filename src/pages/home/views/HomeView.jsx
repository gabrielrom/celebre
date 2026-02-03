import Navbar from '../../../components/Navbar/Navbar';
import styles from './HomeView.module.css';

export function HomeView() {
  return (
    <div className={styles.container}>
      <header className={styles.navbarArea}>
        <Navbar />
      </header>

      <main className={styles.contentArea}>
        <h1 className={styles.title}>Home Page</h1>
      </main>

      <footer className={styles.footerArea}>
        {/* Footer content will go here */}
      </footer>
    </div>
  );
}
