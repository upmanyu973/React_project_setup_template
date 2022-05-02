import { TYPES } from "../types/types";

// Action Handlers

export const signupRequest = () => ({
  type: TYPES.SIGNUP_REQUEST,
  payload: null,
});

export const signupSuccess = (user) => ({
  type: TYPES.SIGNUP_SUCCESS,
  payload: { user },
});

export const signupError = (error) => ({
  type: TYPES.SIGNUP_ERROR,
  payload: { error },
});
