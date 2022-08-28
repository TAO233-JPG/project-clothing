import { takeLatest, put, all, call, take } from "redux-saga/effects";

import { USER_ACTION_TYPES } from "./user.reducer";
import { signInFail, signInSuccess } from "./user.action";
import {
  createUserDocumentFromAuth,
  getCurrentUser,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
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
export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(watchGoogleSignInStart),
    call(watchEmailSignStart),
  ]);
}
