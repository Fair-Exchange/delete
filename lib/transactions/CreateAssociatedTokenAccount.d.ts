import { Transaction } from '@safecoin/lpl-core';
import { PublicKey, TransactionCtorFields } from '@safecoin/web3.js';
declare type CreateAssociatedTokenAccountParams = {
    associatedTokenAddress: PublicKey;
    walletAddress?: PublicKey;
    splTokenMintAddress: PublicKey;
};
export declare class CreateAssociatedTokenAccount extends Transaction {
    constructor(options: TransactionCtorFields, params: CreateAssociatedTokenAccountParams);
}
export {};
