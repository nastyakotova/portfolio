import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { activatePopup, getContentType } from "../../store/popup/actionsCreators";
import styles from './Navigation.module.scss';

export default function Navigation() {
  const dispatch = useDispatch();

  return (
    <div className={styles.blur}>
      <nav className={styles.navigation}>
        <div>
          <h1>Anastasia.</h1>
          <p>Frontend Разработчик</p>
        </div>
        <div>
          <Link to="/">Обо мне</Link>
          <Link to="/portfolio">Портфолио</Link>
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault();
              dispatch(getContentType('contacts'));
              dispatch(activatePopup());
            }}
          >Контакты</a>
        </div>
      </nav>
    </div>
  );
}
