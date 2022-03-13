import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

//reducers
import {getItemDetailsReducer,getItemReducer} from "../redux/reducers/itemReducers";

//newly added
import { cartReducer } from "../redux/reducers/cartReducers";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "../redux/reducers/productReducers";

//cus
import {
  customerLoginReducer,
  customerRegisterReducer,
  customerUpdateReducer,
} from "../reducers/customerReducers.js";
import {
  purchaseCreateReducer,
  purchaseDeleteReducer,
  purchaseListReducer,
  purchaseUpdateReducer,
} from "../reducers/purchasesReducers.js";

const reducer = combineReducers({
    getItems: getItemReducer,
    getItemDetails: getItemDetailsReducer,
    //newly added
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer, 

    //cus

  customerLogin: customerLoginReducer,
  customerRegister: customerRegisterReducer,
  purchaseList: purchaseListReducer,
  purchaseCreate: purchaseCreateReducer,
  purchaseUpdate: purchaseUpdateReducer,
  purchaseDelete: purchaseDeleteReducer,
  customerUpdate: customerUpdateReducer,
});

const middleWere = [thunk];

const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const customerInfoFromStorage = localStorage.getItem("customerInfo")
  ? JSON.parse(localStorage.getItem("customerInfo"))
  : null;

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage
  },
  customerLogin: { customerInfo: customerInfoFromStorage },

};

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleWere))
);

export default store;