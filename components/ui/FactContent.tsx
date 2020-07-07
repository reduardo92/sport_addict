import React from 'react';
import styled from 'styled-components';
import Paragraph from './Paragraph';

const Styled = styled.div`
  & > :first-child {
    margin-bottom: 0;
  }
  & > :last-child {
    color: var(--clr-grey);
  }

  & .para {
    font-weight: bold;
    width: 100%;
    text-transform: capitalize;
  }

  .fact--img {
    max-width: 80px;
  }
`;

interface FactContentProps {
  title: string;
  subTitle?: string | string[];
  img?: string;
}

const FactContent: React.FC<FactContentProps> = ({
  title,
  img,
  subTitle,
  children,
}) => {
  return (
    <Styled className='facts'>
      <Paragraph text={title} clr />
      {subTitle && <Paragraph text={subTitle} />}
      {img && <img className='fact--img' src={img} alt={title} />}
      {children}
    </Styled>
  );
};

export default FactContent;
