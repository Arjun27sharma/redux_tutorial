import './App.css';
import Home from './Home';
import { useSelector } from 'react-redux'

function App() {
  const {c} = useSelector((state) => state.counter)

  return (
    <div className="App">
      <Home />
      <h2>from App.js -- {c}</h2>
    </div>
  );
}

export default App;
