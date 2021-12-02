import React from 'react';
import LandingPage from '../../components/landingPage/landingPage';
import styles from "./LandingPage.module.css";

function LandingPages() {
    return (
        <div className={styles.LandingPageAll}>
           <LandingPage />
        </div>
    )
}

export default LandingPages;
