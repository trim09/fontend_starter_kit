// @flow

import compression from 'compression'
import express from 'express'
import http from 'http'
import https from 'https'
import fs from 'fs'

import {APP_NAME, STATIC_PATH, WEB_PORT_HTTP, WEB_PORT_HTTPS} from '../shared/config'
import {helloEndpointRoute, LOGIN_REDIRECT, PAGES_PREFIX} from '../shared/routes'
import { isProd } from '../shared/util'
import renderApp from './render-app'

const app = express()

app.use(compression())
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))

app.get(['/', PAGES_PREFIX + '/*'], (req, res) => {
    // let isHttps = req.protocol === 'https'
    res.send(renderApp(APP_NAME))
})

app.get(LOGIN_REDIRECT, (req, res) => {
    res.redirect('http://atlas.cz');
});

app.get(helloEndpointRoute(), (req, res) => {
  res.json({ serverMessage: `Hello from the server! (received ${req.params.num})` })
})

app.listen(WEB_PORT_HTTP, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${WEB_PORT_HTTP} ${isProd ? '(production)' :
  '(development).\nKeep "yarn dev:wds" running in an other terminal'}.`)
})

// https
let privateKey = fs.readFileSync('sslcert/host.key', 'utf8');
let certificate = fs.readFileSync('sslcert/host.cert', 'utf8');
let credentials = {key: privateKey, cert: certificate};
let httpsServer = https.createServer(credentials, app);
httpsServer.listen(WEB_PORT_HTTPS);
