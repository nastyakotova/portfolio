import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { activatePopup, getContentType } from "../../store/popup/actionsCreators";
import styles from './Navigation.module.scss';

export default function Navigation() {
  const dispatch = useDispatch();

  return (
    <>
    <div className={styles.blur}>
      <nav className={styles.navigation}>
        <h1><img src="https://cdn.icon-icons.com/icons2/2406/PNG/512/code_tags_html_inline_icon_145999.png" alt="" />Anastasia.</h1>
        <div className={styles.contacts}>
          <Link to="/portfolio" className={styles.contacts__link}>Обо мне</Link>
          <Link to="/portfolio/work" className={styles.contacts__link}>Портфолио</Link>
          <a className={styles.contacts__link}
            href="/"
            onClick={(event) => {
              event.preventDefault();
              dispatch(getContentType('contacts'));
              dispatch(activatePopup());
            } }
          >Контакты</a>
        </div>
      </nav>
    </div>
    </>
  );
}
