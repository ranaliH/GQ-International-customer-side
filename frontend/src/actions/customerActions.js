import {
  CUSTOMER_LOGIN_FAIL,
  CUSTOMER_LOGIN_REQUEST,
  CUSTOMER_LOGIN_SUCCESS,
  CUSTOMER_LOGOUT,
  CUSTOMER_REGISTER_FAIL,
  CUSTOMER_REGISTER_REQUEST,
  CUSTOMER_REGISTER_SUCCESS,
  CUSTOMER_UPDATE_FAIL,
  CUSTOMER_UPDATE_REQUEST,
  CUSTOMER_UPDATE_SUCCESS,
} from "../constants/customerConstants";

import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: CUSTOMER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "api/customers/login",
      { email, password },
      config
    );

    dispatch({ type: CUSTOMER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("customerInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: CUSTOMER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("customerInfo");
  dispatch({ type: CUSTOMER_LOGOUT });
};

export const register = (name, email, password, pic) => async (dispatch) => {
  try {
    dispatch({ type: CUSTOMER_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "api/customers",
      { name, pic, email, password },
      config
    );

    dispatch({ type: CUSTOMER_REGISTER_SUCCESS, payload: data });

    dispatch({ type: CUSTOMER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("customerInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: CUSTOMER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProfile = (customer) => async (dispatch, getState) => {
  try {
    dispatch({ type: CUSTOMER_UPDATE_REQUEST });

    const {
      customerLogin: { customerInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${customerInfo.token}`,
      },
    };

    const { data } = await axios.post(
      "/api/customers/profile",
      customer,
      config
    );

    dispatch({ type: CUSTOMER_UPDATE_SUCCESS, payload: data });

    dispatch({ type: CUSTOMER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("customerInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: CUSTOMER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
