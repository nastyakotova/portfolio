import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { activatePopup, getContentType } from "../../store/popup/actionsCreators";
import styles from './Navigation.module.scss';
// import Ellipse from '../../img/Ellipse.svg';
// import Ellipse_2 from '../../images/Ellipse_2.svg';
// import Ellipse_3 from '../../images/Ellipse_3.svg';
// import Ellipse_4 from '../../images/Ellipse_4.svg';
// import Ellipse_5 from '../../images/Ellipse_5.svg';
// import Ellipse_6 from '../../images/Ellipse_6.svg';

export default function Navigation() {
  const dispatch = useDispatch();

  return (
    <>
    {/* <img style={{
      position: 'absolute',
      top: 0,
      right: -1400,
      zIndex: -1,
      // width: '100%',
    }} src={Ellipse} alt="" /> */}
    {/* <img style={{
      position: 'absolute',
      bottom: 200,
      right: -500,
      zIndex: -1
    }} src={Ellipse_2} alt="" /> */}
    {/* <img style={{
      position: 'absolute',
      top: -1100,
      left: -1000,
      zIndex: -1
    }} src={Ellipse_3} alt="" /> */}
    {/* <img style={{
      position: 'absolute',
      top: 100,
      left: 0,
      zIndex: -1
    }} src={Ellipse_4} alt="" /> */}
    {/* <img style={{
      position: 'absolute',
      bottom: 100,
      left: 0,
      zIndex: -1
    }} src={Ellipse_5} alt="" /> */}
    {/* <img style={{
      position: 'absolute',
      top: 100,
      right: 0,
      zIndex: -1
    }} src={Ellipse_6} alt="" /> */}

    <div className={styles.blur}>
      <nav className={styles.navigation}>
        <h1>{'<Anastasia /> '}</h1>
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
