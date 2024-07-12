import React, { useState } from "react";
import styles from "./category_button.module.css";
import SpeciesListComponent from "./species_list";
import { CSSTransition } from 'react-transition-group';

const CategoryButton = ({ category_image_link, category_name, speciesList, isActive, updateButtonState }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        if (isActive) {
            setIsOpen(!isOpen);
        } else {
            updateButtonState(category_name);
            setIsOpen(true);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.button} onClick={handleClick}>
                <img className={styles.image} src={category_image_link} alt="Imagem Categoria" />
                <p className={styles.name}>{category_name}</p>
            </div>
            <CSSTransition
                in={isActive && isOpen}
                timeout={300}
                classNames={{
                    enter: styles.slideEnter,
                    enterActive: styles.slideEnterActive,
                    exit: styles.slideExit,
                    exitActive: styles.slideExitActive,
                }}
                unmountOnExit
            >
                <div className={styles.speciesContainer}>
                    <SpeciesListComponent speciesList={speciesList} />
                </div>
            </CSSTransition>
        </div>
    );
}

export default CategoryButton;
