
import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import ThemeToggle from './ThemeToggle';

const App = () => {
  const { state } = useTheme();

  return (
    <ThemeProvider>
      <div
        style={{
          backgroundColor: state.theme === 'light' ? '#fff' : '#333',
          color: state.theme === 'light' ? '#000' : '#fff',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <h1>Theme Toggler</h1>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default App;
