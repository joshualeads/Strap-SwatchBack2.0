module.exports = ({ env }) => {{
    var CryptoJS = require('crypto-js');

    if(env('NODE_ENV') === 'production'){
        return ({
            upload: {
                config: {
                  provider: 'aws-s3',
                  providerOptions: {
                    accessKeyId: env('AWS_ACCESS_KEY_ID'),
                    secretAccessKey: env('AWS_ACCESS_SECRET'),
                    region: env('AWS_REGION'),
                    params: {
                      Bucket: env('AWS_BUCKET'),
                    },
                  }
                },
            },
            email: {
                config: {
                  provider: 'sendgrid',
                  providerOptions: {
                    apiKey: env('SENDGRID_API_KEY'),
                  },
                  settings: {
                    defaultFrom: env('SENDGRID_DEFAULT_FROM'),
                    defaultReplyTo: env('SENDGRID_DEFAULT_REPLYTO'),
                  },
                },
            },
            /* 'users-permissions': {
              config: {
                jwtSecret: CryptoJS.MD5('swatchBack2.0_jwtsecret', { outputLength: 16 }).toString(
                  CryptoJS.enc.Base64
                ),
              },
            }, */
        })
    }

    return {
        email: {
            config: {
              provider: 'sendgrid',
              providerOptions: {
                apiKey: env('SENDGRID_API_KEY'),
              },
              settings: {
                defaultFrom: env('SENDGRID_DEFAULT_From'),
                defaultReplyTo: env('SENDGRID_Default_ReplyTo'),
              },
            },
        },
        upload: {
          config: {
            provider: 'aws-s3',
            providerOptions: {
              accessKeyId: env('AWS_ACCESS_KEY_ID'),
              secretAccessKey: env('AWS_ACCESS_SECRET'),
              region: env('AWS_REGION'),
              params: {
                Bucket: env('AWS_BUCKET'),
              },
            }
          },
      },
    }
}};