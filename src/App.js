import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import FormText from './components/FormText';

function App() {
  return (
    <>
      <Navbar />
      <FormText heading='Enter the text below'/>
    </>
  );
}

export default App;
