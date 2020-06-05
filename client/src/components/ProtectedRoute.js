/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../Auth';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (auth.isAuthenticated()) {
        return <Component {...props} />;
      }
      return (
        <Redirect
          to={{
            pathname: '/signin',
            state: {
              from: props.location,
            },
          }}
        />
      );
    }}
  />
);

export default ProtectedRoute;
