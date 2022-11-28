export default {
    port: process.env.PORT || 3001,
    db_connection: process.env.DB_CONNECTION || 'mysql',
    db_host: process.env.DB_HOST || 'localhost',
    db_port: process.env.DB_PORT || 3306,
    db_database: process.env.DB_DATABASE,
    db_username: process.env.DB_USERNAME || 'root',
    db_password: process.env.DB_PASSWORD || 'secret',
    jwt_secret: process.env.JWT_SECRET
}