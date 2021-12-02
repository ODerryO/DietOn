import React from "react";
import styles from "./SideNavbar.module.css";
import { SideNavbarData } from "./SideNavbarData";
import * as GiIcons from "react-icons/gi";
import bellLogo from "../../assets/SideNavbar/bells.svg";
import DietOnLogo from "../../assets/signUp/LogoDietOn.svg";
import User from "./User";

function SideNavbar() {
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
    <div className={styles.sideNavbar}>

      <ul className={styles.sideNavbarList}>
        
        <div className={styles.subList}>
        {SideNavbarData.map((value, key) => {
          return (
            <li
              key={key}
              className={styles.row}
              id={window.location.pathname === value.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = value.link;
                                                                
              }}
            >
              {" "}
              <div id={styles.icon}>{value.icon}</div>
              <div id={styles.title}>{value.title}</div>
            </li>
          );
        })}
        </div>
      </ul>
    </div>
    </>
  );
}

export default SideNavbar;
