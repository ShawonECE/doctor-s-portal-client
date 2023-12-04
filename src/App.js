import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './Components/Landing/Home/Home';
import NavigationBar from './Components/NavigationBar/NavigationBar';


function App() {
  return (
    <Router>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
