import React from "react";
import { Link } from "react-router-dom";
import styles from "./species_list.module.css"

function SpeciesListComponent({ speciesList }) {
    
  return (
    <div>
      {speciesList.map((species, index) => (
        <Link to={"/Animais"+species.link_to} className={styles.conteiner}> 
        <div className= {styles.specie_button} key={index}>
          <img className={styles.image} src={species.img} alt={species.name} />
          <p className={styles.text}>{species.name}</p>
          </div>
          </ Link>
        
      ))}
    </div>
  );
}

export default SpeciesListComponent;