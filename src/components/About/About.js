import styles from './About.module.scss';
import React from 'react';
import { useDispatch } from 'react-redux';
import { activatePopup, getContentType } from "../../store/popup/actionsCreators";

export default function About() {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <div className={styles.text}>
          <h2>Frontend<br />Developer</h2>
          <p>React Redux HTML CSS Sass</p>
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault();
                dispatch(getContentType('contacts'));
                dispatch(activatePopup());
              }}
          >Let's talk</a>
        </div>
        <img
          className={styles.img}
          src="https://ie.wampi.ru/2022/08/07/photo_2022-08-07_19-33-02.jpg"
          alt="Моя фотография" />
      </div>

      <hr />

      <h2>Обо мне</h2>
      <p>Я Frontend разработчик с опытом более 1.5 лет. Познакомилась с IT в университете и занялась коммерческой разработкой во время последнего курса. Мне полюбился JavaScript из-за динамики front-end направления и широких возможностей языка. Имею высокий уровень владения JavaScript и большой опыт работы в команде. Занималась разработкой коммерческих web-приложений с нуля до MVP версии, настраивала взаимодействие client-server, разрабатывала пользовательский интерфейс на React.</p>
      <p>Я открыта к изучению нового и стремлюсь к развитию. Ищу работу в компании с открытой культурой общения и здоровой атмосферой внутри команды, чтобы разрабатывать перспективные проекты с использованием передового стека технологий.</p>
      <hr />

      <h2>Мой стек</h2>
      <ol>
        <li>Frontend: React, Redux, HTML, CSS, SASS, Material UI;</li>
        <li>Backend: NodeJS, Express, Postgress, Sequelize;</li>
        <li>Testing: Jest;</li>
        <li>Git, GitHub, VS Code, Jira, Trello, Figma;</li>
      </ol>
      <hr />

      <h2>Краткосрочные цели</h2>
      <ol>
        <li>Изучить TypeScript и MobX;</li>
        <li>Написать приложение на Next JS;</li>
      </ol>

      <hr />

      <h2>Образование</h2>
      <p>2017-2021, Санкт-Петербургский Государственный Университет Аэрокосмического Приборостроения, Прикладная Математика и Информатика</p>
    </div>
  );
}
