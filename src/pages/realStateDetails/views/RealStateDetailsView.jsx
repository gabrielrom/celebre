import { useState } from "react";
import { CircleCheckBig, MapPin } from "lucide-react";
import { useLoaderData } from "react-router-dom";
import Box from "../../../components/Box/Box";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import ImageModal from "../components/ImageModal/ImageModal";
import InterestedCard from "../components/InterestedCard/InterestedCard";
import FloatingContactButton from "../components/FloatingContactButton/FloatingContactButton";
import RealStateFeatureGrid from "../components/RealStateFeatureGrid/RealStateFeatureGrid";
import styles from "./RealStateDetailsView.module.css";

export function RealStateDetailsView() {
  const { realState } = useLoaderData();
  const [modalState, setModalState] = useState({
    isOpen: false,
    images: [],
    index: 0,
    title: "",
  });

  function openModal(images, index, title) {
    setModalState({
      isOpen: true,
      images,
      index,
      title,
    });
  }

  function closeModal() {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  }

  function goPrevImage() {
    setModalState((prev) => ({
      ...prev,
      index: (prev.index - 1 + prev.images.length) % prev.images.length,
    }));
  }

  function goNextImage() {
    setModalState((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.images.length,
    }));
  }

  const differentialPairs = realState.differentials.reduce(
    (acc, item, index) => {
      if (index % 2 === 0) acc.push([item]);
      else acc[acc.length - 1].push(item);
      return acc;
    },
    [],
  );

  return (
    <section className={styles.page}>
      <div className={styles.heroFullBleed}>
        <ImageGallery
          images={realState.bannerImages}
          title={realState.name}
          onOpen={(index) =>
            openModal(realState.bannerImages, index, realState.name)
          }
        />
      </div>

      <div className={styles.container}>
        <div className={styles.contentLayout}>
          <div className={styles.mainColumn}>
            <Box
              className={`${styles.sectionCard} ${styles.aboutCard}`}
              style={{ gap: "0px" }}
            >
              <div className={styles.headerRow}>
                <div className={styles.titleBlock}>
                  <h1 className={styles.realStateTitle}>{realState.name}</h1>
                  <div className={styles.locationBlock}>
                    <MapPin
                      size={16}
                      className={styles.locationIcon}
                      aria-hidden="true"
                    />
                    <p className={styles.locationText}>
                      {realState.city}, {realState.state}
                    </p>
                  </div>
                </div>

                <div className={styles.statusPill}>{realState.status}</div>
              </div>

              <hr className={styles.divider} />

              <div className={styles.featuresGridWrapper}>
                {realState.realStateFeatures.map((feature) => (
                  <RealStateFeatureGrid
                    key={feature.title}
                    iconName={feature.icon}
                    title={feature.title}
                    value={feature.value}
                  />
                ))}
              </div>

              <hr className={styles.divider} />

              <div className={styles.aboutContent}>
                <h2 className={styles.sectionTitle}>Sobre o imóvel</h2>
                <p className={styles.description}>{realState.description}</p>
              </div>
            </Box>

            <Box
              className={`${styles.sectionCard} ${styles.featuresCard}`}
              style={{ gap: "26px" }}
            >
              <h2 className={styles.sectionTitle}>Características</h2>
              <div className={styles.differentialsGroups}>
                {differentialPairs.map((pair, pairIndex) => (
                  <ul
                    key={`pair-${pairIndex}`}
                    className={styles.differentialsPair}
                  >
                    {pair.map((item) => (
                      <li key={item} className={styles.differentialItem}>
                        <CircleCheckBig
                          size={20}
                          className={styles.checkIcon}
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>

              <h3 className={styles.sectionTitle}>Plantas disponíveis</h3>
            </Box>

            <Box className={`${styles.sectionCard} ${styles.zoneCard}`}>
              <h2 className={styles.sectionTitle}>Um pouco sobre a região</h2>
              <p className={styles.description}>{realState.aboutZone}</p>
            </Box>

            <img
              src={realState.zoneImage}
              alt="Vista aérea da região"
              className={styles.regionImage}
            />
          </div>

          <aside className={styles.asideColumn}>
            <div className={styles.interestedSticky}>
              <InterestedCard
                phoneHref={realState.contact.phoneHref}
                whatsappHref={realState.contact.whatsappHref}
              />
            </div>
          </aside>

          <iframe
            title={`Mapa de ${realState.city}`}
            src={realState.mapUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.mapFrame}
          />
        </div>

        <ImageModal
          isOpen={modalState.isOpen}
          images={modalState.images}
          currentIndex={modalState.index}
          title={modalState.title}
          onClose={closeModal}
          onPrev={goPrevImage}
          onNext={goNextImage}
        />

        <FloatingContactButton
          className={styles.floatingContactButton}
          href={realState.contact.whatsappHref}
        />
      </div>
    </section>
  );
}
