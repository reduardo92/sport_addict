import { createContext } from 'react';

export interface AlertProps {
  msg: string;
  typeFor: string;
  id: string;
}

export const alertInitialState: AlertStateProps = {
  alerts: [],
};

export interface AlertStateProps {
  alerts: AlertProps[];
  setAlert?: (msg: string, typeFor: string, timeout?: number) => void;
}

const AlertContext = createContext<AlertStateProps>(alertInitialState);

export default AlertContext;
