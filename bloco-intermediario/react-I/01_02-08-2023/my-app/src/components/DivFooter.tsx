import { styled } from "styled-components";

interface DivFooterProps {
  flexDirection: "row" | "column";
}

const DivFooter = styled.div<DivFooterProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: center;
  gap: 25px;
`;

export default DivFooter;
