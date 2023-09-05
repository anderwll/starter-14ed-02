import styled, { css } from 'styled-components';

export type CorFeedback = 'success' | 'error' | 'info' | 'warning' | '';

interface FeedbackStyledProps {
  cor: CorFeedback;
  mostrar: boolean;
}

const FeedbackStyled = styled.div<FeedbackStyledProps>`
  position: absolute;
  right: 15px;
  top: 15px;
  padding: 16px;
  color: #ffff;
  border-radius: 5px;
  visibility: ${(props) => (props.mostrar == true ? 'visible' : 'hidden')};

  p {
    font-size: 1.2rem;
  }

  ${(props) => {
    switch (props.cor) {
      case 'success':
        return css`
          background-color: #5bf54c;
        `;
      case 'error':
        return css`
          background-color: #ee2c2c;
        `;
      case 'info':
        return css`
          background-color: #0073ff;
        `;
      case 'warning':
        return css`
          background-color: #e9b25f;
        `;
      default:
    }
  }}
`;

export default FeedbackStyled;
