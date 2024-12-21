import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import AddLand from './components/AddLand';
import GetLandDetails from './components/GetLandDetails';
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/">Signin</Link>
            </li>
            <li>
              <Link to="/add-land">Add Land</Link>
            </li>
            <li>
              <Link to="/land-details">Get Land Details</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Signin />} />
          <Route path="/add-land" element={<AddLand />} />
          <Route path="/land-details" element={<GetLandDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
