import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import FormText from './components/FormText';
import About from './components/About';
import { useState } from 'react';

function App() {
  const [mode, changeMode] = useState('light');

  let changeTheme = () => {
    if (mode === 'light') {
      changeMode('dark');
      document.body.style.backgroundColor='gray';
    }
    else {
      changeMode('light');
      document.body.style.backgroundColor='white';

    }
  }

  return (
    <>
      <Navbar changeTheme={changeTheme} />
      <FormText heading='Enter the text below' mode={mode} />
      {/* <About/> */}
    </>
  );
}

export default App;
