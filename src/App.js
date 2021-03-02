import React from 'react';
import { connect } from 'react-redux';

const App = () => {
  return (
    <div className="App">
      <h1>Water our plant app!</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, {})(App);
