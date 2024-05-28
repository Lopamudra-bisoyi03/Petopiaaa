import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ShareStory from './pages/ShareStory';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/share" component={ShareStory} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
};

export default App;
