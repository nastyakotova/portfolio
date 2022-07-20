import styles from './Navigation.module.scss';

export default function Navigation() {
  return (
    <div className={styles.blur}>
      <nav className={styles.navigation}>
        <div>
          <h1>Anastasia.</h1>
          <p>Frontend Developer</p>
        </div>
        <div>
          <a href="#">Ссылка</a>
          <a href="#">Ссылка</a>
          <a href="#">Ссылка</a>
          <a href="#">Ссылка</a>
        </div>
      </nav>
    </div>
  );
}
