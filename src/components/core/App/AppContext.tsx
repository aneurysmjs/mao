import { createContext } from 'react';

export interface SelectedType {
  [key: string]: string;
}

interface AppContextType {
  handle: (item: SelectedType) => SelectedType;
}

export default createContext<AppContextType>({
  handle: ({ col, row }) => ({ col, row }),
});
