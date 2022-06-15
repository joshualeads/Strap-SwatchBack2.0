module.exports = ({ env }) => ({
    email: {
        config: {
          provider: 'sendgrid',
          providerOptions: {
            apiKey: env('SENDGRID_API_KEY'),
          },
          settings: {
            defaultFrom: 'joshuajabakumar@gmail.com',
            defaultReplyTo: 'joshuajabakumar@gmail.com',
          },
        },
    }
});