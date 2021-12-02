import React from "react";
import "./exercisePlanNew.css"
import { Link } from "react-router-dom";
import { Box, Container } from "@mui/material";
import addIcon from "../../assets/MealPlan/add.svg";
import Button from "@mui/material/Button";
import Exercise from "./exercisePage";

function ExercisePlanNew() {
  return (
    <>
      <div className="createWrapper">
        <div className="createMealPlan">
          <p>Exercise Plan</p>
        </div>
        <div className="saveMealPlan">
          <Link to="#">
            <Button variant="contained" color="success">Save</Button>
          </Link>
        </div>
      </div>
      <div className="createMealPlanBox">
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
            <div className="iconAddWrapper">
            <Link to="/AddNewExercise">
              <div className="addIcon">
                <img src={addIcon} alt="add"/>
              </div>
              <div>
                <p>Add Your Exercise Plan</p>
              </div>
              </Link>
            </div>
          </Box>
        </Container>
      </div>
    </>
  );
}

export default ExercisePlanNew;
