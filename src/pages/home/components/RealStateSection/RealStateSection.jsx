import React from 'react';
import { MoveRight, Bed, Bath, Car } from 'lucide-react';
import EmpreendimentoCard from '../../../../components/EmpreendimentoCard/EmpreendimentoCard';
import CelebreButton from '../../../../components/CelebreButton/CelebreButton';
import styles from './RealStateSection.module.css';

function RealStateSection({ realStates }) {
  const iconMap = { bed: <Bed />, bath: <Bath />, car: <Car /> };

  return (
    <section className={styles.realStateSection}>
      <h2 className={styles.realStateTitle}>Escolha onde você quer morar</h2>
      <p className={styles.realStateSubtitle}>
        Selecione o apartamento que você sonha viver com a sua família e conheça todos detalhes do empreendimento.
      </p>
      <div className={styles.realStateList}>
        {realStates.map((empreendimento) => (
          <EmpreendimentoCard 
            key={empreendimento.id}
            to={`/imoveis/detalhes/${empreendimento.id}`}
            imageSrc={empreendimento.image}
            minIncome={empreendimento.minIncome}
            name={empreendimento.name}
            state={empreendimento.state}
            differentials={empreendimento.differentials.map((differential) => ({
              title: differential.title,
              icon: iconMap[differential.icon]
            }))}
          />
        ))}
      </div>
      <CelebreButton 
        title="Ver todos os imóveis"
        icon={<MoveRight />}
        className={styles.realStateButton}
      />
    </section>
  );
}

export default RealStateSection;
