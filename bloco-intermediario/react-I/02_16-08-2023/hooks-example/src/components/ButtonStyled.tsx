import { styled } from 'styled-components';

interface ButtonStyledProps {
  color: string;
}

const ButtonStyled = styled.button<ButtonStyledProps>`
  width: 100%;
  min-width: 60px;
  padding: 10px 5px;
  background-color: ${(props) => props.color};
  color: #ffff;
  border: none;
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
`;

export default ButtonStyled;
