import { createContext } from 'react';
export const FightDrawerContext = createContext({
  open: false,
  toggleOpen: () => {},
});
