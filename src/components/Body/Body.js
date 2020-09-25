import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { ContainerPages } from './styles';
import { useParams } from 'react-router-dom';
import { getContent } from '../../store/actions/Content';
import SweetAlert from 'react-bootstrap-sweetalert';
import Details from '../Details/Details';
import { helper } from '../../helper/helper';

const Body = () => {
  let { Content, CurrentPage } = useSelector((state) => state.Content);
  const { tab } = useParams();
  const [currentDetails, setCurrentDetails] = useState('');
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    helper(tab) === null && localStorage.setItem(`${tab}`, JSON.stringify([]));
  }, [tab]);

  return (
    <Container style={{ marginTop: '20px' }}>
      {alert && (
        <SweetAlert
          onConfirm={() => {
            setAlert(false);
            setCurrentDetails(false);
          }}
        >
          <Details status={tab} content={currentDetails} />
        </SweetAlert>
      )}
      <Row>
        {Content.results
          ? Content.results.map((item) => {
              return (
                <Card
                  border='dark'
                  style={{ width: '13rem', margin: '6px' }}
                  onClick={() => {
                    setCurrentDetails(item);
                    setAlert(true);
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      <Col> {item.name}</Col>
                    </Card.Title>
                  </Card.Body>
                </Card>
              );
            })
          : null}
      </Row>
      <ContainerPages>
        {Content.previous && (
          <Button
            variant='warning'
            onClick={() => {
              const previousPage = (CurrentPage -= 1);
              dispatch(getContent(Content.previous));
              dispatch({
                type: 'SET_CURRENT_PAGE',
                payload: previousPage,
              });
            }}
          >
            Previous
          </Button>
        )}
        <h4 style={{ margin: '10px' }}>Page {CurrentPage}</h4>
        {Content.next && (
          <Button
            variant='warning'
            onClick={() => {
              const newPage = (CurrentPage += 1);
              dispatch(getContent(Content.next));
              dispatch({
                type: 'SET_CURRENT_PAGE',
                payload: newPage,
              });
            }}
          >
            Next
          </Button>
        )}
      </ContainerPages>
    </Container>
  );
};

export default Body;
