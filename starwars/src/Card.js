import React from 'react';
//

export default function Card(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.starState.name}</h1>
      <ul>
        <li>Height: {props.starState.height}</li>
        <li>Mass: {props.starState.mass}</li>
      </ul>
      <h3>Hair Color: {props.starState.hair_color}</h3>
      <h3>Eye Color: {props.starState.eye_color}</h3>
      <h3>Birth Year: {props.starState.birth_year}</h3>
      <h3>Gender: {props.starState.gender}</h3>
      <h3>Homeworld: {props.starState.homeworld}</h3>
      <h3>Films: {props.starState.films}</h3>
    </div>
  );
}
