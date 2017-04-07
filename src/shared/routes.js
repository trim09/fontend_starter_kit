// @flow

export const HOME_PAGE_ROUTE = '/'
export const HELLO_PAGE_ROUTE = '/app/hello'
export const HELLO_ASYNC_PAGE_ROUTE = '/app/hello-async'
export const REDIR_PAGE_ROUTE = '/app/redir'
export const NOT_FOUND_DEMO_PAGE_ROUTE = '/app/404'

// eslint-disable-next-line import/prefer-default-export
export const helloEndpointRoute = (num: ?number) => `/ajax/hello/${num || ':num'}`
