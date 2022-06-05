// import json data to mysql
import sequelize from './sequelize';
import * as fs from 'fs';
import * as path from 'path';
import KrakenTransactions from '../models/kraken-transactions';
// loader mysql
sequelize.addModels([path.resolve(__dirname, `../models/`)]);

interface Transactions {
    involvesWatchonly: boolean;
    account: string;
    address: string;
    category: string;
    amount: number;
    label: string;
    confirmations: number;
    blockhash: string;
    blockindex: number;
    blocktime: number;
    txid: string;
    vout: number;
    time: number;
    timereceived: number;
}

interface KrakenTransactionsResponse {
    transactions: Transactions[];
}

const fileDir = './json';
importData(fileDir);

function importData(filePath: string) {
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
                            const content = fs.readFileSync(fileDir, 'utf-8');
                            const jsonData: KrakenTransactionsResponse =
                                JSON.parse(content);
                            let i = 0;
                            jsonData.transactions.forEach(function (
                                transaction: Transactions,
                                index: number
                            ) {
                                const result = KrakenTransactions.build();
                                const dataField = {
                                    involves_watch_only:
                                        transaction.involvesWatchonly ? 1 : 0,
                                    account: transaction.account,
                                    address: transaction.address,
                                    category: transaction.category,
                                    amount: transaction.amount.toString(),
                                    label: transaction.label,
                                    confirmations: transaction.confirmations,
                                    blockhash: transaction.blockhash,
                                    blockindex: transaction.blockindex,
                                    blocktime: transaction.blocktime,
                                    txid: transaction.txid,
                                    vout: transaction.vout,
                                    time: transaction.time,
                                    timereceived: transaction.timereceived
                                };
                                result.set(dataField);
                                result.save();
                                i++;
                            });
                            console.log(
                                'transactions filePath:%s, count:%d, import success count:',
                                fileDir,
                                jsonData.transactions.length,
                                i
                            );
                        }
                        if (isDir) {
                            importData(fileDir);
                        }
                    }
                });
            });
        }
    });
}
