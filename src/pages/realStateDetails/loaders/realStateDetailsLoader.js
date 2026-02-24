import heroImage from '../../../assets/real-state-hero.svg';
import regionMapCover from '../../../assets/real-state-region-map-cover.png';
import regionPhoto from '../../../assets/real-state-region-photo.png';

export function realStateDetailsLoader({ params }) {
  return {
    realState: {
      id: Number(params.id ?? 1),
      bannerImages: [heroImage, regionPhoto, regionMapCover],
      minIncome: 'R$ 3.200,00',
      name: 'Forte Alencar',
      acronymState: 'CE',
      state: 'Ceará',
      city: 'Fortaleza',
      realStateFeatures: [
        { title: 'Quartos', value: '2', icon: 'bed' },
        { title: 'Banheiros', value: '1', icon: 'bath' },
        { title: 'Área', value: '43m²', icon: 'scan' },
      ],
      description:
        'Um oásis urbano com lazer completo e ambientes que equilibram qualidade de vida, convivência e tranquilidade! O empreendimento chega como um marco na  Região do Cambeba: três torres imponentes com elevadores e apartamentos de 2 quartos com varanda e opção de suíte. Além de ter unidades no térreo com opção de área privativa. Aqui, cada detalhe foi pensado para elevar sua experiência: opções com suíte, unidades com área privativa e uma vista livre para um futuro de conforto e exclusividade.',
      differentials: ['Piscina', 'Pet Place', 'Elevador', 'Espaço Gourmet', 'Espaço Kids'],
      housePlansImages: [regionMapCover, regionPhoto, heroImage],
      aboutZone:
        "O Forte Alencar está numa zona em franca expansão. Com comércios, serviços e facilidades a poucos minutos de sua casa, como supermercados, academias, farmácias, redes de fast food e o Mall Buena Vista. A mobilidade é um ponto forte, com acesso rápido a toda a cidade pela BR-116, Av. Frei Cirilo e Rua José Albuquerque Pereira.",
      zoneImage: regionPhoto,
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.994849479005!2d-38.505554924864676!3d-3.8111923435992665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74f000773dcad%3A0x44955fc7ea40ea71!2sForte%20Alencar!5e0!3m2!1spt-BR!2sbr!4v1771902826854!5m2!1spt-BR!2sbr',
      status: 'Em construção',
      contact: {
        phone: '(11) 3456-7890',
        phoneHref: 'tel:+551134567890',
        whatsappHref: 'https://wa.me/551134567890?text=Olá,%20tenho%20interesse%20no%20Forte%20Alencar',
      },
    },
  };
}
