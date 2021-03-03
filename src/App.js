import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './components/LoginForm';
import Header from '../src/components/Header';
import UserForm from './components/UserForm';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import PlantScreen from './components/PlantScreen';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route>
          <UserForm path="/signup" />
        </Route>
        <PrivateRoute path="/plants" component={PlantScreen} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, {})(App);
