import React from 'react';
import '../Style/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Grid, Row, Col } from 'react-bootstrap';
import CompanyDescription from './CompanyDescription';
import Campaigns from './Campaigns';


const App = () => (
  <Grid>
    <Router>
      <Row>
        <Col xs={3}>
          <ul>
            <li>
              <Link to="/">Company</Link>
            </li>
            <li>
              <Link to="/campaigns">Campaigns</Link>
            </li>
        </ul>
        </Col>
        <Col xs={9}>
          <Route exact path="/" component={CompanyDescription} />
          <Route path="/campaigns" component={Campaigns} />
        </Col>
      </Row>
    </Router>
  </Grid>
);

export default App;