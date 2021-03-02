import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../src/components/LoginForm';

const App = () => {
  return (
    <div className="App">
      <h1>Water our plant app!</h1>
      <LoginForm/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, {})(App);
