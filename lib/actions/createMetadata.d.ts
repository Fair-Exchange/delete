import { Connection, PublicKey } from '@safecoin/web3.js';
import { Wallet } from '../wallet';
import { MetadataDataData } from '@metaplex-foundation/lpl-token-metadata';
interface CreateMetadataParams {
    connection: Connection;
    wallet: Wallet;
    editionMint: PublicKey;
    metadataData: MetadataDataData;
    updateAuthority?: PublicKey;
}
export declare const createMetadata: ({ connection, wallet, editionMint, metadataData, updateAuthority }?: CreateMetadataParams) => Promise<string>;
export {};
