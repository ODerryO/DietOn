import React, { useEffect,useState } from 'react';
import CalorieTracker from './CalorieTracker';
import SideNavbar from '../../components/SideNavbar/SideNavbar';
import styles from "./CalorieTracker.module.css";
import { CircularProgress,Box } from "@mui/material";


function AddFoodMealPlanPage() {

    const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

    return (
        <>
        <div className={styles.calorieTrackerAll}>
          <div className={styles.sideNavbar}>
              <SideNavbar />
          </div>
          {loading ? (
        <div className={styles.loadingBg}>
        <Box sx={{ display: "flex", paddingLeft:"700px", paddingTop:"350px",fill: "white" }}>
          <CircularProgress loading={loading} />
          <p>Now Loading</p>
        </Box>
        </div>
      ) : (
          <div  className={styles.calorieTracker}>
          <CalorieTracker />
          </div>
      )}
        </div>
        </>
    )
}

export default AddFoodMealPlanPage;