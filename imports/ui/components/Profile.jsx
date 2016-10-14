import React, { Component } from 'react';

export default class Profile extends Component{
  render(){
    <div>
      	<div class="row">
            <div class="col-md-3 text-center">
                <ul class="nav" id="main-menu">
                <img src="assets/img/logoSmall.png" width="100%"></a>
                    <h2 class="text-center"> Meteor.user().username </h2>
                    <li class="text-center">
                        <img src="http://placehold.it/250x250" class="user-image img-responsive">
                    </li>
                    <h2> Navigation </h2>
                    <li>
                        <a  href="#"> Home</a>
                    </li>
                    <li>
                        <a href="#">Map</a>
                    </li>
                    <li>
                        <a href="#">My Climbs</a>
                    </li>
                </ul>
            </div>
            <div class="col-md-9"> 
                
            </div>
       </div>
    </div>
  }
}

// somehow get Meteor.user().username