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
          <Modal.ContainerShade />
          <Modal.Body>
            <h2 className="text-xl">Delete comment?</h2>
            <p>Are you sure you want to delete your comment?</p>
            <p>This action cannot be undone.</p>
            <Modal.CloseButton>Cancel</Modal.CloseButton>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default DeleteItem;
