import React from 'react';
import logo from './FortniteLogo.svg';
import Form from './Form';
import axios from 'axios';
import RequestUserStats from './RequestUserStats';

import './App.css';

const initialState = {
  value: '',
  gamertag: '',
  uid:'',
};

export default class App extends React.Component {
  constructor(){
    super()
    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  reset() {
    this.setState(initialState);
  }

  handleSubmit(event) {
    this.reset()
    let url = `https://fortnite-public-api.theapinetwork.com/prod09/users/id?username=`;
    url += this.state.value;

    axios.get(url)
      .then(res => {
        const data = res.data;
        this.setState({ uid: data.uid, gamertag: data.username });
      })

    event.preventDefault();
  }

  render() {
    const {uid} = this.state;
    const isUid = uid;

    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Find User Stats : Enter Your Epic Gamertag</p>
        <Form
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
        />
        {isUid ?
          <RequestUserStats uid = {uid} />
          :
          ''
        }
      </div>
    );
  }
}
