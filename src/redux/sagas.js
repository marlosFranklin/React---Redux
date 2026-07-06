import { all } from "redux-saga/effects";
import user from "./user/saga";

//função geradora um funcção assincrona
export default function* rootSaga() {
  return yield all([user]);
}
