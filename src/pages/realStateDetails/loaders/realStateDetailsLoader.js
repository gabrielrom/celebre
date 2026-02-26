import { defer } from 'react-router-dom';

const LOAD_DELAY_MS = 2000;

function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function loadRealState(params) {
  await delay(LOAD_DELAY_MS);
  return {
    realState: {
      id: Number(params.id ?? 1),
      bannerImages: [
        "https://cdn.mrv.com.br/imoveis/upload/imagens/4767/FORTE-ALENCAR_PE_GUARITA-ENTARDE(1)0efd9560-c76d-45be-a796-5ef3d4b0307d.jpeg",
        "https://cdn.mrv.com.br/imoveis/upload/imagens/4767/FORTE-ALENCAR_PE_FESTAS_2025_06_02f5b9b3b0-b502-430f-a148-69523b85b4fb.jpeg",
        "https://cdn.mrv.com.br/imoveis/upload/imagens/4767/FORTE-ALENCAR_PE_KIDS_2025_06_02afa7750a-9d13-4fcd-bfc2-89ad49d76f75.jpeg",
        "https://cdn.mrv.com.br/imoveis/upload/imagens/4767/FORTE-ALENCAR_PE_PETPLACE_2025_06_02141128ef-28d4-4d98-966d-8e6f6693be88.jpeg",
        "https://cdn.mrv.com.br/imoveis/upload/imagens/4767/FORTE-ALENCAR_PE_PISCINA_2025_06_0237da7f0f-bf1e-4c9b-bb7c-b0fe5f06861b.jpeg",
        "https://cdn.mrv.com.br/imoveis/upload/imagens/4767/FORTE-ALENCAR_PE_PLAYGROUND_2025_06_022be9c9ee-29fb-4f6e-b622-d513386b0f1a.jpeg",
        "https://cdn.mrv.com.br/imoveis/upload/imagens/4767/FORTE-ALENCAR_PE_GUARITA_2025_069fd901de-8c38-4a6f-a942-ddd866af71c7.jpeg",
        "https://cdn.mrv.com.br/imoveis/upload/imagens/4767/FORTE-ALENCAR_PE_GUARITA-ENTARDEdb7209d0-fcdc-4c01-bede-786ef6887590.jpeg",
        "https://cdn.mrv.com.br/imoveis/upload/imagens/4767/FORTE-ALENCAR_PE_APTO-QUARTO-CASAL_2025_05_3025ee4d3e-8497-404b-95a7-2045d473c28c.jpeg",
        "https://cdn.mrv.com.br/imoveis/upload/imagens/4767/FORTE-ALENCAR_PE_APTO-QUARTO-INFANTIL_2025_05_30c4fdc1f3-5566-4c22-be47-9c4155fdc961.jpeg",
        "https://cdn.mrv.com.br/imoveis/upload/imagens/4767/FORTE-ALENCAR_PE_APTO-QUARTO-SUITE_2025_05_30a7f0ec68-5cbd-4883-aafe-f7c7361a5dbc.jpeg",
        "https://cdn.mrv.com.br/imoveis/upload/imagens/4767/FORTE-ALENCAR_PE_APTO-SALA-02_2025_05_301f487083-fac5-4c9c-a13a-b399518f9629.jpeg",
        "https://cdn.mrv.com.br/imoveis/upload/imagens/4767/FORTE-ALENCAR_PE_APTO-VARANDA-1_2025_05_30ea284727-65ff-45bd-91cc-7390197488b4.jpeg"
      ],
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
      housePlansImages: [
        "https://cdn.mrv.com.br/imoveis/upload/imagens/4767/FORTE-ALENCAR_PH_APTO110_R03aaba8563-c41a-4510-aeae-eb7dd80c5e79.jpeg",
        "https://cdn.mrv.com.br/imoveis/upload/imagens/4767/FORTE-ALENCAR_PH_APTO112_R031b8cb0e5-aecf-49ae-b0a5-39bf92fefc14.jpeg",
        "https://cdn.mrv.com.br/imoveis/upload/imagens/4767/FORTE-ALENCAR_PH_APTO210_2025_05_30afcdc642-1c31-44ff-9e1a-ecb3e7f13c42.jpeg",
        "https://cdn.mrv.com.br/imoveis/upload/imagens/4767/FORTE-ALENCAR_PH_APTO212_2025_05_309815869f-ae2d-45c4-b9e3-7591241c58e0.jpeg",
        "https://cdn.mrv.com.br/imoveis/upload/imagens/4767/FORTE-ALENCAR_PH_IMPLANTACAO_2025_05_30cc0be230-abe5-46a4-87ee-f3a817711a9b.jpeg"
      ],
      aboutZone:
        "O Forte Alencar está numa zona em franca expansão. Com comércios, serviços e facilidades a poucos minutos de sua casa, como supermercados, academias, farmácias, redes de fast food e o Mall Buena Vista. A mobilidade é um ponto forte, com acesso rápido a toda a cidade pela BR-116, Av. Frei Cirilo e Rua José Albuquerque Pereira.",
      zoneImage: "https://cdn.mrv.com.br/imoveis/imoveis/A%C3%A9reas%20pendentes/Imagem_aerea_Forte-Alencar.jpg",
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

export function realStateDetailsLoader({ params }) {
  return defer({
    realState: loadRealState(params).then((data) => data.realState),
  });
}
