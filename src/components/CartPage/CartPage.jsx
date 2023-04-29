import React, { useState } from "react";
import CartItem from "../CartItem/CartItem";
import Modal from "../Modal/Modal";
import "./Cartpage.css";

import { useSelector, useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { emptyCart } from "../../redux/slices";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotal = () => {
    let totalPrice = 0;

    cart.map((item) => {
      totalPrice += item.quantity * item.price;
    });
    return totalPrice;
  };

  const leftArrowIcon = (
    <FontAwesomeIcon
      icon={faArrowLeft}
      size="xl"
      style={{ color: "#ffffff" }}
    />
  );
  const rightArrowIcon = (
    <FontAwesomeIcon
      icon={faArrowRight}
      size="xl"
      style={{ color: "#ffffff" }}
    />
  );

  const handleSubmit = () => {
    setmodalState(true);
    if (cart.length > 0) {
      dispatch(emptyCart());
      setmodalText(
        "Thank you for Ordering Food from Sacred Earth Cafe. Please wait while your food is being prepared"
      );
    } else {
      setmodalText(
        "Your Cart is Empty. Please Order something to proceed further"
      );
    }
    setmodalState(true);
  };

  const [modalText, setmodalText] = useState("temp");
  const [modalState, setmodalState] = useState(false);

  return (
    <div className="CartPage">
      <header>
        <a href="/">
          <button className="back-to-home">{leftArrowIcon}</button>
        </a>
        <h2>Your Order</h2>
      </header>
      <div className="current-order-text-label">
        <p>Current Order</p>
        <label>Items getting placed</label>
      </div>
      <div className="cart-items">
        {cart.map((item) => {
          return <CartItem key={item.id} data={item} />;
        })}
      </div>
      <div className="cart-footer">
        <p>{cart.length} items</p>
        <p>Total Cost: ₹{getTotal()}</p>
        <div className="place-order-button">
          <h3>Place Order</h3>
          <button onClick={handleSubmit}>{rightArrowIcon}</button>
        </div>
      </div>
      <Modal
        trigger={modalState}
        modalText={modalText}
        setTrigger={setmodalState}
      />
    </div>
  );
};

export default CartPage;
