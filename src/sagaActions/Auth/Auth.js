import {call, put} from 'redux-saga/effects';
import actionType from '../../constant/Constant';

// import { fbLogin } from "./FBLogIn";
// async function _retrieveTransection() {
//   try {
//   } catch (error) {}
// }

export const SocialLogIn = function* (action) {
  try {
    const result = yield call(fbLogin);
  } catch (error) {
    console.log('Error SocialLogIn : ', error);
  }
};
