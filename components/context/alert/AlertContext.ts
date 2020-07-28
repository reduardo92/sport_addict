import { createContext } from 'react';

export interface AlertProps {
  msg: string;
  typeFor: string;
  id: string;
}

export const alertInitialState: AlertStateProps = {
  alerts: null,
};

export interface AlertStateProps {
  alerts: AlertProps | null;
  setAlert?: (msg: string, typeFor: string, timeout?: number) => void;
}

const AlertContext = createContext<AlertStateProps>(alertInitialState);

export default AlertContext;
