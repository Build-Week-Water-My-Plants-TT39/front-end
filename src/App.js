import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './components/LoginForm';
import Header from '../src/components/Header';
import UserForm from './components/UserForm';
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import PlantScreen from './components/PlantScreen';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Route path="/login">
        <LoginForm />
      </Route>
      <Route path="/signup">
        <UserForm />
      </Route>
      <PrivateRoute path="/plants" component={PlantScreen} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, {})(App);
