var React = require('react');
var Router = require('react-router');

var Carousel = React.createClass({
  render: function() {
    return (

      <header>
        <div className="box-shadow">
          {/* Carousel */}
          <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
            {/* Indicators */}
            <ol className="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to={0} className="active" />
              <li data-target="#carousel-example-generic" data-slide-to={1} />
              <li data-target="#carousel-example-generic" data-slide-to={2} />
            </ol>
            {/* Wrapper for slides */}
            <div className="carousel-inner">
              <div className="item active">
                <img src="assets/img/boulder2.jpg" alt="First slide" />
                {/* Static Header */}
                <div className="header-text hidden-xs">
                  <div className="col-md-12 text-center">
                    <h1 />
                  </div>
                </div>
                {/* /header-text */}
              </div>
              <div className="item">
                <img src="assets/img/boulder1.jpg" alt="Second slide" />
                {/* Static Header */}
                <div className="header-text hidden-xs">
                  <div className="col-md-12 text-center">
                    <h1 />
                  </div>
                </div>
                {/* /header-text */}
              </div>
              <div className="item">
                <img src="assets/img/boulder3.jpg" alt="Third slide" />
                {/* Static Header */}
                <div className="header-text hidden-xs">
                  <div className="col-md-12 text-center">
                    <h1 />
                  </div>
                </div>
                {/* /header-text */}
              </div>
            </div>
            {/* Controls */}
            <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" />
            </a>
            <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" />
            </a>
          </div>
          {/* /carousel */}
        </div>
      </header>
    );
  }
});

module.exports = #