import { takeLatest, put, all, call } from "redux-saga/effects";

import { USER_ACTION_TYPES } from "./user.reducer";
import { signInFail, signInSuccess } from "./user.action";
import {
  createUserDocumentFromAuth,
  getCurrentUser,
} from "../../utils/filebase.util";

export function* getSnapshotFromUserAuth(userAuth, additionalDetail) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetail
    );
    // console.log(11122, userSnapshot, "111122");
    // console.log(userSnapshot, userSnapshot.value(), "userSnapshot.data()");
    yield put(signInSuccess({ ...userSnapshot.data(), id: "id" }));
  } catch (error) {
    yield put(signInFail(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;

    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFail(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_UER_SESSION, isUserAuthenticated);
}

export function* userSaga() {
  yield all([call(onCheckUserSession)]);
}
