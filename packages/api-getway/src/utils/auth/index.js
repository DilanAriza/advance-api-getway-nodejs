const Keycloak = require('keycloak-connect');
const session = require('express-session');

const configKey = {
  "realm": "nodejs-example",
  "realm-public-key": "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCrVrCuTtArbgaZzL1hvh0xtL5mc7o0NqPVnYXkLvgcwiC3BjLGw1tGEGoJaXDuSaRllobm53JBhjx33UNv+5z/UMG4kytBWxheNVKnL6GgqlNabMaFfPLPCF8kAgKnsi79NMo+n6KnSY8YeUmec/p2vjO2NjsSAVcWEQMVhJ31LwIDAQAB",
  "auth-server-url": "http://localhost:8080/auth",
  "ssl-required": "external",
  "resource": "nodejs-connect",
  "public-client": true
}

const setupAuth = (app, routes) => {
  var memoryStore = new session.MemoryStore();
  var keycloak = new Keycloak({ store: memoryStore }, configKey);

  app.use(session({
    secret: `ISNF84GN9G9GSG89FDNGDF8ERNG95GN35G35}+5G`,
    resave: false,
    saveUninitialized: true,
    store: keycloak
  }));

  app.use(keycloak.middleware());

  routes.forEach(route => {
    if (route.auth) {
      app.use(route.url, keycloak.protect(), (req, res, next) => {
        next();
      })
    }
  });
}

exports.setupAuth = setupAuth;