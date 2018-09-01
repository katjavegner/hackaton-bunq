import React, {Component} from 'react';
import {Row, Col, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

var Config = require('../config');

export default class Campaign extends Component {
  constructor(props) {
    super()

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: 'Coffee Lover',
      description: 'Buy 5 cups of coffee and got 1 for free!',
      transaction: 'Albert Heijn',
      achievementImage: '',
      streak: '5',
      minPrice: '2'
    };
  }

  onCampaignSubmit() {
    let url = Config.API + '/campaigns';

    let campaign = {
      name: this.state.name,
      description: this.state.description,
      transaction: this.state.transaction,
      badge_image_url: this.state.achievementImage,
      streak: parseInt(this.state.streak),
      min_price: parseFloat(this.state.minPrice),
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        campaign
      })
    }).then(response => response.json()).then((repos) => {
      window.location = "/campaigns";
    });
  }

  handleChange(e, stateChange) {
    this.setState({[stateChange]: e.target.value});
  }

  render() {
    const {campaignId} = this.props.match.params
    let disabledInput = campaignId !== "new"

    return (
      <FormGroup controlId="campaign" className="Campaign">
        <Row>
          <Col md={4}>
            <ControlLabel className="inputDescription">Campaign name</ControlLabel>
          </Col>
          <Col md={8}>
            <FormControl
              className="inputField"
              disabled={disabledInput}
              type="text"
              value={this.state.name || ''}
              onChange={(e) => this.handleChange(e, 'name')}
            />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <ControlLabel className="inputDescription">Campaign description</ControlLabel>
          </Col>
          <Col md={8}>
            <FormControl
              className="inputField"
              disabled={disabledInput}
              type="text"
              value={this.state.description || ''}
              onChange={(e) => this.handleChange(e, 'description')}
            />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <ControlLabel className="inputMccCode">Transaction Name</ControlLabel>
          </Col>
          <Col md={8}>
            <FormControl
              className="inputField"
              disabled={disabledInput}
              type="text"
              value={this.state.transaction || ''}
              onChange={(e) => this.handleChange(e, 'transaction')}
            />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <ControlLabel className="inputAchievementImage">Achievement Image</ControlLabel>
          </Col>
          <Col md={8}>
            <FormControl
              className="inputField"
              disabled={disabledInput}
              type="text"
              value={this.state.achievementImage || ''}
              onChange={(e) => this.handleChange(e, 'achievementImage')}
            />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <ControlLabel className="inputStreak">Streak</ControlLabel>
          </Col>
          <Col md={8}>
            <FormControl
              className="inputField"
              disabled={disabledInput}
              type="number"
              value={this.state.streak || ''}
              onChange={(e) => this.handleChange(e, 'streak')}
            />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <ControlLabel className="inputMinPrice">Minimal Price</ControlLabel>
          </Col>
          <Col md={8}>
            <FormControl
              className="inputField"
              disabled={disabledInput}
              type="number"
              value={this.state.minPrice || ''}
              onChange={(e) => this.handleChange(e, 'minPrice')}
            />
          </Col>
        </Row>
        {campaignId === "new" ?
          <Button className="ButtonNewCampaign" onClick={this.onCampaignSubmit.bind(this)}>Submit</Button> :
          <Button className="ButtonDeactivate">Disable</Button>}
      </FormGroup>
    );
  }
}
