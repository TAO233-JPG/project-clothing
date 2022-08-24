import { all, call } from "redux-saga/effects";

import { categoriesSaga } from "./categorise/categorise.saga";

export const rootSaga = function* () {
   yield all([call(categoriesSaga)]);
};
