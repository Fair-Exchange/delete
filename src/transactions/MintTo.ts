import { Token, TOKEN_PROGRAM_ID } from '@safecoin/safe-token';
import { PublicKey, TransactionCtorFields } from '@safecoin/web3.js';
import BN from 'bn.js';
import { Transaction } from '@safecoin/lpl-core';

type MintToParams = {
  mint: PublicKey;
  dest: PublicKey;
  amount: number | BN;
  authority?: PublicKey;
};

export class MintTo extends Transaction {
  constructor(options: TransactionCtorFields, params: MintToParams) {
    const { feePayer } = options;
    const { mint, dest, authority, amount } = params;

    super(options);

    this.add(
      Token.createMintToInstruction(
        TOKEN_PROGRAM_ID,
        mint,
        dest,
        authority ?? feePayer,
        [],
        new BN(amount).toNumber(),
      ),
    );
  }
}
