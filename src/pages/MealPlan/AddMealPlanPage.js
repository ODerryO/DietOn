import React from 'react';
import AddMealPlan from '../../components/MealPlan/addMealPlan';
import SideNavbar from '../../components/SideNavbar/SideNavbar';
import styles from "./MealPlan.module.css";

function AddMealPlanPage() {
    return (
        <>
        <div className={styles.mealPlanAll}>
          <div className={styles.sideNavbar}>
              <SideNavbar />
          </div>
          <div  className={styles.mealPlan}>
          <AddMealPlan />
          </div>
        </div>
        </>
    )
}

export default AddMealPlanPage;

