export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "user/SET_CURRENT_USER",
  CHECK_UER_SESSION: "user/CHECK_UER_SESSION",
  COOGLE_SIGN_IN_START: "user/COOGLE_SIGN_IN_START",
  EMAIL_SIGN_IN_START: "user/EMAIL_SIGN_IN_START",
  SIGN_IN_SUCCESS: "user/SIGN_IN_SUCCESS",
  SIGN_IN_FAIL: "user/SIGN_IN_FAIL",

  SIGN_UP_START: "user/SIGN_UP_START",
  SIGN_UP_SUCCESS: "user/SIGN_UP_SUCCESS",
  SIGN_UP_FAIL: "user/SIGN_UP_FAIL",

  SIGN_OUT_START: "user/SIGN_OUT_START",
  SIGN_OUT_SUCCESS: "user/SIGN_OUT_SUCCESS",
  SIGN_OUT_FIAL: "user/SIGN_OUT_FIAL",
};

const INITIAL_STATE = {
  currentUser: null,
};

const UserReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    case USER_ACTION_TYPES.SIGN_OUT_FIAL:
    case USER_ACTION_TYPES.SIGN_UP_FAIL:
    case USER_ACTION_TYPES.SIGN_IN_FAIL:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
