import styles from './About.module.scss';

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.circle} />
      <div className={styles.blur}>
        <h2>О СЕБЕ</h2>
        <p>Я Frontend разработчик с опытом более 1.5 лет. Имею высокий уровень владения JavaScript и большой опыт работы в команде. Занималась разработкой комерческих web-приложений с нуля до MVP версии, настраивала взаимодействие client-server, разрабатывала пользовательский интерфейс на React.</p>
        <p>Ищу работу в компании с открытой культурой общения и здоровой атмосферой внутри команды, чтобы разрабатывать перспективные проекты с использованием передового стека технологий.</p>
        <p>Стек: React, Redux (Thunk, Saga), HTML, CSS, SASS, Material UI, NodeJS, Express, Postgress, Jest, Git, GitHub, VS Code, Jira, Trello, Figma.</p>
      </div>
    </div>
  );
}
