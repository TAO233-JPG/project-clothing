import { all, call } from "typed-redux-saga/macro";

import { categoriesSaga } from "./categorise/categorise.saga";
import { userSaga } from "./user/user.saga";
export const rootSaga = function* () {
  yield* all([call(categoriesSaga), call(userSaga)]);
};
