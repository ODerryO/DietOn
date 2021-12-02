import React from "react";
import styles from "./MealPlan.module.css";
import { Link } from "react-router-dom";
import AddNewLogo from "../../assets/MealPlan/addNew.svg";
import Calender from "../calender/calender";

function MealPlanNew() {
  return (
    <>
      <div>
        <div className={styles.addWrapperNew}>
          <div className={styles.textMealPlanNew}>
            <p>Meal Plans</p>
          </div>
          <div className={styles.addMealPlanNew}>
            <Link to="/addmealplanpage">
              {" "}
              <p>add Meal Plan</p>{" "}
            </Link>
          </div>
        </div>
        <div className={styles.calenderNew}>
          <Calender />
        </div>
        <div className={styles.mealPlanWrapperNew}>
          <div className={styles.todayEditWrapperNew}>
            <div className={styles.todayMealPlanNew}>
              <p>Today Meal Plans</p>
            </div>
            <div className={styles.editMealPlanNew}>
              <Link to="#">
                {" "}
                <p>Edit Meal Plan</p>{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.addNewLogos}>
          <img src={AddNewLogo} alt="add new" />
        </div>
        <div className={styles.addParagraph}>
          <p>
            You haven’t create your Meal Plan for this day ,{" "}
            <Link to="#">let’s Add one</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default MealPlanNew;
