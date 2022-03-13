import "./CartScreen.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from 'axios'



// Components
import CartItem from "../components/CartItem";

// Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  
  const onSubmit = () =>{
    let len = cartItems.length;
    for(let i = 0;i<len;i++){
      
      console.log(cartItems[i])
    

axios.post('/Cartadd',cartItems[i])
      alert("Cart confirmed!")
    }

   
}

  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };


  const getCartSubTotal = () => {
    return cartItems
      .reduce((unitPrice, item) => unitPrice + item.unitPrice * item.qty, 0)
      .toFixed(2);
  };

  //cart checkout



  return (
    <>
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/items">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>

        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>Rs{getCartSubTotal()}</p>
          </div>
          <div>
            <a href="/onlinePay"><Link
                          to={{
                            pathname: "/onlinePay",
                            data: getCartSubTotal() // your data array of objects
                          }}
                        >
            <button onClick={onSubmit}>Proceed To Checkout</button>
            </Link></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
