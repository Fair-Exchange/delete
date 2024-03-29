import { Keypair, SendOptions } from '@safecoin/web3.js';
import { Wallet } from '../wallet';
import { Connection } from '../Connection';
import { Transaction } from '@safecoin/lpl-core';
interface ISendTransactionParams {
    connection: Connection;
    wallet: Wallet;
    txs: Transaction[];
    signers?: Keypair[];
    options?: SendOptions;
}
export declare const sendTransaction: ({ connection, wallet, txs, signers, options, }: ISendTransactionParams) => Promise<string>;
export {};
