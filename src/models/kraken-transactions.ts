import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'kraken_transactions',
    timestamps: false,
    freezeTableName: true
})
export default class KrakenTransactions extends Model<KrakenTransactions> {
    @Column({
        primaryKey: true,
        autoIncrement: true,
        type: DataType.INTEGER
    })
    declare id: number;

    @Column(DataType.INTEGER)
    declare involves_watch_only: number;

    @Column(DataType.STRING)
    declare account: string;

    @Column(DataType.STRING)
    declare address: string;

    @Column(DataType.STRING)
    declare category: string;

    @Column(DataType.STRING)
    declare amount: string;

    @Column(DataType.STRING)
    declare label: string;

    @Column(DataType.INTEGER)
    declare confirmations: number;

    @Column(DataType.STRING)
    declare blockhash: string;

    @Column(DataType.INTEGER)
    declare blockindex: number;

    @Column(DataType.INTEGER)
    declare blocktime: number;

    @Column(DataType.STRING)
    declare txid: string;

    @Column(DataType.INTEGER)
    declare vout: number;

    @Column(DataType.INTEGER)
    declare time: number;

    @Column(DataType.INTEGER)
    declare timereceived: number;

    @Column(DataType.STRING)
    declare bip125_replaceable: string;
}
