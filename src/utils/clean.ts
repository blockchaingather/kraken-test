// deleted json file and mysql data
import * as fs from 'fs';
import * as path from 'path';
// import mysql
import sequelize from './sequelize';
import KrakenTransactions from '../models/kraken-transactions';
// loader mysql
sequelize.addModels([path.resolve(__dirname, `../models/`)]);

const args = process.argv.slice(2);
const removeFilePath = path.resolve('./json');

switch (args[0]) {
    case 'all':
        removeJsonFile(removeFilePath);
        deleteTransactionsData();
        break;
    case 'file':
        removeJsonFile(removeFilePath);
        break;
    case 'table':
        deleteTransactionsData();
        break;
    default:
        console.log('invalid parameter');
        break;
}

function removeJsonFile(filePath: string) {
    fs.readdir(filePath, function (err, files) {
        if (err) {
            console.warn(err);
        } else {
            files.forEach(function (filename) {
                const fileDir = path.join(filePath, filename);
                fs.stat(fileDir, function (error, stats) {
                    if (error) {
                        console.warn('Failed to get file stats');
                    } else {
                        const isFile = stats.isFile();
                        const isDir = stats.isDirectory();
                        if (isFile) {
                            fs.unlink(fileDir, function (unlinkError) {
                                if (unlinkError) {
                                    console.log(
                                        `remove file ${fileDir} failed, error:`,
                                        unlinkError
                                    );
                                }
                                console.log(`remove file ${fileDir} success`);
                            });
                        }
                        if (isDir) {
                            removeJsonFile(fileDir);
                        }
                    }
                });
            });
        }
    });
}

// delete mysql data
function deleteTransactionsData() {
    KrakenTransactions.destroy({
        where: {},
        truncate: true
    })
        .then(() => {
            console.log('truncate table kraken_transactions success');
        })
        .catch((err) => {
            console.log('truncate table kraken_transactions failed, err:', err);
        });
}
