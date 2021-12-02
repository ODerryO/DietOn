import React from "react"
import "./exercise.css"
import Calender from "../calender/calender"
import Excercise from "../../assets/Excercise.png"
import { Link } from "react-router-dom"


function ExcercisePlan () {
  return (
    <React.Fragment>
      <div className="weekPlans">
        <h2>This Week Plans</h2>
      </div>
      <Calender />

      <div>
        <div className="plan">
          <h3>Excercise Plan</h3>
          <div className="planDay">
              <div className="imgMeal">
                <img className="imgMealPlan"
                src={Excercise}
                alt="img" />
                <p className="textTo">You haven't create your Excercise Plan for this day
                  <span>
                    <Link to="/ExercisePlanNew">
                    <p>Lets create one</p>
                    </Link>
                    
                  </span>
                </p>
              </div>
            </div>
        </div>
      </div>
    </React.Fragment>

  )
}

export default ExcercisePlan