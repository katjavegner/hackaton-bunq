import React, { Component, Fragment } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class FullCampaign extends Component {
    constructor(props) {
super()
      }
    render() {
        const { match } = this.props;
      return (
        <Fragment>  
            <Row>
                <Col xs={4}>
                    <h1>Campaigns</h1>
                </Col>
                <Col xsOffset={4} xs={4}>
                    <Button>
                        <Link to={`${match.url}/new`}>+ new campaign</Link>
                    </Button>
                </Col>
            </Row> 
            <Row>
                
                <Col xs={6}>
                    <Link to={`${match.url}/1`}>CampaignName</Link>
                </Col>
                <Col xsOffset={2} xs={4}>
                    <Button>Deactivate</Button>
                </Col>
            </Row>
        </Fragment>  
      );
    }
  }
