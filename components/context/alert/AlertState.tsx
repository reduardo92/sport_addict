import React, { useState } from 'react';
import { v4 } from 'uuid';
import AlertContext, { AlertProps } from './AlertContext';

const AlertState = ({ children }: any) => {
  // const [alerts, setAlerts] = useState<AlertProps[]>([]);
  const [alerts, setAlerts] = useState<AlertProps | null>(null);

  // Set Alert
  const setAlert = (msg: string, typeFor: string, timeout = 3000) => {
    const id = v4();
    // setAlerts([...alerts!, { msg, typeFor, id }]);
    setAlerts({ msg, typeFor, id });

    setTimeout(() => setAlerts(null), timeout);
  };

  // console.log('froma Alert', alerts);
  return (
    <AlertContext.Provider value={{ alerts, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertState;
