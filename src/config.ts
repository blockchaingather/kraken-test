import * as dotenv from 'dotenv';
// loader environment variable
const filePathEnv = './.env';
dotenv.config({ path: filePathEnv });

export const dbConfig = {
    HOST: process.env.MYSQL_HOST,
    USER: process.env.MYSQL_USER,
    PASSWORD: process.env.MYSQL_PASSWORD,
    DATABASE: process.env.MYSQL_DATABASE,
    PORT: process.env.MYSQL_PORT
};
