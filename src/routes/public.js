import React from 'react'
import { Route } from 'react-router-dom'
import Layout from './siteStructure'

const PublicRoute = ({ component: Component, container, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        !container ? (
          <Component {...props} />
        ) : (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      }
    />
  )
}

export default PublicRoute
