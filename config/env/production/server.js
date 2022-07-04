
module.exports = ({ env }) => ({
  proxy: true,
  url: env('APP_URL'), // replaces `host` and `port` properties in the development environment
  app: { 
    keys: env.array('APP_KEYS')
  },
});

// Heroku Deployment

/*
module.exports = ({ env }) => ({
    proxy: true,
    url: env('MY_HEROKU_URL'),
    admin: {
        autoOpen: false,
        url: "/admin",
    },
    app: { 
      keys: env.array('APP_KEYS')
    },
})
*/