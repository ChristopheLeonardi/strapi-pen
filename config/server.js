module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://admin.planetearthnow.org'), // Ajoutez l'URL publique pour les redirections
  admin: {
    url: env('ADMIN_URL', 'http://admin.planetearthnow.org/admin'), // URL admin si différente
  },
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  // Optionnel : configuration des en-têtes pour le proxy
  proxy: {
    enabled: env.bool('PROXY_ENABLED', true),
  },
});

