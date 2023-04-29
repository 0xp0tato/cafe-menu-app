import React from "react";
import "./Modal.css";

const Modal = (props) => {
  const trigger = props.trigger;
  const text = props.modalText;
  const setTrigger = props.setTrigger;
  return trigger ? (
    <div onClick={() => setTrigger(false)} className="Modal">
      <div className="modal-inner">
        <div className="modal-text">
          <p>{text}</p>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Modal;
