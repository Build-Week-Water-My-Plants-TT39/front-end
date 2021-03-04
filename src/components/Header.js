import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { logoutUser } from './../actions/userActions';
import { connect } from 'react-redux';

const StyledHeader = styled.div`
  background-image: url('https://64.media.tumblr.com/0dc56db100ace1a17b621955eb9e0146/tumblr_okemrkmckY1ud1j0po3_1280.png');
  height: 20vh;
`;

const Header = (props) => {
  const { isLoggedIn } = props;
  return (
    <StyledHeader>
      <header>
        {!isLoggedIn && <NavLink to="/login">Login</NavLink>}
        <NavLink to="/signup">SignUp</NavLink>
        {isLoggedIn && (
          <NavLink to="/login" onClick={() => props.logoutUser()}>
            {' '}
            Logout
          </NavLink>
        )}
      </header>
    </StyledHeader>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

export default connect(mapStateToProps, { logoutUser })(Header);
