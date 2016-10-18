
import React, { Component } from 'react';

class GoogleMap extends React.Component {

  componentDidMount() {

  }
  render() {

    console.log(google.map)
    return (
    <div>
        <h1>Map</h1>
        <div id="map" className="map-container"></div>
    </div>

    );
  }
};

export default GoogleMap;
