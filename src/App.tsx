import './App.css';
import {useState} from 'react';
import { RegisterCard } from './components/Register-Card/Register-Card';
import { Menu } from './components/Menu/Menu';

const App = ():JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false)
  
  let element = null
  if (!!menuOpen){
    element = <Menu  setMenuOpen={setMenuOpen} />
  }
  else{
    element = <RegisterCard setMenuOpen={setMenuOpen} />
  }
  return (
    <div className='App'>
      {element}
    </div>
    
  );
}

export default App;
