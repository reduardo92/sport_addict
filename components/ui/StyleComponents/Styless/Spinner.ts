import styled from 'styled-components';
import Spin from '../keyFrames/Spin';

export default styled.div`
  /* Spinner */
  width: 50px;
  height: 50px;
  border: 2px solid var(--clr-primary);
  border-radius: 50%;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  animation: ${Spin} 0.8s linear 0s infinite;
`;
