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
        defaultFrom: 'c.leonardi@live.fr',
        defaultReplyTo: 'c.leonardi@live.fr',
      },
    },
  },
  plausible: {
    config: {
      sharedLink: "https://plausible.io/share/planetearthnow.org?auth=CTCm6L11KFybgmnOVNr6u"
    }
  },
  'preview-button': {
    config: {
      contentTypes: [
        {
          uid: 'api::accueil.accueil',
          draft: {
            url: 'http://localhost:5173/preview',
            query: {
              type: 'accueil',
              entryId: '{id}', // Passer l'ID du contenu
              secret: env('STRAPI_PREVIEW_SECRET'),
            },
            openTarget: '_blank',
          },
          published: {
            url: 'http://localhost:5173/preview',
            query: {
              type: 'accueil',
              entryId: '{id}',
              secret: env('STRAPI_PREVIEW_SECRET'),
            },
            openTarget: '_blank',
          },
        },
        {
          uid: 'api::about.about',
          draft: {
            url: 'http://localhost:5173/preview',
            query: {
              type: 'about',
              entryId: '{id}',
              secret: env('STRAPI_PREVIEW_SECRET'),
            },
            openTarget: '_blank',
          },
          published: {
            url: 'http://localhost:5173/preview',
            query: {
              type: 'about',
              entryId: '{id}',
              secret: env('STRAPI_PREVIEW_SECRET'),
            },
            openTarget: '_blank',
          },
        },
      ],
    },
  },
});

