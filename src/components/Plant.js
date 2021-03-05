import React from 'react';

function Plant(props) {
  const { nickname, species, frequency } = props;
  return (
    <div id="plant-div">
      <h2>Nickname: {nickname}</h2>
      <div>
        <p>Species: {species}</p>
        <p>Frequency: {frequency}</p>
      </div>
      <div>
        <img
          alt={species}
          src={`https://source.unsplash.com/600x400/?${species}`}
        />
      </div>
    </div>
  );
}

export default Plant;
