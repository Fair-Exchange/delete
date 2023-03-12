import { PublicKey, TransactionSignature } from '@safecoin/web3.js';
import { Wallet } from '../../wallet';
import { Connection } from '../../Connection';
interface CloseVaultParams {
    connection: Connection;
    wallet: Wallet;
    vault: PublicKey;
    priceMint: PublicKey;
}
interface CloseVaultResponse {
    txId: TransactionSignature;
}
export declare const closeVault: ({ connection, wallet, vault, priceMint, }: CloseVaultParams) => Promise<CloseVaultResponse>;
export {};
