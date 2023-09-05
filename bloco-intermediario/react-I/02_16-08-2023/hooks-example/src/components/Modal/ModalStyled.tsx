import { styled } from 'styled-components';

interface ModalStyledProps {
  show: boolean;
}

const ModalStyled = styled.div<ModalStyledProps>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #3a3a3a;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
`;

export default ModalStyled;
