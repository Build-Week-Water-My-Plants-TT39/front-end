import React from 'react';

function Plant(props) {
  const { nickname, species, frequency } = props;
  return (
    <div>
      <h2>Nickname: {nickname}</h2>
      <ul>
        <li>Species:{species}</li>
        <li>Frequency:{frequency}</li>
      </ul>
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
