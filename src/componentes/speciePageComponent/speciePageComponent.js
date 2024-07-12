import React from "react";
import styles from "./speciePage.module.css";
import getImage from "../../utilities/getImageLink";

function SpeciePageComponent({ specieObject }) {
  return (
    <div className={styles.mainConteiner}>
      <div className={styles.contentConteiner}>
        <section className={styles.introduction}>
          <div className={styles.content}>
            <div className={styles.contentItem}>

              <img className={styles.animalImage} alt={specieObject.altImgIntro} src={specieObject.imgIntro}></img>

            </div>
            <div className={styles.contentItem}>
              <h1 className={styles.firstTittle}>{specieObject.introTitle}</h1>
              <p className={styles.text}>{specieObject.introText}</p>
            </div>
          </div>
        </section>

        <section className={styles.blackRetangle}>
          <h2 className={styles.tittle}>Informações Gerais</h2>
          <p className={styles.text}>{specieObject.generalInformationText}</p>
        </section>

        <section className={styles.youNeedToKnow}>
          <h2 className={styles.tittle}>O que deve saber</h2>
          <div className={styles.content}>
            <div className={styles.contentItem}>
              <img className={styles.animalImage} src={specieObject.imgYouNeedToKnow} alt={specieObject.altImgYouNeedToKnow}></img>
            </div>
            <div className={styles.contentItem}>
              <div className={styles.characteristics}>
                <img src={getImage("https://drive.google.com/file/d/1otRHLtid0LaxJqQkeF4A3ZWP4IxVJDvB/view?usp=drive_link")} alt="Icon tempo estimado de vida"></img>
                <span className={`${styles.text} ${styles.contentItem}`}>{specieObject.lifetimeText}</span>
              </div>

              <div className={styles.characteristics}>
                <img src={getImage("https://drive.google.com/file/d/1Rn7Kn1aEZREgOoD47JKxGJguUt_e2gjX/view?usp=drive_link")} alt="Icon valor"></img>
                <span className={`${styles.text} ${styles.contentItem}`}>{specieObject.estimatedPrice}</span>
              </div>

              <div className={styles.characteristics}>
                <img src={getImage("https://drive.google.com/file/d/1gqKe2DYCYFk-CjiYrA94j8OiixepDzgb/view?usp=drive_link")} alt="Icon personalidade"></img>
                <span className={`${styles.text} ${styles.contentItem}`}>{specieObject.personality}</span>
              </div>

              <div className={styles.characteristics}>
                <img src={getImage("https://drive.google.com/file/d/1F4-jJ3sU_UFnSnjDTmrwl09h_TWmroFi/view?usp=drive_link")} alt="Icon adaptacao com os humanos"></img>
                <span className={`${styles.text} ${styles.contentItem}`}>{specieObject.adaptationWithHumans}</span>
              </div>
              <div className={styles.characteristics}>
                <img src={getImage("https://drive.google.com/file/d/1qE-Q-4PtERI7_isj4xmzmS3XSVAUU6ir/view?usp=drive_link")} alt="Icon características fisicas"></img>
                <span className={`${styles.text} ${styles.contentItem}`}>{specieObject.physicalCharacteristics}</span>

              </div>
            </div>
          </div>
        </section>
        <section className={styles.blackRetangle}>
          <h2 className={styles.tittle}>Cuidados Necessários</h2>
          <p className={styles.text}>{specieObject.necessaryCareText}</p>
        </section>
        <section className={styles.recommendedProducts}>
          <h2 className={styles.tittle}>Descubra produtos ideais para seu pet!</h2>
          <div className={styles.productsConteiner}>
            <div className={styles.product}>
              <img src={specieObject.imgProduct1} alt={specieObject.altImgProduct1}></img>
              <p className={styles.text}>{specieObject.textImageProduct1}</p>
            </div>
            <div className={styles.product}>
              <img src={specieObject.imgProduct2} alt={specieObject.altImgProduct2}></img>
              <p className={styles.text}>{specieObject.textImageProduct2}</p>
            </div>
            <div className={styles.product}>
              <img src={specieObject.imgProduct3} alt={specieObject.altImgProduct3}></img>
              <p className={styles.text}>{specieObject.textImageProduct3}</p>
            </div>
          </div>
        </section>
      </div>
      <section className={styles.curiosities}>
        <h2 className={styles.tittle}>Curiosidades</h2>
        <div className={styles.curiositiesConteiner}>
          <div className={styles.curiosity}>
            <div className={styles.curiosityTittleBox}>
              <h3 className={styles.curiosityTittle}>{specieObject.curiosityTittle1}</h3>
            </div>
            <p className={styles.curiosityText}>{specieObject.curiosityText1}</p>
          </div>
          <div className={styles.curiosity}>
            <div className={styles.curiosityTittleBox}>
              <h3 className={styles.curiosityTittle}>{specieObject.curiosityTittle2}</h3>
            </div>
            <p className={styles.curiosityText}>{specieObject.curiosityText2}</p>
          </div>
          <div className={styles.curiosity}>
            <div className={styles.curiosityTittleBox}>
              <h3 className={styles.curiosityTittle}>{specieObject.curiosityTittle3}</h3>
            </div>
            <p className={styles.curiosityText}>{specieObject.curiosityText3}</p>
          </div>
          <div className={styles.curiosity}>
            <div className={styles.curiosityTittleBox}>
              <h3 className={styles.curiosityTittle}>{specieObject.curiosityTittle4}</h3>
            </div>
            <p className={styles.curiosityText}>{specieObject.curiosityText4}</p>
          </div>
        </div>

      </section>
    </div>




  );
}

export default SpeciePageComponent;