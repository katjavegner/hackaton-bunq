import React from 'react';
import { Switch, Route } from 'react-router-dom'
import FullCampaign from './FullCampaign';
import Campaign from './Campaign';

 const Campaigns = () => (
  <Switch>
    <Route exact path='/campaigns' component={FullCampaign} />
    <Route path='/campaigns/:campaignId' component={Campaign} />
  </Switch>
)
   
export default Campaigns