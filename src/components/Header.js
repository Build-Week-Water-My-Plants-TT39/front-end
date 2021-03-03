import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`

background-image: url('https://64.media.tumblr.com/0dc56db100ace1a17b621955eb9e0146/tumblr_okemrkmckY1ud1j0po3_1280.png');
height: 20vh;

`

const Header = () => {
  return (
    <StyledHeader>
      <header>
        <h1>Water Your Plant</h1>
      </header>
    </StyledHeader>
  );
};

export default Header;
