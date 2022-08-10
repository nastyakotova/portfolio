import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Contacts from '../Contacts/Contacts';
import Popup from '../Popup/Popup';
import Footer from '../Footer/Footer';
import styles from './Main.module.scss';
import { useSelector } from 'react-redux';

export default function Main() {
  const popupContentType = useSelector(state => state.popup.contentType);

  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.outlet}>
        <Outlet />
      </div>

      <Footer />

      <Popup>
        {popupContentType === 'contacts' && <Contacts />}
      </Popup>
    </div>
  );
}
