import React from 'react';
import { connect } from 'react-redux';
import UserForm from './components/UserForm';
import LoginForm from './components/LoginForm';
import PlantForm from './components/PlantForm';
import Header from '../src/components/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <LoginForm />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, {})(App);
