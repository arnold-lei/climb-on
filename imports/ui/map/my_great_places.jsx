
import {greatPlaceStyle, greatPlaceStyleHover}from './my_great_place_styles';
import React, {PropTypes, Component} from 'react';

export default class MyGreatPlace extends Component {


  constructor(props) {
    super(props);

      this.state= {
          hover: PropTypes.bool,
          text: PropTypes.string
    }
  }

  render() {
    const style = this.props.hover ? greatPlaceStyleHover : greatPlaceStyle;

    return (
       <div className="hint hint--html hint--info hint--top" style={style}>
          <div>{this.props.text}</div>
          <div style={{width: 80}} className="hint__content">
          Сlick me
          </div>
       </div>
    );
  }
}
