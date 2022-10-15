import { createContext } from 'react';
import { tasks } from '../data/tasks';

export const BusinessContext = createContext();

const BusinessContextProvider = ({ children }) => {
  return <BusinessContext.Provider value={tasks}>{children}</BusinessContext.Provider>;
};

export default BusinessContextProvider;
