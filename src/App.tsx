import './App.css';
import {useState} from 'react';
import { RegisterCardForm } from './components/Register-Card-Form/Register-Card-Form';
import { Menu } from './components/Menu/Menu';

const App = ():JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false)
  
  let element = null
  if (!!menuOpen){
    element = <Menu  setMenuOpen={setMenuOpen} />
  }
  else{
    element = <RegisterCardForm setMenuOpen={setMenuOpen} />
  }
  return (
    element
  );
}

export default App;
