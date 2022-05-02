import { TYPES } from "../types/types";

// Action Handlers

export const loginRequest = () => ({
  type: TYPES.LOGIN_REQUEST,
  payload: null,
});

export const loginSuccess = (user) => ({
  type: TYPES.LOGIN_SUCCESS,
  payload: { user },
});

export const loginError = (error) => ({
  type: TYPES.LOGIN_ERROR,
  payload: { error },
});
