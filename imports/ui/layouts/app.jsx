import React from 'react';

import { Navigation } from '../components/navigation';
import AccountsUIWrapper from '../components/AccountsUIWrapper';

export const App = ({ children }) => (
  <div>
    <Navigation />
    <div className="container">
      <AccountsUIWrapper />
      {children}
      </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.object,
};
