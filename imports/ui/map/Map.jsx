import React, {PropTypes, Component} from 'react';
import GoogleMap from 'google-map-react';
import MyGreatPlace from './my_great_places';
import controllable from 'react-controllables';
import { createContainer } from 'meteor/react-meteor-data';

var divStyle = {
    width: '100%',
    height: 768
};
const K_WIDTH = 40;
const K_HEIGHT = 40;
const K_MARGIN_TOP = 30;
const K_MARGIN_RIGHT = 30;
const K_MARGIN_BOTTOM = 30;
const K_MARGIN_LEFT = 30;
const K_HOVER_DISTANCE = 30;

@controllable(['center', 'zoom', 'hoverKey', 'clickKey'])
class SimpleMapPage extends React.Component {
    //shouldComponentUpdate = shouldPureComponentUpdate;
    constructor(props) {
        super(props);
        this.state = {
            userPosition: {lat: 40.7128, lng: -74.0059},
            defaultCenter: {
                lat: 40.7128,
                lng: -74.0059
            },
            zoom: 12,

            subscription: {
                markers: Meteor.subscribe('allMarkers')
            },
            markers: Markers.find().fetch(),

        }
    }

    _onChildClick(key, childProps){
      const markerId = childProps.marker.get('id');
      const index = this.props.markers.findIndex(m => m.get('id') === markerId);
      if (this.props.onChildClick) {
        this.props.onChildClick(index);
      }
    }

    _onChildMouseEnter(key, childProps) {
      const markerId = childProps.marker.get('id');
      const index = this.props.markers.findIndex(m => m.get('id') === markerId);
      if (this.props.onMarkerHover) {
        this.props.onMarkerHover(index);
      }
    }

    _onChildMouseLeave(/* key, childProps */)  {
      if (this.props.onMarkerHover) {
        this.props.onMarkerHover(-1);
      }
    }

	componentDidMount() {
		this.getCurrentPosition();
	}
    getCurrentPosition(){
        navigator.geolocation.watchPosition( (position) => {
            let userPosition = {lat: position.coords.latitude, lng: position.coords.longitude};
            this.setState({
                userPosition,
            });
        },
        (error) => {
            alert(error.message);
        },
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 10}
        );
    }
    markers(){
        return Markers.find().fetch();
    }
    render() {
        console.log(this.state.userPosition)


        return (
            <div style={divStyle}>
                <GoogleMap bootstrapURLKeys={{
                    key: 'AIzaSyDAQIZigb4sd4EIMVeDZ1jxdx8tH9QRyEM',
                    language: 'us'
                }}
                    center={this.state.userPosition}
                    zoom={this.state.zoom}
                    defaultCenter={this.state.defaultCenter}
                    defaultZoom={this.state.zoom}
                    hoverKey= "OG KUSH"
                    hoverDistance={40 / 2}
                    visibleRowFirst= "-1"
                    visibleRowLast= "-1"
                    hoveredRowIndex= "-1"

                    >
                    {this.markers().map( (marker) => {
                      return <MyGreatPlace lat={marker.lat} lng={marker.lng} text={marker.name} hover="Some shit" />
                    })}
                    <MyGreatPlace lat={this.state.userPosition.lat} lng={this.state.userPosition.lng} text="I'm here!" />
                </GoogleMap>
            </div>
        );
    }
}
export default createContainer((props) => {

     Meteor.subscribe('allMarkers');
     return {
       poi: Markers.find({}, { sort: { createdAt: -1 } }).fetch()
     }
}, SimpleMapPage) ;
