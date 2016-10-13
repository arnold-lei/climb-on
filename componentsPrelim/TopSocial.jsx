var React = require('react');
var Router = require('react-router');

class Topsocial extends React.Component{
  render() {
    return (

      <div className="top">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/* CLIMB ON */}
              <ul className="list-inline social-buttons">
                <li><a href="#"><i className="fa fa-apple" /></a>
                </li>
                <li><a href="#"><i className="fa fa-android" /></a>
                </li>
                <li><a href="#"><i className="fa fa-twitter" /></a>
                </li>
                <li><a href="#"><i className="fa fa-facebook" /></a>
                </li>
                <li><a href="#"><i className="fa fa-instagram" /></a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-md-offset-4">
              <div className="top-search">
                <div id="search" className="input-group">
                  <input type="text" name="search" defaultValue placeholder="Search" className="form-control" />
                  <span className="input-group-btn">
                    <button type="button" className="btn btn-default btn-lg"><i className="fa fa-search" /></button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Topsocial