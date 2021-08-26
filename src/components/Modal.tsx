import React, {
  createContext,
  FC,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactElement,
  useContext,
} from "react";
import ReactDOM from "react-dom";
import SectionContainer from "./style-components/SectionContainer";

// TODO: TRAP FOCUS TO MODAL
// (this means prevent tabbing around to outside elements)

interface IModal<T> extends FC<T> {
  Container: FC;
  ContainerShade: FC;
  CloseButton: FC;
}

interface ModalProps {
  // TODO: this is apparently not the right Event type...
  onModalClose: (event?: Event) => void;
  children: ReactElement;
}

const modalContext = createContext<(event?: Event) => void>(null);

// TODO: these sub-elements should be inserted by the element above Modal, to maximize reusability

const Modal: IModal<ModalProps> = ({ children, onModalClose }) =>
  ReactDOM.createPortal(
    <div aria-modal="true">
      <modalContext.Provider value={onModalClose}>
        <Modal.Container>
          <Modal.ContainerShade />
          <SectionContainer>
            <Modal.CloseButton>Close</Modal.CloseButton>
            {children}
          </SectionContainer>
        </Modal.Container>
      </modalContext.Provider>
    </div>,
    document.body
  );

Modal.CloseButton = ({ children }: { children: ReactElement }) => {
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

Modal.Container = ({ children }: { children: ReactElement }) => {
  const closeModal = useContext(modalContext);

  const handleOnKeyDown: KeyboardEventHandler = (e) => {
    console.log(e.code);
    if (e.code === "Escape") {
      closeModal();
    }
  };

  return (
    <div
      className="absolute top-0 left-0 right-0 h-screen 
        flex justify-center items-center
        backdrop-filter backdrop-blur-sm"
      role="button"
      onClick={() => closeModal()}
      onKeyDown={handleOnKeyDown}
      tabIndex={0}
    >
      {children}
    </div>
  );
};

Modal.ContainerShade = () => (
  <div
    className="w-full h-full absolute
          bg-black opacity-50 pointer-events-none"
  />
);

export default Modal;
