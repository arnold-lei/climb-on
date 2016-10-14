import React, {Component} from 'react';


class Whatwedo extends React.Component{
  render() {
    return (

      <div id="page-content">
        {/* ////////////Content Box 01 */}
        <section className="box-content box-1" id="nav-services">
          <div className="container">
            <div className="heading">
              <h2>what we do</h2>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="box-item">
                  <center><img src="assets/img/pin.png" /></center>
                  <h3>Geotagging</h3>
                  <p>Brooklyn hell of seitan, butcher viral salvia vice roof party shabby chic af whatever polaroid. Tumblr raclette selfies lyft blue bottle DIY messenger bag hashtag, yuccie swag. Polaroid deep v beard edison bulb post-ironic austin. </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box-item">
                  <center><img src="assets/img/camera.png" /></center>
                  <h3>Photographs</h3>
                  <p>90s mlkshk sustainable craft beer. Jean shorts 8-bit green juice umami squid schlitz chicharrones.</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box-item">
                  <center><img src="assets/img/search.png" /></center>
                  <h3>Search</h3>
                  <p>Glossier ugh raclette enamel pin, tousled irony kombucha craft beer pork belly yr whatever asymmetrical photo booth forage butcher. Single-origin coffee woke scenester williamsburg sriracha.</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box-item">
                  <center><img src="assets/img/cell.png" /></center>
                  <h3>IOS/Android</h3>
                  <p>La croix lyft normcore, shabby chic live-edge next level enamel pin microdosing chicharrones waistcoat slow-carb yr disrupt knausgaard. Hexagon bushwick blue bottle actually, portland poke lyft scenester pop-up single-origin coffee. </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Whatwedo
