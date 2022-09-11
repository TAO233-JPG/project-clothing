import { takeLatest, put, all, call } from "redux-saga/effects";

import { USER_ACTION_TYPES } from "./user.type";
import {
  signOutFail,
  signOutSuccess,
  signUpFail,
  signUpSuccess,
  signInFail,
  signInSuccess,
} from "./user.action";
import {
  createUserDocumentFromAuth,
  getCurrentUser,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createAuthUserWithEmailAndPassword,
  signOutAuth,
} from "../../utils/filebase.util";

function* getSnapshotFromUserAuth(userAuth, additionalDetail) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetail
    );
    yield put(signInSuccess({ ...userSnapshot.data(), id: userSnapshot.id }));
  } catch (error) {
    console.error(error);
    yield put(signInFail(error));
  }
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;

    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFail(error));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    if (!user) return;
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFail(error));
  }
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    if (!user) return;
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFail(error));
  }
}

function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_UER_SESSION, isUserAuthenticated);
}

function* watchGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.COOGLE_SIGN_IN_START, signInWithGoogle);
}

function* watchEmailSignStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

// 注册相关-始
function* signUp({ payload }) {
  const { email, password, displayName } = payload;
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );

    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFail(error));
  }
}

function* signInafterSignUp({ payload }) {
  const { user, additionalDetail } = payload;
  yield call(getSnapshotFromUserAuth, user, additionalDetail);
}

function* watchSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

function* watchSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInafterSignUp);
}
// 注册相关-完

// 注销相关
function* signOut() {
  try {
    yield call(signOutAuth);
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFail(error))
  }
}

function* watchSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(watchGoogleSignInStart),
    call(watchEmailSignStart),
    call(watchSignUpStart),
    call(watchSignUpSuccess),
    call(watchSignOutStart),
  ]);
}
