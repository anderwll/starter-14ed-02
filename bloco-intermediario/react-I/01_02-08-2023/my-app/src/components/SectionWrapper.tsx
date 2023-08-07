import { styled } from "styled-components";

interface SectionWrapperProps {
  height: string;
}

const SectionWrapper = styled.section<SectionWrapperProps>`
  width: 100vw;
  height: ${(props) => props.height};
  background-image: url(../public/assets/img-ocean.jpg);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SectionWrapper;
