import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

const Styled = styled.section``;

interface TeamProps {}

const teamPage: React.FC<TeamProps> = ({}) => {
  const router = useRouter();
  console.log(router);
  return <Styled className=''>Hello from tems</Styled>;
};

export default teamPage;
