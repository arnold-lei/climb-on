import React, {Component} from 'react';

class Signup extends React.Component{
  render() {
    return (

      <div className="gradient">
        <div className="row text-center  ">
          <div className="col-md-2 col-md-offset-5">
            <img src="assets/img/climbonbadge.png" width="100%" />
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
            <div className="panel">
              <div className="panel-heading">
                SIGNUP
              </div>
              <div className="panel-body">
                <form role="form">
                  <br />
                  <div className="form-group input-group">
                    <span className="input-group-addon"><i className="fa fa-circle-o-notch" /></span>
                    <input type="text" className="form-control" placeholder="name" />
                  </div>
                  <div className="form-group input-group">
                    <span className="input-group-addon"><i className="fa fa-tag" /></span>
                    <input type="text" className="form-control" placeholder="username" />
                  </div>
                  <div className="form-group input-group">
                    <span className="input-group-addon">@</span>
                    <input type="text" className="form-control" placeholder="email" />
                  </div>
                  <div className="form-group input-group">
                    <span className="input-group-addon"><i className="fa fa-lock" /></span>
                    <input type="password" className="form-control" placeholder="password" />
                  </div>
                  <div className="form-group input-group">
                    <span className="input-group-addon"><i className="fa fa-lock" /></span>
                    <input type="password" className="form-control" placeholder="retype password" />
                  </div>
                  <a href="app.html" className="btn">REGISTER</a>
                  <hr /> already registered? <a href="login.html">login.</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup
