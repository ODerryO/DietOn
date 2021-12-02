import React from "react";
import { Link } from "react-router-dom";
import background from "../../assets/signUp/background.svg";
import DietOnLogo from "../../assets/signUp/LogoDietOn.svg";
import styles from "./signUp.module.css";

const SignUp4 = (props) => {

  if (props.currentStep !== 4) {
    return null;
  }

  return (
    <div className={styles.signUp}>
      <div className={styles.backgroundImage}>
        <img src={background} alt="Diet On Background" />
      </div>
      <div className={styles.backgroundSolid}>
        <div className={styles.signUpContentPage4}>
          <div id={styles.step}>{props.step}</div>
          <div className={styles.logoPage4}>
            <img src={DietOnLogo} alt="Diet On" />
          </div>
          <div className={styles.taglinePage4}>
            <p>Your Diet Assistant</p>
          </div>
          <div className={styles.signUpIntroPage4}>
            <p id={styles.welcome}>Welcome To Diet On!</p>
            <p id={styles.welcomeParagraph}>
              Thank you for completing your data to join Diet On and many people
              to live more active and healthy! Now, complete the last process
              with Sign In.
            </p>
          </div>
          <form className={styles.form}>
            <br />
            <Link to="/homepage"><button id={styles.signInButtonPage4}>Go to Homepage</button> </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp4;
