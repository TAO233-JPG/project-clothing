import { USER_ACTION_TYPES } from "./user.reducer";

export const setCurrentUser = (user) => ({
  type: USER_ACTION_TYPES.SET_CURRENT_USER,
  payload: user,
});

export const checkUserSession = () => ({
  type: USER_ACTION_TYPES.CHECK_UER_SESSION,
});

export const googleSignInStart = () => ({
  type: USER_ACTION_TYPES.COOGLE_SIGN_IN_START,
});

export const emailSignInStart = (email, passward) => ({
  type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  payload: { email, passward },
});

export const signInSuccess = (user) => ({
  type: USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFail = (error) => ({
  type: USER_ACTION_TYPES.SIGN_IN_FAIL,
  payload: error,   
});
