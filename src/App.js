import "./styles.css";
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import WhyPlum from './pages/whyplum';
import Features from './pages/features';
import Contact from './pages/contactus';
import Login from './pages/login';
import SignUp from './pages/signup';

  
function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/whyplum' component={WhyPlum} />
        <Route path='/features' component={Features} />
        <Route path='/contactus' component={Contact} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
      </Switch>
    </Router>
    </div>
  );
}
  
export default App;
