import { styled } from "styled-components";

const Paper = styled.div`
  height: 350px;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: ${(props) => props.theme.textColor};

  svg {
    font-size: 80px;
    color: ${(props) => props.theme.primary};
  }

  h2 {
    font-size: 35px;
    margin-top: 10px;
  }

  p {
    font-size: 20px;
    margin-top: 10px;
  }
`;

export default Paper;
