import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <h2>{'<Anastasia />'}</h2>
        <div className={styles.links}>
          <a
            href="https://t.me/KotovaAnastasia"
            target="_blank"
            rel="noreferrer"
          >Telegram</a>
          <a
            href="https://www.linkedin.com/in/anastasia-%D0%BA%D0%BE%D1%82%D0%BE%D0%B2%D0%B0-038976242"
            target="_blank"
            rel="noreferrer"
          >LinkedIn</a>
          <a
            href="https://github.com/nastyakotova/portfolio"
            target="_blank"
            rel="noreferrer"
          >GitHub</a>
        </div>
      </div>
    </footer>
  );
}
