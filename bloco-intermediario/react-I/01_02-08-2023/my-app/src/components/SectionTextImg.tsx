import { styled } from "styled-components";

interface SectionTextImgProps {
  flexDirection?: "row-reverse";
}

const SectionTextImg = styled.section<SectionTextImgProps>`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};

  width: 100vw;
  height: 100%;
`;

export default SectionTextImg;
