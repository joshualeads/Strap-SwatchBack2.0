

module.exports = ({ env }) => {

  if(env('NODE_ENV') === 'production'){
    var CryptoJS = require('crypto-js');
    return (
      {
        auth: {
          secret: env('ADMIN_JWT_SECRET'),
        },
        apiToken: {
          salt: CryptoJS.MD5('swatchBack2.0', { outputLength: 16 }).toString(
            CryptoJS.enc.Base64
          ),
        },
      }
    );
  } else {
    return (
      {
        auth: {
          secret: env('ADMIN_JWT_SECRET'),
        },
        apiToken: {
          salt: env('API_TOKEN_SALT'),
        },
      }
    );
  }
};
