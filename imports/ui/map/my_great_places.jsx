//
// import React, { Component } from 'react';
//
//
import {greatPlaceStyle} from './my_great_place_styles';
//
// export default class MyGreatPlace extends Component {
//   // static propTypes = {
//   //   text: PropTypes.string
//   // };
//   //
//   // static defaultProps = {};
//   //
//   // shouldComponentUpdate = shouldPureComponentUpdate;
//
//   render() {
//     return (
//        <div style={greatPlaceStyle}>
//           {this.props.text}
//        </div>
//     );
//   }
// }
import React, {PropTypes, Component} from 'react';


// import {greatPlaceStyle, greatPlaceStyleHover} from './my_great_place_with_controllable_hover_styles.js';

export default class MyGreatPlace extends Component {

  // shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);

      this.propTypes= {
        // use hover from controllable
        hover: PropTypes.bool,
        text: "Something to click on"
    },
        this.defaultProps = {}
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
