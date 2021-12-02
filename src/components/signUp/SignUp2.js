import React, { useState, useEffect } from "react";
import background from "../../assets/signUp/background.svg";
import DietOnLogo from "../../assets/signUp/LogoDietOn.svg";
import styles from "./signUp.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CircularProgress,Box } from "@mui/material";
// import GoogleLogo from "../../assets/signUp/googleLogo.svg";

function SignUp2(props) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const formik = useFormik({
    initialValues: {
      weight: "",
      height: "",
      waistline: "",
      thigh: "",
    },
    onSubmit: (values) => {
      console.log("Form data", values);
      props.handleInput2(values);
      props.next();
    },
    validationSchema: Yup.object({
      weight: Yup.number().required("Required"),
      height: Yup.number().required("Required"),
      waistline: Yup.number().required("Required"),
      thigh: Yup.number().required("Required"),
    }),
  });

  if (props.currentStep !== 2) {
    return null;
  }

  console.log("Visited field", formik.touched);

  return (
    <>
      {loading ? (
        <div className={styles.loadingBg}>
          <Box
            sx={{
              display: "flex",
              paddingLeft: "600px",
              paddingTop: "250px",
              fill: "white",
            }}
          >
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
                <p>Your Diet Assistant</p>
              </div>
              <div className={styles.signUpIntro}>
                <p>No secrets with Diet On!</p>
                <p>
                  Let us now your size, so we can calculate how many calories
                  you need
                </p>
              </div>
              <form className={styles.form} onSubmit={formik.handleSubmit}>
                {console.log(formik.values)}

                {/* <div className={styles.measurementWrappers}> */}
                <p>Weight</p>
                <div className={styles.weightWrapper}>
                  <div className={styles.weightInput}>
                    <input
                      name="weight"
                      type="number"
                      placeholder="Enter Your Current Weight (kg)"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.weight}
                    />
                    <div className={styles.formControlWeightSignUpPage2}>
                      {formik.touched.weight && formik.errors.weight ? (
                        <div className={styles.error}>
                          {formik.errors.weight}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  {/* <div className={styles.kg}>
                <p>kg</p>
              </div> */}
                </div>
                <div className={styles.heightWrapper}>
                  <p>Height</p>
                  <div className={styles.heightInput}>
                    <input
                      name="height"
                      type="number"
                      placeholder="Enter Your Current Height (cm)"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.height}
                    />
                    <div className={styles.formControlWeightSignUpPage2}>
                      {formik.touched.height && formik.errors.height ? (
                        <div className={styles.error}>
                          {formik.errors.height}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  {/* <div className={styles.cm0}>
                <p>cm</p>
              </div> */}
                </div>

                <p>Measurement </p>
                <div className={styles.measurementWrapper}>
                  <div className={styles.waistlineInput}>
                    <input
                      name="waistline"
                      type="number"
                      placeholder="Waistline (cm)"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.waistline}
                    />
                    <div className={styles.formControlWaistlineSignUpPage2}>
                      {formik.touched.waistline && formik.errors.waistline ? (
                        <div className={styles.error}>
                          {formik.errors.waistline}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  {/* <div className={styles.cm1}>
                <p>cm</p>
              </div> */}
                  <div>
                    <input
                      id={styles.thighInputBox}
                      name="thigh"
                      type="number"
                      placeholder="Thigh (cm)"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.thigh}
                    />
                    <div className={styles.formControlThighSignUpPage2}>
                      {formik.touched.thigh && formik.errors.thigh ? (
                        <div className={styles.error}>
                          {formik.errors.thigh}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  {/* <div className={styles.cm2}>
                <p>cm</p>
              </div> */}
                </div>
                {/* </div> */}
                <br />
                <button type="submit" id={styles.signUpButton}>
                  Next
                </button>
                {/* <p id={styles.or}>Or</p>
            <button id={styles.signUpGoogleButton}>
              <img src={GoogleLogo} alt="google" />
              Sign Up With Google
            </button> */}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SignUp2;
