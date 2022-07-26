import styles from './Portfolio.module.scss';
import Ellipse from '../../img/Ellipse.svg';

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <h2>Несколько примеров моих проектов</h2>
      <hr />

      <img className={styles.ellipse} src={Ellipse} alt="" />

      <h3>ООО "СтройСнабРесурс"</h3>
      <p>Внутреннее приложение для сотрудников ООО "СтройСнабРесурс" для отслеживания этапов ремонта помещений.</p>
      <p>Чем я занималась:</p>
      <ol>
        <li>{'</> '}Разрабатывала логику клиентской части приложения;</li>
        <li>{'</> '}Участвовала в разработке базы данных на стеке PostreSQL, Sequelize;</li>
        <li>{'</> '}Реализовывала вывод статистики при помощи функциональных компонентов React и Chart.js;</li>
        <li>{'</> '}Работала с кастомизацией темы Material UI;</li>
        <li>{'</> '}Настраивала взаимодействие client-server с использованием REST API и AJAX;</li>
        <li>{'</> '}Писала запросы в базу данных;</li>
        <li>{'</> '}Разрабатывала пользовательский интерфейс на функциональных компонентах React;</li>
        <li>{'</> '}Участвовала в разработке личного кабинета;</li>
        <li>{'</> '}Занималась доработкой интерфейса и логики регистрации сотрудников;</li>
      </ol>
      <hr />

      <h3>Mental Health Check</h3>
      <p>Cервис для отслеживания ментального здоровья команды. Приложение включало в себя личный кабинет для пользователя и администратора команды. Было реализовано тестирование пользователей на основе трех тестов, а также вывод результатов тестирование в виде графиков и дашбордов.</p>
      <h4>React, Redux Thunk, Express, Postgress, GitHub, Jira</h4>
      <p>Чем я занималась:</p>
      <ol>
        <li>{'</> '}Разрабатывала пользовательский интерфейс на функциональных компонентах React с использованием Material UI, CSS, Chart.js;</li>
        <li>{'</> '}Разрабатывала динамический Dashboard для вывода результатов тестирования;</li>
        <li>{'</> '}Разрабатывала логику регистрации и аутентификации на стороне клиента с использованием библиотеки шифрования crypto-js;</li>
        <li>{'</> '}Настраивала client-server взаимодействие (Redux Thunk, Axios).</li>
      </ol>
      <a href="https://squad-health-check.herokuapp.com/" target="_blank" rel="noreferrer">Ссылка</a>
      <img src="https://ie.wampi.ru/2022/08/07/SNIMOK-EKRANA-OT-2022-08-07-21-51-32.png" alt="Страница приложения Mental Health Check" />
      <img src="https://im.wampi.ru/2022/08/07/SNIMOK-EKRANA-OT-2022-08-07-21-52-00.png" alt="Страница приложения Mental Health Check" />
      <hr />

      <h3>Find Pets</h3>
      <p>Приложение по поиску пропавших питомцев.</p>
      <h4>React, Redux Thunk, Express, Postgress, GitHub, Trello</h4>
      <ol>
        <li>{'</> '}Разрабатывала логику и архитектуру приложения на стороне клиента;</li>
        <li>{'</> '}Настраивала взаимодействие client-server при помощи Redux и AJAX;</li>
        <li>{'</> '}Разрабатывала пользовательский интерфейс на функциональных компонентах React;</li>
      </ol>
      <a href="http://find-pets-service.herokuapp.com/" target="_blank" rel="noreferrer">Ссылка</a>
      <img src="https://ie.wampi.ru/2022/08/07/SNIMOK-EKRANA-OT-2022-08-07-21-58-24.png" alt="Страница приложения Find Pets" />
      <img src="https://ie.wampi.ru/2022/08/07/SNIMOK-EKRANA-OT-2022-08-07-21-58-43.png" alt="Страница приложения Find Pets" />
      <hr />

      <h3>Gelateria Di Neve</h3>
      <p>Внутренний сервис для сотрудников компании.</p>
      <h4>React, Redux, Express, Postgress, GitHub, Jira</h4>
      <ol>
        <li>{'</> '}Разрабатывала логику и архитектуру клиентской части приложения;</li>
        <li>{'</> '}Участвовала в разработке общей архитектуры проекта и базы данных;</li>
        <li>{'</> '}Реализовывала вывод статистики при помощи функциональных компонентов React и Chart.js, а также работала с кастомизацией темы Material UI;</li>
      </ol>
      <hr />

      <h3>Тестовое задание на верстку модального окна</h3>
      <a href="https://nastyakotova.github.io/modal/" target="_blank" rel="noreferrer">Ссылка</a>
      <img src="https://im.wampi.ru/2022/08/07/SNIMOK-EKRANA-OT-2022-08-07-22-01-21.png" alt="Страница с модальным окном" />
    </div>
  );
}
