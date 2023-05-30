const knex = require('knex')({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST || '127.0.0.1',
        port: 5432,
        user: 'postgres',
        password: 'salasana',
        database: 'postgres'
    }
})

module.exports.db = knex
