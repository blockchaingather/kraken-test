import constant from '../constant/constant';
import KrakenTransactions from '../models/kraken-transactions';
import { Op, Sequelize } from 'sequelize';

const transaction = {
    async count(
        transactionName: string,
        address: string[],
        isDesignatedTransaction: boolean
    ) {
        const where = {
            confirmations: {
                [Op.gte]: constant.VALID_CONFIRMATIONS
            }
        };
        if (isDesignatedTransaction) {
            Object.assign(where, {
                address: address[0]
            });
        } else {
            Object.assign(where, {
                address: {
                    [Op.notIn]: address
                }
            });
        }
        const count = await KrakenTransactions.count({
            where: where
        });
        const sum = await KrakenTransactions.sum('amount', {
            where: where
        });
        console.log(
            `Deposited for ${transactionName}: count=${count} sum=${sum}`
        );
    },

    async min() {
        const where = {
            confirmations: {
                [Op.gte]: constant.VALID_CONFIRMATIONS
            }
        };
        const min = await KrakenTransactions.findAll({
            attributes: ['amount'],
            where: where,
            order: [[Sequelize.cast(Sequelize.col('amount'), 'SIGNED'), 'asc']],
            limit: 1,
            offset: 0
        });
        console.log(`Smallest valid deposit: ${min[0].amount}`);
    },
    async max() {
        const where = {
            confirmations: {
                [Op.gte]: constant.VALID_CONFIRMATIONS
            }
        };
        const max = await KrakenTransactions.max('amount', {
            where: where
        });

        console.log(`Largest valid deposit: ${max}`);
    }
};

export default async () => {
    // Deposited for Wesley Crusher: count=n sum=x.xxxxxxxx
    await transaction.count(
        'Wesley Crusher',
        ['mvd6qFeVkqH6MNAS2Y2cLifbdaX5XUkbZJ'],
        true
    );

    // Deposited for Leonard McCoy: count=n sum=x.xxxxxxxx
    await transaction.count(
        'Leonard McCoy',
        ['mmFFG4jqAtw9MoCC88hw5FNfreQWuEHADp'],
        true
    );

    // Deposited for Jonathan Archer: count=n sum=x.xxxxxxxx
    await transaction.count(
        'Jonathan Archer',
        ['mzzg8fvHXydKs8j9D2a8t7KpSXpGgAnk4n'],
        true
    );

    // Deposited for Jadzia Dax: count=n sum=x.xxxxxxxx
    await transaction.count(
        'Jadzia Dax',
        ['2N1SP7r92ZZJvYKG2oNtzPwYnzw62up7mTo'],
        true
    );

    // Deposited for Montgomery Scott: count=n sum=x.xxxxxxxx
    await transaction.count(
        'Montgomery Scott',
        ['mutrAf4usv3HKNdpLwVD4ow2oLArL6Rez8'],
        true
    );

    // Deposited for James T. Kirk: count=n sum=x.xxxxxxxx
    await transaction.count(
        'James T. Kirk',
        ['miTHhiX3iFhVnAEecLjybxvV5g8mKYTtnM'],
        true
    );

    // Deposited for Spock: count=n sum=x.xxxxxxxx
    await transaction.count(
        'Spock',
        ['mvcyJMiAcSXKAEsQxbW9TYZ369rsMG6rVV'],
        true
    );

    // Deposited without reference: count=n sum=x.xxxxxxxx
    await transaction.count(
        'Deposited without reference',
        constant.DESIGNATED_CUSTOMER_ADDRESS,
        false
    );
    // Smallest valid deposit
    await transaction.min();
    // Largest valid deposit
    await transaction.max();
};
