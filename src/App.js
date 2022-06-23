import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import FormText from './components/FormText';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar />
      {/* <FormText heading='Enter the text below'/> */}
      <About/>
    </>
  );
}

export default App;
