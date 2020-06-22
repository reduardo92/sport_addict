import React from 'react';
import styled from 'styled-components';

const Styled = styled.div``;

interface ColumsSectionProps {
  title: string;
}

const ColumsSection: React.FC<ColumsSectionProps> = ({ title, children }) => {
  return (
    <Styled className='colums--section'>
      <h2 className='title subtitle d-inline'>{title}</h2>
      <div className='columns is-multiline'>{children}</div>
    </Styled>
  );
};

export default ColumsSection;
