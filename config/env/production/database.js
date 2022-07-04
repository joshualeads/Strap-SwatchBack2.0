module.exports = ({ env }) => (
  {
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST'), 
        port: env.int('DATABASE_PORT'), 
        database: env('DATABASE_NAME'), 
        user: env('DATABASE_USERNAME'), 
        password: env('DATABASE_PASSWORD'),
        ssl: {
          rejectUnauthorized:env.bool('DATABASE_SSL_SELF', false),
        },
      },
      debug: false,
    }
  }
);

// Heroku Deployment

/*
const path = require('path');
const parse = require('pg-connection-string').parse;

module.exports = ({ env }) => {
  if(env('NODE_ENV') === 'production'){
    const config = parse(process.env.DATABASE_URL);
    return {
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'bookshelf',
          settings: {
            client: 'postgres',
            host: config.host,
            port: config.port,
            database: config.database,
            username: config.user,
            password: config.password
          },
          options: {
            ssl: false
          }
        }
      }
    }
  } else {
    return {
      connection: {
        client: 'sqlite',
        connection: {
          filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
        },
        useNullAsDefault: true,
      },
    }
  }
};

*/