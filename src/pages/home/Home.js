import Button from "../../componentes/botao/Button";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <section className={styles.container}>
        <div>
          <h1>
            Qual é a sua maior curiosidade
            <br />
            sobre o seu animal favorito?
          </h1>
        </div>
        <p>
          Explore exatamente o que você deseja saber!
          <br />
          Clique no botão "Saiba Mais" para descobrir
          mais detalhes sobre a vida do seu pet.
        </p>
        <div>
          <Button texto="SAIBA MAIS" link_to="/Animais" />
        </div>

        <img
          className={styles.cachorro}
          src="/images/dog_home.png"
          alt="Cachorro da tela home"
          data-testid="cachorro-home"
        />
      </section>

      <section className={styles.pets}>
        <div>
          <h2>E aí, qual o seu pet?</h2>
          <ul className={styles.lista}>
            <Link to="/Animais">
            <img
              src="/images/card_cachorro.png"
              alt="Ícone pet cachorro"
              data-testid="icone-cachorro"
              className={styles.lista_pets}
            />
            </Link>
            <Link to="/Animais">
            <img
              src="/images/card_gato.png"
              alt="Ícone pet gato"
              data-testid="icone-gato"
              className={styles.lista_pets}
            />
            </Link>
            <Link to="/Animais">
            <img
              src="/images/card_passaro.png"
              alt="Ícone pet pássaro"
              data-testid="icone-passaro"
              className={styles.lista_pets}
            />
            </Link>
            <Link to="/Animais">
            <img
              src="/images/card_roedor.png"
              alt="Ícone pet roedor"
              data-testid="icone-roedor"
              className={styles.lista_pets}
            />
            </Link>
            <Link to="/Animais">
            <img
              src="/images/card_peixe.png"
              alt="Ícone pet peixe"
              data-testid="icone-peixe"
              className={styles.lista_pets}
            />
            </Link>
            <Link to="/Animais">
            <img
              src="/images/card_macaco.png"
              alt="Ícone pet macaco"
              data-testid="icone-macaco"
              className={styles.lista_pets}
            />
            </Link>
            <Link to="/Animais">
            <img
              src="/images/card_cobra.png"
              alt="Ícone pet cobra"
              data-testid="icone-cobra"
              className={styles.lista_pets}
            />
            </Link>
          </ul>
        </div>
      </section>

      <section className={styles.quizAmizade}>
        <h3>Quiz da amizade</h3>
        <h1>Explore seus conhecimentos</h1>
        <p>
          Descubra agora mesmo quão bem você conhece o seu pet! <br />
          Nosso quiz exclusivo é a oportunidade perfeita para testar seus conhecimentos
          sobre seu animalzinho. <br /> De perguntas simples sobre suas preferências
          alimentares a detalhes curiosos sobre seu comportamento, este desafio
          promete revelar o quanto você está sintonizado com seu fiel amigo de
          quatro patas. <br />  Prepare-se para se surpreender e se encantar com o que
          você aprenderá sobre o seu pet!
        </p>
        <Button texto="Vamos lá?" link_to="/quiz"/>
      </section>

      <section className={styles.clientes}>
        <h1>DEPOIMENTO</h1>
        <p className={styles.textoCliente}>
          “Gostaria imensamente de expressar minha gratidão pelo valioso conteúdo encontrado neste portal sobre cuidados com cachorros.
          <br />
          Desde que comecei a seguir as dicas e orientações aqui compartilhadas,
          tenho visto uma  melhoria significativa na saúde e felicidade
          do meu querido amigo de quatro patas.”
        </p>
        <h2>Ryan Mill</h2>
        <p className={styles.textoCliente}>Engenheiro de dados</p>
        <img
          src="/images/cliente_cachorro.png"
          alt="Homem segurando seu cachorro"
          data-testid="Homem-e-cao"
          className={styles.imgCliente}
        />
      </section>
    </>
  );
};

export default Home;
