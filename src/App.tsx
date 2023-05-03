import React from 'react';
import Switcher from './switcher';
import AppContextWrapper from './context';
import './App.scss';

function App() {
  return (
    <div className="App">
      <AppContextWrapper>
        <Switcher />
      </AppContextWrapper>
    </div>
  );
}

export default App;
