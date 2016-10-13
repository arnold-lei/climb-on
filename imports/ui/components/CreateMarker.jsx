import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Markers } from '../../api/markers.js';

export default class CreateMarker extends TrackerReact(React.Component) {
    markers(){
        return Method.call(Markers.find()).fetch();
    }

    addMarker(event){
        event.preventDefault();
        var name = this.refs.name.value.trim();
        var lat = this.refs.lat.value.trim();
        var lng = this.refs.lng.value.trim();
        console.log(name, lat, lng);
        Meteor.call('Markers.insert', name, lat, lng);
        // console.log(Markers)
        this.refs.name.value = "";
        this.refs.lat.value = "";
        this.refs.lng.value = "";
    }
  constructor(props) {
    super(props);
    this.state = {
        lat: 'Lat!',
        lng: 'Lng!',
        name: 'Name',
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  render() {
    // console.log(this.markers())
    return (
        <form className="form" onSubmit={this.addMarker.bind(this)}>
            <input
              type="text"
              placeholder={this.state.name}
              ref="name"
            />
            <input
              type="text"
              placeholder={this.state.lat}
              ref="lat"
            />
            <input
              type="text"
              placeholder={this.state.lng}
              ref="lng"
            />
            <button >Submit</button>
        </form>

    );
  }
}
// export default createContainer((props) => {
//
//      Meteor.subscribe('markers');
//      return {
//        bin: Bins.findOne(binId)
//      }
// }, Markers) ;
