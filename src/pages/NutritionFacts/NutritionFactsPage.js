import React, { useState,useEffect } from 'react';
import MealPlanNew from '../../components/MealPlan/MealPlanNew';
import SideNavbar from '../../components/SideNavbar/SideNavbar';
import styles from "./NutritionFacts.module.css";
import { CircularProgress,Box } from "@mui/material";
import NutritionFacts from '../../components/nutritionFacts/NutritionFacts';


function NutritionFactsPage() {

    const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

    return (
        <>
        <div className={styles.mealPlanAll}>
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
          <div  className={styles.mealPlan}>
                <NutritionFacts />
          </div>
            )}
        </div>
        </>
    )
}

export default NutritionFactsPage;


// import React from "react";
// import NutritionFacts from "../../components/nutritionFacts/NutritionFacts"
// import horizontalNavbar from "../../components/SideNavbar/HorizontalNavbar";


// function NutritionFactPage() {
    
//         return (
//             <div>
//                 <NutritionFacts/>
//             </div>
//         );
    
// }

// export default NutritionFactPage;