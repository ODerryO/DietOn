import { signUp,signIn,weightMeasurement } from "../../services";

export const getSignUpAsync = ({
  fullName,
  email,
  password,
  calorieSize,
  weight,
  height,
  waistline,
  thigh,
  next,
}) => {
  return async (dispatch) => {
    // console.log(
    //   fullName,
    //   email,
    //   password,
    //   calorieSize,
    //   weight,
    //   height,
    //   waistline,
    //   thigh
    // );
    dispatch({ type: "signUp/get-start" });
    try {
      const response = await signUp({
        fullName,
        email,
        password,
        calorieSize,
        weight,
        height,
        waistline,
        thigh,
      });
      const { token } = response.data;
      console.log(response, "start");
      if (response.status === 200) {
        dispatch(getSignUpSuccess(response.data));
        localStorage.setItem('token', token);

        next();
      }
      //   return response;
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
      dispatch(getSignUpFailed(error.message));
      //   return error;
    }
  };
};
export const getSignUpSuccess = (signUp) => ({
  type: "signUp/get-success",
  payload: {
    signUp,
  },
});

export const getSignUpFailed = (error) => ({
  type: "signUp/get-failed",
  payload: {
    error,
  },
});


// SignIn

export const getSignInAsync = ({
  email,
  password,
  
},history) => {
  return async (dispatch) => {
    dispatch({ type: "signIn/get-start" });
    try {
      const response = await signIn({
        email,
        password,
      });
      const { token } = response.data;
      console.log(response, "start");
      if (response.status === 200) {
        dispatch(getSignInSuccess(response.data));
        window.localStorage.setItem('token', token);
        history.replace("/homepage");
      } 
   
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
      dispatch(getSignInFailed(error.message));
    
    }
  };
};
export const getSignInSuccess = (signIn) => ({
  type: "signIn/get-success",
  payload: {
    signIn,
  },
});

export const getSignInFailed = (error) => ({
  type: "signin/get-failed",
  payload: {
    error,
  },
});


//weight and measurement

export const getWeightMeasurementAsync = ({
  weight,
  waistline,
  thigh
  
}) => {
  return async (dispatch) => {
    dispatch({ type: "weightMeasurement/get-start" });
    try {
      const response = await weightMeasurement({
        weight,
        waistline,
        thigh
      });
    
      console.log(response, "start");
      if (response.status === 200) {
        dispatch(getWeightMeasurementSuccess(response.data));
       
       
      } 
   
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
      dispatch(getWeightMeasurementFailed(error.message));
    
    }
  };
};
export const getWeightMeasurementSuccess = (weightMeasurement) => ({
  type: "weightMeasurement/get-success",
  payload: {
    weightMeasurement, 
  },
});

export const getWeightMeasurementFailed = (error) => ({
  type: "weightMeasurement/get-failed",
  payload: {
    error,
  },
});