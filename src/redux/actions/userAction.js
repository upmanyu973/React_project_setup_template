import { loginRequest } from "./loginAction";
import { loginSuccess } from "./loginAction";
import { loginError } from "./loginAction";
import { signupRequest } from "./signupAction";
import { signupSuccess } from "./signupAction";
import { signupError } from "./signupAction";
import fakeData from "../../data.json";

// Action
export const userLogin = (data, callback) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    // console.log(fakeData, data);
    let somedata = await fakeData.user.filter(
      (item) => item.email === data.email && item.password === data.password
    );
    if (somedata[0]) {
      dispatch(loginSuccess(somedata[0]));
      callback();
    } else {
      dispatch(loginError("no user found"));
    }
    console.log(somedata);
  } catch (error) {
    dispatch(loginError(error.message));
  }
};
export const userSignup = (data, callback) => async (dispatch) => {
  dispatch(signupRequest());
  try {
    // console.log(data);
    // const data =
    dispatch(signupSuccess(data));
    callback();
  } catch (error) {
    dispatch(signupError(error.message));
  }
};
