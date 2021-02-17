import React, { useState } from "react";
import { MainForm } from "../Components/MultiStepForm/MainForm";

import "./Modal.css";

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="container too-lazy-to-move-to-the-right">
      <button className="modal-button btn" onClick={toggleModal}>
        Add Track
      </button>
      {isOpen ? (
        <div className="modal">
          <button className="btn" onClick={closeModal}>Close Modal</button>
          <div className="modal-inner">
            <MainForm />
          </div>
        </div>
      ) : null}
    </div>
  );
};
