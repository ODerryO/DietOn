import React, { useState } from "react"
import "./homeUser.css"
import Calender from "../calender/calender"
import CaloriRemaining from "../../assets/CaloriRemaining.png"
import CaloriTarget from "../../assets/CaloriTarget.png"
import CaloriToday from "../../assets/CaloriToday.png"
import Vector from "../../assets/Vector.png"
import Meal from "../../assets/Meal.png"
import Excercise from "../../assets/Excercise.png"
import { Link } from "react-router-dom"




function HomeNewUser () {

  const [ show, setShow ] = useState(true);
  const handleClick = () => {
    setShow(!show);
  };
  

  return (
    <React.Fragment>
      <div className="weekPlans">
        <h2>This Week Plans</h2>
      </div>
      <Calender />

      <div>
        <div className="tracker">
          <h3>Calori Traker</h3>
          <Link to="/calorietrackerpage" className="caloriNewUser" >
            <div className="iconCalori">
              <img className="caloriRemaining"
              src={CaloriRemaining}
              alt="icon-calori" />
              <div >
                <p className="caloriTittle">Calorie Target</p>
                <p className="caloriTittle">1400 Kcal</p>
              </div>
            </div>

            <div className="iconCalori">
              <img className="caloriTarget"
              src={CaloriTarget}
              alt="icon-calori" />
              <div >
                <p className="caloriTittle">Calorie Today</p>
                <p className="caloriTittle">0 Kcal</p>
              </div>

            </div>
          
            <div className="iconCalori">
              <img className="caloriToday"
              src={CaloriToday}
              alt="icon-calori" />
              <div >
                <p className="caloriTittle">Calorie Remaining</p>
                <p className="caloriTittle">1400 Kcal</p>
              </div>
            </div>
        </Link>
              {show ?
               <div className="mealPlan">
               <div className="imgMeal">
                 <img className="imgMealPlan"
                 src={Vector}
                 alt="img" />
               </div>
               <p className="textTo">You haven't create any plan for this day<span><p onClick={handleClick}>Lets create one</p></span></p>
           </div>
           
              :
              <div>
                <div className="plan">
                <h3>Meal Plan</h3>
                <div className="planDay">
                    <div className="imgMeal">
                      <img className="imgMealPlan"
                      src={Meal}
                      alt="img" />
                      <p className="textTo">You haven't create your Meal Plan for this day<span><p>Lets create one</p></span></p>
                    </div>
                  </div>
                </div>
      
                <div className="plan">
                  <h3>Excercise Plan</h3>
                  <div className="planDay">
                      <div className="imgMeal">
                        <img className="imgMealPlan"
                        src={Excercise}
                        alt="img" />
                        <p className="textTo">You haven't create your Excercise Plan for this day<span><p>Lets create one</p></span></p>
                      </div>
                    </div>
                </div>
      
              <div className="weightMeasurement">
                <h3>Weight & Measurement</h3>
                <div className="tableInfo">
                  <table class="table table-borderless">
                    <thead className="tableWeight">
                      <tr>
                        <th scope="col">Weight</th>
                        <th scope="col">Waistline</th>
                        <th scope="col">Thigh</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>0 Kg</td>
                        <td>0 Cm</td>
                        <td>0 Cm</td>
                      </tr>s
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          }
          
        
     
        </div>
      </div>
            
    </React.Fragment>

  )
}

export default HomeNewUser