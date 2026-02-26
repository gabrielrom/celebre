import Box from "../../../../components/Box/Box";
import layoutStyles from "../../views/RealStateDetailsView.module.css";
import styles from "./RealStateDetailsSkeleton.module.css";

function RealStateDetailsSkeleton() {
  return (
    <section className={styles.skeletonContainer}>
      <div className={`
        ${layoutStyles.heroFullBleed} 
        ${styles.skeletonBlock} 
        ${styles.heroSkeleton}`}
     />

      <div className={layoutStyles.container}>
        <div className={layoutStyles.contentLayout}>
          <div className={layoutStyles.mainColumn}>
            <Box
              className={`
                ${layoutStyles.sectionCard}
                ${styles.skeletonBlock}
                ${styles.skeletonAboutRealStateCard}`}
            />

            <Box
              className={`
                ${layoutStyles.sectionCard}
                ${styles.skeletonBlock}
                ${styles.skeletonFeaturesCard}`}
            />

            <Box
              className={`
                ${layoutStyles.sectionCard}
                ${styles.skeletonBlock}
                ${styles.skeletonAboutZoneCard}`}
            />

            <Box
              className={`
                ${styles.skeletonBlock} 
                ${styles.skeletonRegionImage}`}
            />  

            <Box
              className={`
                ${layoutStyles.mapFrame} 
                ${styles.skeletonBlock} 
                ${styles.skeletonMap}`
              }
            />
          </div>

          <aside className={layoutStyles.asideColumn}>
            <div className={layoutStyles.interestedSticky}>
              <Box
                className={`
                  ${styles.skeletonBlock} 
                  ${styles.skeletonCardAside}`
                }
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default RealStateDetailsSkeleton;