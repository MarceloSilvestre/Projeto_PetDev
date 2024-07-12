import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";


export const Navbar = () => {
  return (
    <nav>
      <div className={styles.animal}>
        <div>
          <Link to="/">

                <img
                src="/images/logo_pet_dev.png"
                alt="O logo do PetDev"
                data-testid="navbar-item-logo"
                className={styles.logo}
              />           
           

          </Link>
        </div>

        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/Animais">Animais</Link>
          </li>
          <li className={styles.item}>
            <Link to="/Quiz">Quiz</Link>
          </li>
          <li className={styles.item}>
            <Link to="/Sobre">Sobre</Link>
          </li>
          <li className={styles.item}>
            <Link to="/Sugestoes">Sugestões</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
