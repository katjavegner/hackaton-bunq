import React, { Component, Fragment } from 'react';
import '../Style/CompanyDescription.css';
import {Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

export default class CompanyDescription extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleChange = this.handleChange.bind(this);
    
        this.state = {
            companyName: 'Test company',
            companyDescripton: 'Best test company ever',
            companyTransaction: ['Great Westerstraat', 'Lovely Jordaan'],
            companyContact:'suchcompany@muchwow.com'
        };
      }
    
    handleChange(e, stateChange) {
    this.setState({ [stateChange]: e.target.value });
    }

    render() {
      return (
        <Fragment className="companyPage">
            <FormGroup controlId="companyDescription">
                <Row className="companyName">
                    <Col xs={4} sm={4} md={4} lg={4}>
                        <ControlLabel className="inputDescription">Company name</ControlLabel>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4}>
                        <FormControl
                            className="inputField"
                            type="text"
                            value={this.state.companyName || ''}
                            onChange={(e)=>this.handleChange(e,'companyName')}
                        />
                    </Col>
                </Row>
                <Row className="companyDescirption">
                    <Col xs={4} sm={4} md={4} lg={4}>
                        <ControlLabel className="inputDescription">Company description</ControlLabel>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4}>
                        <FormControl
                            className="inputField"
                            type="text"
                            value={this.state.companyDescripton || ''}
                            onChange={(e)=>this.handleChange(e,'companyDescripton')}
                        />
                    </Col>
                </Row>
                <Row className="companyTransaction">
                    <Col xs={4} sm={4} md={4} lg={4}>
                        <ControlLabel className="inputMccCode">Transaction Name</ControlLabel>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4}>
                        <FormControl
                            className="inputField"
                            type="text"
                            value={this.state.companyTransaction || ''}
                            onChange={(e)=>this.handleChange(e,'companyTransaction')}
                        />
                    </Col>
                </Row>
                <Row className="companyContact">
                    <Col xs={4} sm={4} md={4} lg={4}>
                        <ControlLabel className="inputContact">Contact</ControlLabel>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4}>
                        <FormControl
                            className="inputField"
                            type="text"
                            value={this.state.companyContact || ''}
                            onChange={(e)=>this.handleChange(e,'companyContact')}
                        />
                    </Col>
                </Row>
            </FormGroup>
        </Fragment>
      );
    }
  }
