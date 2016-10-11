import React, { Component } from 'react';

Markers = new Mongo.Collection("markers");

export default class CreateMarker extends React.Component {
    addMarker(event){
        event.preventDefault();
        console.log(this)
    }
  constructor(props) {
    super(props);
    this.state = {
        lat: 'Lat!',
        lng: 'Lng!',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
        <form>
            <input
              type="text"
              placeholder={this.state.lat}
            />
            <input
              type="text"
              placeholder={this.state.lng}
            />
            <button onSubmit={this.addMarker.bind(this)}>Submit</button>
        </form>

    );
  }
}
export default CreateMarker
