import React from "react";
import styles from "./MealPlan.module.css";
import { Link } from "react-router-dom";
import { Box, Container } from "@mui/material";
import breakfastLogo from "../../assets/MealPlan/breakfast.svg";
import lunchLogo from "../../assets/MealPlan/lunch.svg";
import dinnerLogo from "../../assets/MealPlan/dinner.svg";
import addIcon from "../../assets/MealPlan/add.svg";

function AddMealPlan() {
  return (
    <>
      <div className={styles.createWrapper}>
        <div className={styles.createMealPlan}>
          <p>Create Meal Plan</p>
        </div>
        <div className={styles.saveMealPlan}>
          <Link to="#">
            <button disabled>save</button>
          </Link>
        </div>
      </div>
      <div className={styles.logoTextWrapper}>
        <div className={styles.createBreakfastLogo}>
          <img src={breakfastLogo} alt="breakfast" />
        </div>
        <div className={styles.createBreakfast}>
          <p>Breakfast</p>
        </div>
      </div>
      <div className={styles.createMealPlanBox}>
        <Container maxWidth="sm">
          <Box
            sx={{
              bgcolor: "#CFEBDB",
              height: "135px",
              width: "1000px",
              borderRadius: "10px",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <div className={styles.iconAddWrapper}>
            <Link to="/addnewmealplanpage">
              <div className={styles.addIcon}>
                <img src={addIcon} alt="add" />
              </div>
              <div>
                <p>Add Your Breakfast Meal Plan</p>
              </div>
              </Link>
            </div>
          </Box>
        </Container>
      </div>
      <div>
        <div className={styles.logoTextWrapper2}>
          <div className={styles.createBreakfastLogo}>
            <img src={lunchLogo} alt="lunch" />
          </div>
          <div className={styles.createBreakfast}>
            <p>Lunch</p>
          </div>
        </div>
      </div>
      <div className={styles.createMealPlanBox2}>
        <Container maxWidth="sm">
          <Box
            sx={{
              bgcolor: "#CFEBDB",
              height: "135px",
              width: "1000px",
              borderRadius: "10px",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <div className={styles.iconAddWrapper}>
              <div className={styles.addIcon}>
                <img src={addIcon} alt="add" />
              </div>
              <div>
                <p>Add Your Lunch Meal Plan</p>
              </div>
            </div>
          </Box>
        </Container>
      </div>
      <div className={styles.logoTextWrapper3}>
        <div className={styles.createBreakfastLogo}>
          <img src={dinnerLogo} alt="dinner" />
        </div>
        <div className={styles.createBreakfast}>
          <p>Dinner</p>
        </div>
      </div>
      <div className={styles.createMealPlanBox3}>
        <Container maxWidth="sm">
          <Box
            sx={{
              bgcolor: "#CFEBDB",
              height: "135px",
              width: "1000px",
              borderRadius: "10px",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <div className={styles.iconAddWrapper}>
              <div className={styles.addIcon}>
                <img src={addIcon} alt="add" />
              </div>
              <div>
                <p>Add Your Dinner Meal Plan</p>
              </div>
            </div>
          </Box>
        </Container>
      </div>
    </>
  );
}

export default AddMealPlan;
