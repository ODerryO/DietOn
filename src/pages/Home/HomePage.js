import React, {  useState,useEffect } from "react";
import HomeNewUser from "../../components/homeUser/homeUser";
import SideNavbar from "../../components/SideNavbar/SideNavbar";
import styles from "./HomePage.module.css";
import { CircularProgress,Box } from "@mui/material";
import NutritionFacts from "../../components/nutritionFacts/NutritionFacts";
import FoodThatPage from "../NutritionFacts/FoodThatPage";
import NutritionFooter from "../../components/nutritionFacts/NutritionFooter";

function HomePage() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
    <div className={styles.homeAll}>
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
      <div className={styles.home}>
        <HomeNewUser />
        <div className={styles.nutritionFooter}>
        <NutritionFooter />
      </div>
      </div>
      )}
      
      </div>
    </>
  );
}

export default HomePage;
