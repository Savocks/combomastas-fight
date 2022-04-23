import React from 'react';
const initialState = { open: false };
const DrawerContext = React.createContext(undefined);
function drawerReducer(state, action) {
  switch (action.type) {
    case 'open': {
      return { open: true };
    }
    case 'close': {
      return { open: false };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function DrawerProvider({ children }) {
  const [state, dispatch] = React.useReducer(drawerReducer, initialState);
  const value = { state, dispatch };
  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  );
}

function useDrawer() {
  const context = React.useContext(DrawerContext);
  if (context === undefined) {
    throw new Error('useDrawer must be used within a DrawerProvider');
  }
  return context;
}

export { DrawerProvider, useDrawer };
