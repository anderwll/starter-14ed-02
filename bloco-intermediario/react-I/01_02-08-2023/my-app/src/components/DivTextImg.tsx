import styled from "styled-components";

interface DivTextImgProps {
  bgImg?: string;
}

const DivTextImg = styled.div<DivTextImgProps>`
  width: 50%;
  height: 700px;

  padding: 45px 100px 45px 100px;

  background-image: ${(props) => (props.bgImg ? `url(${props.bgImg})` : "")};
  background-size: cover;
  background-position: center;
  background-color: ${(props) => props.theme.background};

  color: ${(props) => props.theme.textColor};

  display: flex;
  flex-direction: column;

  justify-content: center;

  h2 {
    font-size: 35px;
    margin-bottom: 10px;
  }
  p {
    font-size: 20px;
  }
`;

export default DivTextImg;
