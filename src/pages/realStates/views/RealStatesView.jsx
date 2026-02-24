import { useState } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import erro404Image from "../../../assets/erro-404.png";
import styles from "./RealStatesView.module.css";
import Box from "../../../components/Box/Box";
import CelebreButton from "../../../components/CelebreButton/CelebreButton";
import CelebreDropdown from "../../../components/CelebreDropdown/CelebreDropdown";
import EmpreendimentoCard from "../../../components/EmpreendimentoCard/EmpreendimentoCard";
import EmptyRealStates from "../components/EmptyRealStates/EmptyRealStates";
import { getIconElement } from "../../../configs/global";

function RealStatesView() {
  const { realStates } = useLoaderData();
  const [ searchParams, setSearchParams ] = useSearchParams();
  const availableStates = ["Ceará"];
  const availableCities = ["Fortaleza", "Eusebio", "Caucaia"];
  const [selectedState, setSelectedState] = useState(availableStates.includes(searchParams.estado) ? searchParams.estado : null);
  const [selectedCity, setSelectedCity] = useState(availableCities.includes(searchParams.cidade) ? searchParams.cidade : null);
  const isFiltersApplied = selectedState && selectedCity;
  
  function handleSelectedState(option) {
    if (availableStates.includes(option)) {
      setSelectedState(option);
    }
    
    return;
  }

  function handleSelectedCity(option) {
    if (availableCities.includes(option)) {
      setSelectedCity(option);
      setSearchParams(
        { estado: selectedState, cidade: option },
        { replace: true },
      );
    }

    return;
  }

  function handleRemoveFilters() {
    setSelectedState(null);
    setSelectedCity(null);
    setSearchParams({}, { replace: true });
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
            options={availableStates}
            value={selectedState}
            onSelected={handleSelectedState}
          />

          <CelebreDropdown
            className={styles.stateDropdown}
            label="Cidade"
            placeholder="Selecione sua cidade"
            options={availableCities}
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
        {realStates.length === 0 ? (
          <EmptyRealStates
            title="Nenhum imóvel encontrado!"
            subtitle="Tente novamente alterando ou removendo os filtros."
            imageSrc={erro404Image}
          />
        ) : (
          <>
            <p className={styles.realStateCount}>
              Exibindo <strong>{realStates.length}</strong> imóveis
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
                  differentials={empreendimento.differentials.map(
                    (differential) => ({
                      title: differential.title,
                      icon: getIconElement(differential.icon),
                    }),
                  )}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default RealStatesView;
