
import React from 'react';





function ExercisePlanUser (props) {

  
  React.useEffect(() => {
    props.getExercise()
  }, [])

  console.log(props, "props baruu ini")
  return (
    <div>
      <h1>Exercise Plan</h1>
      <div className="bgrSearch">
      </div>
    </div>
  )
}

export default ExercisePlanUser