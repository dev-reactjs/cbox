import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, container, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        // !container ?
        // <Layout>
        <Component {...props} /> /*:*/
        // </Layout>
        // :
        // <Layout>
        //   <Component {...props} />
        // </Layout>
      )}
    />
  );
};

export default PrivateRoute;
