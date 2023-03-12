import { Connection, Keypair, PublicKey } from '@safecoin/web3.js';
import { Transaction } from '@safecoin/lpl-core';
interface MintTxs {
    mint: Keypair;
    recipient: PublicKey;
    createMintTx: Transaction;
    createAssociatedTokenAccountTx: Transaction;
    mintToTx: Transaction;
}
export declare function prepareTokenAccountAndMintTxs(connection: Connection, owner: PublicKey): Promise<MintTxs>;
export {};
