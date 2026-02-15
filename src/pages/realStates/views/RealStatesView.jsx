import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import { iconMap } from "../../../configs/global";
import styles from "./RealStatesView.module.css";
import Box from "../../../components/Box/Box";
import CelebreButton from "../../../components/CelebreButton/CelebreButton";
import CelebreDropdown from "../../../components/CelebreDropdown/CelebreDropdown";
import EmpreendimentoCard from "../../../components/EmpreendimentoCard/EmpreendimentoCard";

function RealStatesView() {
  const { realStates } = useLoaderData();
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [isFiltersApplied, setIsFiltersApplied] = useState(false);

  function handleSelectedState(option) {
    setSelectedState(option);
  }

  function handleSelectedCity(option) {
    setSelectedCity(option);
    setIsFiltersApplied(true);
  }

  function handleRemoveFilters() {
    setSelectedState(null);
    setSelectedCity(null);
    setIsFiltersApplied(false);
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
            options={["Fortaleza"]}
            value={selectedCity}
            onSelected={handleSelectedCity}
            disabled={!selectedState}
          />

          <CelebreButton
            className={styles.removeFiltersButton}
            title="Remover filtros"
            style={{ minHeight: "45px", fontSize: "14px" }}
            disabled={!isFiltersApplied}
            onClick={handleRemoveFilters}
          />
        </div>
      </Box>

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
    </section>
  );
}

export default RealStatesView;
