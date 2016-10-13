var React = require('react');
var Router = require('react-router');

var Navigation = React.createClass({
  render: function() {
    return (

      <div id="nav-wrapper">
        <div id="nav" className="navbar navbar-default navbar-inner">
          <div className="container">
            {/* BAR CONTENTS */}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a href="#page-top" className="navbar-brand navbar-brand-centered"><img src="assets/img/climbonbadge.png" alt="First slide" /></a>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="hidden">
                  <a href="#page-top" />
                </li>
                <li>
                  <a className="page-scroll first" href="#nav-about" />
                </li>
                <li>
                  <a className="page-scroll" href="#nav-event" />
                </li>
                <li>
                  <a className="page-scroll" href="#nav-gallery" />
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a className="page-scroll" href="signup.html">Sign Up </a>
                </li>
                <li>
                  <a className="page-scroll" href="login.html">Log In</a>
                </li>
              </ul>
            </div>
            {/* /.navbar-collapse */}
          </div>
          {/* row */}
        </div>
        {/* nav */}
      </div>
    );
  }
});