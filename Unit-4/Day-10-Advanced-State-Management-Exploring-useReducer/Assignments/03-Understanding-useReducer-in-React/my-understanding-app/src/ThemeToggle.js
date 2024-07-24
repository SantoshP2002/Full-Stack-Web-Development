import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
  const { state, dispatch } = useTheme();

  if (!state || !dispatch) {
    // Error handling if state or dispatch is not available
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>Current Theme: {state.theme}</p>
      <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggle;
