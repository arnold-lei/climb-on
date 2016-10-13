import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { App } from '../../ui/layouts/app.jsx';
import { Index } from '../../ui/components/index.jsx';
import { One } from '../../ui/pages/one.jsx';
import { Two } from '../../ui/pages/two.jsx';
import { Marker } from '../../ui/pages/Marker';
import { User } from '../../ui/pages/user.jsx';

import { NotFound } from '../../ui/pages/not-found.jsx';

Meteor.startup(() => {
  // render the URL routes
  render(
      <Router history={browserHistory}>

        <Route path="/" component={App}>

          <IndexRoute component={Index} />

          <Route path="/one" component={One} />
          <Route path="/two" component={Two} />

          {/* /user/:name Routes, url sends User Name, Latitude and Longitude values to the screen*/}
          {/* Check out the "import { User } from '../../ui/pages/user.jsx' " statement on line 10 of this file^^^*/}
          <Route path="/user/:name" component={User} />
          <Route path="/marker" component={Marker} />
        </Route>

        <Route path="*" component={NotFound} />
      </Router>,
    document.getElementById('react-root')
  );
});
