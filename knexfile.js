// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/db-practice-g95'
  },

  production: {
    client: 'pg',
    connection: process.env.NODE_ENV
  }

};
