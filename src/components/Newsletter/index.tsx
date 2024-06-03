import styles from './Newsletter.module.scss';

export default function Newsletter(){
  return (
    <>
      <section className={styles.backgroundSection}>
        <img
          src="images/background-spot.png" 
          alt="mancha-background" 
          className={styles.backgroundSpot}
        />
        <img
          src="images/background-plant.png"
          alt="mancha-background" 
          className={styles.backgroundPlant}  
        />
        <div className={styles.newsletter__container}>
          <div className={styles.newsletter__content}>
            <h1>
              Sua casa com as <br/>
              <b>melhores plantas</b>
            </h1>
            <h2>
              Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
            </h2>
            <div className={styles.newsletter__inputContainer}>
              <div className={styles.newsletter__inputContent}>
                <label htmlFor="newsletter-input">
                  <img src="icons/mail.png" alt="ícone de email" />
                </label>
                <input type="email" id='newsletter-input' placeholder='Insira seu email'/>
              </div>
              <button>
                Assinar newsletter
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}