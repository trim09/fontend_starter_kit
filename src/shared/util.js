// @flow

// eslint-disable-next-line import/prefer-default-export
export const isProd = process.env.NODE_ENV === 'production'

export const isHttps = process.env.HTTPS !== undefined