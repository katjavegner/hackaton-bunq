import React, {Component} from 'react';
import {Row, Button, Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';

var Config = require('../config');

export default class FullCampaign extends Component {
  constructor(props) {
    super()

    this.state = {
      campaigns: []
    };
  }

  componentDidMount() {
    let url = Config.API + '/campaigns';

    fetch(url).then(response => response.json()).then(({campaigns}) => {
      this.setState({
        campaigns
      });
    });
  }

  render() {
    const {match} = this.props;

    function Campaigns(props) {
      const listItems = props.campaigns.map(({name, description, streak, min_price}) =>
        <tr>
          <td>{name}</td>
          <td>{description}</td>
          <td>{streak}</td>
          <td>{min_price}</td>
        </tr>
      );
      return (
        <tbody>{listItems}</tbody>
      );
    }

    return (
      <div className="ListOfCampaigns">
        <Row className="AllCampaigns">
          <Table responsive>
            <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Streak</th>
              <th>Min price</th>
            </tr>
            </thead>
            <Campaigns campaigns={this.state.campaigns} />
          </Table>
        </Row>
        <Row className="AddNewCampaign">
          <Button className="ButtonNewCampaign">
            <Link to={`${match.url}/new`}>add new campaign</Link>
          </Button>
        </Row>
      </div>
    );
  }
}
