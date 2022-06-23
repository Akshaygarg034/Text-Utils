import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import FormText from './components/FormText';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, changeMode] = useState('light');
  const [alert, changeAlert] = useState(null);

  let showAlert = (msg, type) => {
    changeAlert({
      msg: msg,
      type: type
    })

    setTimeout(() => {
      changeAlert(null);
    }, 1200);
  }


  let changeTheme = () => {
    if (mode === 'light') {
      changeMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert('Dark mode enabled', 'success');
      document.title='Text Utils-DarkMode';
    }
    else {
      changeMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('light mode enabled', 'success')
      document.title='Text Utils';
    }
  }

  return (
    <>
      <Navbar changeTheme={changeTheme} />
      <Alert alert={alert} />
      <FormText heading='Enter the text below' mode={mode} showAlert={showAlert}/>
      {/* <About/> */}
    </>
  );
}

export default App;
