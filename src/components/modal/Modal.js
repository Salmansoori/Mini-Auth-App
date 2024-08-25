import React from "react";

import { MODAL_TYPE_VS_COMPONENT } from "./modal.constants";

import "./modal.css";

const Modal = ({ isOpen, selectedModalType, ...rest }) => {
  console.log(selectedModalType);
  if (!isOpen) return null;
  const ModalComponent = MODAL_TYPE_VS_COMPONENT[selectedModalType];
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <ModalComponent selectedModalType={selectedModalType} {...rest} />
      </div>
    </div>
  );
};

export default Modal;
