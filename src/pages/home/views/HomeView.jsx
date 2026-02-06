import Navbar from '../../../components/Navbar/Navbar';
import BannerCarousel from '../../../components/BannerCarousel/BannerCarousel';
import InfoCard from '../../../components/InfoCard/InfoCard';
import bannerImage from '../../../assets/banner1.png';
import bannerImageMobile from '../../../assets/mobile-image.png';
import EmpreendimentoCard from '../../../components/EmpreendimentoCard/EmpreendimentoCard';
import CelebreButton from '../../../components/CelebreButton/CelebreButton';
import { Award, Users, Building2, Bed, Bath, Car, MoveRight } from 'lucide-react';
import imagem1 from '../../../assets/imagem-1.jpeg';
import imagem2 from '../../../assets/imagem-2.jpg';
import imagem3 from '../../../assets/imagem-3.jpg';
import imagem4 from '../../../assets/imagem-4.jpeg';
import imagem5 from '../../../assets/imagem-5.jpeg';
import styles from './HomeView.module.css';

import Footer from '../../../components/Footer/Footer';

export function HomeView() {
  const banners = [
    { image: bannerImage, imageMobile: bannerImageMobile, alt: 'Banner Promocional 1' },
    { image: bannerImage, imageMobile: bannerImageMobile, alt: 'Banner Promocional 2' },
    { image: bannerImage, imageMobile: bannerImageMobile, alt: 'Banner Promocional 3' }
  ];
  const realState = [
    {
      id: 1,
      image: imagem1,
      minIncome: 'R$ 3.200,00', 
      name: 'Forte Alencar', 
      state: 'CE', 
      differentials: [
        { title: '2 quartos', icon: <Bed /> },
        { title: '1 banheiro', icon: <Bath /> },
        { title: '1 vaga', icon: <Car /> }
      ]
    },
    {
      id: 2, 
      image: imagem2,
      minIncome: 'R$ 1.000,00', 
      name: 'Bosque das Flores',
      state: 'CE', 
      differentials: [
        { title: '2 quartos', icon: <Bed /> },
        { title: '1 banheiro', icon: <Bath /> },
      ]
    },
    {
      id: 3, 
      image: imagem3,
      minIncome: 'R$ 1.200,00',
      name: 'Ipanema Beach', 
      state: 'CE', 
      differentials: [
        { title: '2 quartos', icon: <Bed /> },
        { title: '1 banheiro', icon: <Bath /> },
        { title: '1 vaga', icon: <Car /> }
      ]
    },
    {
      id: 4, 
      image: imagem4,
      minIncome: 'R$ 3.200,00', 
      name: 'Ponto de Vista', 
      state: 'CE', 
      differentials: [
        { title: '2 quartos', icon: <Bed /> },
        { title: '1 banheiro', icon: <Bath /> },
        { title: '1 vaga', icon: <Car /> }
      ]
    },
    {
      id: 5, 
      image: imagem5,
      minIncome: 'R$ 1.500,00',
      name: 'Cidade Jardim',
      state: 'CE', 
      differentials: [
        { title: '2 quartos', icon: <Bed /> },
        { title: '1 banheiro', icon: <Bath /> },
        { title: '1 vaga', icon: <Car /> }
      ]
    }
  ]

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

        <section className={styles.realStateSection}>
          <h2 className={styles.realStateTitle}>Escolha onde você quer morar</h2>
          <p className={styles.realStateSubtitle}>
            Selecione o apartamento que você sonha viver com a sua família e conheça todos detalhes do empreendimento.
          </p>
          <div className={styles.realStateList}>
            {realState.map((empreendimento) => (
              <EmpreendimentoCard 
                key={empreendimento.id}
                to={`/imoveis/detalhes/${empreendimento.id}`}
                imageSrc={empreendimento.image}
                minIncome={empreendimento.minIncome}
                name={empreendimento.name}
                state={empreendimento.state}
                differentials={empreendimento.differentials}
              />
            ))}
          </div>
          <CelebreButton 
            title="Ver todos os imóveis"
            icon={<MoveRight />}
            className={styles.realStateButton}
            onClick={() => navigate('/imoveis')}
          />
        </section>
      </main>

      <Footer className={styles.footerArea} />
    </div>
  );
}
