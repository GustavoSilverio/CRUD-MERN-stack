import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Template from './Pages/Template/Template';

function App() {
  return (
    <div className="App">
      <Router>
        <Template/>
      </Router>
    </div>
  );
}

export default App;
