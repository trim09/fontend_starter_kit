// @flow

import React from 'react'
import {Redirect, Switch} from 'react-router'
import { Route } from 'react-router-dom'
import { APP_NAME } from '../shared/config'
import Nav from './component/nav'
import HomePage from './component/page/home'
import HelloPage from './component/page/hello'
import HelloAsyncPage from './component/page/hello-async'
import NotFoundPage from './component/page/not-found'
import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  REDIR_PAGE_ROUTE,
} from '../shared/routes'

/*
https://github.com/reactjs/redux/issues/297
https://github.com/mjrussell/redux-auth-wrapper/issues/46
https://www.google.cz/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=react+redux+external+login+page&*
https://github.com/mjrussell/redux-auth-wrapper

*/

const App = () =>
  <div>
    <h1>{APP_NAME}</h1>
    <Nav />
    <Switch>
      <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
      <Route path={HELLO_PAGE_ROUTE} render={() => <HelloPage />} />
      <Route path={HELLO_ASYNC_PAGE_ROUTE} render={() => <HelloAsyncPage />} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>

export default App
