var React = require('react');
var Router = require('react-router');

var Footer = React.createClass({
  render: function() {
    return (

      <footer>
        <div className="wrap-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="copyright">Copyright © RCB</div>
              </div>
              <div className="col-md-4">
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
              <div className="col-md-4">
                <ul className="list-inline quicklinks">
                  <li><a href="#">Privacy Policy</a>
                  </li>
                  <li><a href="#">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
});

module.exports = #