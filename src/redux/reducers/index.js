import { combineReducers } from "redux";
import userReducer from "./userReducer";
import weightMeasurementReducer from "./weightMeasurementReducer";
import exerciseReducer from "../../components/exercise/exerciseReducer";

const rootReducer = combineReducers({
 userReducer,weightMeasurementReducer,
 Exercise : exerciseReducer
});

export default rootReducer;