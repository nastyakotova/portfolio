import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './Contacts.module.scss';
import { deactivatePopup } from '../../store/popup/actionsCreators';

export default function Contacts() {
  const dispatch = useDispatch();

  return (
    <>
      <h2 className={styles.header}>Контакты</h2>
      <a
        className={styles.closeButton}
        href="/"
        onClick={(event => {
          event.preventDefault();
          dispatch(deactivatePopup());
        })}
      >X</a>
      <p>Электронная почта: nastya-kotikm@yandex.ru</p>
      <p>Телефон: +7 (966) 184 58 88</p>
      <div className={styles.container}>
        <a 
          href="https://t.me/KotovaAnastasia" 
          target="_blank"
          rel="noreferrer">Telegram</a>
        <a
          href="https://www.linkedin.com/in/anastasia-%D0%BA%D0%BE%D1%82%D0%BE%D0%B2%D0%B0-038976242" target="_blank"
          rel="noreferrer">LinkedIn</a>
        <a
          href="https://spb.hh.ru/applicant/resumes/view?resume=e14322d5ff07d471110039ed1f4d47646d7473"
          target="_blank"
          rel="noreferrer">HeadHunter</a>
      </div>
    </>
  );
}
