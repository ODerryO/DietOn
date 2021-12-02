import axios from 'axios'
import * as types from './exerciseActionType'


export function changeText(text){
  return {type: types.CHANGE_DISPLAY_INPUT, text: text}
}


export function getExercise(){
  return dispatch => {

    dispatch({type: types.GET_EXERCISE_REQUEST})

    axios({
      method: "GET",
      url: `https://test-diet.herokuapp.com/v1/exercises/`,
      headers: {
        'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlkIjoxLCJpYXQiOjE2MzQ1ODc5MzF9.rujVsferPgjWTbQBf855-7oV5VpFeUUPev294gQmLYA"
      }
    }).then(response => {
      let result = response.data.data
      dispatch({type: types.GET_EXERCISE_SUCCESS, ExercisePlan: result})
    }).catch(err => {
      dispatch({type: types.GET_EXERCISE_FAILURE, error: err})
    })
  }
}

// ${query && query.date ? "?date=" + query.date  : ""}