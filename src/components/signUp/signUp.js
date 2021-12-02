import React, { useEffect, useState } from "react";
import background from "../../assets/signUp/background.svg";
import DietOnLogo from "../../assets/signUp/LogoDietOn.svg";
import styles from "./signUp.module.css";
import GoogleLogo from "../../assets/signUp/googleLogo.svg";
import showPasswordImg from "../../assets/signUp/showEye.svg";
import hidePasswordImg from "../../assets/signUp/hideEye.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";


function SignUp(props) {
  const [password, setPassword] = useState("");
  const [isRevealPassword, setIsRevealPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("Form data", values);
      props.handleInput1(values);

      props.next();
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email format").required("Required"),
      password: Yup.string().required("Required"),
    }),
  });

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  // const handleLoading = () => {
  //   setIsLoaded(currentIsLoaded => !currentIsLoaded)
  // }

  console.log("Visited field", formik.touched);

  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <>
      {loading ? (
        <div className={styles.loadingBg}>
        <Box sx={{ display: "flex", paddingLeft:"600px", paddingTop:"250px",fill: "white" }}>
          <CircularProgress loading={loading} />
          <p>Now Loading</p>
        </Box>
        </div>
      ) : (
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
                <p>Your Diet Asisstant</p>
              </div>
              <div className={styles.signUpIntro}>
                <p>Get Ready To Join Diet On!</p>
                <p>
                  Please complete all the steps,and start to feel the difference
                  with Diet On
                </p>
              </div>
              <form className={styles.form} onSubmit={formik.handleSubmit}>
                {console.log(formik.values)}
                <p id={styles.nameForm}>Name</p>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Enter Your Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullName}
                />
                <div>
                  {formik.touched.name && formik.errors.fullName ? (
                    <div className={styles.error}>{formik.errors.fullName}</div>
                  ) : null}
                </div>
                <p id={styles.emailPage1}>Email</p>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter Email Address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                <div className={styles.formControlEmailSignUpPage1}>
                  {formik.touched.email && formik.errors.email ? (
                    <div className={styles.error}>{formik.errors.email}</div>
                  ) : null}
                </div>
                <p id={styles.passPage1}>Password</p>
                <div className={styles.passwordWrapper}>
                  <input
                    name="password"
                    placeholder="Enter your password"
                    type={isRevealPassword ? "text" : "password"}
                    value={(password, formik.values.password)}
                    onChange={
                      ((event) => setPassword(event.target.value),
                      formik.handleChange)
                    }
                    onBlur={formik.handleBlur}
                  />

                  <img
                    title={isRevealPassword ? "Hide password" : "Show password"}
                    src={isRevealPassword ? showPasswordImg : hidePasswordImg}
                    onClick={() =>
                      setIsRevealPassword((prevState) => !prevState)
                    }
                    alt="passwordlogo"
                  />
                  <div className={styles.formControlPasswordSignUpPage1}>
                    {formik.touched.password && formik.errors.password ? (
                      <div className={styles.error}>
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </div>
                </div>
                <br />
                <button
                  id={styles.signUpButton}
                  // onClick={props.next}
                  type="submit"
                  // onClick={handleLoading}
                >
                  Sign Up
                </button>
                {/* <div>
            {!isLoaded && <LoadSpinner />}
            </div> */}
                <p id={styles.or}>Or</p>
                <button id={styles.signUpGoogleButton}>
                  <img src={GoogleLogo} alt="google" />
                  Sign Up With Google
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SignUp;
