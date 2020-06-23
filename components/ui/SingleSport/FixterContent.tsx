import React from 'react';
import styled from 'styled-components';
import EventsProps from '../../interfaces/Events';

const Styled = styled.section`
  background-color: var(--clr-second);
`;

interface FixterContentProps {
  nextEvents: EventsProps[];
  lastEvents: EventsProps[];
}

const FixterContent: React.FC<FixterContentProps> = ({
  nextEvents,
  lastEvents,
}) => {
  console.log(nextEvents);
  return <Styled className='fixter--content column gridMinMax'>ffddfd</Styled>;
};

export default FixterContent;
