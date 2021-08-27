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
  ContainerShade: FC;
  ContainerBlur: FC;
  CloseButton: FC;
  Body: FC;
}

// TODO: what on earth type is this supposed to be?
interface ChildrenProps {
  children: ReactElement[] | ReactElement;
}

interface ModalProps extends ChildrenProps {
  // TODO: this is apparently not the right Event type...
  onModalClose: (event?: Event) => void;
}

const modalContext = createContext<(event?: Event) => void>(null);

const ModalContainer = ({ children }: ChildrenProps) => {
  const closeModal = useContext(modalContext);

  const handleOnKeyDown: KeyboardEventHandler = (e) => {
    console.log(e.code);
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

const Modal: IModal<ModalProps> = ({ children, onModalClose }) =>
  ReactDOM.createPortal(
    <div aria-modal="true">
      <modalContext.Provider value={onModalClose}>
        <ModalContainer>{children}</ModalContainer>
      </modalContext.Provider>
    </div>,
    document.body
  );

Modal.CloseButton = ({ children }: ChildrenProps) => {
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

Modal.ContainerShade = () => (
  <div
    className="w-full h-full absolute top-0 left-0
          bg-black opacity-50 pointer-events-none"
  />
);

Modal.Body = ({ children }: ChildrenProps) => (
  <div onClick={(e) => e.stopPropagation()} role="none">
    <SectionContainer>{children}</SectionContainer>
  </div>
);

// ! BUG
// backdrop-filter only works when scrollbar present
// (and don't work at all in Firefox...)
// - not a sizing issue (occurs on all sizes)
// - not related to tailwind implementation (element css & css stylesheet has same issue)
// - doesn't seem to be due to its dom position, I've tried all sorts of positions
// - literally nothing I've tried fixes, and can't find any relevant info online
Modal.ContainerBlur = () => (
  <div className="absolute w-full h-full backdrop-filter backdrop-blur-sm" />
);

export default Modal;
