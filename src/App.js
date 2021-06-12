import { Route } from 'react-router';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './Components/pages/Home';
import Services from './Components/pages/Services';
import Contact from './Components/pages/Contact';
import Signup from './Components/pages/Signup';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/contact' component={Contact} />
        <Route path='/signup' component={Signup} />
      </Switch>
    </Router>
    
    </>
  );
}

export default App;
