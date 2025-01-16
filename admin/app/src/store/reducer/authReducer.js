import { LOGIN_SUCCESS, LOGOUT, UPDATE_USER } from "../action/authAction";

const initialState = {
  token: null,
  user: null,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
