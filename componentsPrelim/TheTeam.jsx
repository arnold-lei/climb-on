var React = require('react');
var Router = require('react-router');

class Theteam extends React.Component{
  render() {
    return (

      <section className="box-content box-6 box-style-2" id="nav-testimonials">
        <div className="container">
          <div className="row heading">
            <h2>The Team</h2>
          </div>
          <div className="row">
            <div id="owl-brand" className="owl-carousel">
              <div className="row">
                <div className="col-md-6">
                  <div className="item box-item">
                    <img src="assets/img/kristin.jpg" className="img-circle" />
                    <p />
                    <span>Kristin</span>
                    <p>FED, client side creative</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item box-item">
                    <img src="assets/img/sal.jpg" className="img-circle" />
                    <p />
                    <span>Sal</span>
                    <p>api wizard, master of many</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="item box-item">
                    <img src="assets/img/arnold.jpg" className="img-circle" />
                    <p />
                    <span>Arnold</span>
                    <p>meteror wannabe, chief architect and
                      <br />business consultant</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item box-item">
                    <img src="assets/img/nick.png" className="img-circle" />
                    <p />
                    <span>Nick</span>
                    <p>back end engineer, meteor guru</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Theteam