import React, { useState } from "react";
import Modal from "./Modal";
import Button from "./style-components/Button";

const DeleteItem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    console.log("click");
    setIsModalOpen((prevModalState) => !prevModalState);
  };
  return (
    <div className="w-full max-w-prose m-auto flex justify-center">
      <Button onClick={toggleModal}>Open modal</Button>
      {isModalOpen && (
        <Modal onModalClose={toggleModal}>
          <p>Hello</p>
        </Modal>
      )}
    </div>
  );
};

export default DeleteItem;
