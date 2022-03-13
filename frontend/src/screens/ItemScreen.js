import "./ItemScreen.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Actions
import { getItemDetails } from "../redux/actions/itemActions";

//newly added
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
//import { useParams } from 'react-router-dom';

const ItemScreen = ({ match, history }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const itemDetails = useSelector((state) => state.getItemDetails);
  const { loading, error, item } = itemDetails;

  //const productDetails = useSelector((state) => state.getProductDetails);
  //const { loading, error, product } = productDetails;

  useEffect(() => {
    if (item && match.params.id !== item._id) {
      dispatch(getItemDetails(match.params.id)); //params.id => the id shows in the url when it comes to a specific item
    }
  }, [dispatch, item, match]);

  const addToCartHandler = () => {
    dispatch(addToCart(item._id, quantity));
    history.push(`/cart`);
  };

  useEffect(() => {
    const cusInfo = localStorage.getItem("customerInfo");
    if (!cusInfo) {
      history.push("/login");
    }
  }, [history]);

  return (

    <div className="itemScreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <br />
          <button
            className="btn btn-outline-danger"
            style={{ marginLeft: "-150px", padding: "10px", height: "50px" }}
          >
            <a
              href="/items"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bolder",
              }}
            >
              Shop
            </a>
          </button>
          <br /> <br />
          <div className="itemScreen__left">
            <div className="left__image">
              <img
                src={item.imageUrl}
                alt={item.itemCode}
                style={{
                  width: "350px",
                  height: "350px",
                  marginLeft: "-10px",
                  marginTop: "-100px",
                }}
              />
            </div>

            <div className="left__info">
              <p className="left__name">{item.itemCode}</p>

              <p>Price : Rs{item.unitPrice}</p>
              <p>Description: {item.description}</p>
            </div>
          </div>
          <div className="itemScreen__right">
            <div className="right__info">
              <p>
                Price:<span>Rs.{item.unitPrice}</span>
              </p>

              <p>
                Status:
                <span>
                  {item.countInStock > 0 ? "In stock" : "Out of stock"}
                </span>
              </p>

              <p>
                Quantity{" "}
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(item.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>

              <p>
                <button
                  className="btn btn-outline-warning"
                  onClick={addToCartHandler}
                >
                  Add
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemScreen;
