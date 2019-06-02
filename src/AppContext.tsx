
import { createContext } from 'react';

export type SelectedType = { [key: string]: string };

type AppContextType = {
  handle: (SelectedType) => SelectedType;
};

export default createContext<AppContextType>({
  handle: ({ col, row }) => ({ col, row })
});
