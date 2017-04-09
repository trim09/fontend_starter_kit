// @flow

import {isHttps} from "./util";
import {WDS_PORT} from "./config";
export const PAGES_PREFIX = '/app'
export const AJAX_PREFIX = '/ajax'

export const HOME_PAGE_ROUTE = '/'
export const HELLO_PAGE_ROUTE = PAGES_PREFIX + '/hello'
export const HELLO_ASYNC_PAGE_ROUTE = PAGES_PREFIX + '/hello-async'
export const HELLO_BOOTSTRAP = PAGES_PREFIX + '/hello-bootstrap'
export const NOT_FOUND_DEMO_PAGE_ROUTE = PAGES_PREFIX + '/404'

export const LOGIN_REDIRECT = '/login'
export const WDS_PATH = isHttps ? `https://localhost:${WDS_PORT}/dist` : `http://localhost:${WDS_PORT}/dist`



// eslint-disable-next-line import/prefer-default-export
export const helloEndpointRoute = (num: ?number) => AJAX_PREFIX + `/hello/${num || ':num'}`
