const dotenv = require('dotenv');

dotenv.config({
  path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.production'
})

  module.exports = {
  "type": process.env.POSTGRES_DB_TYPE,
  "host": process.env.POSTGRES_DB_HOST,
  "port": process.env.POSTGRES_DB_PORT,
  "username": process.env.POSTGRES_DB_USERNAME,
  "password": process.env.POSTGRES_DB_PASSWORD,
  "database": process.env.POSTGRES_DB_DATABASE,
  "entities": [
    process.env.TYPEORM_ENTITIES
  ],
  "migrations": [
    process.env.TYPEORM_MIGRATION
  ],
  "cli": {
    "migrationsDir": process.env.TYPEORM_MIGRATION_DIR
  }
},{
  "name": process.env.MONGODB_DB_NAME,
  "type": process.env.MONGODB_DB_TYPE,
  "host": process.env.MONGODB_DB_HOST,
  "port": process.env.MONGODB_DB_PORT,
  "username": process.env.MONGODB_DB_USERNAME,
  "password": process.env.MONGODB_DB_PASSWORD,
  "database": process.env.MONGODB_DB_DATABASE,
  "useUnifiedTopology": process.env.MONGODB_DB_USE_UNIFIED_TOPOLOGY,
  "entities": [
    process.env.MONGODB_ENTITIES
  ]
}

