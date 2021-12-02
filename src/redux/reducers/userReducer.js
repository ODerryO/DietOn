const storage = window.localStorage;
const token = storage.getItem("token") || "";
const initialState = {
  token
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case "signUp/get-success":
      return {
        ...state,
        token: action.payload.token,
        loading: false,
      };
      case "signIn/get-success":
      return {
        ...state,
        signIn: action.payload.signIn,
        loading: false,
        error: ''
      };
      case "signIn/get-failed":
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
  }
}

export default userReducer;
