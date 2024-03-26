import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.scss';

const Home = () => (
    <div className={styles.Home}>
        <img className={styles.Home_Wallpaper} src="images/home.jpg" alt="" />
        <div className={styles.Home_Overlay}></div>
        <div className={styles.Home_Container}>
            <h1>WEARFUTUR</h1>
            <span>L'AVENIR DE VOTRE PROJET</span>
            <p>
                Création de sites web sur mesure, applications web, e-commerce, référencement et design responsive
            </p>
        </div>
        <div className={styles.Home_Formula}>
            <div>
                <h3>STANDARD</h3>
                <span>800€</span>
            </div>
            <div>
                <h3>STANDARD PLUS</h3>
                <span><i>à partir</i> 800€</span>
            </div>
            <div>
                <h3>DYNAMIQUE</h3>
                <span><i>à partir</i> 1200€</span>
            </div>
            <div>
                <h3>ECOMMERCE</h3>
                <span><i>à partir</i> 2000€</span>
            </div>
        </div>
    </div>
);
export default Home;