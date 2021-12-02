import React from "react";
import styles from "./HorizontalNavbar.module.css";
import * as GiIcons from "react-icons/gi";
import bellLogo from "../../assets/SideNavbar/bells.svg";
import DietOnLogo from "../../assets/signUp/LogoDietOn.svg";
import User from "./User";

function horizontalNavbar() {
  return (
      <>
      <div className={styles.horizontalNavbar}>
      <div className={styles.menuBar}>
          <GiIcons.GiHamburgerMenu />
        </div>
        <div className={styles.logoWrapper}>
        <div className={styles.logo}>
            <img src={DietOnLogo} alt="Diet On" />
          </div>
          <div className={styles.tagline}>
            <p>Your Diet Asisstant</p>
          </div>
          </div>
          <div className={styles.userWrapper}>
          <div className={styles.bell}>
          <img src={bellLogo} alt="bell" />
          </div>
          <div>
              <User />
          </div>
          </div>
      </div>
    </>
  );
}

export default horizontalNavbar;
