const storage = window.localStorage;
const token = storage.getItem("token") || "";
const initialState = {
  token
};


function weightMeasurementReducer(state = initialState, action) {
    switch (action.type) {
      default:
        return state;
        case "weightMeasurement/get-success":
        return {
          ...state,
          weightMeasurement: action.payload.weightMeasurement,
          loading: false,
          error: ''
        };
        case "weightMeasurement/get-failed":
        return {
          ...state,
          loading: false,
          error: action.payload.error
        };
    }
  }
  
  export default weightMeasurementReducer;