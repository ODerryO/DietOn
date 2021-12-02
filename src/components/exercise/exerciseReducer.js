import * as types from './exerciseActionType'
import Exercise from './exercisePage'

const initalStore = {
  text: "",
  loading: false,
  error: "",
  ExercisePlan: []
}

function exerciseReducer(store = initalStore, action){
  switch(action.type){
    case types.CHANGE_DISPLAY_INPUT:
      return {...store, text: action.text}
    case types.GET_EXERCISE_REQUEST:
      return {...store, loading: true}
    case types.GET_EXERCISE_SUCCESS:
      return {...store, loading: false, ExercisePlan: action.ExercisePlan}
    case types.GET_EXERCISE_FAILURE:
      return {...store, loading: false, error: action.error}
    default:
      return store
  }
}

export default exerciseReducer