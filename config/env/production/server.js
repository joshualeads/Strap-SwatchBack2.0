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