import Carrossel from "../../componentes/carrossel/Carrossel";
import slides from '../depoimentos/mock.json';
import styles from "./Depoimentos.module.css";


export const Depoimentos = () => {
  return (
    <div className={styles.container}>
      <h1>
        NOSSOS
        <br />
        CLIENTES
      </h1>
      <div className={styles.carrossel}>
      <Carrossel slides={slides} />
    </div>
      <ul className={styles.parceiros}>
        
        <img 
          src="/images/petlove.png"
          alt="Logo da PetLove"
          data-testid="icone-petlove"
          className={styles.lista_parceiros}
          />
        
       
        <img
          src="/images/cobasi.png"
          alt="Logo da Cobasi"
          data-testid="icone-cobasi"
          className={styles.lista_parceiros}
        />
        <img
          src="/images/petshop.png"
          alt="Logo da PetShop"
          data-testid="icone-petshop"
          className={styles.lista_parceiros}
        />
        <img
          src="/images/petz.png"
          alt="Logo da Petz"
          data-testid="icone-petz"
          className={styles.lista_parceiros}
        />
      </ul>
    </div>
  );
};

export default Depoimentos;
