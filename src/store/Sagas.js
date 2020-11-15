import { takeEvery, select, call, put } from "redux-saga/effects";
import actionType from "../constant/Constant";

import { SocialLogIn } from "../sagaActions/Auth/Auth";

const rootSaga = function* () {
  yield takeEvery(actionType.FBLOGIN, SocialLogIn);
};

export default rootSaga;
