import React, { useEffect, useState } from 'react';
import { getContent } from '../../store/actions/Content';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { LogoNav } from './styles';
import logoR2D2 from '../../assets/r2d2.png';

const urls = [
  { name: 'People', url: 'http://swapi.dev/api/people/' },
  { name: 'Planets', url: 'http://swapi.dev/api/planets/' },
  { name: 'Species', url: 'http://swapi.dev/api/species/' },
  { name: 'Startships', url: 'http://swapi.dev/api/starships/' },
];

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [currentFilter, setCurrentFilter] = useState('People');

  useEffect(() => {
    dispatch(getContent());
  }, []);

  return (
    <Navbar bg='dark' expand='lg'>
      <LogoNav src={logoR2D2} alt='r2d2' />
      <Navbar.Brand bg='ligth' style={{ color: 'white' }}>
        Star Wars
      </Navbar.Brand>
      <Navbar id='basic-navbar-nav'>
        {urls.map((item) => {
          return (
            <Nav className='mr-auto'>
              <Nav.Link
                onClick={() => {
                  setCurrentFilter(item.name);
                  dispatch(getContent(item.url));
                  dispatch({ type: 'SET_CURRENT_PAGE', payload: 1 });
                  history.push(`/${item.name}`);
                }}
                style={{
                  color: currentFilter === item.name ? '#f7be2f' : 'white',
                }}
              >
                {item.name}
              </Nav.Link>
            </Nav>
          );
        })}
        <Nav>
          <Nav.Link
            style={{ marginLeft: '20px', color: '#3f88e7' }}
            onClick={() => history.push('/home/League')}
          >
            My Galactic League
          </Nav.Link>
        </Nav>
      </Navbar>
    </Navbar>
  );
};

export default Header;
