
import { createContext } from 'react';

export interface SelectedType { [key: string]: string };

interface AppContextType {
  handle: (SelectedType) => SelectedType;
};

export default createContext<AppContextType>({
  handle: ({ col, row }) => ({ col, row })
});
