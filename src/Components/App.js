import React, {Fragment} from 'react';
import '../Style/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import CompanyDescription from './CompanyDescription';
import Campaigns from './Campaigns';
import MainPage from './MainPage';
import Logo from '../Img/streakr.png'

const App = () => (
  <Grid fluid className="App">
    <Router>
      <Fragment>
      <Row class="MenuRow">
        <Col xs={3}>
          <ul className="leftList">
            <li>
              <Link to="/company">Company</Link>
            </li>
            <li>
              <Link to="/campaigns">Campaigns</Link>
            </li>
        </ul>
        </Col>
        <Col xs={6}>
          <PageHeader>
            <img alt="Streakr-logo" src={Logo} className="App-logo" />
            <small className="App-header">Get your streakr right now</small>
          </PageHeader>
          </Col>
          <Col xs={3}>
          <ul className="rightList">
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/alwx">Alex P</a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/gerasimov-a">Alex G</a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/katjavegner">Katja V</a>
            </li>
        </ul>
          </Col>
        </Row>
        <Row>
        <Col xs={10} xsOffset={1}>
        
          <Route exact path="/" component={MainPage} />
          <Route path="/company" component={CompanyDescription} />
          <Route path="/campaigns" component={Campaigns} />
        </Col>
      </Row>
      </Fragment>
    </Router>
  </Grid>
);

export default App;