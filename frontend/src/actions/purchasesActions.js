import axios from "axios";
import {
  PURCHASES_CREATE_FAIL,
  PURCHASES_CREATE_REQUEST,
  PURCHASES_CREATE_SUCCESS,
  PURCHASES_DELETE_REQUEST,
  PURCHASES_DELETE_FAIL,
  PURCHASES_DELETE_SUCCESS,
  PURCHASES_LIST_FAIL,
  PURCHASES_LIST_REQUEST,
  PURCHASES_LIST_SUCCESS,
  PURCHASES_UPDATE_FAIL,
  PURCHASES_UPDATE_REQUEST,
  PURCHASES_UPDATE_SUCCESS,
} from "../constants/purchasesConstants";

export const listPurchases = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PURCHASES_LIST_REQUEST,
    });

    const {
      customerLogin: { customerInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${customerInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/purchases`, config);

    dispatch({
      type: PURCHASES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PURCHASES_LIST_FAIL,
      payload: message,
    });
  }
};

export const createPurchaseAction =
  (title, content, category) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PURCHASES_CREATE_REQUEST,
      });

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
        `/api/purchases/create`,
        { title, content, category },
        config
      );

      dispatch({
        type: PURCHASES_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: PURCHASES_CREATE_FAIL,
        payload: message,
      });
    }
  };

export const updatePurchaseAction =
  (id, title, content, category) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PURCHASES_UPDATE_REQUEST,
      });

      const {
        customerLogin: { customerInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${customerInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/purchases/${id}`,
        { title, content, category },
        config
      );

      dispatch({
        type: PURCHASES_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: PURCHASES_UPDATE_FAIL,
        payload: message,
      });
    }
  };

export const deletePurchaseAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PURCHASES_DELETE_REQUEST,
    });

    const {
      customerLogin: { customerInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${customerInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/purchases/${id}`, config);

    dispatch({
      type: PURCHASES_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PURCHASES_DELETE_FAIL,
      payload: message,
    });
  }
};
