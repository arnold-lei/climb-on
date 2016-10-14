import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
Markers = new Mongo.Collection("markers");

export default class CreateMarker extends TrackerReact(React.Component) {
    constructor() {
        super();
        this.state = {
            //without TrackerReact, you can't do the following:
            //if we change what gets published in publish.js then what's available in the front end (see with ctrl + m) is limited to just that.
            subscription: {
                //resolutions : Meteor.subscribe('allResolutions')
                markers: Meteor.subscribe('allMarkers')
            },
            lat: 'Lat!',
            lng: 'Lng!',
            name: 'Name',
            initialPosition: {lat: 50.4, lng: 30.4}
        }
    }


    markers() {
        Meteor.call('allMarkers')
    }

    addMarker(event) {
        event.preventDefault();
        var name = this.refs.name.value.trim();
        var lat = this.refs.lat.value.trim();
        var lng = this.refs.lng.value.trim();
        console.log(Markers.find().fetch());
        Meteor.call('Markers.insert', name, lat, lng);
        // console.log(Markers)
        this.refs.name.value = "";
        this.refs.lat.value = "";
        this.refs.lng.value = "";
    }
    render() {
        console.log(this.state)
        console.log(this.markers())
        return (
            <form className="form" onSubmit={this.addMarker.bind(this)}>
                <input type="text" placeholder={this.state.name} ref="name"/>
                <input type="text" placeholder={this.state.lat} ref="lat"/>
                <input type="text" placeholder={this.state.lng} ref="lng"/>
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
