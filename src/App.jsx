
import { useContext } from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import { Context } from './Context/Context';

function App() {
  const {id} = useContext(Context)

  return (
    <div className="App darkm lightm">
      <h1>{id}</h1>
   
      <Home />

    </div>
  );
}

export default App;
