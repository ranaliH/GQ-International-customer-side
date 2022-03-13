import "./ItemHomeScreen.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
//import React, { Component } from 'react';
//import axios from 'axios';
//import filterData from 'react'
//import handleSearchArea from 'react'
import Item from "../components/modules/CustomerPageModules/Stock/Item";

//actions
import { getItems as listItems } from "../redux/actions/itemActions";
import AddExpenseBG from "../images/addexpense.jpg"; //using as litItems it wont clash with the const getItems in the useSelector

const ItemHomeScreen = () => {
  const dispatch = useDispatch();

  const getItems = useSelector((state) => state.getItems);

  const { items, loading, error } = getItems;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  useEffect(() => {
    dispatch(listItems());
  }, [dispatch]);

  return (
    <div className="itemHomeScreen"
         style={{
             backgroundImage: `url(${AddExpenseBG})`,
             backgroundAttachment: "fixed",
             backgroundRepeat: "no-repeat",
             backgroundPosition: "center",
             backgroundSize: "cover",
         }}>
      <h1 class="jt --debug" style={{ marginLeft: "800px",color:'white' }}>
        <span class="jt__row">
          <span class="jt__text">Latest Items!</span>
        </span>
        <span class="jt__row jt__row--sibling" aria-hidden="true">
          <span class="jt__text">Latest Items!</span>
        </span>
        <span class="jt__row jt__row--sibling" aria-hidden="true">
          <span class="jt__text">Latest Items!</span>
        </span>
        <span class="jt__row jt__row--sibling" aria-hidden="true">
          <span class="jt__text">Latest Items!</span>
        </span>
      </h1>
      <br />
      &nbsp;&nbsp;
      <button className="btn btn-outline-secondary" style={{backgroundColor:'rgba(171, 183, 183, 0.7)',marginLeft:'20px'}}>
        <i className="fas fa-shopping-cart" style={{color:'black'}}>
          <a
            href="/cart"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bolder",
              borderRadius: "8px",
            }}
          >
            <span>
              Cart<span className="cartLogo__badge" style={{fontSize:'18px',fontWeight:'bolder',color:'black'}}>{getCartCount()}</span>
            </span>
          </a>
        </i>
      </button>
      <br />
      <br />
      <div className="itemHomeScreen__items">
        {loading ? (
          <h2 style={{color:'white',fontWeight:'bold'}}>Loading...</h2>
        ) : error ? (
          <h2 style={{color:'white'}}>{error}</h2>
        ) : (
          items.map((item) => (
            <Item
              key={item._id}
              itemId={item._id}
              itemCode={item.itemCode}
              unitPrice={item.unitPrice}
              description={item.description}
              color={item.color}
              imageUrl={item.imageUrl}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ItemHomeScreen;
