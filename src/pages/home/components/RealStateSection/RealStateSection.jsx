import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MoveRight } from 'lucide-react'
import EmpreendimentoCard from '../../../../components/EmpreendimentoCard/EmpreendimentoCard'
import CelebreButton from '../../../../components/CelebreButton/CelebreButton'
import styles from './RealStateSection.module.css'
import { routesPath, getIconElement } from '../../../../configs/global'

function RealStateSection({ realStates }) {
  const navigate = useNavigate();
  
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
            state={empreendimento.acronymState}
            differentials={empreendimento.differentials.map((differential) => ({
              title: differential.title,
              icon: getIconElement(differential.icon)
            }))}
          />
        ))}
      </div>
      <CelebreButton 
        title="Ver todos os imóveis"
        icon={<MoveRight />}
        className={styles.realStateButton}
        onClick={() => navigate(routesPath['realStates'])}
      />
    </section>
  );
}

export default RealStateSection;
