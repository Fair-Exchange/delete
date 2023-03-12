import { PublicKey, TransactionSignature } from '@safecoin/web3.js';
import { Wallet } from '../../wallet';
import { Connection } from '../../Connection';
interface CreateVaultParams {
    connection: Connection;
    wallet: Wallet;
    priceMint: PublicKey;
    externalPriceAccount: PublicKey;
}
interface CreateVaultResponse {
    txId: TransactionSignature;
    vault: PublicKey;
    fractionMint: PublicKey;
    redeemTreasury: PublicKey;
    fractionTreasury: PublicKey;
}
export declare const createVault: ({ connection, wallet, priceMint, externalPriceAccount, }: CreateVaultParams) => Promise<CreateVaultResponse>;
export {};
