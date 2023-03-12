import { Connection, PublicKey } from '@safecoin/web3.js';
import { Wallet } from '../wallet';
import { MetadataDataData } from '@safecoin/lpl-token-metadata';
interface UpdateMetadataParams {
    connection: Connection;
    wallet: Wallet;
    editionMint: PublicKey;
    newMetadataData?: MetadataDataData;
    newUpdateAuthority?: PublicKey;
    primarySaleHappened?: boolean;
}
export declare const updateMetadata: ({ connection, wallet, editionMint, newMetadataData, newUpdateAuthority, primarySaleHappened, }?: UpdateMetadataParams) => Promise<string>;
export {};
