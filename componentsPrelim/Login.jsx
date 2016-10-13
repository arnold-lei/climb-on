var React = require('react');
var Router = require('react-router');

class Login extends React.Component{
  render() {
    return (

      <div className="gradient">
        <div className="row text-center ">
          <div className="col-md-2 col-md-offset-5">
            <img src="assets/img/climbonbadge.png" width="100%" />
            <br />
          </div>
        </div>
        <div className="row ">
          <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
            <div className="panel">
              <div className="panel-heading">
                LOGIN
              </div>
              <div className="panel-body">
                <form role="form">
                  <br />
                  <div className="form-group input-group">
                    <span className="input-group-addon"><i className="fa fa-tag" /></span>
                    <input type="text" className="form-control" placeholder="username" />
                  </div>
                  <div className="form-group input-group">
                    <span className="input-group-addon"><i className="fa fa-lock" /></span>
                    <input type="password" className="form-control" placeholder="password" />
                  </div>
                  <a href="app.html" className="btn">LOGIN</a>
                  <hr /> new? <a href="signup.html">signup. </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login