import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Map from './Map.jsx';
Markers = new Mongo.Collection("markers");
import AccountsUIWrapper from '../accounts/AccountsUIWrapper.jsx';
// App component - represents the whole app
class MapWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideCompleted: false,
    };
  }
  render() {
    return (
      <div >
        <header>

          <nav className="navbar navbar-default">
            <div className="container-fluid">
                <h1>Climb On</h1>
                <AccountsUIWrapper />
            </div>
          </nav>
        </header>

        <Map />

      </div>
    );
  }
}

export default createContainer((props) => {

     Meteor.subscribe('markers');
     return {
       poi: Markers.find({}, { sort: { createdAt: -1 } }).fetch()
     }
}, MapWrapper) ;
