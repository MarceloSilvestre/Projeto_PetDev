import styles from "./sobre.module.css"

export const Sobre = () => {
    return(
        <div>
            <div className={styles.sobre}>
                <h1 className={styles.h1}>SOBRE NÓS</h1>
            </div>

            <div className={styles.letraBranca}>
                <h2 className={styles.h2}>Quem Somos?</h2>
                <br></br>
                <p className={styles.p}>Nós somos uma comunidade de amantes dos animais, entusiastas e defensores dos direitos dos animais. Nosso compromisso é fornecer informações completas e confiáveis sobre o animal, desde os aspectos mais básicos até os mais complexos. Nossa equipe é composta por estudantes de TI, todos unidos por uma paixão comum: o bem-estar dos animais. Acreditamos firmemente que cada ser vivo merece respeito, cuidado e proteção, e estamos empenhados em promover uma cultura de compaixão e responsabilidade em relação aos nossos amigos estimados.</p>
            </div>

            <div className={styles.letraPreta}>
                <h2 className={styles.h2}>Missão</h2>
                <br></br>   
                <p className={styles.p}>Nossa missão é entregar ao usuário informações sobre seus atuais ou futuros pets, tirar as dúvidas sobre alimentação, cuidados e etc, promovendo um entendimento e bem-estar melhor do pet.</p>
            </div>

            <div className={styles.letraBranca}>
                <h2 className={styles.h2}>Valores</h2>
                <br></br>
                <p className={styles.p}>Compromisso com a verdade e precisão nas informações fornecidas. Respeito e compaixão por todas as formas de vida.Incentivar a adoção responsável e o cuidado ético dos animais de estimação.</p>
            </div>

            <div className={styles.letraPreta}>
                <h2 className={styles.h2}>Objetivo</h2>
                <br></br>
                <p className={styles.p}>Fornecer informações abrangentes e confiáveis sobre os diferentes aspectos relacionados aos animais.Promover a conscientização sobre o bem-estar animal e a importância da adoção responsável.Auxiliar os tutores de animais a oferecerem os melhores cuidados e ambiente para seus companheiros.Contribuir para a construção de uma sociedade mais compassiva e solidária com todas as formas de vida.</p>
            </div>

            <div className={styles.letraBranca}>
                <h2 className={styles.h2}>Nossa Visão </h2>
                <br></br>
                <p className={styles.p}>Visamos criar um mundo onde os animais sejam tratados com respeito, compaixão e dignidade, onde as pessoas reconheçam a importância de sua preservação e convivam harmoniosamente com eles.</p>
            </div>
            
        </div>

    )
}
 
export default Sobre;