/* module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'http://localhost:1337'),
  admin: {
    url: '/admin/', // On tente de monter l'admin à la racine
  },
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  proxy: {
    enabled: env.bool('PROXY_ENABLED', true),
  },
}); */
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://admin.planetearthnow.org'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});