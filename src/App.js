import Navbar from './navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
          <h1>Dashboard</h1>
      </div>
    </div>
  );
}

export default App;
