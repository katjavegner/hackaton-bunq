import React, { Component } from 'react';
import { Row, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class FullCampaign extends Component {
    constructor(props) {
super()
      }
    render() {
        const { match } = this.props;
      return (
        <div className="ListOfCampaigns">  
            <Row className="AddNewCampaign">
                <Button className="ButtonNewCampaign">
                    <Link to={`${match.url}/new`}>add new campaign</Link>
                </Button>
            </Row> 
            <Row className="AllCampaigns">
                <Table responsive>
                    <thead>
                        <tr>
                        <th>Campaign name</th>
                        <th>Campaign description</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td><Link to={`${match.url}/1`}>CampaignName</Link></td>
                        <td>Table cell</td>
                        <td><Button className="ButtonDeactivate">deactivate</Button></td>    
                        </tr>
                        <tr>
                        <td><Link to={`${match.url}/2`}>CampaignName</Link></td>
                        <td>Table cell</td>
                        <td><Button className="ButtonDeactivate">deactivate</Button></td>
                        </tr>
                    </tbody>
                </Table>              
            </Row>
        </div>  
      );
    }
  }
