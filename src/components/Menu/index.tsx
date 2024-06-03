import styles from './Menu.module.scss';

export default function Menu() {
  return (
    <>
      <header className={styles.headerBar}>
        <div className={styles.headerBar__content}>
          <div>
            <img src="icons/logo.png" alt="logo da empresa" className={styles.headerImage} />
          </div>
          <nav className={styles.headerNav}>
            <p className={styles.navText}>
              Como fazer   /   Ofertas   /   Depoimentos   /   Vídeos   /   Meu Carrinho
            </p>
          </nav>
        </div>
      </header>
    </>
  );
}