import React, { useContext } from 'react';
import styled from 'styled-components';
import AlertContext from '../context/alert/AlertContext';

const Styled = styled.div`
  position: fixed;
  top: 12vh;
  left: 0;
  right: 0;
  z-index: 10;
  max-width: 350px;
  margin: 0 auto;
  text-align: center;
  font-family: var(--primary--fn);
  font-weight: bold;
  font-size: 1.1rem;
`;

const AlertMsg = () => {
  const { alerts } = useContext(AlertContext);
  return (
    <>
      {alerts.length > 0 &&
        alerts.map(({ id, typeFor, msg }) => (
          <Styled key={id} className={`notification is-${typeFor}`}>
            {msg}
          </Styled>
        ))}
    </>
  );
};

export default AlertMsg;
