import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { helper, setData } from '../../helper/helper';
import { AddItems, TitleGalactic, Colums } from '../Body/styles';

const MyGalactic = () => {
  const [people, setPeople] = useState(helper('People') || null);

  const [planets, setPlanets] = useState(helper('Planets') || null);

  const [species, setSpecies] = useState(helper('Species') || null);

  const [startships, setStartships] = useState(helper('Startships' || null));

  return (
    <Container>
      <TitleGalactic>My Galactic League</TitleGalactic>
      <Row>
        {people.length >= 1 ? (
          <Colums>
            <h4>Characters</h4>
            {people.map((item) => (
              <React.Fragment>
                <Card border='dark' style={{ width: '13rem', margin: '5px' }}>
                  <Card.Body>
                    <Card.Title>
                      <Col> {item.name}</Col>
                    </Card.Title>
                    <Button
                      onClick={() => setPeople(setData('People', item.name))}
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              </React.Fragment>
            ))}
          </Colums>
        ) : (
          <AddItems>
            <h4>Add Characters</h4>
          </AddItems>
        )}
        {planets.length >= 1 ? (
          <Colums>
            <h4>Planets</h4>
            {planets.map((item) => (
              <React.Fragment>
                <Card border='dark' style={{ width: '13rem', margin: '5px' }}>
                  <Card.Body>
                    <Card.Title>
                      <Col> {item.name}</Col>
                    </Card.Title>
                    <Button
                      onClick={() => setPlanets(setData('Planets', item.name))}
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              </React.Fragment>
            ))}
          </Colums>
        ) : (
          <AddItems>
            <h4>Add Planets</h4>
          </AddItems>
        )}
        {species.length >= 1 ? (
          <Colums>
            <h4>Races</h4>
            {species.map((item) => (
              <React.Fragment>
                <Card border='dark' style={{ width: '13rem', margin: '5px' }}>
                  <Card.Body>
                    <Card.Title>
                      <Col> {item.name}</Col>
                    </Card.Title>
                    <Button
                      onClick={() => setSpecies(setData('Species', item.name))}
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              </React.Fragment>
            ))}
          </Colums>
        ) : (
          <AddItems>
            <h4>Add Races</h4>
          </AddItems>
        )}
        {startships.length >= 1 ? (
          <Colums>
            <h4>Startships</h4>
            {startships.map((item) => (
              <React.Fragment>
                <Card border='dark' style={{ width: '13rem', margin: '5px' }}>
                  <Card.Body>
                    <Card.Title>
                      <Col> {item.name}</Col>
                    </Card.Title>
                    <Button
                      onClick={() =>
                        setStartships(setData('Startships', item.name))
                      }
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              </React.Fragment>
            ))}
          </Colums>
        ) : (
          <AddItems>
            <h4>Add Startships</h4>
          </AddItems>
        )}
      </Row>
    </Container>
  );
};

export default MyGalactic;
