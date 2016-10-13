Meteor.methods({
  'Markers.insert': function(name, lat, lng) {
      console.log('inserting now!')
    return Markers.insert({
        //basically means 'name: name'
        name,
        lat,
        lng,
        complete: false,
        createdAt: new Date()
        // ownerId: this.userId
    });
    },
  // 'Markers.remove': function(marker) {
  //   return Markers.remove(marker);
  // },
  'Markers.find': function(){
      return Markers.find()
  },
  'allMarkers': function(){
      return Markers.find()
  }
  // 'Markers.update': function(marker, content) {
  //   return marker.update(bin._id, { $set: { content } });
  // }
})
