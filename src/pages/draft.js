import { KeyringPair } from '@polkadot/keyring/types';
import { SubmittableExtrinsic } from '@polkadot/api/types';

const SignAndSend = async() => {
  signAsync(pairOrAddress, options);
  // queueSetTxStatus(currentItem.id, 'sending'); 
  const unsubscribe = await tx.send(handleTxResults('signAndSend', queueSetTxStatus, currentItem, () => {
    unsubscribe();
  }));

  const pair = keyring.getPair(publicKey);
}

const signAsync = async() => {
  await signAsync(pairOrAddress, options);

  return toJSON();
}