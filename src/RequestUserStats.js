import React from 'react';

import axios from 'axios';

export default class RequestUserStats extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      defaultModes:[]
    }
  }

  componentDidMount() {
    let url = `https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats_v2?user_id=`;
    url += this.props.uid;

    axios.get(url)
      .then(res => {
        const data = res.data;
        const defaultModes = res.data.overallData.defaultModes;
        this.setState({ data, defaultModes });
      })
  }

  render() {
    const { data, overallData, defaultModes } = this.state;
    return (
      <div>
        {data.epicName && <p>Epic Name : {data.epicName}</p>}
        <ul>
          {defaultModes.placetop1 && <li>Wins : {defaultModes.placetop1}</li>}
          {defaultModes.kills && <li>Kills : {defaultModes.kills}</li>}
          {defaultModes.matchesplayed && <li>Matches Played : {defaultModes.matchesplayed}</li>}
        </ul>
      </div>
    )
  }
}
