import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <h2><img src="https://svgur.com/i/jxo.svg" alt="text" />Anastasia.</h2>
        <div className={styles.links}>
          <a
            href="https://t.me/KotovaAnastasia"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://svgur.com/i/jwT.svg"
              alt="Telegram"
            />
            Telegram
          </a>
          <a
            href="https://www.linkedin.com/in/anastasia-%D0%BA%D0%BE%D1%82%D0%BE%D0%B2%D0%B0-038976242"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://svgur.com/i/jyK.svg"
              alt="LinkedIn"
            />
            LinkedIn
          </a>
          <a
            href="https://github.com/nastyakotova/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://svgur.com/i/jy3.svg"
              alt="GitHub"
            />
            GitHub
          </a>
        </div>
      </div>

    </footer>
  );
}
