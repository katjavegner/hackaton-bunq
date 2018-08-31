import React, { Component } from 'react';
import {Row, Col, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

export default class Campaign extends Component {
    constructor(props) {
        super()

        this.handleChange = this.handleChange.bind(this);
    
        this.state = {
            campaignName: 'Test company',
            campaignDescripton: 'Best test company ever',
            campaignTransaction: ['Great Westerstraat', 'Lovely Jordaan'],
            campaignContact:'suchcompany@muchwow.com'
        };
    }

    handleChange(e, stateChange) {
        this.setState({ [stateChange]: e.target.value });
        }
    
    render() {
        const { campaignId } = this.props.match.params
        let disabledInput =  campaignId !== "new" ? true : false 

        return (
            <FormGroup controlId="companyDescription">
            <Row className="campaignName">
                <Col xs={4} sm={4} md={4} lg={4}>
                    <ControlLabel className="inputDescription">Campaign name</ControlLabel>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4}>
                    <FormControl
                        className="inputField"
                        disabled = {disabledInput}
                        type="text"
                        value={this.state.campaignName || ''}
                        onChange={(e)=>this.handleChange(e,'campaignName')}
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
                        disabled = {disabledInput}
                        type="text"
                        value={this.state.campaignDescripton || ''}
                        onChange={(e)=>this.handleChange(e,'campaignDescripton')}
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
                        disabled = {disabledInput}
                        type="text"
                        value={this.state.campaignTransaction || ''}
                        onChange={(e)=>this.handleChange(e,'campaignTransaction')}
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
                        disabled = {disabledInput}
                        type="text"
                        value={this.state.campaignContact || ''}
                        onChange={(e)=>this.handleChange(e,'campaignContact')}
                    />
                </Col>
            </Row>
            {campaignId === "new" ? <Button type="Save">Submit</Button> :<Button type="Save">Disable</Button> }
        </FormGroup>
        );
    }
  }
