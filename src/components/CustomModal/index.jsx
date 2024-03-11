import React, { useState } from "react";
import Modal from "./Modal";

import "./styles.css";

const CustomModal = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  const handleToggleModalPopup = () => {
    setShowModalPopup(!showModalPopup);
  };

  const onClose = () => {
    setShowModalPopup(false);
  };

  return (
    <div className="container">
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && (
        <Modal
          id={"custom-id"}
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
          onClose={onClose}
          body={
            <div>
              <h1>Customized body</h1>
            </div>
          }
        />
      )}
    </div>
  );
};

export default CustomModal;
