import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { logoutUser } from './../actions/userActions';
import { connect } from 'react-redux';

const StyledHeader = styled.div`
  background-image: url('https://64.media.tumblr.com/0dc56db100ace1a17b621955eb9e0146/tumblr_okemrkmckY1ud1j0po3_1280.png');
  height: 20vh;
  font-family: 'Shippori Mincho B1', serif;

    h1{
      font-size:4.2rem;
      color: #E6E4CF;
      text-shadow: 3px 3px #e4b297;
      margin-left: 2%;
    }

    nav{
      margin: auto 10% auto 0;
    }

    a{
      text-decoration: none;
      font-size: 1.8rem;
      padding: 10px 25px 10px 25px;
      margin-right: 20%;
      background-color: #E6E4CF;
      border-radius: 15px 15px;
      color: #363f34;

    }

    header{
      display:flex;
      justify-content: space-between;
    }
`;

const Header = (props) => {
  const { isLoggedIn } = props;
  return (
    <StyledHeader>
      <header>
        <h1>Water Your Plant App</h1>

        <nav>
        {!isLoggedIn && <NavLink to="/login">Login</NavLink>}
        <NavLink to="/signup">SignUp</NavLink>
        {isLoggedIn && (
          <NavLink to="/login" onClick={() => props.logoutUser()}>
            {' '}
            Logout
          </NavLink>
        )}
        </nav>
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
