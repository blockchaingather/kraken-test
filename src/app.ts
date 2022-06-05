import * as path from 'path';
// import mysql
import sequelize from './utils/sequelize';
// loader mysql
sequelize.addModels([path.resolve(__dirname, `./models/`)]);

// handle data
import run from './handle/handle';
run();
