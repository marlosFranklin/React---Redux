import { all, takeEvery } from "redux-saga/effects";

// eslint-disable-next-line require-yield
function* fetchUsers() {
  console.log("chamou dentro do saga");
}
export default all([takeEvery("user/fetchUsers", fetchUsers)]);
