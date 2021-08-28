import React, { useState } from "react";
import Modal from "./Modal";
import Button from "./style-components/Button";

interface DeleteCommentInputProps {
  onConfirm: (e?: any) => void;
}

const DeleteCommentInput = ({ onConfirm }: DeleteCommentInputProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    console.log("click");
    setIsModalOpen((prevModalState) => !prevModalState);
  };

  const handleConfirm = () => {
    toggleModal();
    onConfirm();
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
              <Button onClick={handleConfirm}>Delete</Button>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default DeleteCommentInput;
