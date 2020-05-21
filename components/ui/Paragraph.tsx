import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface styledProps {
  clr?: boolean;
}

const Styled = styled.p<styledProps>`
  color: ${({ clr }) => (clr ? 'var(--clr-grey)' : 'var(--clr-second)')};
  width: 80%;
`;

export interface paragraphProps {
  text: string | ReactNode;
  clr?: boolean;
}

const Paragraph: React.FC<paragraphProps> = ({ text, clr }) => (
  <Styled className='para' clr={clr}>
    {text}
  </Styled>
);

export default Paragraph;
