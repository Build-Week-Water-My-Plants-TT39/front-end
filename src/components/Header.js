import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { logoutUser } from './../actions/userActions';
import { connect } from 'react-redux';

const StyledHeader = styled.div`
  background-image: url('https://i2.wp.com/wallpaperboat.com/wp-content/uploads/2020/04/green-aesthetic-wallpaper-download.jpg');
  height: 20vh;
  font-family: 'Shippori Mincho B1', serif;
  border-radius: 15px;

  h1 {
    font-size: 4.2rem;
    color: #e6e4cf;
    text-shadow: 3px 3px #ab8a6f;
    margin-left: 2%;
  }

  h1::selection {
    color: #353b3c;
  }

  nav {
    margin: auto 0.5% auto 0;
    width: 35%;
  }

  a {
    text-decoration: none;
    font-size: 1.8rem;
    padding: 10px 25px 10px 25px;
    margin-right: 20%;
    background-color: #e6e4cf;
    border-radius: 15px 15px;
    color: #363f34;
  }

  header {
    display: flex;
    justify-content: space-between;
  }
`;

const Header = (props) => {
  const { isLoggedIn, userId } = props;

  return (
    <StyledHeader>
      <header>
        <h1>Water Your Plant App</h1>

        <nav>
          {!isLoggedIn ? (
            <NavLink className="navlink" to="/login">
              Login
            </NavLink>
          ) : (
            <NavLink className="navlink" to={`/plants/${userId}`}>
              My Plants
            </NavLink>
          )}
          {!isLoggedIn ? (
            <NavLink className="navlink" to="/signup">
              Sign Up
            </NavLink>
          ) : (
            <NavLink
              className="navlink"
              to="/login"
              onClick={() => props.logoutUser()}>
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
    userId: state.user.user?.user_id,
  };
};

export default connect(mapStateToProps, { logoutUser })(Header);
