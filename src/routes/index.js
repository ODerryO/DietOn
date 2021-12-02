import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CalorieTrackerPage from '../pages/CalorieTracker/CalorieTrackerPage';
import HomePage from '../pages/Home/HomePage';
import LandingPages from '../pages/LandingPage/LandingPages';
import MealPlanPage from '../pages/MealPlan/MealPlanPage';
import AddMealPlanPage from '../pages/MealPlan/AddMealPlanPage';
import AddNewMealPlanPage from '../pages/MealPlan/AddNewMealPlanPage';
import AddFoodMealPlanPage from '../pages/MealPlan/AddFoodMealPlanPage';
import SignInPage from '../pages/SignIn/SignInPage';
import SignUpPage from '../pages/SignUp/SignUpPage';
import WeightMeasurementPage from '../pages/WeightMeasurement/WeightMeasurementPage';
import UserPage from '../pages/user profile/userPage';
import ExercisePlanPage from '../pages/ExercisePlan/ExercisePlanPage';
import NutritionFactsPage from '../pages/NutritionFacts/NutritionFactsPage'
import NutritionFooter from '../components/nutritionFacts/NutritionFooter';
import FoodThatPage from '../pages/NutritionFacts/FoodThatPage'
import ExercisePlanNew from "../pages/ExercisePlan/ExercisePlanNewPage"
import ExercisePlanList from '../pages/ExercisePlan/ExercisePlanList';
function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPages} />
                <Route path='/signuppage' component={SignUpPage} />
                <Route path='/signinpage' component={SignInPage} />
                <Route path='/homepage' component={HomePage} />
                <Route path='/calorietrackerpage' component={CalorieTrackerPage} />
                <Route path='/exerciseplanpage' component={ExercisePlanPage} />
                <Route path='/mealplanpage' component={MealPlanPage} />
                <Route path='/addmealplanpage' component={AddMealPlanPage} />
                <Route path='/addnewmealplanpage' component={AddNewMealPlanPage} />
                <Route path='/addfoodmealplanpage' component={AddFoodMealPlanPage} />
                <Route path='/weightmeasurementpage' component={WeightMeasurementPage} />
                <Route path='/user' component={UserPage} />
                <Route path='/nutritionfactspage' component={NutritionFactsPage} />
                <Route path='/footer' component={NutritionFooter} />
                <Route path='/foodthatpage' component={FoodThatPage} />
                <Route path='/ExercisePlanNew' component={ExercisePlanNew} />
                <Route path='/AddNewExercise' component={ExercisePlanList} />
                AddNewExercise
            </Switch>
        </Router>
    )
}
export default Routes;



