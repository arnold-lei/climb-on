import React, { Component } from 'react';

class MapRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        lat: 'Lat!',
        lng: 'Lng!',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
        <form>
            <input
              type="text"
              value={this.state.lat}
              onChange={this.handleChange}
            />
            <input
              type="text"
              value={this.state.lng}
              onChange={this.handleChange}
            />
            <button>Submit</button>
        </form>

    );
  }
}
export default MapRoute
