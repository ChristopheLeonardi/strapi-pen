// ./config/plugins.js

module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 10 * 1024 * 1024, // 10MB
      },
    },
  },
  email: {
    config: {
      provider: 'strapi-provider-email-smtp',
      providerOptions: {
        host: 'localhost',
        port: 25,
        secure: false, // true pour port 465, false pour les autres ports
        auth: {
          user: '',
          pass: '',
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      settings: {
        defaultFrom: 'contact@planetearthnow.org',
        defaultReplyTo: 'contact@planetearthnow.org',
      },
    },
  },
  plausible: {
    config: {
      sharedLink: "https://plausible.io/share/planetearthnow.org?auth=CTCm6L11KFybgmnOVNr6u"
    }
  }
});
