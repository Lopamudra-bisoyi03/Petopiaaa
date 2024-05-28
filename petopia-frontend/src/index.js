import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/index.css'; // Adjust the path to your index.css file
import Navbar from './components/Navbar'; // Adjust the path to your Navbar component
import Home from './pages/Home'; // Adjust the path to your Home component
import ShareStory from './pages/ShareStory'; // Adjust the path to your ShareStory component
import Login from './pages/Login'; // Adjust the path to your Login component
import Signup from './pages/Signup'; // Adjust the path to your Signup component
import Profile from './pages/Profile'; // Adjust the path to your Profile component
import './i18n'; // Adjust the path to your i18n file
import PrivateRoute from './components/PrivateRoute'; // Adjust the path to your PrivateRoute component
import ErrorBoundary from './components/ErrorBoundary'; // Adjust the path to your ErrorBoundary component
import { AuthProvider } from './context/AuthContext'; // Make sure AuthProvider is imported from the correct path
import Dashboard from './components/DashBoard'; // Adjust the path to your Dashboard component

const App = () => {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/share" component={ShareStory} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/profile" component={Profile} />
            {/* Use PrivateRoute to protect the dashboard route */}
            <PrivateRoute path="/dashboard" component={Dashboard} /> 
          </Switch>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
