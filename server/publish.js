//
// import { Meteor } from 'meteor/meteor';
// import { Markers } from '../../imports/api/markers.js';

Markers = new Mongo.Collection('markers');

Meteor.startup(() => {
  Meteor.publish('markers', function() {
    return Markers.find();
  });
});

//giving all the resolutions
Meteor.publish("allMarkers", function(){
  return Markers.find();
});

//everywhere but inside a publish function we can use Meteor.userId(), that's why we're doing this.userId
//returns resolutions only for the current loggedin user
Meteor.publish("userMarkers", function(){
  return Markers.find({user: this.userId});
});
