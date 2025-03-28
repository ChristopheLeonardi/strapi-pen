module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1339),
  url: env('PUBLIC_URL', 'http://85.31.236.134:1339'), // Ajoutez l'URL publique pour les redirections
  admin: {
    url: env('ADMIN_URL', '/admin'), // URL admin si différente
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

