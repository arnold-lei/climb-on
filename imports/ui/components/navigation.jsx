import React from 'react';
import { IndexLink, Link } from 'react-router';

export const Navigation = () => (
  <ul>
    <li><IndexLink to="/" activeClassName="active">Index</IndexLink></li>
    <li><Link to="/marker" activeClassName="active">Marker</Link></li>
    <li><Link to="/map" activeClassName="active">Map</Link></li>

  </ul>
);
