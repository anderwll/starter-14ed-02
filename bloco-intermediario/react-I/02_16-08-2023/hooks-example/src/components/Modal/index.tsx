import ModalStyled from './ModalStyled';

interface ModalProps {
  show: boolean;
}

function Modal(props: ModalProps) {
  return (
    <ModalStyled show={props.show}>
      <div>
        <h1>Meu modal</h1>
      </div>
    </ModalStyled>
  );
}

export default Modal;
