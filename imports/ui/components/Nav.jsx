// Include React
var React = require('react');

// Create the Child Component
var Nav = React.createClass({

	// Child has a state that follows the number of clicks
	getInitialState: function(){
		return {
			number: 0
		}
	},

	render: function(){

		return(

			<nav className="navbar navbar-default">
                <div className="container-fluid">
                    <h1>Some shit</h1>
                </div>
            </nav>
		)
	}
});

// Export the component back for use in other files
module.exports = Nav;
