import { useState } from 'react';

import Title from './components/Title';
import './App.css';

function App() {
  const [isOpened, setOpened] = useState(false);

  const handleOpening = (): void => {
    setOpened(prevState => !prevState);
  };

  return (
    <div>
      {isOpened ? 
      <> <Title name="Products" type="bold" /><Title name="Employees" type="normal" /> </> : 
      <button onClick={handleOpening}>Open title</button>}
    </div>
  );
}

export default App;
