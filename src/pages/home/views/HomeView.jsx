import Navbar from '../../../components/Navbar/Navbar';
import BannerCarousel from '../../../components/BannerCarousel/BannerCarousel';
import InfoCard from '../../../components/InfoCard/InfoCard';
import bannerImage from '../../../assets/banner1.png';
import bannerImageMobile from '../../../assets/mobile-image.png';
import { Award, Users, Building2 } from 'lucide-react';
import styles from './HomeView.module.css';

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

        <section className={styles.aboutSection}>
          <h2 className={styles.aboutTitle}>Sobre a Celebre</h2>
          <p className={styles.aboutSubtitle}>
            Desde 2010, a Celebre é referência no mercado imobiliário de alto padrão. Nossa missão é conectar pessoas aos imóveis perfeitos, oferecendo atendimento personalizado e consultoria especializada. Com uma equipe experiente e portfólio exclusivo, transformamos o sonho da casa própria em realidade.
          </p>
          
          <div className={styles.differentialsList}>
            <InfoCard 
              icon={<Award />} 
              title="Especialistas em Minha Casa Minha Vida" 
              subtitle="Especialização completa no programa Minha Casa Minha Vida, com orientação segura e soluções que facilitam a conquista do seu primeiro imóvel." 
            />
            <InfoCard 
              icon={<Users />} 
              title="Confiança" 
              subtitle="Relacionamentos construídos com transparência, ética e compromisso, garantindo segurança em todas as etapas da compra." 
            />
            <InfoCard 
              icon={<Building2 />} 
              title="Parcerias com os Maiores do Mercado" 
              subtitle="Atuação junto a grandes construtoras como MRV e Tenda, oferecendo empreendimentos confiáveis e oportunidades reais." 
            />
          </div>
        </section>
      </main>

      <footer className={styles.footerArea}>
        {/* Footer content will go here */}
      </footer>
    </div>
  );
}
