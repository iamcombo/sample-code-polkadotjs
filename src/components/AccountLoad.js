import React, { useState, useEffect } from 'react';
import { hexToU8a, u8aToHex } from "@polkadot/util";
import { ApiPromise, WsProvider } from '@polkadot/api';
import keyring from '@polkadot/ui-keyring';

function AccountLoad({acc}) {
  const [balanceAvailable, setBalanceAvailable] = useState();
  const [nonce, setNonce] = useState();

  const loadBalance = async() => {
    const wsProvider = new WsProvider('wss://rpc-testnet.selendra.org');
    const api = await ApiPromise.create({ provider: wsProvider });

    const { nonce, data: balance } = await api.query.system.account(acc.address);
    setBalanceAvailable(balance.free.toHuman());
    setNonce(nonce.toString());
  }

  useEffect(() => {
    loadBalance();
  }, [])

  return (
    <div>
      {/* name */}
      <p>Name: {acc.meta.name}</p>
      {/* address */}
      <p>Address: {acc.address}</p>
      {/* public key */}
      <p>Public Key: {u8aToHex(acc.publicKey)}</p>
      {/* type */}
      <p>Type: {acc.type}</p>
      {/* transaction */}
      <p>Transaction: {nonce}</p>
      {/* balance */}
      <p>Balance: {balanceAvailable}</p>
      <hr />
    </div>
  )
}

export default AccountLoad;