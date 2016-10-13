import React from 'react';
import SimpleMapPage from '../map/Map';



export const User = ({ params, location }) => (
  <div className="container">
    <h1>Hello, {params.name} </h1>

    <h2>Your current location: latitude: {location.query.lat}, longitude: {location.query.lng}.</h2>

    <SimpleMapPage />
  </div>
);

User.propTypes = {
  params: React.PropTypes.object,
  location: React.PropTypes.object,
};
