module.exports = ({ env }) => {{
  if(env('NODE_ENV')==='production'){
    return (
      [
        {
          name: 'strapi::security',
          config: {
            contentSecurityPolicy: {
              useDefaults: true,
              directives: {
                'connect-src': ["'self'", 'https:'],
                'img-src': [
                  "'self'",
                  'data:',
                  'blob:',
                  'dl.airtable.com',
                  env('MIDDLEWARE_AWS_S3'),
                ],
                'media-src': [
                  "'self'",
                  'data:',
                  'blob:',
                  'dl.airtable.com',
                  env('MIDDLEWARE_AWS_S3'),
                ],
                upgradeInsecureRequests: null,
              },
            },
          },
        },
        'strapi::errors',
        'strapi::cors',
        'strapi::poweredBy',
        'strapi::logger',
        'strapi::query',
        'strapi::body',
        'strapi::session',
        'strapi::favicon',
        'strapi::public',
        // ... Add Additional if required
      ]
    );
  } else {
    return (
      [
        'strapi::errors',
        'strapi::security',
        'strapi::cors',
        'strapi::poweredBy',
        'strapi::logger',
        'strapi::query',
        'strapi::body',
        'strapi::session',
        'strapi::favicon',
        'strapi::public',
      ]
    );
  }
}}
