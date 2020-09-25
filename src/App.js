import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import MyGalactic from './components/MyGalacticLeague/MyGalacticLeague';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Route path='/:tab' exact component={Body} />
        <Route path='/home/League' component={MyGalactic} />
        <Redirect from='/' to='/People' />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
