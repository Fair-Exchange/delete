import { PublicKey, TransactionCtorFields } from '@safecoin/web3.js';
import BN from 'bn.js';
import { Transaction } from '@safecoin/lpl-core';
declare type MintToParams = {
    mint: PublicKey;
    dest: PublicKey;
    amount: number | BN;
    authority?: PublicKey;
};
export declare class MintTo extends Transaction {
    constructor(options: TransactionCtorFields, params: MintToParams);
}
export {};
