
import React, { createContext, useReducer, useContext } from 'react';


const initialState = { theme: 'light' };


const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
};


const ThemeContext = createContext();


export const useTheme = () => useContext(ThemeContext);


export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
