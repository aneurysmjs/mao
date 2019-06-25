import { createContext } from 'react';

export interface SelectedType { 
  col: string,
  row: string
};

interface AppContextType {
  handle: (SelectedType) => SelectedType;
};

export default createContext<AppContextType>({
  handle: ({ col, row }) => ({ col, row })
});
