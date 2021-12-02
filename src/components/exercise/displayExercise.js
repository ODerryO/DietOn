import React from 'react';
import { connect } from 'react-redux'

function DisplayExercise(props){
  return(
    <p>Search Keyword: {props.Exercise.text}</p>
  )
}

const MapStateToProps = (store) => {
  return ({
    Exercise: store.Exercise
  })
}

export default connect(MapStateToProps)(DisplayExercise)