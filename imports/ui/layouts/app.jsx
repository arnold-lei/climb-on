import React from 'react';

import { Navigation } from '../components/navigation';
import AccountsUIWrapper from '../components/AccountsUIWrapper';
export const App = ({ children }) => (
  <div>
    <AccountsUIWrapper />
    <Navigation />
    {children}
  </div>
);

App.propTypes = {
  children: React.PropTypes.object,
};
