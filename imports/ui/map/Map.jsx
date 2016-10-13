import React, { Component } from 'react';

import GoogleMap from 'google-map-react';
import MyGreatPlace from './my_great_places';

var divStyle = {
  width:'100%',
  height:768
};
const K_WIDTH = 40;
const K_HEIGHT = 40;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: '5px solid #f44336',
  borderRadius: K_HEIGHT,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4
};


class SimpleMapPage extends React.Component {
  //shouldComponentUpdate = shouldPureComponentUpdate;
  constructor(props) {
    super(props);
    this.state = {
     defaultCenter: {lat: 40.7128, lng: -74.0059},
     zoom: 12,
     greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
   };
  }

  render() {
    return (
       <div style={divStyle}>
       <GoogleMap
        bootstrapURLKeys={{
          key: 'AIzaSyDAQIZigb4sd4EIMVeDZ1jxdx8tH9QRyEM',
          language: 'us'
        }}
        center={this.state.center}
        zoom={this.state.zoom}
        defaultCenter={this.state.defaultCenter}
        defaultZoom={this.state.zoom}
        >
        <MyGreatPlace lat={40.7128} lng={-74.0059} text={'New York'} /* Kreyser Avrora */ />
      </GoogleMap>
      </div>
    );
  }
}

export default SimpleMapPage
