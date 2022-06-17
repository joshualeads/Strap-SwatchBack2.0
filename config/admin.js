module.exports = ({ env }) => {
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
};
