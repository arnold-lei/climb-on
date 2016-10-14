import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { App } from '../../ui/layouts/app.jsx';
import { Index } from '../../ui/components/index.jsx';
import { Map } from '../../ui/pages/map.jsx';
import { Two } from '../../ui/pages/two.jsx';
import { Marker } from '../../ui/pages/Marker';
import { User } from '../../ui/pages/user.jsx';
<<<<<<< HEAD
import { LoginPage } from '../../ui/pages/LoginPage';
=======
import { SimpleMapPage } from '../../ui/map/Map.jsx';

>>>>>>> d2433c0999ba39038fcdb1e97cf3187eb859fa58
import { NotFound } from '../../ui/pages/not-found.jsx';

Meteor.startup(() => {
  // render the URL routes
  render(
      <Router history={browserHistory}>

        <Route path="/" component={App}>

          <IndexRoute component={Index} />

          {/* <Route path="/one" component={One} /> */}
          <Route path="/two" component={Two} />

          {/* /user/:name Routes, url sends User Name, Latitude and Longitude values to the screen*/}
          {/* Check out the "import { User } from '../../ui/pages/user.jsx' " statement on line 10 of this file^^^*/}
          <Route path="/user/:name" component={User} />
          <Route path="/marker" component={Marker} />
<<<<<<< HEAD
          <Route path="/login" component={LoginPage} />
=======
          <Route path="/map" component={Map} />

>>>>>>> d2433c0999ba39038fcdb1e97cf3187eb859fa58
        </Route>

        <Route path="*" component={NotFound} />
      </Router>,
    document.getElementById('react-root')
  );
});
