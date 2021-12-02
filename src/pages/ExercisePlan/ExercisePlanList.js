import React, {  useState,useEffect } from "react";
import SideNavbar from "../../components/SideNavbar/SideNavbar";
import styles from "./ExercisePlanList.module.css";
import { CircularProgress,Box } from "@mui/material";
import ExercisePlanList from "../../components/exercise/addNewExercisePlan"

function ExercisePlanPage() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
    <div className={styles.exePlanAll}>
      <div className={styles.sideNavbar}>
        <SideNavbar />
      </div>
      {loading ? (
        <div className={styles.loadingBg}>
        <Box sx={{ display: "flex", paddingLeft:"100px", paddingTop:"350px",fill: "white" }}>
          <CircularProgress loading={loading} />
          <p>Now Loading</p>
        </Box>
        </div>
      ) : (
      <div className={styles.exercisePlan}>
        < ExercisePlanList />
      </div>
      )}
      
      </div>
    </>
  );
}

export default ExercisePlanPage;