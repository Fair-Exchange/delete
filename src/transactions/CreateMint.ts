import { Transaction } from '@safecoin/lpl-core';
import { MintLayout, Token, TOKEN_PROGRAM_ID } from '@safecoin/safe-token';
import { PublicKey, SystemProgram, TransactionCtorFields } from '@safecoin/web3.js';

type CreateMintParams = {
  newAccountPubkey: PublicKey;
  lamports: number;
  decimals?: number;
  owner?: PublicKey;
  freezeAuthority?: PublicKey;
};

export class CreateMint extends Transaction {
  constructor(options: TransactionCtorFields, params: CreateMintParams) {
    const { feePayer } = options;
    const { newAccountPubkey, lamports, decimals, owner, freezeAuthority } = params;

    super(options);

    this.add(
      SystemProgram.createAccount({
        fromPubkey: feePayer,
        newAccountPubkey,
        lamports,
        space: MintLayout.span,
        programId: TOKEN_PROGRAM_ID,
      }),
    );

    this.add(
      Token.createInitMintInstruction(
        TOKEN_PROGRAM_ID,
        newAccountPubkey,
        decimals ?? 0,
        owner ?? feePayer,
        freezeAuthority ?? feePayer,
      ),
    );
  }
}
