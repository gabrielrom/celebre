import { useState } from "react";
import { useLoaderData, useRevalidator, useSearchParams } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import { iconMap } from "../../../configs/global";
import styles from "./RealStatesView.module.css";
import Box from "../../../components/Box/Box";
import CelebreButton from "../../../components/CelebreButton/CelebreButton";
import CelebreDropdown from "../../../components/CelebreDropdown/CelebreDropdown";
import EmpreendimentoCard from "../../../components/EmpreendimentoCard/EmpreendimentoCard";

function RealStatesView() {
  const { realStates, filters } = useLoaderData();
  const revalidator = useRevalidator();
  const [_, setSearchParams] = useSearchParams();

  const [selectedState, setSelectedState] = useState(filters.estado ?? null);
  const [selectedCity, setSelectedCity] = useState(filters.cidade ?? null);
  const isFiltersApplied = selectedState && selectedCity;

  function handleSelectedState(option) {
    setSelectedState(option);
  }

  function handleSelectedCity(option) {
    setSelectedCity(option);
    setSearchParams({ estado: selectedState, cidade: option }, { replace: true });
    revalidator.revalidate();
  }

  function handleRemoveFilters() {
    setSelectedState(null);
    setSelectedCity(null);
    setSearchParams({}, { replace: true });
    revalidator.revalidate();
  }

  return (
    <section className={styles.container}>
      <Box>
        <div className={styles.filterHeader}>
          <SlidersHorizontal size={18} className={styles.filterIcon} />
          <h4 className={styles.filterTitle}>Filtros</h4>
        </div>

        <div className={styles.filterContent}>
          <CelebreDropdown
            className={styles.stateDropdown}
            label="Estado"
            placeholder="Selecione seu estado"
            options={["Ceará"]}
            value={selectedState}
            onSelected={handleSelectedState}
          />

          <CelebreDropdown
            className={styles.stateDropdown}
            label="Cidade"
            placeholder="Selecione sua cidade"
            options={["Fortaleza", "Eusebio", "Caucaia"]}
            value={selectedCity}
            onSelected={handleSelectedCity}
            disabled={!selectedState}
          />

          <CelebreButton
            className={styles.removeFiltersButton}
            title="Remover filtros"
            disabled={!isFiltersApplied}
            onClick={handleRemoveFilters}
          />
        </div>
      </Box>
      <div className={styles.realStateContainer}>
        <p className={styles.realStateCount}>Exibindo <strong>{realStates.length}</strong> imóveis para você</p>
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
                icon: iconMap[differential.icon]
              }))}
            />
          ))}
        </div>
      </div>
      
    </section>
  );
}

export default RealStatesView;
