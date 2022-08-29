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

export const emailSignInStart = (email, password) => ({
  type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  payload: { email, password },
});

export const signInSuccess = (user) => ({
  type: USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFail = (error) => ({
  type: USER_ACTION_TYPES.SIGN_IN_FAIL,
  payload: error,
});

export const siginUpStart = (email, password, displayName) => ({
  type: USER_ACTION_TYPES.SIGN_UP_START,
  payload: { email, password, displayName },
});

export const siginUpSuccess = (user, additionalDetail) => ({
  type: USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  payload: { user, additionalDetail },
});

export const siginUpFail = (error) => ({
  type: USER_ACTION_TYPES.SIGN_UP_FAIL,
  payload: error,
});
