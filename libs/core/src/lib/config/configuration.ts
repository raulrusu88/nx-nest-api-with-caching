export const configuration = () => ({
  environment: process.env.NODE_ENV,
  port: parseInt(process.env.PORT || '3333', 10),
  pg_username: process.env.PG_USERNAME,
  pg_password: process.env.PG_PASSWORD,
  pg_port: parseInt(process.env.PG_PORT || '5432', 10),
  pg_database: process.env.PG_DATABASE,
  pg_host: process.env.PG_HOST,
});
