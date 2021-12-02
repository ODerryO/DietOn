import React, { useState, useEffect } from "react";
import background from "../../assets/signUp/background.svg";
import DietOnLogo from "../../assets/signUp/LogoDietOn.svg";
import styles from "./signIn.module.css";
import GoogleLogo from "../../assets/signUp/googleLogo.svg";
import showPasswordImg from "../../assets/signUp/showEye.svg";
import hidePasswordImg from "../../assets/signUp/hideEye.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { getSignInAsync } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from 'react-router';
import { CircularProgress,Box } from "@mui/material";


const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Format").required("Required"),
  password: Yup.string().required("Required"),
});

function SignIn({ history }) {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const initialValues = {
    email: "",
    password: "",
  };
  const {  token } = useSelector((state) => state);
  // const handleNextLogin = () => {
  //   dispatch(getSignInAsync(history));
  // };

  useEffect(()=> {
    if (token) {
      history.push('/homepage');
    }
  }, [token, history]);

  const [password, setPassword] = useState("");
  const [isRevealPassword, setIsRevealPassword] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    console.log("Form data", values);
    dispatch(getSignInAsync(values,history));
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    // validate
  });
 
  console.log("Visited field", formik.touched);

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
    <div className={styles.signIn}>
      <div className={styles.backgroundImage}>
        <img src={background} alt="Diet On Background" />
      </div>
      <div className={styles.backgroundSolid}>
        <div className={styles.signInContent}>
          <div className={styles.logo}>
            <img src={DietOnLogo} alt="Diet On" />
          </div>
          <div className={styles.tagline}>
            <p>Your Diet Asisstant</p>
          </div>
          <div className={styles.signInIntro}>
            <p id={styles.welcomeBack}>Welcome Back!</p>
            <p id={styles.welcomeParagraph}>
              Please enter your email and password, to know the rest of your
              diet progress
            </p>
          </div>
          <form className={styles.form} onSubmit={formik.handleSubmit}>
            {/* <form className={styles.form} onSubmit={handleSubmits}> */}
            {console.log(formik.values)}
            <p id={styles.email}>Email</p>
            <div className={styles.emailWrapper}>
              <input
                type="email"
                placeholder="Enter Email Address"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <div className={styles.formControlEmailSignIn}>
                {formik.touched.email && formik.errors.email ? (
                  <div className={styles.error}>{formik.errors.email}</div>
                ) : null}
              </div>
            </div>{" "}
            <br />
            {/* <div id={styles.password}> */}
            <p id={styles.password}>Password</p>
            {/* </div> */}
            <div className={styles.passwordWrapper}>
              <input
                name="password"
                id={styles.passwordInput}
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
                onClick={() => setIsRevealPassword((prevState) => !prevState)}
                alt="passwordlogo"
              />
              <div className={styles.formControlPasswordSignIn}>
                {formik.touched.password && formik.errors.password ? (
                  <div className={styles.error}>{formik.errors.password}</div>
                ) : null}
              </div>
            </div>
            <br />
            {/* <Link to="/HomePage"> */}
            <button 
            id={styles.signInButton} 
            type="submit"
            // onClick={handleNextLogin}
            >
              Sign In
            </button>
            {/* </Link> */}
            <p id={styles.or}>Or</p>
            <button id={styles.signInGoogleButton}>
              <img src={GoogleLogo} alt="google" />
              Sign In With Google
            </button>
            <div className={styles.toSignUp}>
              <p>
                Didn't have an account? <a href="/signuppage">Sign Up</a>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
      )}
    </>
  );
}

export default connect(null, { getSignInAsync })(withRouter(SignIn));
