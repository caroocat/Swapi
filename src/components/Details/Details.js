import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { People, Planets, Species, Startships } from '../Common/PopUps';
import { Button } from 'react-bootstrap';
import { helper } from '../../helper/helper';

const Details = ({ status, content }) => {
  const [sameSpecies, setsameSpecies] = useState(false);

  const race = helper('Species') || [];

  const getSpecies = async () => {
    try {
      if (
        !content.species.length &&
        race.some((item) => item.name === 'Human')
      ) {
        setsameSpecies(true);
      } else {
        const { data } = await axios.get(`${content.species}`);
        if (race.some((item) => item.name === data.name)) {
          setsameSpecies(true);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    content.species && getSpecies();
  }, []);

  const newGalacticItem = (tab, item) => {
    let getItem = helper(`${tab}`) || [];
    getItem.push(item);
    localStorage.setItem(`${tab}`, JSON.stringify(getItem));
  };

  return (
    <div>
      {status === 'People' && People(content)}
      {status === 'Planets' && Planets(content)}
      {status === 'Species' && Species(content)}
      {status === 'Startships' && Startships(content)}
      <MemberShip
        sameSpecies={sameSpecies}
        status={status}
        newGalacticItem={newGalacticItem}
        content={content}
        func={newGalacticItem}
      />
    </div>
  );
};

const MemberShip = ({ sameSpecies, status, func, content }) => {
  const [flag, setFlag] = useState(false);

  if (helper(`${status}`).some((keys) => keys.name === content.name)) {
    return <p>this item is already in the galactic league</p>;
  }

  if (status === 'People') {
    if (helper(status).length >= 6) return <p>There can be only 6 Persons </p>;

    if (!sameSpecies)
      return <p>you need to choose a species first to be able to add people</p>;
  }

  if (status === 'Species') {
    if (helper(status).length >= 3) return <p>There can be only 3 Species</p>;
  }

  if (status === 'Startships') {
    if (helper(status).length >= 3)
      return <p>There can be only 3 Startships</p>;
  }

  if (status === 'Planets') {
    if (helper(status).length >= 2) return <p>There can be only 2 Planets</p>;
  }

  return (
    <React.Fragment>
      {!flag && (
        <Button
          variant='warning'
          onClick={() => {
            func(status, content);

            setFlag(true);
          }}
        >
          add to my galactic league
        </Button>
      )}
    </React.Fragment>
  );
};

export default Details;
