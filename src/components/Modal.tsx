// TODO: check if react/prop-types rule should be generally disabled
/* eslint-disable react/prop-types */

import React, {
  createContext,
  FC,
  KeyboardEventHandler,
  MouseEventHandler,
  PropsWithChildren,
  useContext,
  useEffect,
} from "react";
import ReactDOM from "react-dom";
import SectionContainer from "./style-components/SectionContainer";

// TODO: Trap focus within modal
// (this means prevent tabbing around to outside elements)

interface IModal<T> extends FC<T> {
  OuterShade: FC;
  OuterBlur: FC;
  CloseButton: FC;
  Body: FC;
}

type ModalProps = PropsWithChildren<{
  // TODO: this is apparently not the right Event type...
  onModalClose: (event?: Event) => void;
}>;

const modalContext = createContext<(event?: Event) => void>(null);

const ModalContainer: FC = ({ children }) => {
  const closeModal = useContext(modalContext);

  // For a11y, modal must be keyboard-escapable
  const handleOnKeyDown: KeyboardEventHandler = (e) => {
    if (e.code === "Escape") {
      closeModal();
    }
  };

  return (
    <div
      className="absolute top-0 left-0 right-0 h-full flex justify-center items-center"
      role="button"
      onClick={() => closeModal()}
      onKeyDown={handleOnKeyDown}
      tabIndex={0}
    >
      {children}
    </div>
  );
};

const Modal: IModal<ModalProps> = ({ children, onModalClose }) => {
  useEffect(() => {
    // Lock scroll of body
    const scrollLockedElement = document.body;
    const prevStyle = scrollLockedElement.style.overflow; // save existing setting
    scrollLockedElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevStyle;
    };
  }, []);

  return ReactDOM.createPortal(
    <div aria-modal="true" className="fixed top-0 w-full h-full">
      <modalContext.Provider value={onModalClose}>
        <ModalContainer>{children}</ModalContainer>
      </modalContext.Provider>
    </div>,
    document.body
  );
};

Modal.CloseButton = ({ children }) => {
  const closeModal = useContext(modalContext);

  const handleClick: MouseEventHandler = (e) => {
    e.stopPropagation();
    closeModal();
  };

  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  );
};

Modal.OuterShade = () => (
  <div
    className="w-full h-full absolute top-0 left-0
          bg-black opacity-50 pointer-events-none"
  />
);

Modal.Body = ({ children }) => (
  <div onClick={(e) => e.stopPropagation()} role="none">
    <SectionContainer>{children}</SectionContainer>
  </div>
);

// ! STYLE BUG
// backdrop-filter only works when scrollbar present
// (and don't work at all in Firefox...)
// - not a sizing issue (occurs on all sizes)
// - not related to tailwind implementation (element css & css stylesheet has same issue)
// - doesn't seem to be due to its dom position, I've tried all sorts of positions
// - literally nothing I've tried fixes, and can't find any relevant info online
Modal.OuterBlur = () => (
  <div className="absolute w-full h-full backdrop-filter backdrop-blur-sm" />
);

export default Modal;
