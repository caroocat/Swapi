import React from 'react';

export const People = (props) => {
  return (
    <div>
      <p>{`name: ${props.name}`}</p>
      <p>{`height: ${props.height}`}</p>
      <p>{`mass: ${props.mass}`}</p>
      <p>{`hair color: ${props.hair_color}`}</p>
      <p>{`eye color: ${props.skin_color}`}</p>
      <p>{`birth year: ${props.eye_color}`}</p>
      <p>{`gender: ${props.gender}`}</p>
    </div>
  );
};

export const Planets = (props) => {
  return (
    <div>
      <p>{`name: ${props.name}`}</p>
      <p>{`rotation period: ${props.rotation_period}`}</p>
      <p>{`orbital period: ${props.orbital_period}`}</p>
      <p>{`diameter: ${props.diameter}`}</p>
      <p>{`climate: ${props.climate}`}</p>
      <p>{`gravity: ${props.gravity}`}</p>
      <p>{`terrain: ${props.terrain}`}</p>
      <p>{`surface water: ${props.surface_water}`}</p>
      <p>{`population: ${props.population}`}</p>
    </div>
  );
};

export const Species = (props) => {
  return (
    <div>
      <p>{`name: ${props.name}`}</p>
      <p>{`classification: ${props.classification}`}</p>
      <p>{`designation: ${props.designation}`}</p>
      <p>{`average height: ${props.average_height}`}</p>
      <p>{`skin color: ${props.skin_colors}`}</p>
      <p>{`eye color: ${props.eye_colors}`}</p>
      <p>{`average lifespan: ${props.average_lifespan}`}</p>
      <p>{`language: ${props.language}`}</p>
    </div>
  );
};

export const Startships = (props) => {
  return (
    <div>
      <p>{`name: ${props.name}`}</p>
      <p>{`model: ${props.model}`}</p>
      <p>{`manufacturer: ${props.manufacturer}`}</p>
      <p>{`cost in credits: ${props.cost_in_credits}`}</p>
      <p>{`length: ${props.length}`}</p>
      <p>{`max speed: ${props.max_atmosphering_speed}`}</p>
      <p>{`cre: ${props.crew}`}</p>
      <p>{`passangers: ${props.passengers}`}</p>
      <p>{`cargo capacity: ${props.cargo_capacity}`}</p>
      <p>{`consumables: ${props.consumables}`}</p>
      <p>{`hyperdrive rating: ${props.hyperdrive_rating}`}</p>
      <p>{`mglt: ${props.MGLT}`}</p>
      <p>{`starship class: ${props.starship_class}`}</p>
    </div>
  );
};
