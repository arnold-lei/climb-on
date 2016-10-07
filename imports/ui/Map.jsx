import React, { Component } from 'react';

import GoogleMap from 'google-map-react';
import MyGreatPlace from './my_great_places';

export default class Map extends Component {
  // SimplpropTypes = {
  //   center: PropTypes.array,
  //   zoom: PropTypes.number,
  //   greatPlaceCoords: PropTypes.any
  // };
  //
  // static defaultProps = {
  //   center: [59.938043, 30.337157],
  //   zoom: 9,
  //   greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  // };
  constructor(props) {
    super(props);
    this.state = {
          center: [59.938043, 30.337157],
          zoom: 9,
          greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
    }
  }

  render() {
    return (
           <GoogleMap className="map-container"
               bootstrapURLKeys={{
                key: "AIzaSyDAQIZigb4sd4EIMVeDZ1jxdx8tH9QRyEM",
                language: "english",
                center: {lat: 59.724465, lng: 30.080121},
                // zoom: 9
              }}
            center={this.state.center}
            zoom={this.state.zoom}>
            <MyGreatPlace lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
            <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} /* road circle */ />
          </GoogleMap>
    );
  }
}
