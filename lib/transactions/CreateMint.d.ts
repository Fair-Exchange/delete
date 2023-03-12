import { Transaction } from '@safecoin/lpl-core';
import { PublicKey, TransactionCtorFields } from '@safecoin/web3.js';
declare type CreateMintParams = {
    newAccountPubkey: PublicKey;
    lamports: number;
    decimals?: number;
    owner?: PublicKey;
    freezeAuthority?: PublicKey;
};
export declare class CreateMint extends Transaction {
    constructor(options: TransactionCtorFields, params: CreateMintParams);
}
export {};
