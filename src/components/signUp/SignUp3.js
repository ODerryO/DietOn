import React from "react";
import background from "../../assets/signUp/background.svg";
import DietOnLogo from "../../assets/signUp/LogoDietOn.svg";
import styles from "./signUp.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

function SignUp3(props) {
  const formik = useFormik({
    initialValues: {
      calorieSize: "",
    },
    onSubmit: (values) => {
      console.log("Form data", values);
      props.handleInput3(values);
      props.handleSubmit();
      // .then(response => {
      //   if (response.status === 200) {
      //     props.next();

      //   } else {
      //     alert(response);
      //   }
      // });
 
    },
    validationSchema: Yup.object({
      calorieSize: Yup.number().required("Required"),
    }),
  });

  if (props.currentStep !== 3) {
    return null;
  }

  console.log("Visited field", formik.touched);

  return (
    <div className={styles.signUp}>
      <div className={styles.backgroundImage}>
        <img src={background} alt="Diet On Background" />
      </div>
      <div className={styles.backgroundSolid}>
        <div className={styles.signUpContent}>
          <div id={styles.step}>{props.step}</div>
          <div className={styles.logo}>
            <img src={DietOnLogo} alt="Diet On" />
          </div>
          <div className={styles.tagline}>
            <p>Your Diet Assistant</p>
          </div>
          <div className={styles.signUpIntroPage3}>
            <p id={styles.almostThere}>Almost There!</p>
            <p id={styles.contentPage3}>
              Based on our calculations of your current height and weight, this
              is the maximum number of calories you need. Feel free to edit your
              calorie size for better result
            </p>
          </div>
          <form className={styles.form} onSubmit={formik.handleSubmit}>
            <p>Your Calorie Size</p>
            <div className={styles.calorieWrapper}>
              <input
                name="calorieSize"
                type="number"
                placeholder="Ex: 1900 kcal/day"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.calorieSize}
              />
               <div className={styles.formControlCalorieSizeSignUpPage3}>
                  {formik.touched.calorieSize && formik.errors.calorieSize ? (
                    <div className={styles.error}>{formik.errors.calorieSize}</div>
                  ) : null}
                </div>
              {/* <span className={styles.kcal}>
                <p>kcal/day</p>
              </span> */}
            </div>
            <br />
            <button type="submit" id={styles.signUpButton}>
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp3;
