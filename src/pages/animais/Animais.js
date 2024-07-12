import CategoryButton from "../../componentes/categories_menu/category_button"
import styles from "./Animais.module.css"
import categoriesData from "../../jsObjects/categoriesDataObj"
import React, { useState } from "react";

export const Animais = () =>{
    
    const [activeButton, setActiveButton] = useState(null);

    const updateButtonState = (buttonName) => {
        setActiveButton(buttonName);
    };

    return(
        <section className={styles.section}>
            <h1 className={styles.tittle}>Animais</h1>
                <div className={styles.mainConteiner}>
                    <div className={styles.category}>
                        <CategoryButton
                        category_image_link={categoriesData.dogs.imgCategory}
                        category_name={categoriesData.dogs.nameCategory}
                        speciesList={categoriesData.dogs.dogSpecies}
                        isActive={activeButton === categoriesData.dogs.nameCategory}
                        updateButtonState={updateButtonState}/>
                    </div>
                    <div className={styles.category}>
                        <CategoryButton
                        category_image_link={categoriesData.cats.imgCategory}
                        category_name={categoriesData.cats.nameCategory}
                        speciesList={categoriesData.cats.catSpecies}
                        isActive={activeButton === categoriesData.cats.nameCategory}
                        updateButtonState={updateButtonState}/>
                        </div>
                    <div className={styles.category}>
                        <CategoryButton
                        category_image_link={categoriesData.birds.imgCategory}
                        category_name={categoriesData.birds.nameCategory}
                        speciesList={categoriesData.birds.birdSpecies}
                        isActive={activeButton === categoriesData.birds.nameCategory}
                        updateButtonState={updateButtonState}/>
                    </div>
                    <div className={styles.category}>
                        <CategoryButton
                        category_image_link={categoriesData.monkeys.imgCategory}
                        category_name={categoriesData.monkeys.nameCategory}
                        speciesList={categoriesData.monkeys.monkeySpecies}
                        isActive={activeButton === categoriesData.monkeys.nameCategory}
                        updateButtonState={updateButtonState}/>
                    </div>
                    <div className={styles.category}>
                        <CategoryButton
                        category_image_link={categoriesData.fish.imgCategory}
                        category_name={categoriesData.fish.nameCategory}
                        speciesList={categoriesData.fish.fishSpecies}
                        isActive={activeButton === categoriesData.fish.nameCategory}
                        updateButtonState={updateButtonState}/>
                    </div>
                    <div className={styles.category}>
                        <CategoryButton
                        category_image_link={categoriesData.snakes.imgCategory}
                        category_name={categoriesData.snakes.nameCategory}
                        speciesList={categoriesData.snakes.snakeSpecies}
                        isActive={activeButton === categoriesData.snakes.nameCategory}
                        updateButtonState={updateButtonState}/>
                    </div>
                    <div className={styles.category}>
                        <CategoryButton
                        category_image_link={categoriesData.rodents.imgCategory}
                        category_name={categoriesData.rodents.nameCategory}
                        speciesList={categoriesData.rodents.rodentSpecies}
                        isActive={activeButton === categoriesData.rodents.nameCategory}
                        updateButtonState={updateButtonState}/>
                    </div>
            </div>
        </section>

    )
}

export default Animais;
