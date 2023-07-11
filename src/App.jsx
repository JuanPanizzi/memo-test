import '../src/styles/App.scss'
/* The following line can be included in a src/App.scss */
import 'bootstrap/dist/css/bootstrap.min.css';
import { Memotest } from './componentes/Memotest'
import luna from './imagenes/luna-rosa.png';
import sol from './imagenes/sol-rosa.png';
import { useState } from 'react';
import { Button } from './componentes/Button';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const handleMode = ()=> setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'ctn-memotest-dark' : 'ctn-memotest-light'}>
    {<Button imagen={darkMode ? sol : luna} handleMode={handleMode} darkMode={darkMode}/>}
    <Memotest  />
    </div>
  )
}

export default App
