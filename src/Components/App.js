import React, {Fragment} from 'react';
import '../Style/App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Grid, Row, Col, PageHeader} from 'react-bootstrap';
import CompanyDescription from './CompanyDescription';
import Campaigns from './Campaigns';
import MainPage from './MainPage';
import Logo from '../Img/streakr.png'

const App = () => (
  <Grid fluid className="App">
    <Router>
      <Fragment>
        <Row className="MenuRow">
          <Col md={3} mdOffset={1}>
            <ul className="leftList">
              <li>
                <Link to="/company">Company details</Link>
              </li>
              <li>
                <Link to="/campaigns">Active campaigns</Link>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <PageHeader>
              <img alt="Streakr-logo" src={Logo} className="App-logo"/>
            </PageHeader>
          </Col>
          <Col md={3}>
            <ul className="rightList">
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/alwx">Alexander Pantiukhov</a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/gerasimov-a">Alexander Gerasimov</a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/katjavegner">Katja Vegner</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={10} mdOffset={1}>
            <Route exact path="/" component={MainPage}/>
            <Route path="/company" component={CompanyDescription}/>
            <Route path="/campaigns" component={Campaigns}/>
          </Col>
        </Row>
      </Fragment>
    </Router>
  </Grid>
);

export default App;