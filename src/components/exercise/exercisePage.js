
import React from "react";
import SearchExercise from "./searchExercise";
import InputExercise from "./displayExercise";
import DisplayExercise from "./addNewExercisePlan";

class Exercise extends React.Component {
  render(){
    return(
      <React.Fragment>
        <DisplayExercise />
      </React.Fragment>
    )
  }
}

export default Exercise;