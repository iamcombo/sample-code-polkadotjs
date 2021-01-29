import React from 'react';
import { Keyring } from '@polkadot/keyring';
import { mnemonicGenerate } from '@polkadot/util-crypto';

function Draft() {
  const keyring = new Keyring({ ss58Format: 2 });
  const mnemonic = mnemonicGenerate();
  // create & add the pair to the keyring with the type and some additional
  // metadata specified
  const pair = keyring.addFromUri(mnemonic, { name: 'second pair' }, 'ed25519');

  // the pair has been added to our keyring
  console.log(keyring.pairs.length, 'pairs available');
  // log the name & address (the latter encoded with the ss58Format)
  console.log(pair.meta.name, 'has address', pair.address);
  console.log('has Type', pair.type );
  console.log(mnemonic);
  return (
    <div></div>
  )
}

export default Draft;
