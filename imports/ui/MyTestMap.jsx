// MyTestMap = React.createClass({
//   mixins: [ReactMeteorData],
//   componentDidMount() {
//     GoogleMaps.load();
//   },
//   getMeteorData() {
//     return {
//       loaded: GoogleMaps.loaded(),
//       mapOptions: GoogleMaps.loaded() && this._mapOptions()
//     };
//   },
//   _mapOptions() {
//     return {
//       center: new google.maps.LatLng(-37.8136, 144.9631),
//       zoom: 8
//     };
//   },
//   render() {
//     if (this.data.loaded)
//       return <GoogleMap name="mymap" options={this.data.mapOptions} />;
//
//     return <div>Loading map...</div>;
//   }
// });
