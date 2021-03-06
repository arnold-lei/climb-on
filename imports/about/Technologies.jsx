import React, {Component} from 'react';

class Technologies extends React.Component{
  render() {
    return (

      <section className="box-content box-3" id="nav-gallery">
        <div className="container">
          <div className="row heading">
            <div className="col-lg-12">
              <h2>TECHNOLOGIES</h2>
            </div>
          </div>
          <div className="no-gutter">
            <div className="col-lg-4 col-sm-6 text-center">
              <img src="assets/img/iphone.png" width="60%" />
            </div>
            <div className="col-lg-4 col-sm-6 text-center">
              <br />
              <img src="assets/img/apple.png" width="100%" />
              <br /><br />
              <img src="assets/img/google.png" width="100%" />
            </div>
            <div className="col-lg-4 col-sm-6 text-center">
              <img src="assets/img/galaxy.png" width="60%" />
            </div>
            <div className="col-lg-4 col-sm-6">
            </div>
            <div className="col-lg-4 col-sm-6">
            </div>
            <div className="col-lg-4 col-sm-6">
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Technologies
