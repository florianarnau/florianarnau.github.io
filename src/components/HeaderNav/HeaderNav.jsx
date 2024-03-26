import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderNav.module.scss';

const HeaderNav = () => (
  <div className={styles.HeaderNav}>
    <img src="images/logo-white.png" alt="" className={styles.HeaderNav_Logo} />
    <div className={styles.HeaderNav_MenuIcon}>
      <div className={styles.HeaderNav_MenuIcon_Bar1}></div>
      <div className={styles.HeaderNav_MenuIcon_Bar2}></div>
    </div>
  </div>
);

export default HeaderNav;
