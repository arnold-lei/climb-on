
import React, { Component } from 'react';


import {greatPlaceStyle} from './my_great_place_styles';

export default class MyGreatPlace extends Component {
  // static propTypes = {
  //   text: PropTypes.string
  // };
  //
  // static defaultProps = {};
  //
  // shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
       <div style={greatPlaceStyle}>
          {this.props.text}
       </div>
    );
  }
}
