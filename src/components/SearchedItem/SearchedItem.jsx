import React, { useState, useEffect } from "react";
import "./SearchedItem.css";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { decrementToCart, incrementToCart } from "../../redux/slices";

const SearchedItem = (props) => {
  const { id, image, name, price, type } = props.data;

  const dispatch = useDispatch();
  const cart = useSelector((state) => {
    return state.cart;
  });

  const [inCart, setinCart] = useState(0);

  useEffect(() => {
    const itemfind = cart.find((item) => item.id === id);
    setinCart(itemfind ? itemfind.quantity : 0);
  }, []);
  const VEG_SYMBOL =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png";

  const NONVEG_SYMBOL =
    "https://m.media-amazon.com/images/I/31BQewBVXRL._SX355_.jpg";

  const symbol = type === "veg" ? VEG_SYMBOL : NONVEG_SYMBOL;

  const handleAddToCart = () => {
    dispatch(incrementToCart(props.data));
    setinCart(inCart + 1);
  };

  const handleRemoveFromCart = () => {
    dispatch(decrementToCart(props.data.id));
    setinCart(inCart - 1);
  };

  const plusIcon = (
    <FontAwesomeIcon icon={faPlus} size="sm" style={{ color: "#ffffff" }} />
  );

  const minusIcon = (
    <FontAwesomeIcon icon={faMinus} size="sm" style={{ color: "#ffffff" }} />
  );

  return (
    <div className="SearchedItem">
      <div className="searched-image">
        <img src={image} />
      </div>
      <div className="searched-items-details">
        <p>{name}</p>
        <div className="searched-items-type-price">
          <img src={symbol} />₹{price}
        </div>
      </div>
      <div className="buttons-container">
        {inCart > 0 ? (
          <div className="plus-minus-buttons">
            <button onClick={handleRemoveFromCart}>{minusIcon}</button>
            {inCart}
            <button onClick={handleAddToCart}>{plusIcon}</button>
          </div>
        ) : (
          <button className="add-button" onClick={handleAddToCart}>
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchedItem;
