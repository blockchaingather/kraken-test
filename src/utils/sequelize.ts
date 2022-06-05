import { Sequelize } from 'sequelize-typescript';
import * as Config from '../config';

// loader mysql
const sequelize = new Sequelize(
    `mysql://${Config.dbConfig.USER}:${Config.dbConfig.PASSWORD}@${Config.dbConfig.HOST}:${Config.dbConfig.PORT}/${Config.dbConfig.DATABASE}`,
    {
        logging: false
    }
);

export default sequelize;
