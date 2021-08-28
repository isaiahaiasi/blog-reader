import React, { EventHandler, useState } from "react";
import Modal from "./Modal";
import Button from "./style-components/Button";

interface DeleteItemProps {
  onConfirm: EventHandler<any>; // TODO: type-ing is hard
}

const DeleteItem = ({ onConfirm }: DeleteItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    console.log("click");
    setIsModalOpen((prevModalState) => !prevModalState);
  };
  return (
    <div className="w-full max-w-prose m-auto flex justify-center">
      <Button onClick={toggleModal}>X</Button>
      {isModalOpen && (
        <Modal onModalClose={toggleModal}>
          <Modal.OuterShade />
          <Modal.Body>
            <h2 className="text-xl">Delete comment?</h2>
            <p>Are you sure you want to delete your comment?</p>
            <p>This action cannot be undone.</p>
            <div className="flex justify-around">
              <Modal.CloseButton>Cancel</Modal.CloseButton>
              <Button onClick={onConfirm}>Delete</Button>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default DeleteItem;
