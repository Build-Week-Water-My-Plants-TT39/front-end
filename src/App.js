import React from 'react';
import { connect } from 'react-redux';
import UserForm from './components/UserForm'
import LoginForm from './components/LoginForm'
import PlantForm from './components/PlantForm'


const App = () => {
  return (
    <div className="App">
      <h1>Water our plant app!</h1>
      <PlantForm /> 
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, {})(App);
