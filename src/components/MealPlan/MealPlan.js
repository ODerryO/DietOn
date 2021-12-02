import React from "react";
import styles from "./MealPlan.module.css";
import { Link } from "react-router-dom";
import { Box, Container } from "@mui/material";
import breakfastLogo from "../../assets/MealPlan/breakfast.svg";
import lunchLogo from "../../assets/MealPlan/lunch.svg";
import dinnerLogo from "../../assets/MealPlan/dinner.svg";
import Calender from "../calender/calender";

function MealPlan() {
  
  return (
    <>
    <div className={styles.addWrapper}>
          <div className={styles.textMealPlan}>
            <p>Meal Plans</p>
          </div>
          <div className={styles.addMealPlan}>
            <Link to="#">
              {" "}
              <p>add Meal Plan</p>{" "}
            </Link>
          </div>
        </div>
    <div className={styles.calender}>
    <Calender  />
    </div>
      <div className={styles.mealPlanWrapper}>
        <div className={styles.todayEditWrapper}>
          <div className={styles.todayMealPlan}>
            <p>Today Meal Plans</p>
          </div>
          <div className={styles.editMealPlan}>
            <Link to="#">
              {" "}
              <p>Edit Meal Plan</p>{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.mealPlanBox}>
        <Container maxWidth="sm">
          <Box
            sx={{
              bgcolor: "#CFEBDB",
              height: "100px",
              width: "1000px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }}
          >
            <div className={styles.breakfastLogo}>
              <img src={breakfastLogo} alt="breakfast" />
            </div>
            <div className={styles.breakfast}>
              <p>Breakfast</p>
            </div>
            <div className={styles.calories}>
              <p>106 cal</p>
              <p>118 cal</p>
            </div>
            <div className={styles.sliceSpoon}>
              <p>1 Slice</p>
              <p>1 Spoon</p>
            </div>
            <div className={styles.mealName}>
              <p>Bread</p>
              <p>Strawberry Jam</p>
            </div>
          </Box>
        </Container>
      </div>
      <div className={styles.mealPlanBox2}>
        <Container maxWidth="sm">
          <Box
            sx={{
              bgcolor: "white",
              height: "100px",
              width: "1000px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }}
          >
            <div className={styles.breakfastLogo}>
              <img src={lunchLogo } alt="lunch" />
            </div>
            <div className={styles.breakfast}>
              <p>Lunch</p>
            </div>
            <div className={styles.calories}>
              <p>204 cal</p>
              <p>167 cal</p>
            </div>
            <div className={styles.sliceSpoon}>
              <p>1 Bowl</p>
              <p>100 gram</p>
            </div>
            <div className={styles.mealName}>
              <p>Rice</p>
              <p>grilled chicken breast</p>
            </div>
          </Box>
        </Container>
      </div>
      <div className={styles.mealPlanBox3}>
        <Container maxWidth="sm">
          <Box
            sx={{
              bgcolor: "#CFEBDB",
              height: "100px",
              width: "1000px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }}
          >
            <div className={styles.breakfastLogo}>
              <img src={dinnerLogo} alt="breakfast" />
            </div>
            <div className={styles.breakfast}>
              <p>Breakfast</p>
            </div>
            <div className={styles.calories}>
              <p>106 cal</p>
              <p>118 cal</p>
            </div>
            <div className={styles.sliceSpoon}>
              <p>1 Slice</p>
              <p>1 Spoon</p>
            </div>
            <div className={styles.mealName}>
              <p>Bread</p>
              <p>Strawberry Jam</p>
            </div>
          </Box>
        </Container>
      </div>
    </>
  );
}

export default MealPlan;
