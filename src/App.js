import "./styles.css";
import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box } from "@chakra-ui/react";
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
      <ChakraProvider theme={theme}>
        <Router>
          <Navbar />
          <Box mt="70px">
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
          </Box>
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
