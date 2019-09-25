import React from 'react'
const LandingPage = React.lazy(() => import('../container/landing'))
const PageNotfound = React.lazy(() => import('../container/pageNotFound'))

const routes = [
  {
    path: '/',
    exact: true,
    auth: false,
    container: true,
    component: LandingPage
  },
  {
    path: '*',
    auth: false,
    container: false,
    component: PageNotfound
  }
]

export default routes
