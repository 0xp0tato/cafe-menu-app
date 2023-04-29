import React from "react";

import { useDispatch } from "react-redux";
import { decrementToCart, incrementToCart } from "../../redux/slices";

import "./CartItem.css";

const CartItem = (props) => {
  const { id, image, name, price, type, quantity } = props.data;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(incrementToCart(props.data));
  };

  const handleRemoveFromCart = () => {
    dispatch(decrementToCart(props.data.id));
  };

  const VEG_SYMBOL =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png";

  const NONVEG_SYMBOL =
    "https://m.media-amazon.com/images/I/31BQewBVXRL._SX355_.jpg";

  const symbol = type === "veg" ? VEG_SYMBOL : NONVEG_SYMBOL;
  return (
    <div className="CartItem">
      <div className="wrapper">
        <p>
          <img src={symbol} />
        </p>
        <div className="name-and-price">
          <p>{name}</p>
          <p>₹{price}</p>
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleRemoveFromCart}>-</button>
        <p>{quantity}</p>
        <button onClick={handleAddToCart}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
