import { Keypair } from '@safecoin/web3.js';
import { Transaction } from '@safecoin/lpl-core';
interface TransactionsBatchParams {
    beforeTransactions?: Transaction[];
    transactions: Transaction[];
    afterTransactions?: Transaction[];
}
export declare class TransactionsBatch {
    beforeTransactions: Transaction[];
    transactions: Transaction[];
    afterTransactions: Transaction[];
    signers: Keypair[];
    constructor({ beforeTransactions, transactions, afterTransactions, }: TransactionsBatchParams);
    addSigner(signer: Keypair): void;
    addBeforeTransaction(transaction: Transaction): void;
    addTransaction(transaction: Transaction): void;
    addAfterTransaction(transaction: Transaction): void;
    toTransactions(): Transaction[];
    toInstructions(): import("@safecoin/web3.js").TransactionInstruction[];
}
export {};
