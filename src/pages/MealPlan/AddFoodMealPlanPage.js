import React from 'react';
import AddFoodMealPlan from '../../components/MealPlan/addFoodMealPlan';
import SideNavbar from '../../components/SideNavbar/SideNavbar';
import styles from "./MealPlan.module.css";


function AddFoodMealPlanPage() {
    return (
        <>
        <div className={styles.mealPlanAll}>
          <div className={styles.sideNavbar}>
              <SideNavbar />
          </div>
          <div  className={styles.mealPlan}>
          <AddFoodMealPlan />
          </div>
        </div>
        </>
    )
}

export default AddFoodMealPlanPage;

