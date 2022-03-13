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

export const purchaseListReducer = (state = { purchases: [] }, action) => {
  switch (action.type) {
    case PURCHASES_LIST_REQUEST:
      return { loading: true };
    case PURCHASES_LIST_SUCCESS:
      return { loading: false, purchases: action.payload };
    case PURCHASES_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const purchaseCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PURCHASES_CREATE_REQUEST:
      return { loading: true };
    case PURCHASES_CREATE_SUCCESS:
      return { loading: false, success: true };
    case PURCHASES_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const purchaseUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case PURCHASES_UPDATE_REQUEST:
      return { loading: true };
    case PURCHASES_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case PURCHASES_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const purchaseDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PURCHASES_DELETE_REQUEST:
      return { loading: true };
    case PURCHASES_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PURCHASES_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
